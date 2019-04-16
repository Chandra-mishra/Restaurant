const express = require('express');
const router = express.Router();
const Restaurant = require('../model/hotelModel');
const Contacts = require('../model/contactModel');
const Orders = require('../model/orderModel');

router.get('/restaurant',(req,res)=>{
res.render('index.html');
});



router.post('/reserve',(req,res)=>{
var Reserve = new Restaurant();
Reserve.firstName = req.body.m_fname;
Reserve.lastName = req.body.m_lname;
Reserve.email = req.body.m_email;
Reserve.how_many_people = req.body.m_people;
Reserve.phone = req.body.m_phone;
Reserve.date = req.body.m_date;
Reserve.time = req.body.m_time;
Reserve.message = req.body.m_message;
Reserve.save((err, doc) => {
    if (!err)
    {
        res.redirect('/restaurant');
        
        
    }
    /*else {
        if (err.name == 'ValidationError') {
            handleValidationError(err, req.body);
            res.render("/restaurant");
        }*/
        else
            console.log('Error during record insertion : ' + err);
//}
});

});

router.post('/contacts',(req,res)=>{
var communicate = new Contacts();
communicate.Name = req.body.name;
communicate.Email = req.body.email;
communicate.Message = req.body.message;
communicate.save((err,doc)=>{
if(!err){
    res.redirect('/restaurant');
}
else{
    console.log('Error during record insertion: '+err);
}
});

});

router.post('/order',(req,res)=>{
var order = new Orders();
order.Name = req.body.name;
order.Item_name = req.body.item;
order.Price = req.body.price;
order.Email = req.body.email;
order.Phone = req.body.phone;
order.save((err,doc)=>{
    if(!err){
        res.redirect('/restaurant');
    }
    else{
        console.log('Error during record insertion: '+err);  
    }
})
})

module.exports = router;