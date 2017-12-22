var express = require('express');
var procedures = require('../procedures/questions.proc');

var router = express.Router();

router.route('/')
    .get(function(req, res) {
        procedures.random()
        .then(function(info) {
            res.send(info);
        }, function(err) {
            res.sendStatus(500);
        });
    })
    
module.exports = router;