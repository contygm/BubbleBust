var Twitter = require("twitter");

twitterKeys = {
  consumer_key: "DET3lqXYoKyT9jAebSHQFmgJ8",
  consumer_secret: "FtEuum2jzoXlEZQT8dNn2jJxC8jiYdC1AQm3gsxiV0GiMkMZKF",
  access_token_key: "63023948-1em4lPI07V8hh69NTOrbT4nG9eJwjePbf2dFt13Jd",
  access_token_secret: "ZgMuaTKCbxjVQLIewzdyPnQ4CwJBCvYhCW2t92mLBo9Vb"
};

var helper = {
  getMyTweets: function(handle) {

    var client = new Twitter(twitterKeys);

    var params = { screen_name: handle };
    client.get("statuses/user_timeline", params, function(error, tweets, response) {
      if (!error) {
        // for (var i = 0; i < tweets.length; i++) {
        //   console.log(tweets[i].created_at);
        //   console.log("");
        //   console.log(tweets[i].text);
        // }

        console.log(tweets);
        return tweets;

      }
    });
  },
  
}

module.exports = helper;

