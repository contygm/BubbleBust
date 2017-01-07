// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var Promise = require("bluebird");
mongoose.Promise = Promise;

// Require Schemas
var Executive = require("./models/Executive");
var Legislative = require("./models/Legislative");
var Organization = require("./models/Organization");
var Parties = require("./models/Parties");

// Create Instance of Express
var app = express();
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 8000;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

// -------------------------------------------------


//mongodb://heroku_nhk3bbmv:7dml376seb3b2ousnha7pg75s@ds155418.mlab.com:55418/heroku_nhk3bbmv
//mongodb://heroku_nhk3bbmv:7dml376seb3b2ousnha7pg75s@ds155418.mlab.com:55418/heroku_nhk3bbmv


mongoose.connect("mongodb://heroku_nhk3bbmv:7dml376seb3b2ousnha7pg75s@ds155418.mlab.com:55418/heroku_nhk3bbmv");
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// -------------------------------------------------

// Main "/" Route. This will redirect the user to our rendered React application
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

// switch case when it's working
// and controller file
app.get("/twitter/:collection", function(req, res) {
	// get branch from drop down
	var collection = req.params.collection;

	console.log(collection, "Party");

	// get records based on branch
	Parties.find({}, function(err, doc) {
	    if (err) {
	      console.log(err);
	    }
	    else {
	      res.send(doc);
	    }
	})

});

// -------------------------------------------------

// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
