let data = require('../data/quotes.json')

const quoteByKeyword = (keyword) => {
    if (keyword !== undefined) {
        let list = []
        data.map(item => {
            if ((item.quoteText && (item.quoteText).toLowerCase()).includes(keyword.toLowerCase())) {
                let obj = {
                    quote: item.quoteText,
                    author: item.quoteAuthor
                }
                list.push(obj)
            }
            else if ((item.quoteAuthor && (item.quoteAuthor).toLowerCase()).includes(keyword.toLowerCase())) {
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

module.exports = quoteByKeyword

