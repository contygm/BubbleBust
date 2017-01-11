// SETUP VARIABLES
// ==========================================================
var allNews = [{ }];
var numResults 	= 0;
var queryURL;
var route;
// var queryURLBase = ['https://newsapi.org/v1/articles?source=the-guardian-uk&sortBy=latest&apiKey=27b0fae587184d978804a9fe7727d8b4',
// 					'https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=27b0fae587184d978804a9fe7727d8b4',
// 					'https://newsapi.org/v1/articles?source=cnn&sortBy=top&apiKey=27b0fae587184d978804a9fe7727d8b4',
// 					'https://newsapi.org/v1/articles?source=the-economist&sortBy=latest&apiKey=27b0fae587184d978804a9fe7727d8b4'];
var articleCounter = 0;

// FUNCTIONS
// ==========================================================
function displayArticles() {
			// Initially sets the articleCounter to 0
		articleCounter = 0;
		//limit number of articles to 5
		numResults = 5;
		// Empties the region associated with the articles
		$("#wellSection").empty();

		//console.log(allNews);
		//console.log(allNews.length);
		for (var j=1; j<=numResults; j++) {

			// Add to the Article Counter (to make sure we show the right number)
			articleCounter++;

			// Create the HTML Well (Section) and Add the Article content for each
			var wellSection = $("<div>");
			wellSection.addClass('well');
			wellSection.attr('id', 'articleWell-' + articleCounter)
			$('#wellSection').append(wellSection);


			// Then display the remaining fields in the HTML (Title, Date, URL)
			$("#articleWell-"+ articleCounter).append("<h4 id='artTitle'><a href=" + allNews[j].url + " target='_blank'>" + allNews[j].title + "</a></h4>");
			$("#articleWell-"+ articleCounter).append('<button class="btn btn-primary pull-right" id="saveArticle-' + articleCounter + '">Save</button>');
			
			if (allNews[j].publishedAt != null){
				$("#articleWell-"+ articleCounter).append('<h5 id="artDate">' + allNews[j].publishedAt + "</h5>");
			}
			
			$("#articleWell-"+ articleCounter).append("<div id='artLink'><a href='" + allNews[j].url + "' target='_blank'>" + allNews[j].url + "</a></div>");	

		}	
}

function displayScrapedArticles(scrapedNews) {
			// Initially sets the articleCounter to 0
		articleCounter = 0;
		//limit number of articles to 5
		numResults = 5;
		// Empties the region associated with the articles
		$("#wellSection").empty();

		console.log(scrapedNews);
		console.log(scrapedNews.length);
		for (var j=0; j<numResults; j++) {

			// Add to the Article Counter (to make sure we show the right number)
			articleCounter++;

			// Create the HTML Well (Section) and Add the Article content for each
			var wellSection = $("<div>");
			wellSection.addClass('well');
			wellSection.attr('id', 'articleWell-' + articleCounter)
			$('#wellSection').append(wellSection);


			// Then display the remaining fields in the HTML (Title, Date, URL)
			$("#articleWell-"+ articleCounter).append("<h4 id='artTitle'><a href=" + scrapedNews[j].link + " target='_blank'>" + scrapedNews[j].title + "</a></h4>");

			// if (scrapedNews[j].publishedAt != null){
			// 	$("#articleWell-"+ articleCounter).append('<h5>' + scrapedNews[j].publishedAt + "</h5>");
			// }
			
			$("#articleWell-"+ articleCounter).append("<a href='" + scrapedNews[j].link + "' target='_blank'>" + scrapedNews[j].link + "</a>");	

		}	
}
// This runQuery function expects two parameters (the number of articles to show and the final URL to download data from)
function runQuery(numArticles, queryURL){
	numResults = 0;
	allNews = [{ }];
	// Then run a request to the Gardian(UK) API with the movie specified
	//request(queryURLBase, function (error, response, body) {
	$.ajax({url: queryURL, method: "GET"}) 
		.done(function(gardianNews) {
		// If the request is successful (i.e. if the response status code is 200)
		if ( gardianNews.status == 'ok') {

			numResults = numResults + Object.keys(gardianNews.articles).length;
			console.log(numResults);
	
			allNews.push.apply(allNews, gardianNews.articles);		
		}
		console.log(allNews);
		displayArticles();
	});

}

// When user click's update button, update the specific note
$(document).on("click", "#saveArticle-" + articleCounter , function() {
  $.ajax({
    type: "POST",
    url: "/save",
    dataType: "json",
    data: {
      title: $("#artTitle").val(),
      link: $("#artLink").val(),
      pubDate: $("#artDate").val()
    },
    // On successful call
    success: function(data) {
      // Grab the results from the db again, to populate the DOM
      //getResults();
    }
  });
});


function ajaxCall(route) {
	numResults = 0;
	var scrapedNews = [];
	console.log(route);

	$.ajax({ type: "GET", 
		  	url: route, 
		    // On successful call
		    success: function(response) {
		    	//console.log(response);
				numResults = numResults + response.length;
				//console.log(numResults);
				scrapedNews.push(response);	

		    }

	})
		.done(function(scrapedNews) {
			displayScrapedArticles(scrapedNews);
		});
}

// METHODS
// ==========================================================
	
// On Click buttons associated with the Search Button
$('#runGuardian').on('click', function(){
	queryURL = 'https://newsapi.org/v1/articles?source=the-guardian-uk&sortBy=latest&apiKey=27b0fae587184d978804a9fe7727d8b4';
	runQuery(numResults, queryURL);		
	return false;
});	
$('#runBBC').on('click', function(){
	queryURL = 'https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=27b0fae587184d978804a9fe7727d8b4';
	runQuery(numResults, queryURL);		
	return false;
});
$('#runCNN').on('click', function(){
	queryURL = 'https://newsapi.org/v1/articles?source=cnn&sortBy=top&apiKey=27b0fae587184d978804a9fe7727d8b4';
	runQuery(numResults, queryURL);		
	return false;
});
$('#runEconomist').on('click', function(){
	queryURL = 'https://newsapi.org/v1/articles?source=the-economist&sortBy=latest&apiKey=27b0fae587184d978804a9fe7727d8b4';
	runQuery(numResults, queryURL);		
	return false;
});

//scraping part
$("#runNPR").on("click", function() {
	route = "/scrapeNPR";
	ajaxCall(route);
});

$("#runFOX").on("click", function() {
	route = "/scrapeFOX";
	ajaxCall(route);
});

$("#runHill").on("click", function() {
	route = "/scrapeHill";
	ajaxCall(route);
});

$("#runBlaze").on("click", function() {
	route = "/scrapeBlaze";
	ajaxCall(route);
});

// This button clears the top articles section
$('#clearAll').on('click', function(){
	articleCounter = 0;
	$("#wellSection").empty();
})

