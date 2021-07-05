const express = require('express');
// Initilizations
const app = express();
const path = require('path'); 
const exphbs = require('express-handlebars');
const morgan = require('morgan');
// Settings
app.set('port', process.env.PORT || 4000);
app.set('views',path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: 'hbs'
}))
app.set('view engine', '.hbs');
app.set('json spaces', 2);
//Middlewares
app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'));
// Global variables
// Routes
app.use(require('./routes/index.routes'));
app.use(require('./routes/about.routes'));
app.use(require('./routes/microservicios.routes'));
// Static Files
// 404
app.use(require('./routes/fallback.routes'));
module.exports = app;
