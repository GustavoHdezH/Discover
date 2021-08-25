const express = require('express');
const path = require('path'); 
const exphbs = require('express-handlebars');
const morgan = require('morgan');
const methodOverrie = require('method-override');
const flash = require('connect-flash');
const session = require('express-session');

// Initilizations
const app = express();

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
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(methodOverrie('_method'));
app.use(session ({
    secret: 'pe5oo2zDNL8okp*3YwHY',
    resave: true,
    saveUninitialized : true
}));
app.use(flash());

// Global variables
app.use((req, res, next) =>{
    res.locals.success = req.flash('success');
    next();
});
// Routes
app.use(require('./routes/index.routes'));
app.use(require('./routes/about.routes'));
app.use(require('./routes/microservicios.routes'));
app.use(require('./routes/users.routes'));
// Static Files
// 404
app.use(require('./routes/fallback.routes'));
module.exports = app;
