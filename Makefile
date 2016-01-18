default: install dev

install:
	@npm install

dev:
	@./node_modules/.bin/nodemon .

sever:
	@node .

test:
	@./node_modules/.bin/jasmine

PHONY: default install dev server test
