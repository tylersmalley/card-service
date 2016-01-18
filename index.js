var restify = require('restify');
var pkg = require('./package.json');

var port = parseInt(process.env.PORT) || 8080;

var Deck = require('./src/Deck');
var Storage = require('./src/Storage');

var server = restify.createServer({
  name: pkg.name,
  version: pkg.version
});

server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());
server.use(restify.CORS());
server.use(restify.gzipResponse());

/**
 * Create card deck
 *
 * @param {String|null} name
 */

server.put('/decks', function(req, res, next) {
  var name = req.params.name || Date.now().toString(36);
  var deck = new Deck(Storage.get(name));
  var cards = [];

  res.send(201, {
    name: name,
    cards: deck.cards.map(function(c) {
      cards.push({ rank: c.rankSymbol, suit: c.suitSymbol });

      return {
        rank: c.rank(),
        suit: c.suit(),
        name: c.name()
      };
    })
  });

  // persist deck to storage
  Storage.set(name, cards);

  return next();
});

server.get('/decks', function(req, res, next) {
  var keys = Storage.keys();

  res.send(keys.map(function(key) {
    return {
      name: key,
      links: {
        self: '/decks/' + key
      }
    };
  }));

  return next();
});

/**
 * Delete a card deck
 *
 * @param {String} name
 */

server.del('/decks/:name', function(req, res, next) {
  if (Storage.rm(req.params.name)) {
    res.send(200);
  } else {
    res.send(404);
  }

  next();
});

/**
 * Get a card deck
 *
 * @param {String} name
 */

server.get('/decks/:name', function(req, res, next) {
  var data = Storage.get(req.params.name);
  var deck;

  if (!data) {
    res.send(404);
  } else {
    deck = new Deck(data);

    res.send(deck.cards.map(function(c) {
      return {
        rank: c.rank(),
        suit: c.suit(),
        name: c.name()
      };
    }));
  }

  return next();
});

/**
 * Shuffle a card deck
 *
 * @param {String} name
 */

server.post('/decks/:name/shuffle', function(req, res, next) {
  var data = Storage.get(req.params.name);
  var cards = [];
  var deck;

  if (!data) {
    res.send(404);
  } else {
    deck = new Deck(data);
    deck.shuffle(req.params.technique);

    res.send(deck.cards.map(function(c) {
      cards.push({ rank: c.rankSymbol, suit: c.suitSymbol });

      return {
        rank: c.rank(),
        suit: c.suit(),
        name: c.name()
      };
    }));

    // persist deck to storage
    Storage.set(req.params.name, cards);
  }


  return next();
});

/**
 * Logs exceptions to the console
 */

server.on('uncaughtException', function(req, res, route, err) {
  console.error(err.stack);
})

server.listen(port, function() {
  console.log('%s listening at %s', server.name, server.url);
});
