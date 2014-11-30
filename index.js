'use strict';

var jsdom = require('jsdom');

// var cardsPerPage = 12;
// var totalPages = 534;
var currentStaringPoint = 0;
var url = 'http://www.kartabu.com/pl/index.php?first=';

jsdom.env(
  url + currentStaringPoint,
  [],
  function(err, win){
    var forbids;
    var cards = win.document.querySelectorAll('td[align=center][valign=top]');
    cards = Array.prototype.slice.call(cards);
    cards.forEach(function(card){
      console.log('-----------------------')
      console.log('Word: ', card.querySelectorAll('.card_top_name')[0].innerHTML);
      console.log('Dont use:');
      forbids = card.querySelectorAll('.card_tabu_div');
      forbids = Array.prototype.slice.call(forbids);
      forbids.forEach(function(forbid){
        console.log(forbid.innerHTML);
      });
    });
  }
);
