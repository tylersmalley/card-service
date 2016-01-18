## Create Deck

`PUT /decks`

- name _(optional)_

Not providing a name will result in one which is randomly generated.

### Response (201)

```javascript
{
  "name": "bar",
  "cards": [
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
  }
}
```

Example:

`curl -X PUT http://card-service.herokuapp.com/decks`
