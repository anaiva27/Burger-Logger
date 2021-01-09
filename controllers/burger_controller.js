var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function(req, res) {
	res.redirect('/index');
});

// route index to display all the burgers, get data from it to pass as an object to handlebars
router.get('/index', function(req, res) {
	burger.selectAll(function(data) {
		var hbsObject = {burgers: data};
		res.render('index', hbsObject);
	});
});

// route to add a burger with the name the user entered
router.post('/burgers/insertOne', function(req, res) {
	burger.insertOne(['burger_name', 'devoured'], [req.body.name, false], function() {
		res.redirect('/index');
	});
});

// route to update a burger status 
router.put('/burgers/updateOne/:id', function(req, res) {
	burger.updateOne(req.params.id, function(result) {
		console.log("******result: ",result);
		res.sendStatus(200);
		//res.redirect('/index');
	});
});

// export the router (controller) back to the server
module.exports = router;