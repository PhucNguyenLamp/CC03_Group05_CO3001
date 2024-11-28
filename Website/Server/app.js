import express from 'express';
import cors from 'cors'
import router from './router/index.js';
import dotenv from 'dotenv';
//CONFIG

const app = express();
dotenv.config({path:'./config.env'});
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({
  origin: 'http://localhost:5173', // Cung cấp chính xác domain mà frontend đang chạy
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Các phương thức HTTP được phép
  allowedHeaders: ['Content-Type', 'Authorization'], // Các header được phép
  credentials: true // Nếu bạn cần gửi cookie cùng với request
}));

//ROUTES

app.use('/api/v1',router);


//Error handling
app.use((err,req,res,next)=>{
  res.status(err.statusCode).json({
    status:err.status,
    message:err.message,
  })
})
export default app;