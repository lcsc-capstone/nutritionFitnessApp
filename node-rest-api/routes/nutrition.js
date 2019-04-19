var express = require('express');
var router = express.Router();

var NUTRITION = require('../models/Nutrition.js');


/* GET ALL ENTRIES */
router.get('/', function(req, res, next) {
    NUTRITION.find(function (err, intakes) {
    if (err) return next(err);
    res.json(intakes);
  });
});

/* GET SINGLE PRODUCT/ENTRY BY ID */
router.get('/:id', function(req, res, next) {
    NUTRITION.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE PRODUCT/ENTRY */
router.post('/', function(req, res, next) {
    NUTRITION.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE PRODUCT/ENTRY */
router.put('/:id', function(req, res, next) {
    NUTRITION.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE PRODUCT/ENTRY */
router.delete('/:id', function(req, res, next) {
    NUTRITION.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

//export default router;

module.exports = router;
