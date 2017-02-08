// *****************************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// server.js requires burgers_controller.js where routes are handled and html is rendered
// burger.js is an orm that does burger specific logic, orm.js is required
// orm.js is a generic file that handles object relational mapping, it requires connection.js
// ***************************************************************************************



// Dependencies
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8081;

// Middleware to handle parsing
// =============================================================
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// override with POST having ?_method=DELETE or PUT
// =============================================================
app.use(methodOverride('_method'));

// Set Handlebars as the default templating engine.
// =============================================================
var exphbs = require('express-handlebars');
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Static Directory
// =============================================================
app.use(express.static(__dirname + '/public'));

// Routes
// =============================================================
var routes = require('./routes/routes.js');
app.use('/', routes);


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
