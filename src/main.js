
// import './js/quote'// блокирует другие js
import { getMarkupFilters } from './js/getMarkup/getMarkupFilters';
import { renderPageOne } from './js/render/renderPageOne';

renderPageOne(getMarkupFilters({ page: 1 }));
import './js/pagination';
// import './js/mobile.menu';

// import './js/modal-rating';
