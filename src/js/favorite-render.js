import { apiInstance } from './services/api';
import { btnRender } from '../js/btnRender';
import { hidesElementFromPage } from './elementManagement';

const container = document.querySelector('.favorites-exercise-container');
const btnPagination = document.querySelector('.render-btn-list-pagination');

const key = 'favorites';
let localStorageData = null;

const bodyWidth = getComputedStyle(document.querySelector('body')).width;
const limit = parseInt(bodyWidth) < 768 ? 8 : 9;
let currentPage = 1;
const itemsPerPage = 8;

const getId = async idValue => {
  try {
    const response = await apiInstance.get(`/exercises/${idValue}`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const parseLocalStorage = () => {
  try {
    localStorageData = JSON.parse(localStorage.getItem(key));
  } catch (e) {
    console.log(e);
  }
  return localStorageData;
};

const ifLocalStorageClean = () => {
  container.innerHTML = '';
  const markupNotFound = `<div class="favorites-exercise-not-found-container">
        <img
          class="favorites-exercise-img"
          src="././img/favorite-exercise/favorite-dumbbell.png"
          alt="dumbbell"
        />
        <h3 class="favorites-exercise-not-found">
          It appears that you haven't added any exercises to your favorites yet.
          To get started, you can add exercises that you like to your favorites
          for easier access in the future.
        </h3>
      </div>`;
  container.insertAdjacentHTML('beforeend', markupNotFound);
  hidesElementFromPage(btnPagination);
};

const ifLocalStorageIs = result => {
  container.innerHTML = '';
  const markup = result.reduce(
    (html, { _id: id, bodyPart, name, target, burnedCalories, time }) =>
      html +
      `
        <li class="workout-card__item">
          <div class="workout-card__block">
            <div class="workout-card__block-top">
              <div class="workout-card__block_button-rating">
                <button type="button" class="workout-card__button-workout">
                  Workout
                </button>
                <div class="workout-card__rating-block">
                   <svg class="workout-card__basket-icon ${id}">
                    <use
                      class="icon-basket ${id}"
                      href="././img/symbol-defs.svg#icon-trash"
                    ></use></svg>
                </div>
              </div>

              <button class="workout-card__link-start" data-id="${id}">
                Start
                <svg class="workout-card__link-icon" width="16" height='16'>
                  <use
                    class="icon-arrow"
                    href="././img/symbol-defs.svg#icon-arrow"
                  ></use>
                </svg>
              </button>
            </div>

            <h3 class="workout-card__title">
              <svg class="workout-card__title-icon">
                <use
                  class="icon-icon"
                  href="././img/symbol-defs.svg#icon-icon"
                ></use>
              </svg>
              ${name[0].toUpperCase() + name.slice(1)}
            </h3>

            <ul class="workout-card__statistic_list">
              <li class="workout-card__statistic_item">
                <p class="workout-card__statistic_text">
                  <span class="secondary-color-text">Burned calories:</span>
                  ${burnedCalories} / ${time} min
                </p>
              </li>
              <li class="workout-card__statistic_item">
                <p class="workout-card__statistic_text">
                  <span class="secondary-color-text">Body part:</span>
                  ${bodyPart}
                </p>
              </li>
              <li class="workout-card__statistic_item">
                <p class="workout-card__statistic_text">
                  <span class="secondary-color-text">Target:</span> ${target}
                </p>
              </li>
            </ul>
          </div>
        </li>`,
    ''
  );

  container.insertAdjacentHTML('beforeend', markup);
};

async function checkLocalStorage() {
  parseLocalStorage();

  if (localStorageData !== null && limit === 8 && localStorageData.length > 8) {
    getDataForPage(currentPage);
  } else if (localStorageData !== null && localStorageData.length !== 0) {
    const result = await Promise.all(
      localStorageData.map(idValue => getId(idValue))
    );
    ifLocalStorageIs(result);
    hidesElementFromPage(btnPagination);
  } else {
    ifLocalStorageClean();
  }
}

checkLocalStorage();

const deleteCard = e => {
  e.preventDefault();

  const clickedElement = e.target;

  const targetSvg = e.target.closest('.icon-basket ');

  if (targetSvg) {
    const currentElementId = clickedElement.classList[1];

    const newLocalStorage = localStorageData.filter(
      id => id !== currentElementId
    );
    localStorage.setItem(key, JSON.stringify(newLocalStorage));
    checkLocalStorage();
  }
};

container.addEventListener('click', deleteCard);

async function getDataForPage(pageNumber) {
  const totalPages = Math.ceil(localStorageData.length / itemsPerPage);

  btnRender(totalPages, pageNumber);

  const startIndex = (pageNumber - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const idForPage = localStorageData.slice(startIndex, endIndex);

  const pageData = await Promise.all(idForPage.map(id => getId(id)));
  ifLocalStorageIs(pageData);
}

btnPagination.addEventListener('click', e => {
  currentPage = Number(e.target.innerHTML);
  checkLocalStorage();
});
