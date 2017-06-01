var data_obj = require ('./data');

var model = {};

model.get_service = function (data) {
	return data_obj.get_address (data.name);
};

module.exports = model;

