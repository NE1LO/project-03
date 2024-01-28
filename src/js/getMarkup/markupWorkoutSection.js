function createsStringOfWorkoutCardElements(arrayOfObjects) {
  return arrayOfObjects
    .map(({ _id, bodyPart, name, target, rating, burnedCalories, time }) => {
      return `<li class="workout-card__item" data-id="${_id}">
	<div class="workout-card__block">
		<div class="workout-card__block-top">
			<div class="workout-card__block_button-rating">
				<button type="button" class="workout-card__button-workout">Workout</button>
				<!-- <div class="workout-card__rating-block"> -->
				<p class="workout-card__rating-text"> ${rating} </p>
				<svg class="workout-card__rating-icon">
					<use class="icon-star" href="./img/symbol-defs.svg#icon-star-gold"></use>
				</svg>
				<svg class="workout-card__basket-icon">
					<use class="icon-basket" href="./img/symbol-defs.svg#icon-trash"></use>
				</svg>
				<!-- </div> -->
			</div>

			<a href="#" class="workout-card__link-start">
				Start
				<svg class="workout-card__link-icon">
					<use class="icon-arrow" href="./img/symbol-defs.svg#icon-arrow-right"></use>
				</svg>
			</a>
		</div>

		<h3 class="workout-card__title">
			<svg class="workout-card__title-icon">
				<use class="icon-icon" href="./img/symbol-defs.svg#icon-icon"></use>
			</svg>
			${name}
		</h3>

		<ul class="workout-card__statistic_list">
			<li class="workout-card__statistic_item">
				<p class="workout-card__statistic_text">
					<span class="secondary-color-text">Burned calories:</span> ${burnedCalories} / ${time} min
				</p>
			</li>
			<li class="workout-card__statistic_item">
				<p class="workout-card__statistic_text">
					<span class="secondary-color-text">Body part:</span> ${bodyPart}
				</p>
			</li>
			<li class="workout-card__statistic_item">
				<p class="workout-card__statistic_text">
					<span class="secondary-color-text">Target:</span> ${target}
				</p>
			</li>
		</ul>

	</div>
</li>`;
    })
    .join('');
}

function createsStringOfPaginationElements(num) {
  let str = '';

  for (let i = 0; i < num; i++) {
    str += `<li>
		<button class="render-pagination-btn" type="button" value="${i + 1}"> ${
      i + 1
    } </button>
		</li>`;
  }

  return str;
}

export {
  createsStringOfWorkoutCardElements,
  createsStringOfPaginationElements,
};
