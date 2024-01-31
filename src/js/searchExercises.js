import { createsStringOfWorkoutCardElements } from './getMarkup/markupWorkoutSection';
import { noResult } from './getMarkup/noResult';
import { renderPageOne } from './render/renderPageOne';
import { apiInstance } from './services/api';
const bodyWidth = getComputedStyle(document.querySelector('body')).width;
const limit = parseInt(bodyWidth) < 768 ? 8 : 9;
const formEl = document.querySelector('.form-search');
const list = document.querySelector('.render-page-one-list');

const listBtn = document.querySelector('.render-btn-list-pagination');

export const btnRenderSearch = (totalPage, page) => {
  let markup = '';
  for (let i = 1; i <= totalPage; i++) {
    let btn = ` <li>
        <button
          class="render-pagination-btn-search"
          type="button"
        >${i}</button></li>`;
    markup += btn;
  }
  listBtn.innerHTML = markup;
  listBtn.children[page - 1].children[0].classList.add(
    'render-pagination-btn-active'
  );
};
const params = {
  limit,
  page: 1,
};

const getFilterArr = async param => {
  const response = await apiInstance.get('exercises', { params: param });
  return response;
};

const submitSearch = async () => {
  listBtn.style.display = 'flex';
  const response = await getFilterArr(params);
  if (!response.data.results.length) {
    noResult();
    return;
  }
  renderPageOne(
    createsStringOfWorkoutCardElements(response.data.results, params)
  );
  btnRenderSearch(response.data.totalPages, params.page);
};

const searchExercises = async e => {
  e.preventDefault();
  const filter = list.children[0].dataset.filter;
  const dataName = list.children[0].dataset.name;
  params[filter] = dataName;
  params.keyword = e.target.query.value;
  listBtn.addEventListener('click', pagination);
  submitSearch();
};

const pagination = e => {
  params.page = parseInt(e.target.textContent);
  submitSearch();
};

formEl.addEventListener('submit', searchExercises);
