import { apiInstance } from './services/api';

const modal = document.querySelector('.modal-trane-background');
const modalCloseBtn = document.querySelector('.modal-trane-btn-close');
const openModalBtn = document.querySelector('.open-modal-btn');
const FavoritBtn = document.querySelector('.modal-trane-btn-add-favorites');
const btnStarList = document.querySelector('.modal-trane-list-stars');

const getElemById = async id => {
  const data = await apiInstance.get(`exercises/${id}`);
  const response = data.data;
  console.log(response);
  document.querySelector('.modal-trane-title').textContent = response.name;
  document.querySelector('.modal-trane-rating').textContent = response.rating;
  document.querySelector('.modal-trane-target-text').textContent =
    response.target;
  document.querySelector('.modal-trane-body-part-text').textContent =
    response.bodyPart;
  document.querySelector('.modal-trane-equipment-text').textContent =
    response.equipment;
  document.querySelector('.modal-trane-popular-text').textContent =
    response.popularity;
  document.querySelector('.modal-trane-text').textContent =
    response.description;
  const modalImg = document.querySelector('.modal-trane-img-container img');
  modalImg.src = response.gifUrl;
  modalImg.alt = response.name;
  btnStarList.innerHTML = createStarsMarkup(response.rating);
};

function openModal(event) {
  console.log(event);
  itemId.dataset.id = event.currentTarget.dataset.id;
  getElemById(event.currentTarget.dataset.id);
  modal.classList.add('modal-trane-background-active');
  document.addEventListener('click', closeModalOutside);
  document.addEventListener('keydown', closeModalOnEscape);
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

function addToFavorites() {
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  if (!favorites.includes(itemId.dataset.id)) {
    favorites.push(itemId.dataset.id);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }
}

openModalBtn.addEventListener('click', openModal);
modalCloseBtn.addEventListener('click', closeModal);
FavoritBtn.addEventListener('click', addToFavorites);
