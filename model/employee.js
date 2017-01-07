var mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
	name: {type: String},
	designation: {type: String},
	age: {type: Number},
	address: {type:String}
});

module.exports = mongoose.model('Employee',employeeSchema);