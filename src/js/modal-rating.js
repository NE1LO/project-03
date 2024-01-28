import { apiInstance } from './services/api';


const backdrop = document.querySelector('.modal-rating-background');
const closeButton = document.querySelector('.modal-rating-btn-close');
const ratingButton = document.querySelector('.modal-trane-btn-rating');

export function openModal() {
  backdrop.style.display = 'block';
}

function closeModal() {
  backdrop.style.display = 'none';
}

function handleClickOutsideModal(event) {
  if (event.target === backdrop) {
    closeModal();
  }
}

function handleEscKeyPress(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
}

closeButton.addEventListener('click', closeModal);
backdrop.addEventListener('click', handleClickOutsideModal);
document.addEventListener('keydown', handleEscKeyPress);

function removeEventListeners() {
  closeButton.removeEventListener('click', closeModal);
  backdrop.removeEventListener('click', handleClickOutsideModal);
  document.removeEventListener('keydown', handleEscKeyPress);
}

// ===================================================================================

const arrayStars = document.querySelectorAll('.modal-rating-svg-star');
const listRadio = document.querySelector('.modal-rating-radio-list');
listRadio.addEventListener('click', e => {
  if (e.target.nodeName === 'INPUT') {
    arrayStars.forEach(i => i.classList.remove('modal-rating-svg-star-gold'));
    for (let i = 0; i < e.target.value; i++) {
      arrayStars[i].classList.add('modal-rating-svg-star-gold');
    }
  }
});

// ===================================================================================

const form = document.querySelector('.modal-rating-form');
const emailInput = document.querySelector('.modal-rating-email');
const textarea = document.querySelector('.modal-rating-comment');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  console.log({
    _id: '64f389465ae26083f39b17a4',
    rate: event.target.radiostar.value,
    email: event.target.email.value,
     review: textarea.value,
  });

  if (emailInput.checkValidity()) {
    apiInstance
      .patch(`exercises/${"64f389465ae26083f39b17a4"}/rating`, {
        params: {
          rate: event.target.radiostar.value,
          email: event.target.email.value,
           review: textarea.value,
        },
      })
      .then(response => {
        if (response.ok) {
          closeModal();
          alert.log(
            'We are excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow. You have just taken a significant step towards improving your fitness and well-being.'
          );
        } else {
          alert.error('Subscription failed');
        }
      })
      .catch(error => {
        console.error(error.message);
      });
  }
});

