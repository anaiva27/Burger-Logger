var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require("express-handlebars");
var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));

// bodyparsers 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// import the routes
var routes = require('./controllers/burger_controller.js');
app.use('/', routes);

// Initiate the listener.
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});