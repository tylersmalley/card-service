describe('Deck', function() {
  var Deck = require('../src/Deck');

  it('provides default ordered deck', function() {
    var deck = new Deck();

    expect(deck.cards.length).toEqual(52);
    expect(deck.cards[0].name()).toEqual('Two of Clubs');
    expect(deck.cards[51].name()).toEqual('King of Spades');
  });

  it('can be instatiated with cards', function() {
    var deck = new Deck([{ rank: 'A', suit: 'S' }, { rank: 'J', suit: 'H' }]);

    expect(deck.cards.length).toEqual(2);
    expect(deck.cards[0].name()).toEqual('Ace of Spades');
    expect(deck.cards[1].name()).toEqual('Jack of Hearts');
  });

  describe('prototype', function() {
    beforeEach(function() {
      deck = new Deck();
    });
  });

  describe('cards', function() {
    it('provides default cards in a deck', function() {
      var cards = Deck.cards();

      expect(cards.length).toEqual(52);
      expect(cards[0]).toEqual({ rank: '2', suit: 'C' });
      expect(cards[51]).toEqual({ rank: 'K', suit: 'S' });
    });
  });
});
