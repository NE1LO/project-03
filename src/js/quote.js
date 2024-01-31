import { allApi } from './requests';

const quoteText =
  document.querySelector('.hero-third-container-text') ||
  document.querySelector('.favorite-quote__text');
const quoteAuthor =
  document.querySelector('.hero-third-container-author') ||
  document.querySelector('.favorite-quote__autor');
const KEY_QUOTE = 'key-quote';

export const newQuote = async () => {
  const data = (await JSON.parse(localStorage.getItem(KEY_QUOTE))) || [];
  if (
    data.date !==
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
  } else {
    const DATA = JSON.parse(localStorage.getItem(KEY_QUOTE));
    quoteText.textContent = DATA.quote;
    quoteAuthor.textContent = DATA.author;
  }
};
