/**
 * Created by koussila on 15/05/18.
 */
var models  = require('../models');
var express = require('express');
var passport = require('passport');
var router  = express.Router();

router.get('/facebook',
    passport.authenticate('facebook'),
    function(req, res) {
        res.json({ id: req.user.id, username: req.user.username });
    }
);
router.get('/facebook/callback',
    passport.authenticate('facebook'),
    function(req, res) {
        res.json(req.user);
    }
);

module.exports = router;
