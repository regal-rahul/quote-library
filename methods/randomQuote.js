let data = require('../data/quotes.json');

const randomQuote = () => {
    const keys = Object.keys(data)
    const randomIndex = Math.floor(Math.random() * keys.length)
    const randomKey = keys[randomIndex]
    const quote = data[randomKey]
    return quote;
}

module.exports = randomQuote
