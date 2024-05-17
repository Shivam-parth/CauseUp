var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.get('/profile', function(req, res, next) {
  res.render('profile');
});

router.get('/leaderboard', function(req, res, next) {
  res.render('leaderboard');
});

router.get('/home', function(req, res, next) {
  res.render('home');
});
module.exports = router;
