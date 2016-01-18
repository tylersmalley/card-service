/**
 * Card
 */

var Card = function(rank, suit) {
  this.rankSymbol = rank;
  this.suitSymbol = suit;
};

/**
 * Ranks indexed by symbol
 */

Card.ranks = {
  'A':  { name: 'Ace',   symbol: 'A' },
  '2':  { name: 'Two',   symbol: '2' },
  '3':  { name: 'Three', symbol: '3' },
  '4':  { name: 'Four',  symbol: '4' },
  '5':  { name: 'Five',  symbol: '5' },
  '6':  { name: 'Six',   symbol: '6' },
  '7':  { name: 'Seven', symbol: '7' },
  '8':  { name: 'Eight', symbol: '8' },
  '9':  { name: 'Nine',  symbol: '9' },
  '10': { name: 'Ten',   symbol: '10' },
  'J':  { name: 'Jack',  symbol: 'J' },
  'Q':  { name: 'Queen', symbol: 'Q' },
  'K':  { name: 'King',  symbol: 'K' }
};

/**
 * Suits indexed by symbol
 */

Card.suits = {
  'C': { name: 'Clubs',    symbol: 'C', unicode: '\u2663' },
  'D': { name: 'Diamonds', symbol: 'D', unicode: '\u2666' },
  'H': { name: 'Hearts',   symbol: 'H', unicode: '\u2665' },
  'S': { name: 'Spades',   symbol: 'S', unicode: '\u2660' }
};

/**
 * Information for card rank
 */

Card.prototype.rank = function() {
  return Card.ranks[this.rankSymbol];
};

/**
 * Information for card suit
 */

Card.prototype.suit = function() {
  return Card.suits[this.suitSymbol];
};

/**
 * Rank is given first followed by the suit
 *
 * Example: "Ace of Spades"
 */

Card.prototype.name = function() {
  return this.rank().name + ' of ' + this.suit().name;
}

module.exports = Card;
