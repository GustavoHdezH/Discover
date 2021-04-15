const mongoose = require('mongoose');
require('dotenv').config();

const {HOST , DATABASE} = process.env;
const MONGODB_URI = `mongodb://${HOST}/${DATABASE}`; 

mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
})
    .then(db => console.log('Database is connect'))
    .catch(err => console.log(err));