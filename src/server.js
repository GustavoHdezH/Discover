const express = require('express');
// Initilizations
const app = express();
const path = require('path'); 
// Settings
app.set('port', process.env.PORT || 4000);
app.set('views',path.join(__dirname, 'views'));
//Middlewares
app.use(express.urlencoded({extended: false}));
module.exports = app;
