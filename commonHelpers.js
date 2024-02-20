import{h as v,b as T,a as h,i,c as E,o as I,n as q}from"./assets/quote-6757ca1a.js";import"./assets/vendor-0a7943b3.js";const A="/project-03/assets/favorite-dumbbell-325968d2.png",r=document.querySelector(".favorites-exercise-container"),g=document.querySelector(".render-btn-list-pagination"),f="favorites";let o=null;const M=getComputedStyle(document.querySelector("body")).width,P=parseInt(M)<768?8:9;let y=1;const m=8,b=async t=>{try{return(await h.get(`/exercises/${t}`)).data}catch(a){console.log(a)}},C=()=>{try{o=JSON.parse(localStorage.getItem(f))}catch(t){console.log(t)}return o},B=()=>{r.innerHTML="";const t=`<div class="favorites-exercise-not-found-container">
        <img
          class="favorites-exercise-img"
          src="${A}"
          alt="dumbbell"
        />
        <h3 class="favorites-exercise-not-found">
          It appears that you haven't added any exercises to your favorites yet.
          To get started, you can add exercises that you like to your favorites
          for easier access in the future.
        </h3>
      </div>`;r.insertAdjacentHTML("beforeend",t),v(g)},_=t=>{r.innerHTML="";const a=t.reduce((e,{_id:s,bodyPart:c,name:n,target:u,burnedCalories:L,time:$})=>e+`
        <li class="workout-card__item">
          <div class="workout-card__block">
            <div class="workout-card__block-top">
              <div class="workout-card__block_button-rating">
                <p class="workout-card__text-workout">
                  Workout
                </p>
                <div class="workout-card__rating-block">
                   <svg class="workout-card__basket-icon ${s}" width="24" height="24">
                    <use
                      class="icon-basket ${s}"
                      href="${i}#icon-trash"
                    ></use></svg>
                </div>
              </div>

              <button class="workout-card__link-start" data-id="${s}">
                Start
                <svg class="workout-card__link-icon" width="16" height='16'>
                  <use
                    class="icon-arrow"
                    href="${i}#icon-arrow"
                  ></use>
                </svg>
              </button>
            </div>

            <h3 class="workout-card__title">
              <svg class="workout-card__title-icon"  width="24" height="24">
                <use
                  class="icon-icon"
                  href="${i}#icon-icon"
                ></use>
              </svg>
              ${n[0].toUpperCase()+n.slice(1)}
            </h3>

            <ul class="workout-card__statistic_list">
              <li class="workout-card__statistic_item">
                <p class="workout-card__statistic_text">
                  <span class="secondary-color-text">Burned calories:</span>
                  ${L} / ${$} min
                </p>
              </li>
              <li class="workout-card__statistic_item">
                <p class="workout-card__statistic_text">
                  <span class="secondary-color-text">Body part:</span>
                  ${c}
                </p>
              </li>
              <li class="workout-card__statistic_item">
                <p class="workout-card__statistic_text">
                  <span class="secondary-color-text">Target:</span> ${u}
                </p>
              </li>
            </ul>
          </div>
        </li>`,"");r.insertAdjacentHTML("beforeend",a)};async function p(){if(C(),o!==null&&P===8&&o.length>8)D(y);else if(o!==null&&o.length!==0){const t=await Promise.all(o.map(a=>b(a)));_(t),v(g)}else B()}p();const H=t=>{t.preventDefault();const a=t.target;if(t.target.closest(".icon-basket ")){const s=a.classList[1],c=o.filter(n=>n!==s);localStorage.setItem(f,JSON.stringify(c)),p()}};r.addEventListener("click",H);async function D(t){const a=Math.ceil(o.length/m);T(a,t);const e=(t-1)*m,s=e+m,c=o.slice(e,s),n=await Promise.all(c.map(u=>b(u)));_(n)}g.addEventListener("click",t=>{y=Number(t.target.innerHTML),p()});const O=document.querySelector(".favorites-exercise-container"),l=document.querySelector(".modal-trane-background"),k=()=>{l.classList.remove("modal-trane-background-active"),document.removeEventListener("click",S),document.removeEventListener("keydown",w)},S=t=>{t.target===l&&k()},w=t=>{t.key==="Escape"&&k()},R=async t=>{const e=(await h.get(`exercises/${t}`)).data,s=`<div class="modal-trane">
    <button class="modal-trane-btn-close" type="button">
      <svg height="28" width="28" style="stroke: black">
        <use href="${i}#icon-x"></use>
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
          <ul class="modal-trane-list-stars">${E(e.rating)}</ul>
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
  </div>`;l.innerHTML=s,document.querySelector(".modal-trane-btn-close").addEventListener("click",k),document.querySelector(".modal-trane-btn-rating").addEventListener("click",I)};O.addEventListener("click",t=>{t.target.classList.contains("workout-card__link-start")&&(R(t.target.dataset.id),l.classList.add("modal-trane-background-active"),document.addEventListener("click",S),document.addEventListener("keydown",w))});const d=document.querySelector(".change");document.querySelector(".page-link")||document.querySelector(".change");document.querySelector(".collection-img");function j(){const t=document.getElementById("dynamicStyles");t?t.remove():x(),F()}function F(){d.checked?localStorage.setItem("darkThemeActivated","true"):localStorage.removeItem("darkThemeActivated")}function x(){const t=`<link rel="stylesheet" href="/css/layout/dark-theme.css" id='dynamicStyles'>`;document.querySelector("head").insertAdjacentHTML("afterend",t)}function N(){localStorage.getItem("darkThemeActivated")==="true"&&x()}function J(){const t=localStorage.getItem("darkThemeActivated");d.checked=t==="true"}function U(){localStorage.setItem("darkThemeActivated",d.checked.toString())}window.onload=function(){N(),J()};d.addEventListener("change",function(){U(),j()});q();
//# sourceMappingURL=commonHelpers.js.map
