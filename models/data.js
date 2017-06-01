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
	// Only for testing
	if (name === 'all_services')
		return data;

	if (data === null)
		return 'No service registered yet.';

	if (data[name] === null)
		return 'Service not registered yet.';

	return data[name];
};

func.remove_address = function (name) {
	delete data[name];

	return 'Unregistered Successfully.';
};

module.exports = func;
