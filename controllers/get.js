var model  = require("../models/get");

var controller = {};

controller.get_service = function (req, res) {
	var data = req.params;
	var info = {
		name: data.service_name
	};

	var result = model.get_service (info);
	
	return res.send (result);
};

module.exports = controller;
