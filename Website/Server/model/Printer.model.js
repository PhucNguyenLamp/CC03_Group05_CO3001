import mongoose from 'mongoose';

const PrinterSchema = mongoose.Schema({
  id: {
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
  },
  printing_ink: {
    type:Number,
    default: 100,
    select:false
  },
  update: {
    type:Boolean,
    default: true,
    select:false
  },
  description: {
    type:String
  },
  image: {
    type:String,
    select:false
  }
  
});


// PrinterSchema.pre(/^find/,function(next){
//   //this points to current query
//   this.find({status:true});
//   next();
// });

const Printer = mongoose.model('Printer',PrinterSchema);
export default Printer;