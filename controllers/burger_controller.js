// requiring models and saving express into a variable
var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

// route to the index file to display all the burgers, get data from it to pass as an object to handlebars
router.get('/', function(req, res) {
	burger.selectAll(function(data) {
		var hbsObject = {burgers: data};
		res.render('index', hbsObject);
	});
});

// route to add a burger with the name the user entered
router.post('/burgers/insertOne', function(req, res) {
	burger.insertOne(['burger_name', 'devoured'], [req.body.name, false], function() {
		res.redirect('/');
	});
});

// route to update burger status 
router.put('/burgers/updateOne/:id', function(req, res) {
	burger.updateOne(req.params.id, function(result) {
		res.sendStatus(200);
	});
});

// export the router (controller) back to the server
module.exports = router;