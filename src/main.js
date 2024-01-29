import { getMarkupFilters } from './js/getMarkup/getMarkupFilters';
import { renderPageOne } from './js/render/renderPageOne';

renderPageOne(getMarkupFilters({ page: 1, filter: 'Muscles' }));
import './js/pagination';
// import './js/mobile.menu';
// import './js/quote';
