var express = require('express');
var router = express.Router();
var http = require('http');
var localStorage;

/* GET home page. */
router.get('/', function (req, res, next) {
    res.sendFile('./public/index.html');
});

router.get('/public/stylesheets/style.css', function (req, res, next) {
    res.sendFile('./public/stylesheets/style.css');
});

module.exports = router;
