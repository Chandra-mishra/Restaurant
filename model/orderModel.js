const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
Name:{
type:String,
required:true
},
Item_name:{
    type: String,
    required:true
},
Price:{
    type:String,
    required: true
},
Email:{
    type:String,
    required:true
},
 Phone:{
     type:Number,
     required:true
 }  
    });
    // Custom validation for phone
    orderSchema.path('Phone').validate((val) => {
        phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        return phoneRegex.test(val);
    }, 'Invalid phone Number.');
    
// Custom validation for email
orderSchema.path('Email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');

  
  module.exports = mongoose.model('orderModel',orderSchema);