const slesh = document.querySelector('.render-page-one-slesh');
const word = document.querySelector('.render-page-one-title-part');

export const addSubtitle = str => {
  str = str.split('');
  str[0] = str[0].toUpperCase();
  str = str.join('');
  word.style.display = 'inline-block';
  slesh.style.display = 'inline-block';
  word.textContent = str;
};
