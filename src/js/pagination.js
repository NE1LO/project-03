import { getMarkupFilters } from './getMarkup/getMarkupFilters';
import { renderPageOne } from './render/renderPageOne';

const renderBtnListEl = document.querySelector('.render-btn-list-pagination');
const nowPage = document.querySelector('.render-pagination-btn-active');
const btnList = document.querySelectorAll('.render-pagination-btn');
const filterListBtn = document.querySelector('.render-page-one-list-btn');
const listBtnEl = document.querySelectorAll('.render-page-one-btn');

const bodyWidth = getComputedStyle(document.querySelector('body')).width;
const limit = parseInt(bodyWidth) < 768 ? 8 : 12;
const params = {
  limit,
  page: 1,
  filter: 'Muscles',
};

const filterGroup = e => {
  if (e.target.nodeName === 'BUTTON') {
    listBtnEl.forEach(i => i.classList.remove('render-page-one-btn-active'));
    e.target.classList.add('render-page-one-btn-active');
    params.filter = e.target.textContent.trimStart().trimEnd();
    params.page = 1;
    renderPageOne(getMarkupFilters(params));
  }
};

const pagination = e => {
  params.page = parseInt(e.target.textContent);
  renderPageOne(getMarkupFilters(params));
};

renderBtnListEl.addEventListener('click', pagination);
filterListBtn.addEventListener('click', filterGroup);
