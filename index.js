var emojiOne = require('emojione')
var http = require('http');
http.get('http://emoji.getdango.com/api/emoji?q='+process.argv[2], function(res) {
  res.on("data", function(chunk) {
  	var result = chunk && JSON.parse(chunk) && JSON.parse(chunk).results && JSON.parse(chunk).results[0] && JSON.parse(chunk).results[0].text || ':bowtie:'
    console.log(emojiOne.toShort(result));
  });
}).on('error', function(e) {
  console.log("Got error: " + e.message);
});