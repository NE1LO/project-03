import { getMarkupFilters } from './getMarkup/getMarkupFilters';
import { renderPageOne } from './render/renderPageOne';

const renderBtnListEl = document.querySelector('.render-btn-list-pagination');
const nowPage = document.querySelector('.render-pagination-btn-active');
const btnList = document.querySelectorAll('.render-pagination-btn');

const bodyWidth = getComputedStyle(document.querySelector('body')).width;
const limit = parseInt(bodyWidth) < 768 ? 8 : 12;
const params = {
  limit,
  page: 1,
};
const btnActive = 69 / limit;

renderBtnListEl.addEventListener('click', e => {
  params.page = parseInt(e.target.textContent);
  renderPageOne(getMarkupFilters(params));
  if (e.target.nodeName === 'BUTTON') {
    btnList.forEach(i => {
      if (e.target.dataset.btn === '3') {
        i.textContent = parseInt(i.textContent) + 1;
      }
      if (e.target.dataset.btn === '1') {
        i.textContent = parseInt(i.textContent) - 1;
      }
    });
    if (nowPage.textContent > 1) btnList[0].style.display = 'block';
    if (nowPage.textContent == 1) btnList[0].style.display = 'none';
    if (parseInt(nowPage.textContent) >= btnActive - 1) {
      btnList[2].style.display = 'none';
    } else {
      btnList[2].style.display = 'block';
    }
  }
});
