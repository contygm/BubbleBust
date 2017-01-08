// SETUP VARIABLES
// ==========================================================
var allNews = [{ }];
var numResults 	= 0;
var queryURL;
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

		// Empties the region associated with the articles
		$("#wellSection").empty();

		//console.log(allNews);
		//console.log(allNews.length);
		for (var j=1; j<numResults; j++) {

			// Add to the Article Counter (to make sure we show the right number)
			articleCounter++;

			// Create the HTML Well (Section) and Add the Article content for each
			var wellSection = $("<div>");
			wellSection.addClass('well');
			wellSection.attr('id', 'articleWell-' + articleCounter)
			$('#wellSection').append(wellSection);


			// Then display the remaining fields in the HTML (Title, Date, URL)
			$("#articleWell-"+ articleCounter).append("<h4 id='artTitle'><a href=" + allNews[j].url + " target='_blank'>" + allNews[j].title + "</a></h4>");

			if (allNews[j].publishedAt != null){
				$("#articleWell-"+ articleCounter).append('<h5>' + allNews[j].publishedAt + "</h5>");
			}
			
			$("#articleWell-"+ articleCounter).append("<a href='" + allNews[j].url + "' target='_blank'>" + allNews[j].url + "</a>");	

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
		displayArticles();
	});

}

function scrapeArticles(){

}

// METHODS
// ==========================================================
	
	// On Click button associated with the Search Button
	$('#runGuardian').on('click', function(){
		queryURL = 'https://newsapi.org/v1/articles?source=the-guardian-uk&sortBy=latest&apiKey=27b0fae587184d978804a9fe7727d8b4';
		runQuery(numResults, queryURL);		
		// This line allows us to take advantage of the HTML "submit" property. This way we can hit enter on the keyboard and it registers the search (in addition to clicks).
		return false;
	});	
	$('#runBBC').on('click', function(){
		queryURL = 'https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=27b0fae587184d978804a9fe7727d8b4';
		runQuery(numResults, queryURL);		
		// This line allows us to take advantage of the HTML "submit" property. This way we can hit enter on the keyboard and it registers the search (in addition to clicks).
		return false;
	});
	$('#runCNN').on('click', function(){
		queryURL = 'https://newsapi.org/v1/articles?source=cnn&sortBy=top&apiKey=27b0fae587184d978804a9fe7727d8b4';
		runQuery(numResults, queryURL);		
		// This line allows us to take advantage of the HTML "submit" property. This way we can hit enter on the keyboard and it registers the search (in addition to clicks).
		return false;
	});
	$('#runEconomist').on('click', function(){
		queryURL = 'https://newsapi.org/v1/articles?source=the-economist&sortBy=latest&apiKey=27b0fae587184d978804a9fe7727d8b4';
		runQuery(numResults, queryURL);		
		// This line allows us to take advantage of the HTML "submit" property. This way we can hit enter on the keyboard and it registers the search (in addition to clicks).
		return false;
	});
	//work in progress
	$('#runNPR').on('click', function(){
		scrapeArticles();		
		// This line allows us to take advantage of the HTML "submit" property. This way we can hit enter on the keyboard and it registers the search (in addition to clicks).
		return false;
	});
// This button clears the top articles section
$('#clearAll').on('click', function(){
	articleCounter = 0;
	$("#wellSection").empty();
})

