let data = require('../data/quotes.json')

const quoteByAuthor = (author, count = 1607) => {
    if (!author || typeof author !== "string") return [];
    const str = author.toLowerCase();

    const list = []
    data?.forEach(item => {
        if (item.quoteAuthor &&
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

module.exports = quoteByAuthor