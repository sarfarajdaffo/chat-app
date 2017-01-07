var empCtrl = require('../controller/employees.js');
var paymentCtrl = require('../controller/payment.js');
var socialCtrl = require('../controller/social.js');

//define routes for app
module.exports = function(app){

    // Employee services
	app.post('/add-employee', empCtrl.addEmployee);

    //Payment services
	app.post('/payment/add-customer', paymentCtrl.addCustomer);
	app.get('/payment/customer/:id',paymentCtrl.getCustomer);
	app.post('/payment/card',paymentCtrl.createCard);
	app.post('/payment/charge',paymentCtrl.createCharge);
	app.get('/payment/charge/:id',paymentCtrl.getCharge);
	app.put('/payment/charge/:id',paymentCtrl.refundCharge);
	app.get('/payment/balance', paymentCtrl.getBalance);

	//Social apis
	app.get('/facebook/likes/:url', socialCtrl.getLikeCount);
	app.get('/twitter/followers/:user', socialCtrl.getFollowersCount);
}