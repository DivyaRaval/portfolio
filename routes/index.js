var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express on Azure' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express on Azure' });
});

router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Express on Azure' });
});

router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Express on Azure' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express on Azure' });
});

module.exports = router;
