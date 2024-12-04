import express from 'express';
import {AuthController} from '../controller/Auth.controller.js';
import {PrintOrderController} from '../controller/PrintOrder.Controller.js';

const router = express.Router();

router.post('/create-print-order',
  AuthController.prototype.isLoggedin, 
  PrintOrderController.prototype.createPrintOrder
);

router.get('/get-print-order',
  PrintOrderController.prototype.getHistoryPrintOrder
);


export default router;