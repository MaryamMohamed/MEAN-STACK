// connect to db
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/users');
mongoose.Promise = global.Promise;

// setup express app.
const express = require('express');
const app = express();

// read from body
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const routes = require('./routes/api');
// call api file to index file
app.use('/user',routes);
// can use routes for app (initialize routes)

// error middleware handle
app.use(function(err, req, res, next){
    res.send({error: err.message});
});

app.listen(3000, function(){
    console.log('connected, listen for request.');
});
// listen for request.