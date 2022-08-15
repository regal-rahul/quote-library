let data = require('../data/quotes.json')

const allQuote = () => {
    
    let every = data.map( item => {
        return {
            quote: item.quoteText,
            author: item.quoteAuthor
        }

    })
    return every
}

module.exports = allQuote