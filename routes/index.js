var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/*get login page*/
router.get('/login', function(req, res) {
  res.render('login', { title: 'Express' });
});

/*get add user page*/
router.get('/users/adduser', function(req, res) {
  res.render('addUsers', { title: 'Express' });
});

/*router.get('/users/viewuser/:id', function(req, res) {
  res.render('viewuser', { title: 'Express' });
});*/

module.exports = router;
