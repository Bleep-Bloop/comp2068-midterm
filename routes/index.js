/*
File Name: index.js
Author: Taisen Colcher
Website http://taisencolcher-advancedwebassignment1.azurewebsites.net/contact / TaisenColcher.com
Sends you to the different pages
 */
 
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Taisen Colcher ' });
});



/* GET people page */
router.get('/people', function(req, res, next) {
  res.render('people', { title: 'People' });
});



/* GET contact page */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me ' });
});



module.exports = router;
