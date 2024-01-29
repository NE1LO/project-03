const burgerBlock = document.querySelector('.burger-menu-block');
const btnOpenEl = document.querySelector('.button-burger');
const btnCloseEl = document.querySelector('.burger-menu__btn-close');
const bodyEl = document.body;

const toggleBurgerMenu = () => {
  burgerBlock.classList.toggle('is-hidden');
  bodyEl.classList.toggle('no-scroll');
};

btnOpenEl.addEventListener('click', toggleBurgerMenu);
btnCloseEl.addEventListener('click', toggleBurgerMenu);
