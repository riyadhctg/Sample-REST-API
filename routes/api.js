const express = require('express');
const router = express.Router();
const Discovery = require('../models/discovery');


// get a list of discoveries from the db
router.get('/discoveries', function(req, res, next) {
    //var reqYear = 2000; 
    var reqYear = parseFloat(req.query.year); //get this from the user
    var minYear = reqYear - 51; //you can change the threshold of time range here
    var maxYear = reqYear + 51; //you can change the threshold of time range here
    Discovery.find({
        Year: {
            $gt: minYear,
            $lt: maxYear
        }
    }).then(function(discoveries) {
        res.send(discoveries);
    }).catch(next);
});

// add a new discoveries to the db
router.post('/discoveries', function(req, res, next) {
    Discovery.create(req.body).then(function(discoveries) {
        console.log(req.body);
        res.send(discoveries);
    }).catch(next);
});

/*
For PUT and DELETE, in place od :id in "/discoveries/:id", in url, the ":" should be replaced by "/", 
and "id" should be replaced by document id
Example: localhost:4000/api/discoveries/5a4aa98317d8b01f287ffaa1
*/
// update a discoveries in the db
router.put('/discoveries/:id', function(req, res, next) {
    Discovery.findByIdAndUpdate({
        _id: req.params.id
    }, req.body).then(function() {
        Discovery.findOne({
            _id: req.params.id
        }).then(function(discoveries) {
            res.send(discoveries);
        });
    }).catch(next);
});

// delete a discoveries from the db
router.delete('/discoveries/:id', function(req, res, next) {
    Discovery.findByIdAndRemove({
        _id: req.params.id
    }).then(function(discoveries) {
        res.send(discoveries);
    }).catch(next);
});

module.exports = router;