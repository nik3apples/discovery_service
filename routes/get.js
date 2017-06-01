var express = require('express');

var router     = express.Router();
var controller = require('../controllers/get');

router.get ('/service_address/service_name/:service_name', controller.get_service);

module.exports = router;

