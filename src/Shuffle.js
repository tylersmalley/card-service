module.exports = {
  riffle: function(cards) {
    var count = cards.length
    var deck = [];
    var pile;

    // random cut position
    var cutPosition = Math.floor(Math.random() * count);

    // our left and right piles
    var piles = [
      cards.slice(0, cutPosition),
      cards.slice(cutPosition, count)
    ];

    while (count) {
      // choose a random hand
      pile = Math.floor(Math.random() * 2);

      // swap hands if hand is empty
      if (typeof piles[pile][0] == 'undefined') {
        pile = pile === 0 ? 1 : 0;
      }

      // place from hand into new deck
      deck.push(piles[pile].shift());

      count--;
    }

    return deck;
  },

  random: function(cards) {
    var count = cards.length;
    var temp;
    var i;

    while (count) {
      // pick a remaining element
      i = Math.floor(Math.random() * count--);

      // swap it with the current element
      temp = cards[count];
      cards[count] = cards[i];
      cards[i] = temp;
    }

    return cards;
  }
}
