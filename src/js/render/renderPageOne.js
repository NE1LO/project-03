import { allApi } from '../requests';

const bodyWidth = getComputedStyle(document.querySelector('body')).width;
const limit = parseInt(bodyWidth) < 768 ? 8 : 12;
const filterParam = {
  limit,
  page: 1,
  filter: 'Muskles',
};
export const renderPageOne = async () => {
  const data = await allApi.getFilters(filterParam);
  console.log(data);
};
