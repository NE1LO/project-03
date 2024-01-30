import { getMarkupFilters } from './js/getMarkup/getMarkupFilters';
import { renderPageOne } from './js/render/renderPageOne';

renderPageOne(getMarkupFilters({ page: 1, filter: 'Muscles' }));
import './js/pagination';
// import { newQuote } from './js/quote';
import { sendEmail } from './js/footer-registration';
const form = document.querySelector('.form');
form.addEventListener('submit', sendEmail);
// import './js/mobile.menu';
// newQuote();
