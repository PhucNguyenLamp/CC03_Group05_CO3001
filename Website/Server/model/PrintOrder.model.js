import mongoose from "mongoose";
import Student from "./Student.model.js";
import Document from "./Document.model.js";

const PrintOrderSchema = mongoose.Schema({
  Student: {
    type: mongoose.Schema.ObjectId,
    ref: "Student",
    required: true,
  },
  Document: {
    type: mongoose.Schema.ObjectId,
    ref: "Document",
    require: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  configuration: {
    copy: {
      type: Number,
      require: true,
      default: 1,
    },
    typeface: {
      type: Number,
      enum: [1, 2],
      required: true,
      default: 1,
    },
    vector: {
      type: String,
      required: true,
    },
    papersize: {
      type: String,
      required: true,
    },
  },
});


const PrintOrder = mongoose.model('PrintOrder',PrintOrderSchema);

export default PrintOrder;