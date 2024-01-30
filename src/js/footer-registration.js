import { apiInstance } from './services/api';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// function removeEventListeners() {
//   closeButton.removeEventListener('click', closeModal);
//   backdrop.removeEventListener('click', handleClickOutsideModal);
//   document.removeEventListener('keydown', handleEscKeyPress);
// }

// ===================================================================================

const footerInput = document.querySelector('.footer-input');

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

export const sendEmail = async event => {
  event.preventDefault();

  const email = event.target.email.value;

  if (!email.trim()) {
    showIziToast({
      message: 'Email is required.',
    });
    return;
  }

  const data = {
    email: email,
  };

  if (footerInput.checkValidity()) {
    try {
      const response = await apiInstance.post(`subscription`, data);
      console.log('Response:', response);
      if (response.status === 201) {
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
};
