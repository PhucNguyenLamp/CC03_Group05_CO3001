import express from 'express';
import {AuthController} from '../controller/Auth.controller.js';
import {PageOrderController} from '../controller/PageOrder.controller.js';

const router = express.Router();

router.post('/create-page-order',
  AuthController.prototype.isLoggedin, 
  PageOrderController.prototype.createPageOrder
);

router.get('/get-page-order',
  AuthController.prototype.isLoggedin, 
  PageOrderController.prototype.getPageOrder
);


export default router;