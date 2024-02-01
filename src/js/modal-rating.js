import { apiInstance } from './services/api';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const parStar = document.querySelector('.modal-rating-rating');

const backdrop = document.querySelector('.modal-rating-background');
const backgroundTrane = document.querySelector('.modal-trane-background');
const closeButton = document.querySelector('.modal-rating-btn-close');
const ratingButton = document.querySelector('.modal-trane-btn-rating');

export function openModalRating() {
  backgroundTrane.classList.remove('modal-trane-background-active');
  backdrop.classList.add('modal-rating-background-active');
}

function closeModal() {
  backgroundTrane.classList.add('modal-trane-background-active');
  backdrop.classList.remove('modal-rating-background-active');
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
    parStar.textContent = `${e.target.value}.0`;
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

const showIziToast = options => {
  iziToast.show({
    position: 'topRight',
    messageColor: '#FFFFFF',
    backgroundColor: '#EF4040',
    titleSize: '8px',
    closeOnEscape: true,
    ...options,
  });
};

form.addEventListener('submit', async function (event) {
  event.preventDefault();

  const rate = parseInt(event.target.radiostar.value, 10);
  const email = event.target.email.value;
  const review = textarea.value;

  if (isNaN(rate)) {
    showIziToast({
      message: 'Please select a valid rate.',
    });
    return;
  }

  if (!email.trim()) {
    showIziToast({
      message: 'Email is required.',
    });
    return;
  }

  if (!review.trim()) {
    showIziToast({
      message: 'Textarea is required.',
    });
    return;
  }

  const data = {
    rate: rate,
    email: email,
    review: review,
  };

  if (emailInput.checkValidity()) {
    try {
      const response = await apiInstance.patch(
        `exercises/${'64f389465ae26083f39b1ae3'}/rating`,
        data
      );
      console.log('Response:', response);
      if (response.status === 200) {
        closeModal();
        showIziToast({
          backgroundColor: '#7e847f',
          message:
            'We are excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow. You have just taken a significant step towards improving your fitness and well-being.',
        });
      } else {
        showIziToast({
          message: 'Subscription failed',
        });
      }
    } catch (error) {
      console.error('Error:', error);
      if (error.response && error.response.status === 409) {
        showIziToast({
          message:
            'Email already exists. Please use a different email address.',
        });
      } else {
        showIziToast({
          message: 'An error occurred while processing your request.',
        });
      }
    }
  }
});
