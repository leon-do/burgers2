// Dependencies
// =============================================================
var express = require('express');
var path = require('path');
var router = express.Router();
var Burger = require('../models/Burger.js');

//redirect to burger route by default
// =============================================================
router.get('/', function(req, res) {
    res.redirect('/burgers');
});

//when directed to burgers route, get burger.js logic, call functions within it.
// =============================================================
router.get('/burgers', function(req, res) {
    Burger.findAll({}).then(function(results) {
        // results are available to us inside the .then
        res.render('index', {burgers: results});
    });
});

//when route is burger/insertOne run function
// =============================================================
router.post('/burgers/insertOne', function(req, res) {
    console.log(req.body);
    Burger.create({
        burger_name: req.body.burger_name,
        devoured: false

    }).then(function() {
        // `results` here would be the newly created burger
        res.redirect('/');
    });

});


//update route when devoured is clicked
// =============================================================
router.post('/burgers/updateOne/devour/:id', function(req, res) {
    //tableName, column, ID, callback
    Burger.update({
        devoured : true},
        {where:
            {id: req.params.id}}).then(function() {
        // `results` here would be the newly created burger
        res.redirect('/');
    });

});

//initial load
// =============================================================
router.use(function(req, res) {
    res.redirect('/burgers');
});

//export
// =============================================================
module.exports = router;


