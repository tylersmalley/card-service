## Shuffle a deck

`POST /decks/:name/shuffle`

- technique _(default: random)_ - _random_ or _riffle_

If the deck is not found, a response code of 404 will be returned.

### Response

```javascript
[
  {
    "rank": {
      "name": "Two",
      "symbol": "2"
    },
    "suit": {
      "name": "Clubs",
      "symbol": "C",
      "unicode": "♣"
    },
    "name": "Two of Clubs"
  }, { ... }
]
```

Example:

`curl -X POST http://card-service.herokuapp.com/decks/ijjlks3y/shuffle`
