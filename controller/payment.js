var employeeModel = require('../model/employee.js');
var Pin = require('pinjs');
var pin = Pin.setup({
  key: 'hHybgU9akZbE0cB1Z-zUcA',
  production: false
});


// Method to create customer
module.exports.addCustomer = function(req, res){
	var addCustomerData = req.body;
	pin.createCustomer(addCustomerData, function(response){
		return res.json(response.body);
	})
}

//Method to get customer details
module.exports.getCustomer = function(req, res){
	var token = req.params.id;
	pin.retrieveCustomer(token, function(err, response){
		res.json(response.body);
	})
}

//Method to create card
module.exports.createCard = function(req, res){
	var cardDetailsData = req.body;
	pin.createCard(cardDetailsData, function (response) {  
	  res.json(response.body);
	});
}

// Method to create charge
module.exports.createCharge = function(req, res){
	var chargeDetails = req.body;
	console.log('------charge details----',chargeDetails);
	pin.createCharge(chargeDetails, function (response) {  
	  console.log(response.body);
	  res.json(response.body);
	});
}

//Method to get charge
module.exports.getCharge = function(req, res){
	var chargeToken = req.params.id;
	pin.retrieveCharge(chargeToken, function (response) {
	  console.log(response.body);
	  res.json(response.body);
	});
}

//Method to refund charge
module.exports.refundCharge = function(req, res){
	var chargeToken = req.params.id;
	var chargeAmount = req.body.chargeAmount;
	pin.refundCharge(chargeToken, chargeAmount, function (response) {
	  console.log(response.body);
	  res.json(response.body);
	});
}

//Method to get balance
module.exports.getBalance = function(req, res){
	pin.getBalance({}, function (response) {
	  console.log(response.body);
	  res.json(response.body);
	});
}