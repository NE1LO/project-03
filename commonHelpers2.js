/* empty css                     */import{a as j,i as O}from"./assets/vendor-0a7943b3.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=a(o);fetch(o.href,n)}})();const x=document.querySelector(".render-btn-list-pagination"),P=(e,t)=>{let a="";for(let s=1;s<=e;s++){let o=` <li>
        <button
          class="render-pagination-btn "
          type="button"
        >${s}</button></li>`;a+=o}x.innerHTML=a,x.children[t-1].children[0].classList.add("render-pagination-btn-active")},d=j.create({baseURL:"https://energyflow.b.goit.study/api/"}),Q=async e=>{try{return await d.get("filters",{params:e})}catch(t){console.log(t)}},K=async e=>{try{return await d.get("exercises",{params:e})}catch(t){console.log(t)}},G=async()=>{try{return await d.get("quote")}catch(e){console.log(e)}},w={getFilters:Q,getWorkout:K,getQuote:G},S=async e=>{const t=i=>{const r=i;if(r==="Muscles")return r.toLowerCase();if(r==="Body parts")return"bodypart";if(r==="Equipment")return r.toLowerCase()},a={...e},s=await w.getFilters(a),o=s.data.results;return P(s.data.totalPages,e.page),o.reduce((i,r)=>i+` <li class="render-page-one-item" data-filter="${t(e.filter)}" data-name="${r.name}">
            <img src="${r.imgUrl}" alt="" />
            <div class="render-page-one-img-container">
              <p class="render-page-one-item-title">${r.name}</p>
              <p class="render-page-one-item-zones">${r.filter}</p>
            </div>
          </li>`,"")},V=document.querySelector(".render-page-one-list"),y=async e=>{const t=await e;V.innerHTML=t};function X(e){e.hidden=!1,e.style.display="block"}function N(e){e.hidden=!0,e.style.display="none"}const $=e=>{if(e.muscles)return["muscles",e.muscles];if(e.bodypart)return["bodypart",e.bodypart];if(e.equipment)return["equipment",e.equipment]};function A(e,t){return e.map(({_id:a,bodyPart:s,name:o,target:n,rating:i,burnedCalories:r,time:J})=>`<li class="workout-card__item" data-filter="${$(t)[0]}" data-name="${$(t)[1]}" >
	<div class="workout-card__block">
		<div class="workout-card__block-top">
			<div class="workout-card__block_button-rating">
				<p class="workout-card__text-workout">Workout</p>
				<!-- <div class="workout-card__rating-block"> -->
				<p class="workout-card__rating-text"> ${i.toFixed(1)} </p>
				<svg class="workout-card__rating-icon">
					<use class="icon-star" href="./img/symbol-defs.svg#icon-star-gold"></use>
				</svg>
				<svg class="workout-card__basket-icon" style="display: none">
					<use class="icon-basket" href="./img/symbol-defs.svg#icon-trash"></use>
				</svg>
				<!-- </div> -->
			</div>
			<button type="button" class="workout-card__link-start" data-id="${a}">
				Start
				<svg class="workout-card__link-icon" width="16" height="16">
					<use class="icon-arrow" href="./img/symbol-defs.svg#icon-arrow"></use>
				</svg>
			</button>
		</div>

		<h3 class="workout-card__title">
			<svg class="workout-card__title-icon">
				<use class="icon-icon" href="./img/symbol-defs.svg#icon-icon"></use>
			</svg>
			${o[0].toUpperCase()+o.slice(1)}
		</h3>

		<ul class="workout-card__statistic_list">
			<li class="workout-card__statistic_item">
				<p class="workout-card__statistic_text">
					<span class="secondary-color-text">Burned calories:</span> ${r} / ${J} min
				</p>
			</li>
			<li class="workout-card__statistic_item">
				<p class="workout-card__statistic_text">
					<span class="secondary-color-text">Body part:</span> ${s[0].toUpperCase()+s.slice(1)}
				</p>
			</li>
			<li class="workout-card__statistic_item">
				<p class="workout-card__statistic_text">
					<span class="secondary-color-text">Target:</span> ${n[0].toUpperCase()+n.slice(1)}
				</p>
			</li>
		</ul>

	</div>
