var request = require('request');
var Twitter = require('twitter');

// Method to get facebook likes count
module.exports.getLikeCount = function(req, res){
	var url = req.params.url;
	var fbUrl = "https://graph.facebook.com/https://www.facebook.com/"+req.params.url+"/feed?fields=likes&access_token=EAACEdEose0cBALCzZBf0vyOA5AiRmXOZAUZAbVfa54aHRlikOnhvnVyAtFz6ZCvGhVE6WSJrGKyMgfTZCcAz2eDV9F2wOnFZC7MqHrXZA2x7qZBkVg7cExp9jNqYNofbWRQRtsybnGT09ZBrSp5BIDZCcTsREbZAjqYfZBZBLEQ6GwAPl1JmWGzIDhVue";
	request(fbUrl, function (error, response, body) {
	  if (!error && response.statusCode == 200) {
		var fbData = JSON.parse(body);
        res.json(fbData);
	  }
	})
}

//Method to get twitter follwers count
module.exports.getFollowersCount = function(req, res){
	var twitterUserName = req.params.user;
	var client = new Twitter({
	  consumer_key: config.TWITTER_CONSUMER_KEY,
	  consumer_secret: config.TWITTER_CONSUMER_SECRET,
	  access_token_key: config.TWITTER_ACCESS_TOKEN_KEY,
	  access_token_secret: config.TWITTER_ACCESS_TOKEN_SECRET
	});
	
	var params = {screen_name: twitterUserName};
	client.get('statuses/user_timeline', params, function(error, tweets, response){
		if (!error && tweets && tweets.length > 0) {
			if(tweets && tweets[0] && tweets[0].user)
			var tweets_count = tweets[0].user
			console.log(tweets[0].user.followers_count);
	       res.json(tweets[0].user);
		}
	})
}