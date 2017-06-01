var data  = {};
var func  = {};

func.add_address = function (name, address, port) {
	data[name] = {
		address : address,
		port    : port
	};

	return 'Successfully registered.';
};

func.get_address = function (name) {
	if (data === null)
		return 'No service registered yet.';

	if (data[name] === null)
		return 'Service not registered yet.';

	return data[name];
};

module.exports = func;
