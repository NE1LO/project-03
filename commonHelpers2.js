import{d as x,b as $,h as C,s as U,a as b,c as N,o as H,n as z}from"./assets/change-theme-69321eab.js";import{i as f}from"./assets/vendor-0a7943b3.js";const k=async e=>{const t=i=>{const a=i;if(a==="Muscles")return a.toLowerCase();if(a==="Body parts")return"bodypart";if(a==="Equipment")return a.toLowerCase()},n={...e},s=await x.getFilters(n),r=s.data.results;return $(s.data.totalPages,e.page),r.reduce((i,a)=>i+` <li class="render-page-one-item" data-filter="${t(e.filter)}" data-name="${a.name}">
            <img src="${a.imgUrl}" alt="" />
            <div class="render-page-one-img-container">
              <p class="render-page-one-item-title">${a.name}</p>
              <p class="render-page-one-item-zones">${a.filter}</p>
            </div>
          </li>`,"")},D=document.querySelector(".render-page-one-list"),g=async e=>{const t=await e;D.innerHTML=t},_=e=>{if(e.muscles)return["muscles",e.muscles];if(e.bodypart)return["bodypart",e.bodypart];if(e.equipment)return["equipment",e.equipment]};function F(e,t){return e.map(({_id:n,bodyPart:s,name:r,target:d,rating:i,burnedCalories:a,time:W})=>`<li class="workout-card__item" data-filter="${_(t)[0]}" data-name="${_(t)[1]}" >
	<div class="workout-card__block">
		<div class="workout-card__block-top">
			<div class="workout-card__block_button-rating">
				<p class="workout-card__text-workout">Workout</p>
				<!-- <div class="workout-card__rating-block"> -->
				<p class="workout-card__rating-text"> ${i.toFixed(1)} </p>
				<svg class="workout-card__rating-icon">
					<use class="icon-star" href="../../img/symbol-defs.svg#icon-star-gold"></use>
				</svg>
				<svg class="workout-card__basket-icon" style="display: none">
					<use class="icon-basket" href="../../img/symbol-defs.svg#icon-trash"></use>
				</svg>
				<!-- </div> -->
			</div>
			<button type="button" class="workout-card__link-start" data-id="${n}">
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
			${r[0].toUpperCase()+r.slice(1)}
		</h3>

		<ul class="workout-card__statistic_list">
			<li class="workout-card__statistic_item">
				<p class="workout-card__statistic_text">
					<span class="secondary-color-text">Burned calories:</span> ${a} / ${W} min
				</p>
			</li>
			<li class="workout-card__statistic_item">
				<p class="workout-card__statistic_text">
					<span class="secondary-color-text">Body part:</span> ${s[0].toUpperCase()+s.slice(1)}
				</p>
			</li>
			<li class="workout-card__statistic_item">
				<p class="workout-card__statistic_text">
					<span class="secondary-color-text">Target:</span> ${d[0].toUpperCase()+d.slice(1)}
				</p>
			</li>
		</ul>

	</div>
</li>`).join("")}const j=document.querySelector(".render-page-one-list"),G=document.querySelector(".render-btn-list-pagination"),M=async(e,t)=>{try{const n=await x.getWorkout(e);j.innerHTML=F(n.data.results,e),n.data.totalPages===1&&C(G),$(n.data.totalPages,e.page,t)}catch(n){console.log(n)}},J=document.querySelector(".render-page-one-slesh"),S=document.querySelector(".render-page-one-title-part"),Y=e=>{e=e.split(""),e[0]=e[0].toUpperCase(),e=e.join(""),S.style.display="inline-block",J.style.display="inline-block",S.textContent=e},l=document.querySelector(".render-btn-list-pagination"),Q=document.querySelector(".render-page-one-list-btn"),V=document.querySelectorAll(".render-page-one-btn"),v=document.querySelector(".render-page-one-list"),B=document.querySelector(".form-search"),K=document.querySelector(".render-page-one-slesh"),X=document.querySelector(".render-page-one-title-part");document.querySelectorAll(".render-pagination-btn");let q=0;v.addEventListener("click",w);const T=getComputedStyle(document.querySelector("body")).width,Z=parseInt(T)<768?8:12,p={limit:Z,page:1,filter:"Muscles"},ee=parseInt(T)<768?8:9,o={page:1,limit:ee},te=e=>{e.target.nodeName==="BUTTON"&&(K.style.display="none",X.style.display="none",l.style.display="flex",V.forEach(t=>t.classList.remove("render-page-one-btn-active")),e.target.classList.add("render-page-one-btn-active"),p.filter=e.target.textContent.trimStart().trimEnd(),p.page=1,g(k(p)),C(B),(o.muscles||o.bodypart||o.equipment)&&ne(o),o.page=1,l.removeEventListener("click",P),v.addEventListener("click",w),l.addEventListener("click",h))},h=e=>{p.page=parseInt(e.target.textContent),g(k(p))};l.addEventListener("click",h);Q.addEventListener("click",te);function w(e){e.target.closest(".render-page-one-item")&&(Y(e.target.dataset.name),o[e.target.dataset.filter]=e.target.dataset.name,M(o),U(B),l.addEventListener("click",P),l.removeEventListener("click",h),v.removeEventListener("click",w))}function P(e){if(!e.target.closest(".render-pagination-btn"))return;o.page=e.target.textContent;const t=parseInt(e.target.dataset.num);q!==e.target.textContent&&M(o,t),q=e.target.textContent}function ne(e){delete e.muscles,delete e.bodypart,delete e.equipment}const se=document.querySelector(".footer-input"),u=e=>{f.show({position:"topRight",messageColor:"#FFFFFF",backgroundColor:"#EF4040",titleSize:"8px",closeOnEscape:!0,...e})},ae=async e=>{e.preventDefault();const t=e.target.email.value;if(!t.trim()){u({message:"Email is required."});return}const n={email:t};if(se.checkValidity())try{const s=await b.post("subscription",n);console.log("Response:",s),s.status===201?u({backgroundColor:"#7e847f",message:"We are excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow. You have just taken a significant step towards improving your fitness and well-being."}):u({message:"Subscription failed"})}catch(s){console.error("Error:",s),s.response&&s.response.status===409?u({message:"Email already exists. Please use a different email address."}):u({message:"An error occurred while processing your request."})}},y=document.querySelector(".modal-trane-background"),oe=document.querySelector(".render-page-one-list"),re=async e=>{const n=(await b.get(`exercises/${e}`)).data,s=`<div class="modal-trane">
    <button class="modal-trane-btn-close" type="button">
      <svg height="28" width="28" style="stroke: black">
        <use href="../img/symbol-defs.svg#icon-x"></use>
      </svg>
    </button>
    <div class="modal-trane-img-container">
      <img src="${n.gifUrl}" alt="" />
    </div>
    <div>
      <div class="modal-trane-name-rating">
        <h2 class="modal-trane-title">Air bake</h2>
        <div class="modal-trane-rating-star">
          <p class="modal-trane-ratind">${n.rating}</p>
          <ul class="modal-trane-list-stars">${N(n.rating)}</ul>
        </div>
      </div>
      <ul class="modal-trane-list-information">
        <li>
          <p class="modal-trane-title-information">Target</p>
          <p class="modal-trane-information-text">${n.target}</p>
        </li>
        <li>
          <p class="modal-trane-title-information">Body Part</p>
          <p class="modal-trane-information-text">${n.bodyPart}</p>
        </li>
        <li>
          <p class="modal-trane-title-information">Equipment</p>
          <p class="modal-trane-information-text">${n.equipment}</p>
        </li>
        <li>
          <p class="modal-trane-title-information">Popular</p>
          <p class="modal-trane-information-text">${n.popularity}</p>
        </li>
        <li>
          <p class="modal-trane-title-information">Burned calories</p>
          <p class="modal-trane-information-text">${n.burnedCalories}</p>
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
          <button class="modal-trane-btn-rating" type="button" data-id="${n._id}">
            Give a rating
          </button>
        </li>
      </ul>
    </div>
  </div>`;y.innerHTML=s;const r=document.querySelector(".modal-trane-btn-close"),d=document.querySelector(".modal-trane-btn-add-favorites"),i=document.querySelector(".modal-trane-btn-rating");r.addEventListener("click",E),d.addEventListener("click",()=>le(e)),i.addEventListener("click",H)};function ie(e){if(e.target.classList.contains("workout-card__link-start")){const t=e.target;re(t.dataset.id),y.classList.add("modal-trane-background-active"),document.addEventListener("click",I),document.addEventListener("keydown",O)}}function E(){y.classList.remove("modal-trane-background-active"),document.removeEventListener("click",I),document.removeEventListener("keydown",O)}function I(e){e.target===y&&E()}function O(e){e.key==="Escape"&&E()}function le(e){let t=JSON.parse(localStorage.getItem("favorites"))||[];t.includes(e)?f.error({title:"Error",message:"Has already",position:"topCenter"}):(t.push(e),localStorage.setItem("favorites",JSON.stringify(t)),f.success({message:"Add favorite!",position:"topCenter"}))}oe.addEventListener("click",ie);const ce=document.querySelector(".burger-menu-block"),de=document.querySelector(".button-burger"),ue=document.querySelector(".burger-menu__btn-close"),pe=document.body,R=()=>{ce.classList.toggle("is-hidden"),pe.classList.toggle("no-scroll")};de.addEventListener("click",R);ue.addEventListener("click",R);const me=document.querySelector(".render-page-one-list"),ge=document.querySelector(".render-btn-list-pagination"),ye=()=>{const e=`<p class="render-page-one-no">
  Unfortunately, <span class="render-page-one-no-part">no results</span> were
  found. You may want to consider other search options to find the exercise you
  are looking for. Our range is wide and you have the opportunity to find more
  options that suit your needs.
</p>`;me.innerHTML=e,ge.style.display="none"},fe=getComputedStyle(document.querySelector("body")).width,be=parseInt(fe)<768?8:9,ke=document.querySelector(".form-search"),L=document.querySelector(".render-page-one-list"),m=document.querySelector(".render-btn-list-pagination"),ve=(e,t)=>{let n="";for(let s=1;s<=e;s++){let r=` <li>
        <button
          class="render-pagination-btn-search"
          type="button"
        >${s}</button></li>`;n+=r}m.innerHTML=n,m.children[t-1].children[0].classList.add("render-pagination-btn-active")},c={limit:be,page:1},he=async e=>await b.get("exercises",{params:e}),A=async()=>{m.style.display="flex";const e=await he(c);if(!e.data.results.length){ye();return}g(F(e.data.results,c)),ve(e.data.totalPages,c.page)},we=async e=>{e.preventDefault();const t=L.children[0].dataset.filter,n=L.children[0].dataset.name;c[t]=n,c.keyword=e.target.query.value,m.addEventListener("click",Ee),A()},Ee=e=>{c.page=parseInt(e.target.textContent),A()};ke.addEventListener("submit",we);g(k({page:1,filter:"Muscles"}));const _e=document.querySelector(".form");_e.addEventListener("submit",ae);z();
//# sourceMappingURL=commonHelpers2.js.map
