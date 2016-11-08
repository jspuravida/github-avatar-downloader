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

  request(requestOptions, function(err, response, body) {
    if (err) throw err;
    console.log('Response Status Code:', response.body);
  });
}



getRepoContributors("jquery", "jquery", function(result) {
  console.log("Result:", result);
});

