var express       = require('express');
var body_parser   = require('body-parser');

var config     = require ('./config');
var register   = require ('./routes/register');
var get        = require ('./routes/get');
var unregister = require ('./routes/unregister');
var update     = require ('./routes/update');

var app = express ();

app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: false }));

app.use ('/register', register);
app.use ('/get', get);
app.use ('/unregister', unregister);
app.use ('/update', update);

app.listen(config.port, function () {
  console.log('Example app listening on port ' + config.port + '!');
});
