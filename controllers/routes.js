var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var Promise = require("bluebird");
mongoose.Promise = Promise;
var helpers = require("../app/config/helpers");

// Require Schemas
var Executive = require("../models/Executive");
var Legislative = require("../models/Legislative");
var Organization = require("../models/Organization");
var Parties = require("../models/Parties");

router.get("/", function (req, res) {
	res.sendFile(__dirname + "/public/index.html");
});

// TODO: handle org types, twitter in here
// GET twitter

// var Twitter = require("twitter");
var Twitter = require('twitter');
twitterKeys = {
  consumer_key: "DET3lqXYoKyT9jAebSHQFmgJ8",
  consumer_secret: "FtEuum2jzoXlEZQT8dNn2jJxC8jiYdC1AQm3gsxiV0GiMkMZKF",
  access_token_key: "63023948-1em4lPI07V8hh69NTOrbT4nG9eJwjePbf2dFt13Jd",
  access_token_secret: "ZgMuaTKCbxjVQLIewzdyPnQ4CwJBCvYhCW2t92mLBo9Vb"
};

var client = new Twitter(twitterKeys);

    // var params = { screen_name: handle };
    // client.get("statuses/user_timeline", params, function(error, tweets, response) {
    //   if (!error) {
    //     // for (var i = 0; i < tweets.length; i++) {
    //     //   console.log(tweets[i].created_at);
    //     //   console.log("");
    //     //   console.log(tweets[i].text);
    //     // }

    //     console.log(tweets);
    //     return tweets;

    //   }
    // });


router.get("/Twitter/:collection/:branch", function(req, res) {
	// get collection and type 
	var collection = req.params.collection;
	var branch = req.params.branch;

	console.log(collection, branch);

	// get records branch n such

	switch(collection){
		case "Organization":
			Organization.find({branch: {$eq: branch}}, function(err, doc) {
			    if (err) {
			      console.log(err);
			    }
			    else {
			    	res.json(doc);
			    }
			});
			break;
		case "Executive":
			Executive.find({branch: {$eq: branch}}, function(err, doc) {
			    if (err) {
			      console.log(err);
			    }
			    else {
			    	res.send(doc);
			    }
			});
			break;
		case "Legislative":
			Legislative.find({position: {$eq: branch}}, function(err, doc) {
			    if (err) {
			      console.log(err);
			    }
			    else {
			    	res.send(doc);
			    }
			});
			break;
		case "Parties":
			Parties.find({}, function(err, doc) {
			    if (err) {
			      console.log(err);
			    }
			    else {
			    	res.send(doc);
			    }
			});
			break;
		default:
			console.log("Nope, no mongo data for you.")
	}
});


module.exports = router;