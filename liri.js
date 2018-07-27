
var method = process.argv[2]
console.log(method);


var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: 'VKfZR35cIqvsLNffBxu15CyTk',
  consumer_secret: '0hJd5ddFvHjXzyULGwmo0NSzI0fwmrnRjugattqOVtXF5b2VeC',
  access_token_key: '1021908407815684096-K7rGMBw3yAo7tMLePc7g7e8B3e2BzH',
  access_token_secret: '7iXKKAWun6gEcNoqoTtiEoIzMpmhhX5xrImhfFutmyQf2'
});

function twt(){
 
    var params = {screen_name: 'd3_brogan', count: 20};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
      if (!error) {
        tweets.forEach(element => {
          console.log("#" + element.text + "\n");
          
        });
      }
    })
  
  }

function spot(song){    

  var Spotify = require('node-spotify-api');
 
  var spotify = new Spotify({
    id: '24602746ddf14621a3caa72a552db6f3',
    secret: '2e238ed7c44f440aa994a045e322c581'
  });
  spotify.search({ type: 'track', query: song }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
   
  console.log("Song Name: " + data.tracks.items[0].name + "\n"); 
  console.log("Artist Name: " + data.tracks.items[0].artists[0].name + "\n")
  console.log("Spotify URL: " + data.tracks.items[0].artists[0].external_urls.spotify + "\n")
  console.log("Album Name: " + data.tracks.items[0].album.name + "\n")

  });
  
}

  // console.log("\n\n\n");


function movie(name) {

  var request = require('request');
  request("https://www.omdbapi.com/?t=" + name + "&apikey=trilogy" , function (error, response, body) {
  console.log(" \n\n ");


  console.log("Name: " + JSON.parse(body).Title + "\n");
  console.log("Year: " + JSON.parse(body).Year + "\n");
  console.log("IMDB Rating: " + JSON.parse(body).imdbRating + "\n");
  console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value + "\n");
  console.log("Country Made: " + JSON.parse(body).Country + "\n");
  console.log("Language: " + JSON.parse(body).Language + "\n");
  console.log("Plot: " + JSON.parse(body).Plot + "\n");
  console.log("Actors: " + JSON.parse(body).Actors + "\n");  
})
};


if(method === "my-tweets") {
  twt();
  } else if(method === "spotify-this-song") {
  spot(process.argv[3]);
  } else if(method === "movie-this") {
    movie(process.argv[3]);
  }