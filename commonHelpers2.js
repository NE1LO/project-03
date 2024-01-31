/* empty css                     */import{a as q,i as x}from"./assets/vendor-0a7943b3.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function a(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=a(s);fetch(s.href,o)}})();const _=document.querySelector(".render-btn-list-pagination"),b=(e,t)=>{let a="";for(let r=1;r<=e;r++){let s=` <li>
        <button
          class="render-pagination-btn "
          type="button"
        >${r}</button></li>`;a+=s}_.innerHTML=a,_.children[t-1].children[0].classList.add("render-pagination-btn-active")},g=q.create({baseURL:"https://energyflow.b.goit.study/api/"}),F=async e=>{try{return await g.get("filters",{params:e})}catch(t){console.log(t)}},P=async e=>{try{return await g.get("exercises",{params:e})}catch(t){console.log(t)}},$=async()=>{try{return await g.get("quote")}catch(e){console.log(e)}},v={getFilters:F,getWorkout:P,getQuote:$},p=async e=>{const t=c=>{const n=c;if(n==="Muscles")return n.toLowerCase();if(n==="Body parts")return"bodypart";if(n==="Equipment")return n.toLowerCase()},a={...e},r=await v.getFilters(a),s=r.data.results;return b(r.data.totalPages,e.page),s.reduce((c,n)=>c+` <li class="render-page-one-item" data-filter="${t(e.filter)}" data-name="${n.name}">
            <img src="${n.imgUrl}" alt="" />
            <div class="render-page-one-img-container">
              <p class="render-page-one-item-title">${n.name}</p>
              <p class="render-page-one-item-zones">${n.filter}</p>
            </div>
          </li>`,"")},C=document.querySelector(".render-page-one-list"),m=async e=>{const t=await e;C.innerHTML=t};function T(e){e.hidden=!1,e.style.display="block"}function w(e){e.hidden=!0,e.style.display="none"}function O(e){return e.map(({_id:t,bodyPart:a,name:r,target:s,rating:o,burnedCalories:c,time:n})=>`<li class="workout-card__item">
	<div class="workout-card__block">
		<div class="workout-card__block-top">
			<div class="workout-card__block_button-rating">
				<p class="workout-card__text-workout">Workout</p>
				<!-- <div class="workout-card__rating-block"> -->
				<p class="workout-card__rating-text"> ${o.toFixed(1)} </p>
				<svg class="workout-card__rating-icon">
					<use class="icon-star" href="./img/symbol-defs.svg#icon-star-gold"></use>
				</svg>
				<svg class="workout-card__basket-icon" style="display: none">
					<use class="icon-basket" href="./img/symbol-defs.svg#icon-trash"></use>
				</svg>
				<!-- </div> -->
			</div>

			<a href="#" class="workout-card__link-start" data-id="${t}">
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
			${r[0].toUpperCase()+r.slice(1)}
		</h3>

		<ul class="workout-card__statistic_list">
			<li class="workout-card__statistic_item">
				<p class="workout-card__statistic_text">
					<span class="secondary-color-text">Burned calories:</span> ${c} / ${n} min
				</p>
			</li>
			<li class="workout-card__statistic_item">
				<p class="workout-card__statistic_text">
					<span class="secondary-color-text">Body part:</span> ${a[0].toUpperCase()+a.slice(1)}
				</p>
			</li>
			<li class="workout-card__statistic_item">
				<p class="workout-card__statistic_text">
					<span class="secondary-color-text">Target:</span> ${s[0].toUpperCase()+s.slice(1)}
				</p>
			</li>
		</ul>

	</div>
</li>`).join("")}const R=document.querySelector(".render-page-one-list"),W=document.querySelector(".render-btn-list-pagination"),h=async e=>{try{const t=await v.getWorkout(e);console.log(t.data.totalPagesS),R.innerHTML=O(t.data.results),t.data.totalPages===1&&w(W),console.log(t.data.totalPagesS),b(t.data.totalPages,t.data.page)}catch(t){console.log(t)}},u=document.querySelector(".render-btn-list-pagination");document.querySelector(".render-pagination-btn-active");document.querySelectorAll(".render-pagination-btn");const B=document.querySelector(".render-page-one-list-btn"),M=document.querySelectorAll(".render-page-one-btn"),f=document.querySelector(".render-page-one-list"),E=document.querySelector(".form-search");f.addEventListener("click",k);const L=getComputedStyle(document.querySelector("body")).width,A=parseInt(L)<768?8:12,d={limit:A,page:1,filter:"Muscles"},I=parseInt(L)<768?8:9,i={page:1,limit:I},N=e=>{e.target.nodeName==="BUTTON"&&(M.forEach(t=>t.classList.remove("render-page-one-btn-active")),e.target.classList.add("render-page-one-btn-active"),d.filter=e.target.textContent.trimStart().trimEnd(),d.page=1,m(p(d)),w(E),(i.muscles||i.bodypart||i.equipment)&&U(i),i.page=1,u.removeEventListener("click",S),f.addEventListener("click",k),u.addEventListener("click",y))},y=e=>{d.page=parseInt(e.target.textContent),m(p(d))};u.addEventListener("click",y);B.addEventListener("click",N);function k(e){e.target.closest(".render-page-one-item")&&(i[e.target.dataset.filter]=e.target.dataset.name,console.log(i),console.log(e.target.dataset.filter),h(i),T(E),u.addEventListener("click",S),u.removeEventListener("click",y),f.removeEventListener("click",k))}function S(e){e.target.closest(".render-pagination-btn")&&(i.page=e.target.textContent,h(i))}function U(e){delete e.muscles,delete e.bodypart,delete e.equipment}const z=document.querySelector(".footer-input"),l=e=>{x.show({position:"topRight",messageColor:"#FFFFFF",backgroundColor:"#EF4040",titleSize:"8px",closeOnEscape:!0,...e})},D=async e=>{e.preventDefault();const t=e.target.email.value;if(!t.trim()){l({message:"Email is required."});return}const a={email:t};if(z.checkValidity())try{const r=await g.post("subscription",a);console.log("Response:",r),r.status===201?l({backgroundColor:"#7e847f",message:"We are excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow. You have just taken a significant step towards improving your fitness and well-being."}):l({message:"Subscription failed"})}catch(r){console.error("Error:",r),r.response&&r.response.status===409?l({message:"Email already exists. Please use a different email address."}):l({message:"An error occurred while processing your request."})}};m(p({page:1,filter:"Muscles"}));const H=document.querySelector(".form");H.addEventListener("submit",D);
//# sourceMappingURL=commonHelpers2.js.map
