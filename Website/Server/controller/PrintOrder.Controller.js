import PrintOrder from "../model/PrintOrder.model.js";
import Document from "../model/Document.model.js";
import Student from "../model/Student.model.js";
import Printer from "../model/Printer.model.js";
import AppError  from '../utils/AppError.js';


export class PrintOrderController {
  async createPrintOrder(req,res,next) {
    try {
      const {printer,pageremain,copy,typeface,papersize,vector,filename} = req.body;

      //Retrieve printer
      const [brand,model] = printer.split(' ');
      const cur_printer = await Printer.findOne({brand,model});
  
      if (!cur_printer) {
        return next(new AppError('Printer not found', 404));
      }

      //Store new document
      const document = await Document.create({name:filename, Printer: cur_printer._id}) ;
  
      //Update page-remain of Student
      const cur_user = req.user;
      await cur_user.updateOne({page_remain:pageremain});
  
      //Store new Print order
      const printorder = ({
        Student:cur_user._id,
        Document: document._id,
        configuration: {
          copy,
          typeface,
          vector,
          papersize
        }
      });

      await PrintOrder.create(printorder);

      res.status(200).json({
        status: "succes",
        message: "Print Order created successfully!"
      });
    } catch(err) {
      console.log(err);
      return (new AppError("Something went wrong!",401));
    }
    
    
  }
}