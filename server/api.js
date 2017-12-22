var express = require('express');
var questions = require('./controllers/questions.ctrl');
var router = express.Router();

router.use('/questions', questions);

module.exports = router;