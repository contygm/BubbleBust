var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var Promise = require("bluebird");
mongoose.Promise = Promise;

// Require Schemas
var Executive = require("../models/Executive");
var Legislative = require("../models/Legislative");
var Organization = require("../models/Organization");
var Parties = require("../models/Parties");


router.get("/", function (req, res) {
	res.render("public/index.html");
});


// TODO: switch case when it's working
// TODO: handle org types
// GET twitter
// app.get("/twitter/:collection", function(req, res) {
// 	// get branch from drop down
// 	var collection = req.params.collection;

// 	console.log(collection);

// 	// get records based on branch
// 	Parties.find({}, function(err, doc) {
// 	    if (err) {
// 	      console.log(err);
// 	    }
// 	    else {
// 	    	res.send(doc);
// 	    }
// 	});
// });


module.exports = router;