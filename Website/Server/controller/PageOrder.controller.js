import Student from '../model/Student.model.js';
import PageOrder from '../model/PageOrder.model.js';
import AppError from '../utils/AppError.js';
import get_standard_datetime from '../utils/getDateTime.js';

export class PageOrderController {
  async createPageOrder(req,res,next) {
    try {
      const {transaction_code,papersize, page_count, price, paymentmethod} = req.body;
      const cur_user = req.user;
      const pageorder = {
        Student: cur_user._id,
        transaction_code,
        papersize, 
        page_count,
        price,
        paymentmethod
      };
      
      await PageOrder.create(pageorder);
      res.status(200).json({
        status: "succes",
        message: "Page Order created successfully!",
      });
    } catch (err) {
      console.log(err.message);
      return next(new AppError(err.message,401));
    }
    
  }

  async getPageOrder(req,res,next) {
    try {

      const page_orders = await PageOrder.find({});

      const result = [];
      page_orders.forEach((item) => {
       
        const order = {
          transaction_code: item.transaction_code,
          date: get_standard_datetime(item.date),
          papersize:item.papersize,
          page_count: item.page_count,
          price: item.price
        };
        result.push(order);
      });

      res.status(200).json({
        status: "success",
        data: result,
      });
    } catch(err) {
      console.log(err.message);
      return next(new AppError(err.message, 401));
    }
  }
}