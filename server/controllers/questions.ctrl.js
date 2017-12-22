var express = require('express');
var procedures = require('../procedures/questions.proc');
var request = require('request');
var router = express.Router();

router.get('/', function(req, res, next) {
        request('https://opentdb.com/api.php?amount=1&type=multiple')
        .pipe(res);
    });
    
module.exports = router;