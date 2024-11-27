import express from 'express'
import {AuthController} from '../controller/Auth.controller.js';

const router = express.Router();

router.post('/login',AuthController.prototype.login);

router.post('/checklogin',AuthController.prototype.isLoggedin);

export default router;