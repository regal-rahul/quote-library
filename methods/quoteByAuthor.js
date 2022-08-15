let data = require('../data/quotes.json')

const quoteByAuthor = (author) => {
    if (author !== undefined) {
        let list = []
        data.map(item => {
            if ((item.quoteAuthor && (item.quoteAuthor).toLowerCase()).includes(author.toLowerCase())) {
                let obj = {
                    quote: item.quoteText,
                    author: item.quoteAuthor
                }
                list.push(obj)
            }
        });
        return list
    }
    else {
        return []
    }
}

module.exports = quoteByAuthor