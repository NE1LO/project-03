const changeThemeBtn = document.querySelector('.change');
// console.log(changeThemeBtn);

const changeThemeBtnFavorit =
  document.querySelector('.page-link') || document.querySelector('.change');
// console.log(changeThemeBtnFavorit);

const oldImg = document.querySelector('.collection-img');

// console.log(originalValue);

function onClickBtn() {
  const darkTheme = document.getElementById('dynamicStyles');
  if (!darkTheme) {
    addDarkStyles();
  } else {
    darkTheme.remove();
  }

  saveOrRemoveThemeLocalStorage();
  //   changeImgFaforiteSection();
}

function saveOrRemoveThemeLocalStorage() {
  if (changeThemeBtn.checked) {
    localStorage.setItem('darkThemeActivated', 'true');
  } else {
    localStorage.removeItem('darkThemeActivated');
  }
}

function addDarkStyles() {
  const link = `<link rel="stylesheet" href="/css/layout/dark-theme.css" id='dynamicStyles'>`;
  document.querySelector('head').insertAdjacentHTML('afterend', link);
}

function loadTheme() {
  const darkThemeActivated = localStorage.getItem('darkThemeActivated');
  if (darkThemeActivated === 'true') {
    addDarkStyles();
  }
}

function loadCheckboxState() {
  const savedCheckboxState = localStorage.getItem('darkThemeActivated');
  changeThemeBtn.checked = savedCheckboxState === 'true';
}

function checkAndSaveCheckbox() {
  localStorage.setItem('darkThemeActivated', changeThemeBtn.checked.toString());
}

window.onload = function () {
  loadTheme();
  loadCheckboxState();
};

changeThemeBtn.addEventListener('change', function () {
  checkAndSaveCheckbox();
  onClickBtn();
});

// function changeImgFaforiteSection() {
//   if (localStorage.getItem('darkThemeActivated')) {
//     oldImg.srcset = './img/favorite-hero/favorite-hero-img.jpg';
//   } else {
//     oldImg.srcset = './img/black-theme-img/favorite-img-desktop.jpg';
//   }
// }

// changeThemeBtnFavorit.addEventListener('click', changeImgFaforiteSection());
