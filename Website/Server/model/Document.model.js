import mongoose from 'mongoose'; 
import Printer from './Printer.model.js';

const DocumentSchema = mongoose.Schema({
  name: {
    type:String,
    require:true
  }, 
  Printer: {
    type:mongoose.Schema.ObjectId,
    ref: 'Printer',
    required:true
  }
});


const Document = mongoose.model('Document', DocumentSchema);

export default Document;