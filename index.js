let allQuote = require('./methods/allQuote');
let randomQuote = require('./methods/randomQuote');
let quoteByKeyword = require('./methods/quoteByKeyword');
let quoteByAuthor = require('./methods/quoteByAuthor');

const quotes = {}

quotes.allQuote = allQuote;
quotes.randomQuote = randomQuote;
quotes.quoteByAuthor = quoteByAuthor;
quotes.quoteByKeyword = quoteByKeyword;

module.exports = quotes