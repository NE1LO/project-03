import { allApi } from './requests';

const quoteText = document.querySelector('.hero-third-container-text');
const quoteAuthor = document.querySelector('.hero-third-container-author');
const KEY_QUOTE = 'key-quote';

const newQuote = async () => {
  if (
    JSON.parse(localStorage.getItem(KEY_QUOTE)).date !==
    `${new Date().getDate()}:${
      new Date().getMonth() + 1
    }:${new Date().getFullYear()}`
  ) {
    const response = await allApi.getQuote();
    const DATA = {
      author: response.data.author,
      quote: response.data.quote,
      date: `${new Date().getDate()}:${
        new Date().getMonth() + 1
      }:${new Date().getFullYear()}`,
    };
    localStorage.setItem(KEY_QUOTE, JSON.stringify(DATA));
    quoteText.textContent = DATA.quote;
    quoteAuthor.textContent = DATA.author;
    console.log(1);
  } else {
    const DATA = JSON.parse(localStorage.getItem(KEY_QUOTE));
    quoteText.textContent = DATA.quote;
    quoteAuthor.textContent = DATA.author;
    console.log(DATA);
  }
};

export { newQuote };
