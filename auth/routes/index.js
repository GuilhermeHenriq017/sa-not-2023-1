var express = require('express');
var router = express.Router();
const {checkAuth} = require('../utils/utils')

/* GET home page. */
router.get('/', checkAuth, function(req, res, next) {
  res.render('index', { title: 'Autenticaçao por sessão ' });
});

module.exports = router;
