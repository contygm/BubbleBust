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

var getTweet = function(handle, callback) {
  if (handle === 'n/a') {
      return callback(null, null)
  }

  var client = new Twitter(twitterKeys),
      params = { screen_name: handle, count: 10 };

  client.get("statuses/user_timeline", params, function(error, tweets, response) {
    if (error) {
      return callback(null, null)
    }

    var all = [];

      for (var i = 0; i < tweets.length; i++) {
        all.push({
        	userName: tweets[i].user.name,
        	screenName: tweets[i].user.screen_name,
        	createdAt: tweets[i].created_at,
        	text: tweets[i].text
        });
      }

      callback(null, all);
  });
};

function getAllTweets (doc, callback) {
    var count = 0,
        tweets = [];

    for (var i = 0; i < doc.length; i++){
        getTweet(doc[i].handle, function (error, tweet) {
          if (error) {
            return callback(error);
          }
          if (tweet != null){
          	tweets.push(tweet);  
          	count++;
          }
          if (count === doc.length) {
          	// concat tweet array, sort most recent by date
          	var merged = [].concat.apply([], tweets).sort(function(a,b) { 
				    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
				})
            
            // return lastest 100
            return callback(null, merged.slice(0, 100));
          }
        });
    }
}


router.get("/Twitter/:collection/:branch", function(req, res) {
	// get collection and type 
	var collection = req.params.collection;
	var branch = req.params.branch;

	console.log(collection, branch);

	// get records branch n such

	switch(collection){
		case "Executive":
			Executive.find({branch: {$eq: branch}}, function(err, doc) {
			    if (err) {
			      console.log(err);
			    }

			    else {
			        getAllTweets(doc, function (error, result) {	
                        if (error) {
                            console.error(error);
                            return res.send(error);
                        }

                        return res.json(result); 
                    });
			    }
			});
			break;		
		case "Organization":
			Organization.find({branch: {$eq: branch}}, function(err, doc) {
			    if (err) {
			      console.log(err);
			    }
			    else {
			    	getAllTweets(doc, function (error, result) {	
                        if (error) {
                            console.error(error);
                            return res.send(error);
                        }

                        return res.json(result); 
                    });
			    }
			});
			break;
		case "Legislative":
			Legislative.find({position: {$eq: branch}}, function(err, doc) {
			    if (err) {
			      console.log(err);
			    }
			    else {
			    	getAllTweets(doc, function (error, result) {	
                        if (error) {
                            console.error(error);
                            return res.send(error);
                        }

                        return res.json(result); 
                    });
			    }
			});
			break;
		case "Parties":
			Parties.find({}, function(err, doc) {
			    if (err) {
			      console.log(err);
			    }
			    else {
			    	getAllTweets(doc, function (error, result) {	
                        if (error) {
                            console.error(error);
                            return res.send(error);
                        }

                        return res.json(result); 
                    });
			    }
			});
			break;
		default:
			console.log("Nope, no mongo data for you.")
	}
});


module.exports = router;