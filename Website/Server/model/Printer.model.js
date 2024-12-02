import mongoose from 'mongoose';

const PrinterSchema = mongoose.Schema({
  ID: {
    type: String,
    required:true
  },
  model: {
    type:String,
    required:true,
    uniqued:true
  }, 
  brand: {
    type:String
  },
  status: {
    type: Boolean,
    required: true
  },
  location: {
    room: {
      type:Number,
      required: true
    },
    building: {
      type: String,
      required: true
    },
    campus: {
      type:String,
      enum: ["CS1","CS2"],
      required:true
    }
  }
  
});


// PrinterSchema.pre(/^find/,function(next){
//   //this points to current query
//   this.find({status:true});
//   next();
// });

const Printer = mongoose.model('Printer',PrinterSchema);
export default Printer;