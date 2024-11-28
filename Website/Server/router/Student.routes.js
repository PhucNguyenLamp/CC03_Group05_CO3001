import express from 'express';
import {StudentController} from '../controller/Student.controller.js';
import {AuthController} from '../controller/Auth.controller.js';

const router = express.Router();

router.get('/getStudentInfo',AuthController.prototype.isLoggedin,StudentController.prototype.getStudentInfo);

export default router;