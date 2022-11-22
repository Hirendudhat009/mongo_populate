const mongoose = require('mongoose')
const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userroutes')
// mongoose.set('debug', true);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect('mongodb://localhost/data', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('mongoose contected'))
    .catch(err => console.log(err))


app.use( userRoutes)
app.listen(8000);