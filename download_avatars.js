var request = require('request');

function getRepoContributors(repoOwner, repoName, cb) {
  request.get("http://api.github.com/repos/jquery/jquery/contributors")
  .on('error', function (err) {          // Will show us the error if present
    console.log(err.stack);
  })
  .on('response', function (response) {   // Will display the status code if po
         console.log('Response Status Code: ', response.statusCode);
         console.log('Response Status Message: ', response.statusMessage);
  })

}



getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});