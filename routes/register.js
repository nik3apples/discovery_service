var express = require('express');

var router     = express.Router();
var controller = require('../controllers/register');

router.post ('/new_service', controller.new_service);

module.exports = router;

