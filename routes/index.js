var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',);
});
router.get('/statistical.hbs', function(req, res, next) {
  res.render('statistical',);
});
router.get('/manageUserAccount.hbs', function(req, res, next) {
  res.render('manageUserAccount',);
});
router.get('/index.hbs', function(req, res, next) {
  res.render('index',);
});
router.get('/login.hbs', function(req, res, next) {
  res.render('login');
});
router.get('/manageBills.hbs', function(req, res, next) {
  res.render('manageBills',);
});
router.get('/user.hbs', function(req, res, next) {
  res.render('user',);
});
router.get('/manageProduct.hbs', function(req, res, next) {
  res.render('manageProduct',);
});
module.exports = router;
