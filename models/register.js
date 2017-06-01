var data_obj = require ('./data');

var model = {};

model.new_service = function (data) {
	return data_obj.add_address (data.name, data.address, data.port);
};

module.exports = model;

