// import { allApi } from '../requests';

// const bodyWidth = getComputedStyle(document.querySelector('body')).width;
// const limit = parseInt(bodyWidth) < 768 ? 8 : 12;
// const filterParam = {
//   limit,
//   page: 1,
//   filter: 'Muskles',
// };
// export const renderPageOne = async () => {
//   const data = await allApi.getFilters(filterParam);
// };

const listRenderEl = document.querySelector('.render-page-one-list');

export const renderPageOne = async markup => {
  const markupLocal = await markup;
  listRenderEl.innerHTML = markupLocal;
};
