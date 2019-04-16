const mongoose = require('mongoose');


const restaurantSchema = new mongoose.Schema({
  firstName:{
      type:String,
     required: true
      
  },
  lastName:{
      type:String,
      required: true
  },
  email:{
      type:String,
      required:true,
      lowercase:true,
     

  },
  how_many_people:{
      type:String,
      //required:true
      
  },
  phone:{
       type:Number,
       required:true        
  },
  date:{
      type:Date,
      required:true,
      
  },
  time:{
      type:String,
      required:true,
      
  },
  message:{
      type:String,
      required: 'this is required'
  }
  });
  // Custom validation for phone
   restaurantSchema.path('phone').validate((val) => {
    phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return phoneRegex.test(val);
}, 'Invalid phone Number.');

module.exports = mongoose.model('restaurantModel',restaurantSchema);