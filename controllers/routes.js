var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var Promise = require("bluebird");
mongoose.Promise = Promise;
var helpers = require("../app/config/helpers");
var request = require("request");
var cheerio = require("cheerio");
var currentdate = new Date();
var mongoose = require('mongoose');
var SavedArticle = require('../models/Article');

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
          if (tweet != null && tweet.length > 0){
          	tweets.push(tweet);  
          	count++;
          }
          if (count === doc.length) {
          	// concat tweet array, sort most recent by date
          	var merged = [].concat.apply([], tweets)
            var mergedSort = merged.sort(function(a,b) { 
  				    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  				    })
            
            // return lastest 100
            return callback(null, mergedSort.slice(0, 50));
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

                        return res.send(result); 
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

                        return res.send(result); 
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

                        return res.send(result); 
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

                        return res.send(result); 
                    });
			    }
			});
			break;
		default:
			console.log("Nope, no mongo data for you.")
	}
});

router.get('/scrapeNPR', function(req, res) {

    var entry = [];
    request("https://www.npr.org/sections/politics/", function(error, response, html) {
      // Then, we load that into cheerio and save it to $ for a shorthand selector
      var $ = cheerio.load(html);
      // Now, we grab every h4 within an article tag, and do the following:
      //NPR
      $(".item-info").each(function(i, element) {
        // Save an empty result object
        var result = {};
        // Save the text of the h4-tag as "title"
        //NPR setup
        result.title = $(this).find("h2.title").text();
        result.link = $(this).find("a").attr("href");
        result.pubDate = $(this).find("span").text();
        // Using our Article model, create a new entry
        // This effectively passes the result object to the entry (and the title and link)
        //entry = new Article(result);
        entry.push(result);
        // // Now, save that entry to the db
        // entry.save(function(err, doc) {
        //   // Log any errors
        //   if (err) {
        //     console.log(err);
        //   }
        //   // Or log the doc
        //   else {
        //     console.log(doc);
        //   }
        // });
      //console.log(entry);
      
      });
      //console.log(entry);
      res.send(entry); 
    });
  });

  router.get('/scrapeFOX', function(req, res) {
    var entry = [];
    request("http://www.foxnews.com/politics.html/", function(error, response, html) {
      // Then, we load that into cheerio and save it to $ for a shorthand selector
      var $ = cheerio.load(html);
      //FOX News
      $("li.article-ct").each(function(i, element) {
        // Save an empty result object
        var result = {};

        //FOX News setup
        result.title = $(this).find("h3").text();
        result.link = "http://www.foxnews.com" + $(this).find("a").attr("href");
        result.pubDate = currentdate.getDate() + "/"
                        + (currentdate.getMonth()+1)  + "/" 
                        + currentdate.getFullYear();
        
        entry.push(result);
      });
      //console.log(entry);
      res.send(entry); 
    });
  });

  router.get('/scrapeHill', function(req, res) {
    var entry = [];
    request("http://thehill.com/", function(error, response, html) {
      // Then, we load that into cheerio and save it to $ for a shorthand selector
      var $ = cheerio.load(html);
      //The Hill
      $("li.views-row").each(function(i, element) {
        // Save an empty result object
        var result = {};

        //The Hill setup
        result.title = $(this).find("a").text();
        result.link = "http://thehill.com" + $(this).find("a").attr("href"); 
        result.pubDate = $(this).find("em").text() + " ago";
        entry.push(result);
      });
      //console.log(entry);
      res.send(entry); 
    })
  });

  router.get('/scrapeBlaze', function(req, res) {
    var entry = [];
    request("http://www.theblaze.com/", function(error, response, html) {
    // Then, we load that into cheerio and save it to $ for a shorthand selector
      var $ = cheerio.load(html);
      //Blaze News
      $("article.feed.article").each(function(i, element) {
        // Save an empty result object
        var result = {};

        //The Blaze setup
        result.title = $(this).find("h3").text();
        result.link = "http://www.theblaze.com" + $(this).find("a").attr("href"); 
        result.pubDate = $(this).find("time").text();
        entry.push(result);
      });
      //console.log(entry);
      res.send(entry); 
    })
  });

  router.get('/scrapeHuff', function(req, res) {
    console.log("got req scrap");
    var entry = [];
    request("http://www.huffingtonpost.com/section/politics", function(error, response, html) {
    // Then, we load that into cheerio and save it to $ for a shorthand selector
      var $ = cheerio.load(html);
      //Blaze News
      $("div.card").each(function(i, element) {
        // Save an empty result object
        var result = {};

          //The Huffingtonpost setup
          result.title = $(this).find("a").text();
          result.link = $(this).find("a").attr("href"); 
        result.pubDate = currentdate.getDate() + "/"
                        + (currentdate.getMonth()+1)  + "/" 
                        + currentdate.getFullYear();
        entry.push(result);
      });
      //console.log(entry);
      res.send(entry); 
    })
  });

router.get('/api/saved', function(req, res){
    SavedArticle
    .find()
    .exec(function(err, data){
      if (err) {
        res.json({status: 'err'})
      } else {
        res.json(data)
      }
    })
  })
  //post to save

  router.post('/api/saved', function(req, res){
    //console.log(req);
    var savedArticle = new SavedArticle({
      title: req.body.title,
      pubDate: req.body.pubDate,
      link: req.body.link
    })

    //saved data
    savedArticle.save(function(err){
      if(err) {
        res.json({status: 'err'})
        //console.log(err);
      } else {
        res.json({status: 'saved'})
       // console.log("saved");
      }
    })
  })
  //when user hits delete
  router.delete('/api/saved/:id', function(req, res){
    SavedArticle
      .remove({_id: req.params.id})
      .exec(function(err){
        if(err) {
          res.json({status: 'err'})
        } else {
          res.json({status: 'deleted'})
        }
      })
  })

module.exports = router;