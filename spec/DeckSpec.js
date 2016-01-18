describe('Card', function() {
  var Card = require('../src/Card');

  it('persists when initialized', function() {
    var card = new Card('A', 'S');

    expect(card.rankSymbol).toEqual('A');
    expect(card.suitSymbol).toEqual('S');
  });

  describe('prototype', function() {
    beforeEach(function() {
      card = new Card('A', 'S');
    });

    it('provides rank details', function() {
      expect(card.rank()).toEqual({
        name: 'Ace',   symbol: 'A'
      });
    });

    it('provides suite details', function() {
      expect(card.suit()).toEqual({
        name: 'Spades',   symbol: 'S', unicode: '\u2660'
      });
    });

    it('provides name', function() {
      expect(card.name()).toEqual('Ace of Spades');
    });
  });

  describe('ranks', function() {
    it('defines all available', function() {
      expect(Object.keys(Card.ranks)).toEqual([
        '2', '3', '4', '5', '6', '7', '8', '9', '10', 'A', 'J', 'Q', 'K'
      ]);
    });

    it('has details', function() {
      expect(Card.ranks.A).toEqual({
        name: 'Ace', symbol: 'A'
      });
    });
  });

  describe('suits', function() {
    it('defines all available', function() {
      expect(Object.keys(Card.suits)).toEqual([
        'C', 'D', 'H', 'S'
      ]);
    });

    it('has details', function() {
      expect(Card.suits.C).toEqual({
        name: 'Clubs',    symbol: 'C', unicode: '\u2663'
      });
    });
  });
});
