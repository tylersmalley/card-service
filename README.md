Card Service Coding Challenge
---

Here are the [requirements](docs/REQUIREMENTS.md) for this challenge.

The only modification to the requirements was to allow the shuffle technique to be made on the the request, instead of at deploy-time. This would allow the user to shuffle a deck multiple times using different techniques.

# Development

Dependencies:
* Node

To get up and running, run `make` to install node dependencies and run the server.

# Environments

* Local: http://localhost:8080/cards
* Heroku: https://card-service.herokuapp.com/decks


# Testing

Test are ran using `make test`. Test are written using Jasmine and located within the `/spec` directory

# API

* [PUT /decks](docs/api/decks-put.md) - Create a deck
* [GET /decks](docs/api/decks-get.md) - List all decks
* [GET /decks/:name](docs/api/deck-get.md) - Get the cards in a deck
* [DELETE /decks/:name](docs/api/deck-delete.md) - Delete a deck
* [POST /decks/:name/shuffle](docs/api/deck-shuffle-post.md) - Delete a deck
