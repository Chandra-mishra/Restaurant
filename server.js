const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const RestaurantController = require('./controller/router');
const port = process.env.PORT || 4000;
const app = express();
mongoose.connect('mongodb://prasad18:prasad18@ds127376.mlab.com:27376/hotel',{ useNewUrlParser: true },()=>{
    console.log('connected to database');
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

//app.set('view engine', 'ejs');
app.engine('html', require('hogan-express'));
app.use(express.static(path.join(__dirname, 'views')));
app.listen(port,()=>{
    console.log(`server is listining to ${port}`);
});
app.use('/',RestaurantController);
