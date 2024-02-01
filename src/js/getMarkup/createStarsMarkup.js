import icons from '../../img/symbol-defs.svg';
export const createStarsMarkup = int => {
  const starsMarkup = [
    `${icons}#icon-star`,
    `${icons}#icon-star`,
    `${icons}#icon-star`,
    `${icons}#icon-star`,
    `${icons}#icon-star`,
  ];
  const goldStar = `${icons}#icon-star-gold`;
  const number = parseFloat(int);
  starsMarkup.forEach((_, index) => {
    if (index + 1 <= number) starsMarkup[index] = goldStar;
  });
  return starsMarkup.reduce((html, item) => {
    return (
      html +
      ` <li>
                <svg height="18" width="18">
                  <use href="${item}"></use>
                </svg>
              </li>`
    );
  }, '');
};
