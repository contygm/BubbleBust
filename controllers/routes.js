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