const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})


	var error = function (err, response, body) {
    	console.log('ERROR [%s]', JSON.stringify (err));
	};
	var success = function (data) {
    	console.log('Data [%s]', data);
	};

	var Twitter = require('twitter-node-client').Twitter;

	//Get this data from your twitter apps dashboard



	// make a directory in the root folder of your project called data
	// copy the node_modules/twitter-node-client/twitter_config file over into data/twitter_config`
	// Open `data/twitter_config` and supply your applications `consumerKey`, 'consumerSecret', 'accessToken', 'accessTokenSecret', 'callBackUrl' to the appropriate fields in your data/twitter_config file

    var twitter = new Twitter(
    {
        "consumerKey": "00lSIIA3ajiqmYDtas8QGj672",
        "consumerSecret": "0Ynry22PhIX4mbQjnTA4cB7CErshgCJGL25ZpW8olOwgoAyL7N",
        "accessToken": "298729327-rzizB3TJF7QrZBb54LYPJKbX5RpC9BDLM5xe4ujT",
        "accessTokenSecret": "2gMC8gusvj9klETgjkKTHSEvZxFOLF8lPj8v57DW5GFg0",
        "callBackUrl": "https://middleseat-api2.firebaseapp.com"
    });

	//Example calls

	// twitter.getUserTimeline({ screen_name: 'BoyCook', count: '10'}, error, success);
  //
	twitter.getMentionsTimeline({ count: '10'}, error, success);
  //
	// twitter.getHomeTimeline({ count: '10'}, error, success);
  //
	// twitter.getReTweetsOfMe({ count: '10'}, error, success);
  //
	// twitter.getTweet({ id: '1111111111'}, error, success);


	//
	// Get 10 tweets containing the hashtag haiku
	//

	// twitter.getSearch({'q':'#haiku','count': 10}, error, success);

	//
	// Get 10 popular tweets with a positive attitude about a movie that is not scary
	//

	// twitter.getSearch({'q':' movie -scary :) since:2013-12-27', 'count': 10, 'result\_type':'popular'}, error, success);
