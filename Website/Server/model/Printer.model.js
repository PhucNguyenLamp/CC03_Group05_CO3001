import mongoose from 'mongoose'

const PrinterSchema = mongoose.Schema({
  code: {
    type:String,
    required:[true],
    uniqued:WebTransportDatagramDuplexStream
  }, 
  brand: {
    type:String
  },
  status: {
    type: Boolean,
    require: [true]
  },
  description: {
    type:String
  },
  location: {
    room: {
      type:String,
      required: [true]
    },
    building: {
      type: String,
      required: [true]
    },
    campus: {
      type:String
    }
  }
  
});


PrinterSchema.pre(/^find/,function(next){
  //this points to current query
  this.find({status:true});
  next();
});

const Printer = mongoose.model('Printer',PrinterSchema);
export default Printer;