</li>`).join("")}const Z=document.querySelector(".render-page-one-list"),ee=document.querySelector(".render-btn-list-pagination"),B=async e=>{try{const t=await w.getWorkout(e);Z.innerHTML=A(t.data.results,e),t.data.totalPages===1&&N(ee),P(t.data.totalPages,t.data.page)}catch(t){console.log(t)}},te=document.querySelector(".render-page-one-slesh"),F=document.querySelector(".render-page-one-title-part"),ae=e=>{e=e.split(""),e[0]=e[0].toUpperCase(),e=e.join(""),F.style.display="inline-block",te.style.display="inline-block",F.textContent=e},u=document.querySelector(".render-btn-list-pagination"),oe=document.querySelector(".render-page-one-list-btn"),se=document.querySelectorAll(".render-page-one-btn"),E=document.querySelector(".render-page-one-list"),R=document.querySelector(".form-search"),ne=document.querySelector(".render-page-one-slesh"),re=document.querySelector(".render-page-one-title-part");E.addEventListener("click",L);const D=getComputedStyle(document.querySelector("body")).width,ie=parseInt(D)<768?8:12,p={limit:ie,page:1,filter:"Muscles"},ce=parseInt(D)<768?8:9,c={page:1,limit:ce},le=e=>{e.target.nodeName==="BUTTON"&&(ne.style.display="none",re.style.display="none",u.style.display="flex",se.forEach(t=>t.classList.remove("render-page-one-btn-active")),e.target.classList.add("render-page-one-btn-active"),p.filter=e.target.textContent.trimStart().trimEnd(),p.page=1,y(S(p)),N(R),(c.muscles||c.bodypart||c.equipment)&&de(c),c.page=1,u.removeEventListener("click",U),E.addEventListener("click",L),u.addEventListener("click",q))},q=e=>{p.page=parseInt(e.target.textContent),y(S(p))};u.addEventListener("click",q);oe.addEventListener("click",le);function L(e){e.target.closest(".render-page-one-item")&&(ae(e.target.dataset.name),c[e.target.dataset.filter]=e.target.dataset.name,B(c),X(R),u.addEventListener("click",U),u.removeEventListener("click",q),E.removeEventListener("click",L))}function U(e){e.target.closest(".render-pagination-btn")&&(c.page=e.target.textContent,B(c))}function de(e){delete e.muscles,delete e.bodypart,delete e.equipment}const C=document.querySelector(".hero-third-container-text"),T=document.querySelector(".hero-third-container-author"),h="key-quote",ue=async()=>{if((await JSON.parse(localStorage.getItem(h))||[]).date!==`${new Date().getDate()}:${new Date().getMonth()+1}:${new Date().getFullYear()}`){const t=await w.getQuote(),a={author:t.data.author,quote:t.data.quote,date:`${new Date().getDate()}:${new Date().getMonth()+1}:${new Date().getFullYear()}`};localStorage.setItem(h,JSON.stringify(a)),C.textContent=a.quote,T.textContent=a.author}else{const t=JSON.parse(localStorage.getItem(h));C.textContent=t.quote,T.textContent=t.author}},me=document.querySelector(".footer-input"),g=e=>{O.show({position:"topRight",messageColor:"#FFFFFF",backgroundColor:"#EF4040",titleSize:"8px",closeOnEscape:!0,...e})},ge=async e=>{e.preventDefault();const t=e.target.email.value;if(!t.trim()){g({message:"Email is required."});return}const a={email:t};if(me.checkValidity())try{const s=await d.post("subscription",a);console.log("Response:",s),s.status===201?g({backgroundColor:"#7e847f",message:"We are excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow. You have just taken a significant step towards improving your fitness and well-being."}):g({message:"Subscription failed"})}catch(s){console.error("Error:",s),s.response&&s.response.status===409?g({message:"Email already exists. Please use a different email address."}):g({message:"An error occurred while processing your request."})}},pe=e=>{const t=["./img/symbol-defs.svg#icon-star","./img/symbol-defs.svg#icon-star","./img/symbol-defs.svg#icon-star","./img/symbol-defs.svg#icon-star","./img/symbol-defs.svg#icon-star"],a="./img/symbol-defs.svg#icon-star-gold",s=parseFloat(e);return t.forEach((o,n)=>{n+1<=s&&(t[n]=a)}),t.reduce((o,n)=>o+` <li>
                <svg height="18" width="18">
                  <use href="${n}"></use>
                </svg>
              </li>`,"")},v=document.querySelector(".modal-rating-background"),W=document.querySelector(".modal-trane-background"),fe=document.querySelector(".modal-rating-btn-close");document.querySelector(".modal-trane-btn-rating");function ye(){W.classList.remove("modal-trane-background-active"),v.classList.add("modal-rating-background-active")}function b(){W.classList.add("modal-trane-background-active"),v.classList.remove("modal-rating-background-active")}function ve(e){e.target===v&&b()}function be(e){e.key==="Escape"&&b()}fe.addEventListener("click",b);v.addEventListener("click",ve);document.addEventListener("keydown",be);const M=document.querySelectorAll(".modal-rating-svg-star"),ke=document.querySelector(".modal-rating-radio-list");ke.addEventListener("click",e=>{if(e.target.nodeName==="INPUT"){M.forEach(t=>t.classList.remove("modal-rating-svg-star-gold"));for(let t=0;t<e.target.value;t++)M[t].classList.add("modal-rating-svg-star-gold")}});const he=document.querySelector(".modal-rating-form"),we=document.querySelector(".modal-rating-email"),Se=document.querySelector(".modal-rating-comment"),l=e=>{O.show({position:"topRight",messageColor:"#FFFFFF",backgroundColor:"#EF4040",titleSize:"8px",closeOnEscape:!0,...e})};he.addEventListener("submit",async function(e){e.preventDefault();const t=parseInt(e.target.radiostar.value,10),a=e.target.email.value,s=Se.value;if(isNaN(t)){l({message:"Please select a valid rate."});return}if(!a.trim()){l({message:"Email is required."});return}if(!s.trim()){l({message:"Textarea is required."});return}const o={rate:t,email:a,review:s};if(we.checkValidity())try{const n=await d.patch("exercises/64f389465ae26083f39b1ae3/rating",o);console.log("Response:",n),n.status===200?(b(),l({backgroundColor:"#7e847f",message:"We are excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow. You have just taken a significant step towards improving your fitness and well-being."})):l({message:"Subscription failed"})}catch(n){console.error("Error:",n),n.response&&n.response.status===409?l({message:"Email already exists. Please use a different email address."}):l({message:"An error occurred while processing your request."})}});const k=document.querySelector(".modal-trane-background"),Ee=document.querySelector(".render-page-one-list"),qe=async e=>{const a=(await d.get(`exercises/${e}`)).data,s=`<div class="modal-trane">
    <button class="modal-trane-btn-close" type="button">
      <svg height="28" width="28" style="stroke: black">
        <use href="./img/symbol-defs.svg#icon-x"></use>
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
          <ul class="modal-trane-list-stars">${pe(a.rating)}</ul>
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
          <p class="modal-trane-information-text">${a.popular}</p>
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
  </div>`;k.innerHTML=s;const o=document.querySelector(".modal-trane-btn-close"),n=document.querySelector(".modal-trane-btn-add-favorites"),i=document.querySelector(".modal-trane-btn-rating");o.addEventListener("click",_),n.addEventListener("click",_e),i.addEventListener("click",ye)};function Le(e){if(e.target.classList.contains("workout-card__link-start")){const t=e.target;qe(t.dataset.id),k.classList.add("modal-trane-background-active"),document.addEventListener("click",z),document.addEventListener("keydown",H)}}function _(){k.classList.remove("modal-trane-background-active"),document.removeEventListener("click",z),document.removeEventListener("keydown",H)}function z(e){e.target===k&&_()}function H(e){e.key==="Escape"&&_()}function _e(){let e=JSON.parse(localStorage.getItem("favorites"))||[];e.includes(itemId.dataset.id)||(e.push(itemId.dataset.id),localStorage.setItem("favorites",JSON.stringify(e)))}Ee.addEventListener("click",Le);const xe=document.querySelector(".render-page-one-list"),$e=document.querySelector(".render-btn-list-pagination"),Fe=()=>{const e=`<p class="render-page-one-no">
  Unfortunately, <span class="render-page-one-no-part">no results</span> were
  found. You may want to consider other search options to find the exercise you
  are looking for. Our range is wide and you have the opportunity to find more
  options that suit your needs.
