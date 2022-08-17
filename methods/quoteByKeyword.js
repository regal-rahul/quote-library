let data = require('../data/quotes.json')

const quoteByKeyword = (keyword, count = 1607) => {
    if (!keyword || typeof keyword !== "string") return [];
    const str = keyword.toLowerCase();
    const list = []
    data?.forEach(item => {
        if (item.quoteText &&
            (item.quoteText).toLowerCase().includes(str)) {
            if (list.length < count) {
                list.push({
                    quote: item.quoteText,
                    author: item.quoteAuthor
                })
            }
        }
        else if (item.quoteAuthor &&
            (item.quoteAuthor).toLowerCase().includes(str)) {
            if (list.length < count) {
                list.push({
                    quote: item.quoteText,
                    author: item.quoteAuthor
                })
            }
        }
    });
    return list
}

module.exports = quoteByKeyword

