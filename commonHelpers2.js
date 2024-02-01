import{d as x,b as C,i as l,h as F,s as U,a as v,c as N,o as H,n as z}from"./assets/change-theme-ab62f85d.js";import{i as k}from"./assets/vendor-0a7943b3.js";const b=async e=>{const t=i=>{const s=i;if(s==="Muscles")return s.toLowerCase();if(s==="Body parts")return"bodypart";if(s==="Equipment")return s.toLowerCase()},a={...e},n=await x.getFilters(a),r=n.data.results;return C(n.data.totalPages,e.page),r.reduce((i,s)=>i+` <li class="render-page-one-item" data-filter="${t(e.filter)}" data-name="${s.name}">
            <img src="${s.imgUrl}" alt="" />
            <div class="render-page-one-img-container">
              <p class="render-page-one-item-title">${s.name}</p>
              <p class="render-page-one-item-zones">${s.filter}</p>
            </div>
          </li>`,"")},D=document.querySelector(".render-page-one-list"),f=async e=>{const t=await e;D.innerHTML=t},S=e=>{if(e.muscles)return["muscles",e.muscles];if(e.bodypart)return["bodypart",e.bodypart];if(e.equipment)return["equipment",e.equipment]};function M(e,t){return e.map(({_id:a,bodyPart:n,name:r,target:u,rating:i,burnedCalories:s,time:W})=>`<li class="workout-card__item" data-filter="${S(t)[0]}" data-name="${S(t)[1]}" >
	<div class="workout-card__block">
		<div class="workout-card__block-top">
			<div class="workout-card__block_button-rating">
				<p class="workout-card__text-workout">Workout</p>
				<!-- <div class="workout-card__rating-block"> -->
				<p class="workout-card__rating-text"> ${i.toFixed(1)} </p>
				<svg class="workout-card__rating-icon">
					<use class="icon-star" href="${l}#icon-star-gold"></use>
				</svg>
				<svg class="workout-card__basket-icon" style="display: none">
					<use class="icon-basket" href="${l}#icon-trash"></use>
				</svg>
				<!-- </div> -->
			</div>
			<button type="button" class="workout-card__link-start" data-id="${a}">
				Start
				<svg class="workout-card__link-icon" width="16" height="16" style="stroke: #000; fill:#000">
					<use class="icon-arrow" href="${l}#icon-arrow"></use>
				</svg>
			</button>
		</div>

		<h3 class="workout-card__title">
			<svg class="workout-card__title-icon">
				<use class="icon-icon" href="${l}#icon-icon"></use>
			</svg>
			${r[0].toUpperCase()+r.slice(1)}
		</h3>

		<ul class="workout-card__statistic_list">
			<li class="workout-card__statistic_item">
				<p class="workout-card__statistic_text">
					<span class="secondary-color-text">Burned calories:</span> ${s} / ${W} min
				</p>
			</li>
			<li class="workout-card__statistic_item">
				<p class="workout-card__statistic_text">
					<span class="secondary-color-text">Body part:</span> ${n[0].toUpperCase()+n.slice(1)}
				</p>
			</li>
			<li class="workout-card__statistic_item">
				<p class="workout-card__statistic_text">
					<span class="secondary-color-text">Target:</span> ${u[0].toUpperCase()+u.slice(1)}
				</p>
			</li>
		</ul>

	</div>
</li>`).join("")}const j=document.querySelector(".render-page-one-list"),G=document.querySelector(".render-btn-list-pagination"),T=async(e,t)=>{try{const a=await x.getWorkout(e);j.innerHTML=M(a.data.results,e),a.data.totalPages===1&&F(G),C(a.data.totalPages,e.page,t)}catch(a){console.log(a)}},J=document.querySelector(".render-page-one-slesh"),$=document.querySelector(".render-page-one-title-part"),Y=e=>{e=e.split(""),e[0]=e[0].toUpperCase(),e=e.join(""),$.style.display="inline-block",J.style.display="inline-block",$.textContent=e},c=document.querySelector(".render-btn-list-pagination"),Q=document.querySelector(".render-page-one-list-btn"),V=document.querySelectorAll(".render-page-one-btn"),h=document.querySelector(".render-page-one-list"),B=document.querySelector(".form-search"),K=document.querySelector(".render-page-one-slesh"),X=document.querySelector(".render-page-one-title-part");document.querySelectorAll(".render-pagination-btn");let q=0;h.addEventListener("click",_);const P=getComputedStyle(document.querySelector("body")).width,Z=parseInt(P)<768?8:12,m={limit:Z,page:1,filter:"Muscles"},ee=parseInt(P)<768?8:9,o={page:1,limit:ee},te=e=>{e.target.nodeName==="BUTTON"&&(K.style.display="none",X.style.display="none",c.style.display="flex",V.forEach(t=>t.classList.remove("render-page-one-btn-active")),e.target.classList.add("render-page-one-btn-active"),m.filter=e.target.textContent.trimStart().trimEnd(),m.page=1,f(b(m)),F(B),(o.muscles||o.bodypart||o.equipment)&&ae(o),o.page=1,c.removeEventListener("click",I),h.addEventListener("click",_),c.addEventListener("click",w))},w=e=>{m.page=parseInt(e.target.textContent),f(b(m))};c.addEventListener("click",w);Q.addEventListener("click",te);function _(e){e.target.closest(".render-page-one-item")&&(Y(e.target.dataset.name),o[e.target.dataset.filter]=e.target.dataset.name,T(o),U(B),c.addEventListener("click",I),c.removeEventListener("click",w),h.removeEventListener("click",_))}function I(e){if(!e.target.closest(".render-pagination-btn"))return;o.page=e.target.textContent;const t=parseInt(e.target.dataset.num);q!==e.target.textContent&&T(o,t),q=e.target.textContent}function ae(e){delete e.muscles,delete e.bodypart,delete e.equipment}const ne=document.querySelector(".footer-input"),p=e=>{k.show({position:"topRight",messageColor:"#FFFFFF",backgroundColor:"#EF4040",titleSize:"8px",closeOnEscape:!0,...e})},se=async e=>{e.preventDefault();const t=e.target.email.value;if(!t.trim()){p({message:"Email is required."});return}const a={email:t};if(ne.checkValidity())try{const n=await v.post("subscription",a);console.log("Response:",n),n.status===201?p({backgroundColor:"#7e847f",message:"We are excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow. You have just taken a significant step towards improving your fitness and well-being."}):p({message:"Subscription failed"})}catch(n){console.error("Error:",n),n.response&&n.response.status===409?p({message:"Email already exists. Please use a different email address."}):p({message:"An error occurred while processing your request."})}},y=document.querySelector(".modal-trane-background"),oe=document.querySelector(".render-page-one-list"),re=async e=>{const a=(await v.get(`exercises/${e}`)).data,n=`<div class="modal-trane">
    <button class="modal-trane-btn-close" type="button">
      <svg height="28" width="28" style="stroke: black">
        <use href="${l}#icon-x"></use>
      </svg>
    </button>
    <div class="modal-trane-img-container">
      <img src="${a.gifUrl}" alt="" />
    </div>
    <div>
      <div class="modal-trane-name-rating">
        <h2 class="modal-trane-title">${a.name}</h2>
        <div class="modal-trane-rating-star">
          <p class="modal-trane-ratind">${a.rating}</p>
          <ul class="modal-trane-list-stars">${N(a.rating)}</ul>
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
            Add&nbsp;to&nbsp;favorites&nbsp; <svg height="24" width="24">
            <use href="${l}#icon-heart"></use> </svg>
          </button>
        </li>
        <li>
          <button class="modal-trane-btn-rating" type="button" data-id="${a._id}">
            Give a rating
          </button>
        </li>
      </ul>
    </div>
  </div>`;y.innerHTML=n;const r=document.querySelector(".modal-trane-btn-close"),u=document.querySelector(".modal-trane-btn-add-favorites"),i=document.querySelector(".modal-trane-btn-rating");r.addEventListener("click",E),u.addEventListener("click",()=>le(e)),i.addEventListener("click",H)};function ie(e){if(e.target.classList.contains("workout-card__link-start")){const t=e.target;re(t.dataset.id),y.classList.add("modal-trane-background-active"),document.addEventListener("click",R),document.addEventListener("keydown",O)}}function E(){y.classList.remove("modal-trane-background-active"),document.removeEventListener("click",R),document.removeEventListener("keydown",O)}function R(e){e.target===y&&E()}function O(e){e.key==="Escape"&&E()}function le(e){let t=JSON.parse(localStorage.getItem("favorites"))||[];t.includes(e)?k.error({title:"Error",message:"Has already",position:"topCenter"}):(t.push(e),localStorage.setItem("favorites",JSON.stringify(t)),k.success({message:"Add favorite!",position:"topCenter"}))}oe.addEventListener("click",ie);const ce=document.querySelector(".render-page-one-list"),de=document.querySelector(".render-btn-list-pagination"),ue=()=>{const e=`<p class="render-page-one-no">
  Unfortunately, <span class="render-page-one-no-part">no results</span> were
  found. You may want to consider other search options to find the exercise you
  are looking for. Our range is wide and you have the opportunity to find more
  options that suit your needs.
</p>`;ce.innerHTML=e,de.style.display="none"},pe=getComputedStyle(document.querySelector("body")).width,me=parseInt(pe)<768?8:9,ge=document.querySelector(".form-search"),L=document.querySelector(".render-page-one-list"),g=document.querySelector(".render-btn-list-pagination"),fe=(e,t)=>{let a="";for(let n=1;n<=e;n++){let r=` <li>
        <button
          class="render-pagination-btn-search"
          type="button"
        >${n}</button></li>`;a+=r}g.innerHTML=a,g.children[t-1].children[0].classList.add("render-pagination-btn-active")},d={limit:me,page:1},ye=async e=>await v.get("exercises",{params:e}),A=async()=>{g.style.display="flex";const e=await ye(d);if(!e.data.results.length){ue();return}f(M(e.data.results,d)),fe(e.data.totalPages,d.page)},ke=async e=>{e.preventDefault();const t=L.children[0].dataset.filter,a=L.children[0].dataset.name;d[t]=a,d.keyword=e.target.query.value,g.addEventListener("click",ve),A()},ve=e=>{d.page=parseInt(e.target.textContent),A()};ge.addEventListener("submit",ke);f(b({page:1,filter:"Muscles"}));const be=document.querySelector(".form");be.addEventListener("submit",se);z();
//# sourceMappingURL=commonHelpers2.js.map
