let data = require('../data/quotes.json');

const randomQuote = () => {
    const keys = Object.keys(data)
    const randomIndex = Math.floor(Math.random() * keys.length)
    return data[keys[randomIndex]]
}

module.exports = randomQuote