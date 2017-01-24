
var axios = require("axios");

var helper = {
  getMyTweets: function(route) {
  	console.log(route);

  	return axios.get(route)
  	.then(function(response){
  		console.log(response);
  		return response;
  	})
  },

  saveArticle: function(article){

		var queryURL = '/api/saved';

		return axios.post(queryURL, {
			'title': article.title,
	    	'pubDate': article.pubDate,
	    	'link': article.link
			})
			.then(function(res){
				return res.data;
			})
			.catch(function(err) {
				return false;
			})
	},

	getSaved: function(){

		var queryURL = '/api/saved';

		return axios.get(queryURL)
			.then(function(res){
				if (res.status === 'error') return false;
				return res.data;
			})
			.catch(function(err) {
				return false;
			})
	},

	deleteSaved: function(id){

		var queryURL ='/api/saved/' + id;

		return axios.delete(queryURL)
			.then(function(res){
				if (res.status === 'error') return false;
				return res.data;
			})
			.catch(function(err) {
				return false;
			})
	},

	getArticlesList: function(id){
		var queryURL;
		var tempString = id;
		var apiUse = false;
		var tempArr = [ ];

		if (tempString.slice(0, 3) === "run"){ 
			//API routine
			apiUse = true;
			switch(id) {
			    case "runGuardian":
						queryURL = 	'https://newsapi.org/v1/articles?source=the-guardian-uk&sortBy=latest&apiKey=27b0fae587184d978804a9fe7727d8b4';
			        break;
			    case "runBBC":
						queryURL = 'https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=27b0fae587184d978804a9fe7727d8b4';
			        break;
			    case "runCNN":
						queryURL = 'https://newsapi.org/v1/articles?source=cnn&sortBy=top&apiKey=27b0fae587184d978804a9fe7727d8b4';
			        break;
			    case "runEconomist":
						queryURL = 'https://newsapi.org/v1/articles?source=the-economist&sortBy=latest&apiKey=27b0fae587184d978804a9fe7727d8b4';
			        break;		        		        

				}
			//console.log(queryURL);
			}
		else {
				apiUse = false;
				queryURL = '/' + id;
	  			//console.log(queryURL);
			}			

	  	return axios.get(queryURL)
		  	.then(function(response){
		  		
		  		if (apiUse) {
		  			//console.log(response.data.articles);
		  			//console.log(response.data.articles.length);
		  			var len = response.data.articles.length;
		  			for (var j= 0; j <  len-1; j++) {
		  				tempArr.push({
        					title: response.data.articles[j].title,
        					pubDate: response.data.articles[j].publishedAt,
        					link: response.data.articles[j].url
        				})
				    }
		  			//console.log(tempArr)
		  			return tempArr
		  		}
		  		else {
		  			return response.data
		  		}
		  		
		  	})
	}
}

module.exports = helper;

