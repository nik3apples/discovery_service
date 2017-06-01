var model  = require("../models/unregister");

var controller = {};

controller.remove_service = function (req, res) {
	var data = req.params;
	var info = {
		name: data.service_name,
	};

	var result = model.remove_service (info);
	
	return res.send (result);
};

module.exports = controller;
