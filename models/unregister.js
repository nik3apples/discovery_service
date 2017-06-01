var data_obj = require ('./data');

var model = {};

model.remove_service = function (data) {
	return data_obj.remove_address (data.name);
};

module.exports = model;

