import{h as p,b as L,a as v,c as S,o as $,n as E}from"./assets/quote-ac2bbb35.js";import"./assets/vendor-0a7943b3.js";const i=document.querySelector(".favorites-exercise-container"),u=document.querySelector(".render-btn-list-pagination"),b="favorites";let s=null;const P=getComputedStyle(document.querySelector("body")).width,M=parseInt(P)<768?8:9;let k=1;const d=8,f=async t=>{try{return(await v.get(`/exercises/${t}`)).data}catch(a){console.log(a)}},I=()=>{try{s=JSON.parse(localStorage.getItem(b))}catch(t){console.log(t)}return s},q=()=>{i.innerHTML="";const t=`<div class="favorites-exercise-not-found-container">
        <img
          class="favorites-exercise-img"
          src="./img/favorite-exercise/favorite-dumbbell.png"
          alt="dumbbell"
        />
        <h3 class="favorites-exercise-not-found">
          It appears that you haven't added any exercises to your favorites yet.
          To get started, you can add exercises that you like to your favorites
          for easier access in the future.
        </h3>
      </div>`;i.insertAdjacentHTML("beforeend",t),p(u)},_=t=>{i.innerHTML="";const a=t.reduce((e,{_id:o,bodyPart:r,name:n,target:l,burnedCalories:h,time:x})=>e+`
        <li class="workout-card__item">
          <div class="workout-card__block">
            <div class="workout-card__block-top">
              <div class="workout-card__block_button-rating">
                <button type="button" class="workout-card__button-workout">
                  Workout
                </button>
                <div class="workout-card__rating-block">
                   <svg class="workout-card__basket-icon ${o}">
                    <use
                      class="icon-basket ${o}"
                      href="./img/symbol-defs.svg#icon-trash"
                    ></use></svg>
                </div>
              </div>

              <button class="workout-card__link-start" data-id="${o}">
                Start
                <svg class="workout-card__link-icon" width="16" height='16'>
                  <use
                    class="icon-arrow"
                    href="./img/symbol-defs.svg#icon-arrow"
                  ></use>
                </svg>
              </button>
            </div>

            <h3 class="workout-card__title">
              <svg class="workout-card__title-icon">
                <use
                  class="icon-icon"
                  href="../img/symbol-defs.svg#icon-icon"
                ></use>
              </svg>
              ${n[0].toUpperCase()+n.slice(1)}
            </h3>

            <ul class="workout-card__statistic_list">
              <li class="workout-card__statistic_item">
                <p class="workout-card__statistic_text">
                  <span class="secondary-color-text">Burned calories:</span>
                  ${h} / ${x} min
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
                  <span class="secondary-color-text">Target:</span> ${l}
                </p>
              </li>
            </ul>
          </div>
        </li>`,"");i.insertAdjacentHTML("beforeend",a)};async function m(){if(I(),s!==null&&M===8&&s.length>8)B(k);else if(s!==null&&s.length!==0){const t=await Promise.all(s.map(a=>f(a)));_(t),p(u)}else q()}m();const T=t=>{t.preventDefault();const a=t.target;if(t.target.closest(".icon-basket ")){const o=a.classList[1],r=s.filter(n=>n!==o);localStorage.setItem(b,JSON.stringify(r)),m()}};i.addEventListener("click",T);async function B(t){const a=Math.ceil(s.length/d);L(a,t);const e=(t-1)*d,o=e+d,r=s.slice(e,o),n=await Promise.all(r.map(l=>f(l)));_(n)}u.addEventListener("click",t=>{k=Number(t.target.innerHTML),m()});const C=document.querySelector(".favorites-exercise-container"),c=document.querySelector(".modal-trane-background"),g=()=>{c.classList.remove("modal-trane-background-active"),document.removeEventListener("click",y),document.removeEventListener("keydown",w)},y=t=>{t.target===c&&g()},w=t=>{t.key==="Escape"&&g()},H=async t=>{const e=(await v.get(`exercises/${t}`)).data,o=`<div class="modal-trane">
    <button class="modal-trane-btn-close" type="button">
      <svg height="28" width="28" style="stroke: black">
        <use href="./img/symbol-defs.svg#icon-x"></use>
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
  </div>`;c.innerHTML=o,document.querySelector(".modal-trane-btn-close").addEventListener("click",g),document.querySelector(".modal-trane-btn-rating").addEventListener("click",$)};C.addEventListener("click",t=>{t.target.classList.contains("workout-card__link-start")&&(H(t.target.dataset.id),c.classList.add("modal-trane-background-active"),document.addEventListener("click",y),document.addEventListener("keydown",w))});E();
//# sourceMappingURL=commonHelpers.js.map
