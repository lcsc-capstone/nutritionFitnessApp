var express = require('express');
var router = express.Router();

var PROFILE = require('../models/Profile.js');

/* SAVE profile/ENTRY */
router.post('/', function(req, res, next) {
    PROFILE.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});