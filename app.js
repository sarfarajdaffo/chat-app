var mongoose = require('mongoose');
var express = require('express');
config = require('config');
message = require('./public/message.js');
var bodyParser = require('body-parser');

// create express instance
var app = express();

//body parsing middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// database connection
mongoose.connect(config.get("MONGO_URL"));
var db = mongoose.connection;
db.on('error',function(){
	console.log(message.DB_CONNECTION_ERROR);
})
db.on('open',function(){
	console.log(message.DB_CONNECTION_SUCC);
})

//router file
require('./config/router.js')(app);

//listen express server
app.listen(config.SERVER_PORT, function(){
	console.log('server started on port : '+config.get("SERVER_PORT"));
});