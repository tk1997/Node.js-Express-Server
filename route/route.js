const express = require('express');
const router = express.Router();
const Word = require('../model/word');
router.get('/word', function(req, res, next){
    Word.aggregate( [{ $sample: {size:1}}]).then (function (word){
        console.log(word);
        res.send(word);
    }).catch(next);

});

module.exports = router;