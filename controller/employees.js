//employee controller
var employeeModel = require('../model/employee.js');

// Method to add employee changes
module.exports.addEmployee = function(req, res){
	new employeeModel(req.body).save(function(err, result){
		if(err){
			return res.json(err);
		}
		else{
			return res.json(result);
		}
	});
}