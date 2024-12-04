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
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'], 
  allowedHeaders: ['Content-Type', 'Authorization'], 
  credentials: true 
}));

//ROUTES

app.use('/api/v1', router);


//Error handling
app.use((err,req,res,next)=>{
  res.status(err.statusCode).json({
    status:err.status,
    message:err.message,
  })
})
export default app;