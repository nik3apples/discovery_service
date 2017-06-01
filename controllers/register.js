var model  = require("../models/register");

var controller = {};

controller.new_service = function (req, res) {
	var data = req.body;
	var info = {
		name: data.service_name,
		address: data.address,
		port: data.port
	};

	var result = model.new_service (info);
	
	return res.send (result);
};

module.exports = controller;
