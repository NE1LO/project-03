const listRenderEl = document.querySelector('.render-page-one-list');

export const renderPageOne = async markup => {
  const markupLocal = await markup;
  listRenderEl.innerHTML = markupLocal;
};
