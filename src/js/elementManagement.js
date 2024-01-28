function showElementToPage(element) {
  element.hidden = false;
  element.style.display = 'block';
}

function hidesElementFromPage(element) {
  element.hidden = true;
  element.style.display = 'none';
}

function makesElementActive(element) {
  element.disabled = false;
}

function makesElementInactive(element) {
  element.disabled = true;
}

export {
  showElementToPage,
  hidesElementFromPage,
  makesElementActive,
  makesElementInactive,
};
