import { allApi } from '../requests';
import { createsStringOfWorkoutCardElements } from '../getMarkup/markupWorkoutSection';
import { hidesElementFromPage } from '../elementManagement';
import { btnRender } from '../btnRender';

const listWorkoutRef = document.querySelector('.render-page-one-list');
const listPagesRef = document.querySelector('.render-btn-list-pagination');

export const loadsWorkoutSectionElements = async params => {
  try {
    const response = await allApi.getWorkout(params);

    console.log(response.data.totalPagesS);

    listWorkoutRef.innerHTML = createsStringOfWorkoutCardElements(
      response.data.results
    );

    if (response.data.totalPages === 1) {
      hidesElementFromPage(listPagesRef);
    }

    console.log(response.data.totalPagesS);

    btnRender(response.data.totalPages, response.data.page);
  } catch (error) {
    console.log(error);
  }
};

//   showElementToPage,
//   hidesElementFromPage,
//   makesElementActive,
//   makesElementInactive,
