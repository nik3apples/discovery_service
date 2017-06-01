var express = require('express');

var router     = express.Router();
var controller = require('../controllers/register');

router.post ('/service_address', controller.new_service);

module.exports = router;

