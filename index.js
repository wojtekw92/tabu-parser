var request = require('request');

var cardsPerPage = 12;
var totalPages = 534;
var currentStaringPoint = 0;
var url = 'http://www.kartabu.com/pl/index.php?first=';

request(url + currentStaringPoint, function(err, req, body){
  console.log(body);
});
