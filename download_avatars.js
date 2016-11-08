var request = require('request');


var GITHUB_USER = "jspuravida";
var GITHUB_TOKEN = "76808c34b4d57eeb6374889281e9109074613845";



function getRepoContributors(repoOwner, repoName, cb) {

  var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';

  var requestOptions = {
    url: requestURL,
    headers: {
      'User-Agent': 'request'
    }
  };
// creates a request options object that holds the requestURL variable

  request(requestOptions, function(err, response, body) {
    if (err) throw err;
    cb(JSON.parse(response.body));
  });
  // parsed to view the avatar_url key

}



getRepoContributors("jquery", "jquery", function(result) {

  result.forEach(function(avatarBody) {
    console.log(avatarBody.avatar_url);
  })

// added the parsed avatar_url to the callback for displaying.




});

