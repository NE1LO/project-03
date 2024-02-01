import{h as v,b as $,a as k,i as c,c as S,o as E,n as P}from"./assets/change-theme-ab62f85d.js";import"./assets/vendor-0a7943b3.js";const M="/project-03/assets/favorite-dumbbell-325968d2.png",i=document.querySelector(".favorites-exercise-container"),m=document.querySelector(".render-btn-list-pagination"),b="favorites";let s=null;const I=getComputedStyle(document.querySelector("body")).width,q=parseInt(I)<768?8:9;let _=1;const u=8,f=async t=>{try{return(await k.get(`/exercises/${t}`)).data}catch(a){console.log(a)}},T=()=>{try{s=JSON.parse(localStorage.getItem(b))}catch(t){console.log(t)}return s},B=()=>{i.innerHTML="";const t=`<div class="favorites-exercise-not-found-container">
        <img
          class="favorites-exercise-img"
          src="${M}"
          alt="dumbbell"
        />
        <h3 class="favorites-exercise-not-found">
          It appears that you haven't added any exercises to your favorites yet.
          To get started, you can add exercises that you like to your favorites
          for easier access in the future.
        </h3>
      </div>`;i.insertAdjacentHTML("beforeend",t),v(m)},y=t=>{i.innerHTML="";const a=t.reduce((e,{_id:o,bodyPart:r,name:n,target:d,burnedCalories:x,time:L})=>e+`
        <li class="workout-card__item">
          <div class="workout-card__block">
            <div class="workout-card__block-top">
              <div class="workout-card__block_button-rating">
                <p class="workout-card__text-workout">
                  Workout
                </p>
                <div class="workout-card__rating-block">
                   <svg class="workout-card__basket-icon ${o}" width="24" height="24">
                    <use
                      class="icon-basket ${o}"
                      href="${c}#icon-trash"
                    ></use></svg>
                </div>
              </div>

              <button class="workout-card__link-start" data-id="${o}">
                Start
                <svg class="workout-card__link-icon" width="16" height='16'>
                  <use
                    class="icon-arrow"
                    href="${c}#icon-arrow"
                  ></use>
                </svg>
              </button>
            </div>

            <h3 class="workout-card__title">
              <svg class="workout-card__title-icon"  width="24" height="24">
                <use
                  class="icon-icon"
                  href="${c}#icon-icon"
                ></use>
              </svg>
              ${n[0].toUpperCase()+n.slice(1)}
            </h3>

            <ul class="workout-card__statistic_list">
              <li class="workout-card__statistic_item">
                <p class="workout-card__statistic_text">
                  <span class="secondary-color-text">Burned calories:</span>
                  ${x} / ${L} min
                </p>
              </li>
              <li class="workout-card__statistic_item">
                <p class="workout-card__statistic_text">
                  <span class="secondary-color-text">Body part:</span>
                  ${r}
                </p>
              </li>
              <li class="workout-card__statistic_item">
                <p class="workout-card__statistic_text">
                  <span class="secondary-color-text">Target:</span> ${d}
                </p>
              </li>
            </ul>
          </div>
        </li>`,"");i.insertAdjacentHTML("beforeend",a)};async function p(){if(T(),s!==null&&q===8&&s.length>8)H(_);else if(s!==null&&s.length!==0){const t=await Promise.all(s.map(a=>f(a)));y(t),v(m)}else B()}p();const C=t=>{t.preventDefault();const a=t.target;if(t.target.closest(".icon-basket ")){const o=a.classList[1],r=s.filter(n=>n!==o);localStorage.setItem(b,JSON.stringify(r)),p()}};i.addEventListener("click",C);async function H(t){const a=Math.ceil(s.length/u);$(a,t);const e=(t-1)*u,o=e+u,r=s.slice(e,o),n=await Promise.all(r.map(d=>f(d)));y(n)}m.addEventListener("click",t=>{_=Number(t.target.innerHTML),p()});const A=document.querySelector(".favorites-exercise-container"),l=document.querySelector(".modal-trane-background"),g=()=>{l.classList.remove("modal-trane-background-active"),document.removeEventListener("click",h),document.removeEventListener("keydown",w)},h=t=>{t.target===l&&g()},w=t=>{t.key==="Escape"&&g()},D=async t=>{const e=(await k.get(`exercises/${t}`)).data,o=`<div class="modal-trane">
    <button class="modal-trane-btn-close" type="button">
      <svg height="28" width="28" style="stroke: black">
        <use href="${c}#icon-x"></use>
      </svg>
    </button>
    <div class="modal-trane-img-container">
      <img src="${e.gifUrl}" alt="" />
    </div>
    <div>
      <div class="modal-trane-name-rating">
        <h2 class="modal-trane-title">Air bake</h2>
        <div class="modal-trane-rating-star">
          <p class="modal-trane-ratind">${e.rating}</p>
          <ul class="modal-trane-list-stars">${S(e.rating)}</ul>
        </div>
      </div>
      <ul class="modal-trane-list-information">
        <li>
          <p class="modal-trane-title-information">Target</p>
          <p class="modal-trane-information-text">${e.target}</p>
        </li>
        <li>
          <p class="modal-trane-title-information">Body Part</p>
          <p class="modal-trane-information-text">${e.bodyPart}</p>
        </li>
        <li>
          <p class="modal-trane-title-information">Equipment</p>
          <p class="modal-trane-information-text">${e.equipment}</p>
        </li>
        <li>
          <p class="modal-trane-title-information">Popular</p>
          <p class="modal-trane-information-text">${e.popularity}</p>
        </li>
        <li>
          <p class="modal-trane-title-information">Burned calories</p>
          <p class="modal-trane-information-text">${e.burnedCalories}</p>
        </li>
      </ul>
      <p class="modal-trane-text"></p>
      <ul class="modal-trane-list-btn">
        <li>
          <button class="modal-trane-btn-add-favorites" type="button">
            Add&nbsp;to&nbsp;favorites&nbsp;&#x2661;
          </button>
        </li>
        <li>
          <button class="modal-trane-btn-rating" type="button" data-id="${e._id}">
            Give a rating
          </button>
        </li>
      </ul>
    </div>
  </div>`;l.innerHTML=o,document.querySelector(".modal-trane-btn-close").addEventListener("click",g),document.querySelector(".modal-trane-btn-rating").addEventListener("click",E)};A.addEventListener("click",t=>{t.target.classList.contains("workout-card__link-start")&&(D(t.target.dataset.id),l.classList.add("modal-trane-background-active"),document.addEventListener("click",h),document.addEventListener("keydown",w))});P();
//# sourceMappingURL=commonHelpers.js.map
