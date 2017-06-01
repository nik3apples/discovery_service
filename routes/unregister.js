var express = require('express');

var router     = express.Router();
var controller = require('../controllers/unregister');

router.get ('/remove_service/service_name/:service_name', controller.remove_service);

module.exports = router;

