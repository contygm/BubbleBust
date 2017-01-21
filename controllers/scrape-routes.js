// Our scraping tools
var request = require("request");
var cheerio = require("cheerio");
var currentdate = new Date();

module.exports = function(app) {
	// A GET request to scrape the News websites
	app.get('/scrapeNPR', function(req, res) {

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

	app.get('/scrapeFOX', function(req, res) {
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

	app.get('/scrapeHill', function(req, res) {
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

	app.get('/scrapeBlaze', function(req, res) {
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

	app.get('/scrapeHuff', function(req, res) {
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
}
