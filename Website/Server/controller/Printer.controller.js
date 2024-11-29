import Printer from '../model/Printer.model.js';
import AppError from '../utils/AppError.js';

export class PrinterController {
  async getAllPrinters(req, res, next) {
    try {
      const { search } = req.query;
      let query = {};
      if (search) {
        query.$or = [
          { model: { $regex: search, $options: 'i' } }, 
          { brand: { $regex: search, $options: 'i' } }  
        ];
      }
      const printers = await Printer.find(query);
      res.status(200).json({
        status: 'success',
        results: printers.length,
        data: printers,
      });
    } catch (err) {
      next(new AppError('Unable to fetch printers', 500));
    }
  }

  async addPrinter(req, res, next) {
    try {
      const { model, brand, description, location, status } = req.body;

      const newPrinter = await Printer.create({
        model,
        brand,
        description,
        location,
        status,
      });

      res.status(201).json({
        status: 'success',
        message: 'Printer added successfully!',
        data: newPrinter,
      });
    } catch (err) {
      next(new AppError('Failed to add printer', 400));
    }
  }

  async updatePrinter(req, res, next) {
    try {
      const { id } = req.params;
      const updatedData = req.body;

      const updatedPrinter = await Printer.findByIdAndUpdate(id, updatedData, {
        new: true, 
        runValidators: true, 
      });

      if (!updatedPrinter) {
        return next(new AppError('Printer not found', 404));
      }

      res.status(200).json({
        status: 'success',
        message: 'Printer updated successfully!',
        data: updatedPrinter,
      });
    } catch (err) {
      next(new AppError('Failed to update printer', 400));
    }
  }

  async deletePrinter(req, res, next) {
    try {
      const { id } = req.params;

      const deletedPrinter = await Printer.findByIdAndDelete(id);

      if (!deletedPrinter) {
        return next(new AppError('Printer not found', 404));
      }

      res.status(200).json({
        status: 'success',
        message: 'Printer deleted successfully!',
      });
    } catch (err) {
      next(new AppError('Failed to delete printer', 400));
    }
  }

  async togglePrinterStatus(req, res, next) {
    try {
      const { id } = req.params;

      const printer = await Printer.findById(id);

      if (!printer) {
        return next(new AppError('Printer not found', 404));
      }

      printer.status = !printer.status;
      await printer.save();

      res.status(200).json({
        status: 'success',
        message: `Printer status toggled to ${printer.status ? 'enabled' : 'disabled'}`,
        data: printer,
      });
    } catch (err) {
      next(new AppError('Failed to toggle printer status', 400));
    }
  }
}

export default new PrinterController();
