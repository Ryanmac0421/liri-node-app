
// var method = process.argv[2]
// var next = process.argv[3]
// console.log(method)
// // if method === "my-tweets" {
// //   twt()
// // } else if (method === "") {

// // }



// var Twitter = require('twitter');
 
// var client = new Twitter({
//   consumer_key: 'VKfZR35cIqvsLNffBxu15CyTk',
//   consumer_secret: '0hJd5ddFvHjXzyULGwmo0NSzI0fwmrnRjugattqOVtXF5b2VeC',
//   access_token_key: '1021908407815684096-K7rGMBw3yAo7tMLePc7g7e8B3e2BzH',
//   access_token_secret: '7iXKKAWun6gEcNoqoTtiEoIzMpmhhX5xrImhfFutmyQf2'
// });
 
// function twt(){

   
//     var params = {screen_name: 'StephenCurry30', count: 20};
//     client.get('statuses/user_timeline', params, function(error, tweets, response) {
//       if (!error) {
//         tweets.forEach(element => {
//           console.log(element.text);
          
//         });
//       }
//     })
  
//   }
  
//   twt();


// console.log("---------------------------------------------------");




  var Spotify = require('node-spotify-api');
 
  var spotify = new Spotify({
    id: '24602746ddf14621a3caa72a552db6f3',
    secret: '2e238ed7c44f440aa994a045e322c581'
  });
   

function spot(){    
    spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
      if (err) {
        return console.log('Error occurred: ' + err);
      }
      if (!error) {
        spotify.forEach(element => {
          console.log(element);
          
      });  

};



    spot();


  console.log("---------------------------------------------------");
    });








// I need to:

// node liri.js my-tweets
// --This will show your last 20 tweets and when they were created at in your terminal/bash window.

// node liri.js spotify-this-song '<song name here>'
// --This will show the following information about the song in your terminal/bash windowArtist(s)
// The song's name
// A preview link of the song from Spotify
// The album that the song is from






// node liri.js movie-this '<movie name here>'
// --This will output the following information to your terminal/bash window:

// * Title of the movie.
// * Year the movie came out.
// * IMDB Rating of the movie.
// * Rotten Tomatoes Rating of the movie.
// * Country where the movie was produced.
// * Language of the movie.
// * Plot of the movie.
// * Actors in the movie.




// node liri.js do-what-it-says
// --Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.


// It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
// Feel free to change the text in that document to test out the feature for other commands.





// 1.need to make the liri bot do all of these differnt functions 
// 2.and need them to be able to be called from command line by the different function type
// 3.think i need to use the process.argv to some how pick the right string in the array