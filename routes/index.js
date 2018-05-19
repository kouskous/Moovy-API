var models  = require('../models');
var express = require('express');
var passport = require('passport');
var router  = express.Router();

router.get('/', function(req, res) {
  models.User.findAll({}).then(function(users) {
    res.send(users);
  });
});

module.exports = router;
