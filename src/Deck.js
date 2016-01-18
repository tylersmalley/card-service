var Card = require('./Card');
var Shuffle = require('./Shuffle');

var Deck = function(cards) {
  var self = this;

  // defaults
  cards = cards || Deck.cards();

  this.cards = [];

  cards.forEach(function(card) {
    self.cards.push(new Card(card.rank, card.suit));
  });
};


/**
 * Available cards in a deck
 */

Deck.cards = function() {
  var cards = [];

  for (var rank in Card.ranks) {
    for (var suit in Card.suits) {
      cards.push({ rank: rank, suit: suit });
    }
  }

  return cards;
};

/**
 * Shuffles cards in deck
 *
 * Complexity O(n)
 *
 * @param {null|hand} algorithm
 */

Deck.prototype.shuffle = function(type) {
  switch (type) {
    case 'riffle':
      this.cards = Shuffle.riffle(this.cards);
      break;

    default:
      this.cards = Shuffle.random(this.cards);
      break;
  }
};

module.exports = Deck;
