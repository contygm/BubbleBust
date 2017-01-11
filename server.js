// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// Require Schemas
var Executive = require("./models/Executive");
var Legislative = require("./models/Legislative");
var Organization = require("./models/Organization");
var Parties = require("./models/Parties");
var Article = require("./models/Article");

// Our scraping tools
var request = require("request");
var cheerio = require("cheerio");

// Mongoose mpromise deprecated - use bluebird promises
var Promise = require("bluebird");
mongoose.Promise = Promise;

// Create Instance of Express
var app = express();

// Use morgan and body parser with our app
app.use(logger("dev"));
app.use(bodyParser.urlencoded({
  extended: false
}));

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

//mongoose.connect("mongodb://heroku_nhk3bbmv:7dml376seb3b2ousnha7pg75s@ds155418.mlab.com:55418/heroku_nhk3bbmv");

var databaseURi = "mongodb://localhost/bubblebust_db";

if(process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI);
} else {
  mongoose.connect(databaseURi);
}

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

// A GET request to scrape the echojs website
app.get('/scrapeNPR', function(req, res) {
	var entry = [];
  // First, we grab the body of the html with request
  request("https://www.npr.org/sections/politics/", function(error, response, html) {
    // Then, we load that into cheerio and save it to $ for a shorthand selector
    var $ = cheerio.load(html);
    // Now, we grab every h4 within an article tag, and do the following:
    //NPR
    $("h2.title").each(function(i, element) {
      // Save an empty result object
      var result = {};
      // Save the text of the h4-tag as "title"
      //NPR setup
      result.title = $(this).text();
      result.link = $(this).children("a").attr("href");
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
  })
	 
});

// A GET request to scrape the FOX News website
app.get('/scrapeFOX', function(req, res) {
  var entry = [];
  // First, we grab the body of the html with request
  request("http://www.foxnews.com/politics.html/", function(error, response, html) {
    // Then, we load that into cheerio and save it to $ for a shorthand selector
    var $ = cheerio.load(html);
    // Now, we grab every h4 within an article tag, and do the following:
    //FOX News
    $("li.article-ct").each(function(i, element) {
      // Save an empty result object
      var result = {};

      //FOX News setup
      result.title = $(this).find("h3").text();
      result.link = "http://www.foxnews.com" + $(this).find("a").attr("href");

      entry.push(result);
    });
    //console.log(entry);
    res.send(entry); 
  })
   
});

// A GET request to scrape the The Hill website
app.get('/scrapeHill', function(req, res) {
  var entry = [];
  // First, we grab the body of the html with request
  request("http://thehill.com/", function(error, response, html) {
    // Then, we load that into cheerio and save it to $ for a shorthand selector
    var $ = cheerio.load(html);
    // Now, we grab every h4 within an article tag, and do the following:
    //The Hill
    $("li.views-row").each(function(i, element) {
      // Save an empty result object
      var result = {};

      //The Hill setup
      result.title = $(this).find("a").text();
      result.link = "http://thehill.com" + $(this).find("a").attr("href"); 

      entry.push(result);
    });
    //console.log(entry);
    res.send(entry); 
  })
   
});

// A GET request to scrape the The Blaze website
app.get('/scrapeBlaze', function(req, res) {
  var entry = [];
  // First, we grab the body of the html with request
  request("http://www.theblaze.com/", function(error, response, html) {
    // Then, we load that into cheerio and save it to $ for a shorthand selector
    var $ = cheerio.load(html);
    // Now, we grab every h4 within an article tag, and do the following:
    //FOX News
    $("article.feed.article").each(function(i, element) {
      // Save an empty result object
      var result = {};

      //The Blaze setup
      result.title = $(this).find("h3").text();
      result.link = "http://www.theblaze.com" + $(this).find("a").attr("href"); 

      entry.push(result);
    });
    //console.log(entry);
    res.send(entry); 
  })
   
});

var SavedArticle = require('./models/Article');
app.post('/save', function(req, res){
	console.log(req);
	var savedArticle = new SavedArticle({
		title: req.body.title,
		pubDdate: req.body.pubDate,
		link: req.body.link
	})
	//saved data
	savedArticle.save(function(err){
		if(err) {
			res.json({status: 'err'})
		} else {
			res.json({status: 'saved'})
		}
	})
})

// -------------------------------------------------
// mongoose logic goes here
//require("./controllers/api-routes.js")(app);

// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