</p>`;xe.innerHTML=e,$e.style.display="none"},Ce=getComputedStyle(document.querySelector("body")).width,Te=parseInt(Ce)<768?8:9,Me=document.querySelector(".form-search"),I=document.querySelector(".render-page-one-list"),f=document.querySelector(".render-btn-list-pagination"),Ie=(e,t)=>{let a="";for(let s=1;s<=e;s++){let o=` <li>
        <button
          class="render-pagination-btn-search"
          type="button"
        >${s}</button></li>`;a+=o}f.innerHTML=a,f.children[t-1].children[0].classList.add("render-pagination-btn-active")},m={limit:Te,page:1},Oe=async e=>await d.get("exercises",{params:e}),Y=async()=>{f.style.display="flex";const e=await Oe(m);if(!e.data.results.length){Fe();return}y(A(e.data.results,m)),Ie(e.data.totalPages,m.page)},Pe=async e=>{e.preventDefault();const t=I.children[0].dataset.filter,a=I.children[0].dataset.name;m[t]=a,m.keyword=e.target.query.value,f.addEventListener("click",Ne),Y()},Ne=e=>{m.page=parseInt(e.target.textContent),Y()};Me.addEventListener("submit",Pe);y(S({page:1,filter:"Muscles"}));const Ae=document.querySelector(".form");Ae.addEventListener("submit",ge);ue();
//# sourceMappingURL=commonHelpers2.js.map
