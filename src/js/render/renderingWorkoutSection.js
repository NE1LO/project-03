import { allApi } from '../requests';
import { createsStringOfWorkoutCardElements } from '../getMarkup/markupWorkoutSection';
import { hidesElementFromPage } from '../elementManagement';
// import '../pagination';

const listWorkoutRef = document.querySelector('.render-page-one-list');
const listPagesRef = document.querySelector('.render-btn-list-pagination');

listWorkoutRef.addEventListener('click', loadsFirstPageElements);

const bodyWidth = getComputedStyle(document.querySelector('body')).width;
const limit = parseInt(bodyWidth) < 768 ? 8 : 9;
const paramsObj = {
  page: 1,
  limit,
  bodypart: 'back',
  muscles: 'lats',
  keyword: 'pull',
};

// equipment: 'barbell',

const loadsWorkoutSectionElements = async () => {
  try {
    const response = await allApi.getWorkout(paramsObj);

    listWorkoutRef.innerHTML = createsStringOfWorkoutCardElements(
      response.data.results
    );

    if (response.data.totalPages === 1) {
      hidesElementFromPage(listPagesRef);
    }

    // showElementToPage(formSearchRef);
  } catch (error) {
    console.log(error);
  }
};

// ====================

function loadsFirstPageElements(e) {
  if (!e.target.closest('.render-page-one-item')) return;

  // paramsObj._____ = e.target.dataset.name

  loadsWorkoutSectionElements();

  listWorkoutRef.removeEventListener('click', loadsFirstPageElements);
}

// ====================
// listPagesRef.addEventListener('click', onYYY);

// function onYYY(e) {
//   if (!e.target.closest('.render-pagination-btn')) return;

//   paramsObj.page = e.target.value;

//   loadsWorkoutSectionElements();
// }

// =========================================

// if (r.data.totalPages === 1) {
//   hidesElementFromPage(listPagesRef);
// } else {
//   listPagesRef.innerHTML = createsStringOfPaginationElements(
//     r.data.totalPages
//   );
// }

// ===============================================

// {
// const btnNumberPageRef = document.querySelectorAll(
//   '.render-btn-list-pagination button'
// );

// if (r.data.totalPages > 0) {
//   btnNumberPageRef[r.data.page - 1].className = 'is-active-page';
//   makesElementInactive(btnNumberPageRef[r.data.page - 1]);
// }
// }

//  ===============================================

// showElementToPage,
//   hidesElementFromPage,
//   makesElementActive,
//   makesElementInactive,

// ===================================

// const formSearchRef = document.querySelector('.form-search');
// const listPagesRef = document.querySelector('.render-btn-list-pagination');

// ==================

// try {
//   llApi.getWorkout(paramsObj).then(r => {
//     listWorkoutRef.innerHTML = createsStringOfWorkoutCardElements(
//       r.data.results
//     );

//     if (r.data.totalPages === 1) {
//       hidesElementFromPage(listPagesRef);
//     }

//     // showElementToPage(formSearchRef);
//   });
// } catch (error) {
//   console.log(error);
// }

// ===========================

// const loadsWorkoutSectionElements = async () => {
//   try {
//     const response = await allApi.getWorkout(paramsObj);

//     listWorkoutRef.innerHTML = createsStringOfWorkoutCardElements(
//       response.data.results
//     );

//     if (response.data.totalPages === 1) {
//       hidesElementFromPage(listPagesRef);
//     }

//     // showElementToPage(formSearchRef);
//   } catch (error) {
//     console.log(error);
//   }
// };

// =========================================

// const loadsWorkoutSectionElements = async () =>
//   allApi
//     .getWorkout(paramsObj)
//     .then(r => {
//       listWorkoutRef.innerHTML = createsStringOfWorkoutCardElements(
//         r.data.results
//       );

//       if (r.data.totalPages === 1) {
//         hidesElementFromPage(listPagesRef);
//       }

//       // showElementToPage(formSearchRef);
//     })
//     .catch(err => console.log(err));
