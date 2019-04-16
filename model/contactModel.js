const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
Name:{
type:String,
required:true
},
Email:{
    type:String,
    required:true
},
    Message:{
        type:String,
        required:true
    }
    });
    // Custom validation for phone
// Custom validation for email
contactSchema.path('Email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');

  
  module.exports = mongoose.model('contactModel',contactSchema);