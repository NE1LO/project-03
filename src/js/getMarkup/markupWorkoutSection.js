const checkFilter = obg => {
  if (obg.muscles) return ['muscles', obg.muscles];
  if (obg.bodypart) return ['bodypart', obg.bodypart];
  if (obg.equipment) return ['equipment', obg.equipment];
};

export function createsStringOfWorkoutCardElements(arrayOfObjects, params) {
  return arrayOfObjects
    .map(({ _id, bodyPart, name, target, rating, burnedCalories, time }) => {
      return `<li class="workout-card__item" data-filter="${
        checkFilter(params)[0]
      }" data-name="${checkFilter(params)[1]}" >
	<div class="workout-card__block">
		<div class="workout-card__block-top">
			<div class="workout-card__block_button-rating">
				<p class="workout-card__text-workout">Workout</p>
				<!-- <div class="workout-card__rating-block"> -->
				<p class="workout-card__rating-text"> ${rating.toFixed(1)} </p>
				<svg class="workout-card__rating-icon">
					<use class="icon-star" href="../../img/symbol-defs.svg#icon-star-gold"></use>
				</svg>
				<svg class="workout-card__basket-icon" style="display: none">
					<use class="icon-basket" href="../../img/symbol-defs.svg#icon-trash"></use>
				</svg>
				<!-- </div> -->
			</div>
			<button type="button" class="workout-card__link-start" data-id="${_id}">
				Start
				<svg class="workout-card__link-icon" width="16" height="16">
					<use class="icon-arrow" href="../../img/symbol-defs.svg#icon-arrow"></use>
				</svg>
			</button>
		</div>

		<h3 class="workout-card__title">
			<svg class="workout-card__title-icon">
				<use class="icon-icon" href="../../img/symbol-defs.svg#icon-icon"></use>
			</svg>
			${name[0].toUpperCase() + name.slice(1)}
		</h3>

		<ul class="workout-card__statistic_list">
			<li class="workout-card__statistic_item">
				<p class="workout-card__statistic_text">
					<span class="secondary-color-text">Burned calories:</span> ${burnedCalories} / ${time} min
				</p>
			</li>
			<li class="workout-card__statistic_item">
				<p class="workout-card__statistic_text">
					<span class="secondary-color-text">Body part:</span> ${
            bodyPart[0].toUpperCase() + bodyPart.slice(1)
          }
				</p>
			</li>
			<li class="workout-card__statistic_item">
				<p class="workout-card__statistic_text">
					<span class="secondary-color-text">Target:</span> ${
            target[0].toUpperCase() + target.slice(1)
          }
				</p>
			</li>
		</ul>

	</div>
</li>`;
    })
    .join('');
}

// function createsStringOfPaginationElements(num) {
//   let str = '';

//   for (let i = 0; i < num; i++) {
//     str += `<li>
// 		<button class="render-pagination-btn" type="button" value="${i + 1}"> ${
//       i + 1
//     } </button>
// 		</li>`;
//   }

//   return str;
// }
