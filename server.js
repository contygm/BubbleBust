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

var Twitter = require("twitter");

twitterKeys = {
  consumer_key: "DET3lqXYoKyT9jAebSHQFmgJ8",
  consumer_secret: "FtEuum2jzoXlEZQT8dNn2jJxC8jiYdC1AQm3gsxiV0GiMkMZKF",
  access_token_key: "63023948-1em4lPI07V8hh69NTOrbT4nG9eJwjePbf2dFt13Jd",
  access_token_secret: "ZgMuaTKCbxjVQLIewzdyPnQ4CwJBCvYhCW2t92mLBo9Vb"
};

var client = new Twitter(twitterKeys);


// TODO: switch case when it's working
// TODO: controller file
// TODO: handle org types
// GET npm install node-twitter-api
app.get("/twitter/:collection", function(req, res) {
	// get branch from drop down
	var collection = req.params.collection;

	console.log(collection);

	// get records based on branch
	Parties.find({}, function(err, doc) {
	    if (err) {
	      console.log(err);
	    }
	    else {
	    	for (var n = 0; n < doc.length; n++){
	    		if (doc[n].handle != "n/a"){
	    			var params = { screen_name: doc[n].handle };
					console.log(doc[n].handle);
					
					client.get("statuses/user_timeline", params, function(error, tweets, response) {
					    if (!error) {
					      res.send(response.name +" a.k.a "+ response.screen_name +"<br>"+ response.text);
					    }
					});
	    		}			
			}
	    }
	})

});

// -------------------------------------------------

// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
