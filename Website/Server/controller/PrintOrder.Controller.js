import PrintOrder from "../model/PrintOrder.model.js";
import Document from "../model/Document.model.js";
import Student from "../model/Student.model.js";
import Printer from "../model/Printer.model.js";
import AppError from "../utils/AppError.js";

export class PrintOrderController {
  async createPrintOrder(req, res, next) {
    try {
      const {
        printer,
        pageremain,
        copy,
        typeface,
        papersize,
        vector,
        filename,
        page_count,
      } = req.body;

      //Retrieve printer
      const [brand, model] = printer.split(" ");
      const cur_printer = await Printer.findOne({ brand, model });

      if (!cur_printer) {
        return next(new AppError("Printer not found", 404));
      }

      //Store new document
      const document = await Document.create({
        name: filename,
        page_count,
        Printer: cur_printer._id,
      });

      //Update page-remain of Student
      const cur_user = req.user;
      await cur_user.updateOne({ page_remain: pageremain });

      //Store new Print order

      if (!typeface || !papersize || !vector || !copy) {
        return next(
          new AppError("Please provide enough print order configuration !", 401)
        );
      }

      const printorder = {
        Student: cur_user._id,
        Document: document._id,
        Printer: cur_printer._id,
        configuration: {
          copy,
          typeface,
          vector,
          papersize,
        },
      };

      await PrintOrder.create(printorder);

      res.status(200).json({
        status: "succes",
        message: "Print Order created successfully!",
      });
    } catch (err) {
      console.log(err.message);
      return next(new AppError(err.message, 401));
    }
  }

  async getHistoryPrintOrder(req, res, next) {
    const cur_user = req.user;

    const print_orders = await PrintOrder.find({ Student: cur_user._id });

    const result = [];
    print_orders.forEach((item) => {
      const { room, building, campus } = item.Printer.location;
      const location = `${campus}/${building}-${room}`;
      console.log(item.Document);
      const order = {
        date: item.date,
        printer: item.Printer.brand,
        location,
        filename: item.Document.name,
        page_count: item.Document.page_count,
      };
      result.push(order);
    });

    res.status(200).json({
      status: "success",
      data: result,
    });
  }
}
