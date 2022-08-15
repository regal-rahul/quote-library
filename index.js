let allQuote = require('./methods/allQuote');
let randomQuote = require('./methods/randomQuote');
let quoteByKeyword = require('./methods/searchByKeyword');
let quoteByAuthor = require('./methods/searchByAuthor');

const quotes = {
    allQuote, randomQuote, quoteByKeyword, quoteByAuthor,
    quoteByAuthor: author => quoteByAuthor ( author ),
    quoteByKeyword: keyword => quoteByKeyword ( keyword ),
}

module.exports = quotes