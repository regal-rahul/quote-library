# Quote Library

## Installation

Install my-project with npm

```bash
  npm install quote-library
```

## Features

- This Quote library is a classic combination of 1500+ diffrent types of Quotes.
- Random Quote - It can be used to generate a random Quote from the collection.
- Quote by Author - You can find Quote by specifying Author name.
- Quote by Keyword - You can find Quote by any particular keyword.

## Usage

```js
import quotes from "quote-library";
console.log(quotes.allQuote());
```

```js
var quotes = require("quote-library");
console.log(quotes.allQuote());
```

Use of Required Functions

```js
import randQuote from "quote-library";
or;
var randQuote = require("quote-library");
console.log(randQuote.randomQuote());
```

```js
import qba from "quote-library";
or;
var qba = require("quote-library");
console.log(qba.quoteByAuthor("Buddha", count));
```

```js
import qbk from "quote-library";
or;
var qbk = require("quote-library");
console.log(qbk.quoteByKeyword("Success", count));
```

You can pass **_number_** in the place of **count** to fetch specific number of quotes.

If Quotes are not available in specified quantity according to **count**. You will get all the matched **count** of Quotes.

## Functions

| Function Name | Returns           | Arguments        | Description                                                                        |
| ------------- | ----------------- | ---------------- | ---------------------------------------------------------------------------------- |
| allQuotes()   | Array of Objects  | `null`           | Returns all quotes data including "quoteText", "quoteAuthor".                      |
| randomQuote() | Object ( single ) | `null`           | Returns a Random quote from the quotes library.                                    |
| quoteAuthor() | Array of Objects  | `null`, `number` | Returns all matched quotes by Author name, and specified number of matched result. |
| quoteAuthor() | Array of Objects  | `null`, `number` | Returns all matched quotes by keyword, and specified number of matched result .    |

## NOTE

This Quote library is currently offering approximately 1500+ Quotes collection. You might not find a quote you are looking for because of the limited collection of data.

The Quotes collection might increase with future updates.

## Examples

```js
var quotes = require("quote-library");
console.log(quotes.quoteByAuthor("Buddha", 2));

/**
[
    {
      quote: 'What you are is what you have been. What you�ll be is what you do now.',
      author: 'Buddha'
    },
    { quote: 'What we think, we become.', author: 'Buddha' }
]
**/
```

```js
var quotes = require("quote-library");
console.log(quotes.randomQuote());

/**
{
    quoteText: 'We never live; we are always in the expectation of living.',
    quoteAuthor: 'Voltaire'
}
**/
```

```js
var quotes = require("quote-library");
console.log(quotes.quoteByKeyword("success", 2));

/**
[
    {
      quote: 'One fails forward toward success.',
      author: 'Charles Kettering'
    },
    {
      quote: 'The path to success is to take massive, determined action.',
      author: 'Tony Robbins'
    }
]
**/
```

## Upcoming Feature Update

- A huge collection of amazing facts and jokes will be added. `UNDER DEVELOPMENT`

## 🔗 Useful Links

[![GITHUB REPOSITORY](https://img.shields.io/badge/GITHUB_REPOSITORY-000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/regal-rahul/quote-library)

[![NPM PACKAGE](https://img.shields.io/badge/NPM_PACKAGE-0A66C2?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/package/quote-library)

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Free to use, made by [Regal-Rahul](https://github.com/regal-rahul)
