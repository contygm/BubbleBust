
var axios = require("axios");

var helper = {
  getMyTweets: function(route) {
  	console.log(route);

  	return axios.get(route)
  	.then(function(response){
  		console.log(response.data)
  		return response.data
  	})

  },

}

module.exports = helper;

