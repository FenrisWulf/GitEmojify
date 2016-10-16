var emojiOne = require('emojione')
var https = require('https');
var str = ''
// console.log('asdf', process.argv.slice(2).join(' '))
var req = process.argv.slice(2).join(' ')
https.get('https://emoji.getdango.com/api/emoji?q='+process.argv[2], function(res) {
  res.on("data", function(chunk) {
    str += chunk;
  })
  res.on('end', function () {
    var result = str && JSON.parse(str) && JSON.parse(str).results && JSON.parse(str).results[0] && JSON.parse(str).results[0].text || ':bowtie:'
    console.log(emojiOne.toShort(result))
  });
}).on('error', function(e) {
  console.log("Got error: " + e.message);
});
