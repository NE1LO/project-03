import { getMarkupFilters } from './js/getMarkup/getMarkupFilters';
import { renderPageOne } from './js/render/renderPageOne';
import { newQuote } from './js/quote';

renderPageOne(getMarkupFilters({ page: 1, filter: 'Muscles' }));
import './js/pagination';
import './js/mobile.menu';
