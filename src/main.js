import { getMarkupFilters } from './js/getMarkup/getMarkupFilters';
import { renderPageOne } from './js/render/renderPageOne';

renderPageOne(getMarkupFilters({ page: 1, filter: 'Muscles' }));
import './js/pagination';
import { newQuote } from './js/quote';
// import './js/mobile.menu';
newQuote();
