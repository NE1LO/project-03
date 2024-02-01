import{d as x,b as $,h as C,s as W,a as v,c as U,o as N,n as H}from"./assets/change-theme-e269b92f.js";import{i as y}from"./assets/vendor-0a7943b3.js";const k=async e=>{const t=i=>{const n=i;if(n==="Muscles")return n.toLowerCase();if(n==="Body parts")return"bodypart";if(n==="Equipment")return n.toLowerCase()},a={...e},s=await x.getFilters(a),r=s.data.results;return $(s.data.totalPages,e.page),r.reduce((i,n)=>i+` <li class="render-page-one-item" data-filter="${t(e.filter)}" data-name="${n.name}">
            <img src="${n.imgUrl}" alt="" />
            <div class="render-page-one-img-container">
              <p class="render-page-one-item-title">${n.name}</p>
              <p class="render-page-one-item-zones">${n.filter}</p>
            </div>
          </li>`,"")},z=document.querySelector(".render-page-one-list"),g=async e=>{const t=await e;z.innerHTML=t},E=e=>{if(e.muscles)return["muscles",e.muscles];if(e.bodypart)return["bodypart",e.bodypart];if(e.equipment)return["equipment",e.equipment]};function F(e,t){return e.map(({_id:a,bodyPart:s,name:r,target:d,rating:i,burnedCalories:n,time:A})=>`<li class="workout-card__item" data-filter="${E(t)[0]}" data-name="${E(t)[1]}" >
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
			<button type="button" class="workout-card__link-start" data-id="${a}">
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
					<span class="secondary-color-text">Burned calories:</span> ${n} / ${A} min
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
</li>`).join("")}const D=document.querySelector(".render-page-one-list"),j=document.querySelector(".render-btn-list-pagination"),M=async(e,t)=>{try{const a=await x.getWorkout(e);D.innerHTML=F(a.data.results,e),a.data.totalPages===1&&C(j),$(a.data.totalPages,e.page,t)}catch(a){console.log(a)}},G=document.querySelector(".render-page-one-slesh"),S=document.querySelector(".render-page-one-title-part"),J=e=>{e=e.split(""),e[0]=e[0].toUpperCase(),e=e.join(""),S.style.display="inline-block",G.style.display="inline-block",S.textContent=e},l=document.querySelector(".render-btn-list-pagination"),Y=document.querySelector(".render-page-one-list-btn"),Q=document.querySelectorAll(".render-page-one-btn"),b=document.querySelector(".render-page-one-list"),T=document.querySelector(".form-search"),V=document.querySelector(".render-page-one-slesh"),K=document.querySelector(".render-page-one-title-part");document.querySelectorAll(".render-pagination-btn");let q=0;b.addEventListener("click",w);const B=getComputedStyle(document.querySelector("body")).width,X=parseInt(B)<768?8:12,p={limit:X,page:1,filter:"Muscles"},Z=parseInt(B)<768?8:9,o={page:1,limit:Z},ee=e=>{e.target.nodeName==="BUTTON"&&(V.style.display="none",K.style.display="none",l.style.display="flex",Q.forEach(t=>t.classList.remove("render-page-one-btn-active")),e.target.classList.add("render-page-one-btn-active"),p.filter=e.target.textContent.trimStart().trimEnd(),p.page=1,g(k(p)),C(T),(o.muscles||o.bodypart||o.equipment)&&te(o),o.page=1,l.removeEventListener("click",P),b.addEventListener("click",w),l.addEventListener("click",h))},h=e=>{p.page=parseInt(e.target.textContent),g(k(p))};l.addEventListener("click",h);Y.addEventListener("click",ee);function w(e){e.target.closest(".render-page-one-item")&&(J(e.target.dataset.name),o[e.target.dataset.filter]=e.target.dataset.name,M(o),W(T),l.addEventListener("click",P),l.removeEventListener("click",h),b.removeEventListener("click",w))}function P(e){if(!e.target.closest(".render-pagination-btn"))return;o.page=e.target.textContent;const t=parseInt(e.target.dataset.num);q!==e.target.textContent&&M(o,t),q=e.target.textContent}function te(e){delete e.muscles,delete e.bodypart,delete e.equipment}const ae=document.querySelector(".footer-input"),u=e=>{y.show({position:"topRight",messageColor:"#FFFFFF",backgroundColor:"#EF4040",titleSize:"8px",closeOnEscape:!0,...e})},se=async e=>{e.preventDefault();const t=e.target.email.value;if(!t.trim()){u({message:"Email is required."});return}const a={email:t};if(ae.checkValidity())try{const s=await v.post("subscription",a);console.log("Response:",s),s.status===201?u({backgroundColor:"#7e847f",message:"We are excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow. You have just taken a significant step towards improving your fitness and well-being."}):u({message:"Subscription failed"})}catch(s){console.error("Error:",s),s.response&&s.response.status===409?u({message:"Email already exists. Please use a different email address."}):u({message:"An error occurred while processing your request."})}},f=document.querySelector(".modal-trane-background"),ne=document.querySelector(".render-page-one-list"),oe=async e=>{const a=(await v.get(`exercises/${e}`)).data,s=`<div class="modal-trane">
    <button class="modal-trane-btn-close" type="button">
      <svg height="28" width="28" style="stroke: black">
        <use href="../img/symbol-defs.svg#icon-x"></use>
      </svg>
    </button>
    <div class="modal-trane-img-container">
      <img src="${a.gifUrl}" alt="" />
    </div>
    <div>
      <div class="modal-trane-name-rating">
        <h2 class="modal-trane-title">Air bake</h2>
        <div class="modal-trane-rating-star">
          <p class="modal-trane-ratind">${a.rating}</p>
          <ul class="modal-trane-list-stars">${U(a.rating)}</ul>
        </div>
      </div>
      <ul class="modal-trane-list-information">
        <li>
          <p class="modal-trane-title-information">Target</p>
          <p class="modal-trane-information-text">${a.target}</p>
        </li>
        <li>
          <p class="modal-trane-title-information">Body Part</p>
          <p class="modal-trane-information-text">${a.bodyPart}</p>
        </li>
        <li>
          <p class="modal-trane-title-information">Equipment</p>
          <p class="modal-trane-information-text">${a.equipment}</p>
        </li>
        <li>
          <p class="modal-trane-title-information">Popular</p>
          <p class="modal-trane-information-text">${a.popularity}</p>
        </li>
        <li>
          <p class="modal-trane-title-information">Burned calories</p>
          <p class="modal-trane-information-text">${a.burnedCalories}</p>
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
          <button class="modal-trane-btn-rating" type="button" data-id="${a._id}">
            Give a rating
          </button>
        </li>
      </ul>
    </div>
  </div>`;f.innerHTML=s;const r=document.querySelector(".modal-trane-btn-close"),d=document.querySelector(".modal-trane-btn-add-favorites"),i=document.querySelector(".modal-trane-btn-rating");r.addEventListener("click",_),d.addEventListener("click",()=>ie(e)),i.addEventListener("click",N)};function re(e){if(e.target.classList.contains("workout-card__link-start")){const t=e.target;oe(t.dataset.id),f.classList.add("modal-trane-background-active"),document.addEventListener("click",I),document.addEventListener("keydown",R)}}function _(){f.classList.remove("modal-trane-background-active"),document.removeEventListener("click",I),document.removeEventListener("keydown",R)}function I(e){e.target===f&&_()}function R(e){e.key==="Escape"&&_()}function ie(e){let t=JSON.parse(localStorage.getItem("favorites"))||[];t.includes(e)?y.error({title:"Error",message:"Has already",position:"topCenter"}):(t.push(e),localStorage.setItem("favorites",JSON.stringify(t)),y.success({message:"Add favorite!",position:"topCenter"}))}ne.addEventListener("click",re);const le=document.querySelector(".render-page-one-list"),ce=document.querySelector(".render-btn-list-pagination"),de=()=>{const e=`<p class="render-page-one-no">
  Unfortunately, <span class="render-page-one-no-part">no results</span> were
  found. You may want to consider other search options to find the exercise you
  are looking for. Our range is wide and you have the opportunity to find more
  options that suit your needs.
</p>`;le.innerHTML=e,ce.style.display="none"},ue=getComputedStyle(document.querySelector("body")).width,pe=parseInt(ue)<768?8:9,me=document.querySelector(".form-search"),L=document.querySelector(".render-page-one-list"),m=document.querySelector(".render-btn-list-pagination"),ge=(e,t)=>{let a="";for(let s=1;s<=e;s++){let r=` <li>
        <button
          class="render-pagination-btn-search"
          type="button"
        >${s}</button></li>`;a+=r}m.innerHTML=a,m.children[t-1].children[0].classList.add("render-pagination-btn-active")},c={limit:pe,page:1},fe=async e=>await v.get("exercises",{params:e}),O=async()=>{m.style.display="flex";const e=await fe(c);if(!e.data.results.length){de();return}g(F(e.data.results,c)),ge(e.data.totalPages,c.page)},ye=async e=>{e.preventDefault();const t=L.children[0].dataset.filter,a=L.children[0].dataset.name;c[t]=a,c.keyword=e.target.query.value,m.addEventListener("click",ve),O()},ve=e=>{c.page=parseInt(e.target.textContent),O()};me.addEventListener("submit",ye);g(k({page:1,filter:"Muscles"}));const ke=document.querySelector(".form");ke.addEventListener("submit",se);H();
//# sourceMappingURL=commonHelpers2.js.map
