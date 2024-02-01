import { allApi } from '../requests';
import { createsStringOfWorkoutCardElements } from '../getMarkup/markupWorkoutSection';
import { hidesElementFromPage } from '../elementManagement';
import { btnRender } from '../btnRender';

const listWorkoutRef = document.querySelector('.render-page-one-list');
const listPagesRef = document.querySelector('.render-btn-list-pagination');

export const loadsWorkoutSectionElements = async (params, numbers) => {
  try {
    const response = await allApi.getWorkout(params);
    listWorkoutRef.innerHTML = createsStringOfWorkoutCardElements(
      response.data.results,
      params
    );

    if (response.data.totalPages === 1) {
      hidesElementFromPage(listPagesRef);
    }

    btnRender(response.data.totalPages, params.page, numbers);
  } catch (error) {
    console.log(error);
  }
};

//   showElementToPage,
//   hidesElementFromPage,
//   makesElementActive,
//   makesElementInactive,
