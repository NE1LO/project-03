import iziToast from 'izitoast';
import { createStarsMarkup } from './getMarkup/createStarsMarkup';
import { openModalRating } from './modal-rating';
import { apiInstance } from './services/api';
import icons from '../img/symbol-defs.svg';

const modal = document.querySelector('.modal-trane-background');
const openModallist = document.querySelector('.render-page-one-list');

const getElemById = async id => {
  const data = await apiInstance.get(`exercises/${id}`);
  const response = data.data;
  const markup = `<div class="modal-trane">
    <button class="modal-trane-btn-close" type="button">
      <svg height="28" width="28" style="stroke: black">
        <use href="${icons}#icon-x"></use>
      </svg>
    </button>
    <div class="modal-trane-img-container">
      <img src="${response.gifUrl}" alt="" />
    </div>
    <div>
      <div class="modal-trane-name-rating">
        <h2 class="modal-trane-title">${response.name}</h2>
        <div class="modal-trane-rating-star">
          <p class="modal-trane-ratind">${response.rating}</p>
          <ul class="modal-trane-list-stars">${createStarsMarkup(
            response.rating
          )}</ul>
        </div>
      </div>
      <ul class="modal-trane-list-information">
        <li>
          <p class="modal-trane-title-information">Target</p>
          <p class="modal-trane-information-text">${response.target}</p>
        </li>
        <li>
          <p class="modal-trane-title-information">Body Part</p>
          <p class="modal-trane-information-text">${response.bodyPart}</p>
        </li>
        <li>
          <p class="modal-trane-title-information">Equipment</p>
          <p class="modal-trane-information-text">${response.equipment}</p>
        </li>
        <li>
          <p class="modal-trane-title-information">Popular</p>
          <p class="modal-trane-information-text">${response.popularity}</p>
        </li>
        <li>
          <p class="modal-trane-title-information">Burned calories</p>
          <p class="modal-trane-information-text">${response.burnedCalories}</p>
        </li>
      </ul>
      <p class="modal-trane-text"></p>
      <ul class="modal-trane-list-btn">
        <li>
          <button class="modal-trane-btn-add-favorites" type="button">
            Add&nbsp;to&nbsp;favorites&nbsp; <svg height="24" width="24">
            <use href="${icons}#icon-heart"></use> </svg>
          </button>
        </li>
        <li>
          <button class="modal-trane-btn-rating" type="button" data-id="${
            response._id
          }">
            Give a rating
          </button>
        </li>
      </ul>
    </div>
  </div>`;
  modal.innerHTML = markup;
  const modalCloseBtn = document.querySelector('.modal-trane-btn-close');
  const FavoritBtn = document.querySelector('.modal-trane-btn-add-favorites');
  const btnRanig = document.querySelector('.modal-trane-btn-rating');
  modalCloseBtn.addEventListener('click', closeModal);
  FavoritBtn.addEventListener('click', () => addToFavorites(id));
  btnRanig.addEventListener('click', openModalRating);
};

function openModal(event) {
  if (event.target.classList.contains('workout-card__link-start')) {
    const itemId = event.target;

    getElemById(itemId.dataset.id);
    modal.classList.add('modal-trane-background-active');
    document.addEventListener('click', closeModalOutside);
    document.addEventListener('keydown', closeModalOnEscape);
  }
}
function closeModal() {
  modal.classList.remove('modal-trane-background-active');
  document.removeEventListener('click', closeModalOutside);
  document.removeEventListener('keydown', closeModalOnEscape);
}
function closeModalOutside(event) {
  if (event.target === modal) {
    closeModal();
  }
}
function closeModalOnEscape(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
}

function addToFavorites(id) {
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  if (!favorites.includes(id)) {
    favorites.push(id);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    iziToast.success({
      message: 'Add favorite!',
      position: 'topCenter',
    });
  } else {
    iziToast.error({
      title: 'Error',
      message: 'Has already',
      position: 'topCenter',
    });
  }
}

openModallist.addEventListener('click', openModal);
