import signToken from '../utils/jwtToken.js';
import AppError  from '../utils/AppError.js';
import Student from '../model/Student.model.js';
import SPSO from '../model/SPSO.model.js';
import { promisify } from 'util';
import jwt from 'jsonwebtoken'


export class AuthController {
  async login (req,res,next) {
    const {username, password, role} = req.body;
    if(!username || !password) {
      return next(new AppError("Please provide username or password!",400));
    }
    let user = {}; 
    if(role=="Student"){
      const email=`${username}@hcmut.edu.vn`;
      user = await Student.findOne({email}).select('+password');
      if(!user || !await user.correctPassword(password,user.password)) {
        return next(new AppError("Incorrect username or password",401));
      }
    } else if(role=="SPSO") {
      user = await SPSO.findOne({username}).select('+password');
      if(!user || !await user.correctPassword(password,user.password)) {
        return next(new AppError("Incorrect username or password",401));
      }
    }
    user = user.plain
    user.role=role;
    signToken(user,200,res);
  
  }

  async isLoggedin(req,res,next) {
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    }
    if(!token) {
      return next(new AppError("You are not logged in !! Please log in again"));
    }
    const decoded = await promisify(jwt.verify)(token,process.env.JWT_SECRET);
    
  }
}



