import { allApi } from '../requests';
import { createsStringOfWorkoutCardElements } from '../getMarkup/markupWorkoutSection';
import { hidesElementFromPage } from '../elementManagement';
import { btnRender } from '../btnRender';

const listWorkoutRef = document.querySelector('.render-page-one-list');
const listPagesRef = document.querySelector('.render-btn-list-pagination');
const formSearchRef = document.querySelector('.form-search');

listWorkoutRef.addEventListener('click', loadsFirstPageElements);
listPagesRef.addEventListener('click', loadsNextPageElements);

const bodyWidth = getComputedStyle(document.querySelector('body')).width;
const limit = parseInt(bodyWidth) < 768 ? 8 : 9;
const paramsObj = {
  page: 1,
  limit,
};

const loadsWorkoutSectionElements = async () => {
  try {
    const response = await allApi.getWorkout(paramsObj);

    listWorkoutRef.innerHTML = createsStringOfWorkoutCardElements(
      response.data.results
    );

    if (response.data.totalPages === 1) {
      hidesElementFromPage(listPagesRef);
    }

    btnRender(response.data.totalPages, response.data.page);

    showElementToPage(formSearchRef);
  } catch (error) {
    console.log(error);
  }
};

function loadsFirstPageElements(e) {
  if (!e.target.closest('.render-page-one-item')) return;

  paramsObj[e.target.dataset.filter] = e.target.dataset.name;

  loadsWorkoutSectionElements();

  listWorkoutRef.removeEventListener('click', loadsFirstPageElements);
}

function loadsNextPageElements(e) {
  if (!e.target.closest('.render-pagination-btn')) return;

  paramsObj.page = e.target.textContent;

  loadsWorkoutSectionElements();
}

//  ===============================================

//   showElementToPage,
//   hidesElementFromPage,
//   makesElementActive,
//   makesElementInactive,
