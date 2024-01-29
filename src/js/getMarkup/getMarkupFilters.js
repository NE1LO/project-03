import { btnRender } from '../btnRender';
import { allApi } from '../requests';

export const getMarkupFilters = async param => {
  const checkName = data => {
    const name = data;
    if (name === 'Muscles') return name.toLowerCase();
    if (name === 'Body parts') return 'bodypart';
    if (name === 'Equipment') return name.toLowerCase();
  };
  const filterParam = { ...param };
  const DATA = await allApi.getFilters(filterParam);
  const arrayData = DATA.data.results;

  btnRender(DATA.data.totalPages, param.page);
  const markup = arrayData.reduce((html, item) => {
    return (
      html +
      ` <li class="render-page-one-item" data-filter="${checkName(
        param.filter
      )}" data-name="${item.name}">
            <img src="${item.imgUrl}" alt="" />
            <div class="render-page-one-img-container">
              <p class="render-page-one-item-title">${item.name}</p>
              <p class="render-page-one-item-zones">${item.filter}</p>
            </div>
          </li>`
    );
  }, '');
  return markup;
};
