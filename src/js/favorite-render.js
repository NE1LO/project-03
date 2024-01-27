import { apiInstance } from './services/api';

const key = 'key';

const container = document.querySelector('.favorites-exercise-container');

let localStorageData;

const parseLocalStorage = () => {
  try {
    localStorageData = JSON.parse(localStorage.getItem(key));
  } catch (e) {
    console.log(e);
  }
  return localStorageData;
};

const getId = async idValue => {
  try {
    const response = await apiInstance.get(`/exercises/${idValue}`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const ifLocalStorageClean = () => {
  container.innerHTML = '';
  const markupNotFound = `<div class="favorites-exercise-not-found-container">
        <img
          class="favorites-exercise-img"
          src="./img/favorite-exercise/favorite-dumbbell.png"
          alt="dumbbell"
        />
        <h3 class="favorites-exercise-not-found">
          It appears that you haven't added any exercises to your favorites yet.
          To get started, you can add exercises that you like to your favorites
          for easier access in the future.
        </h3>
      </div>`;
  container.insertAdjacentHTML('beforeend', markupNotFound);
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
                      href="./img/symbol-defs.svg#icon-trash"
                    ></use></svg>
                </div>
              </div>

              <a href="#" class="workout-card__link-start">
                Start
                <svg class="workout-card__link-icon">
                  <use
                    class="icon-arrow"
                    href="./img/symbol-defs.svg#icon-arrow-right"
                  ></use>
                </svg>
              </a>
            </div>

            <h3 class="workout-card__title">
              <svg class="workout-card__title-icon">
                <use
                  class="icon-icon"
                  href="./img/symbol-defs.svg#icon-icon"
                ></use>
              </svg>
              ${name}
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

  if (
    localStorageData !== undefined &&
    localStorageData !== null &&
    localStorageData.length !== 0
  ) {
    const result = await Promise.all(
      localStorageData.map(idValue => getId(idValue))
    );
    ifLocalStorageIs(result);
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
    console.log(localStorageData);
    localStorage.setItem(key, JSON.stringify(newLocalStorage));
    checkLocalStorage();
  }
};

container.addEventListener('click', deleteCard);

const str = JSON.stringify([
  '64f389465ae26083f39b17a4',
  '64f389465ae26083f39b17a5',
  '64f389465ae26083f39b17a6',

  '64f389465ae26083f39b17a8',
  '64f389465ae26083f39b17a7',
]);
console.log(str);
