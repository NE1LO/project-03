import{a as q,i as w}from"./vendor-0a7943b3.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();const l=document.querySelector(".change"),T=document.querySelector(".page-link"),f=document.querySelector(".collection-img");function E(){const e=document.getElementById("dynamicStyles");e?e.remove():v(),L(),b()}function L(){l.checked?localStorage.setItem("darkThemeActivated","true"):localStorage.removeItem("darkThemeActivated")}function v(){const e=document.createElement("link");e.rel="stylesheet",e.href="./css/layout/dark-theme.css",e.id="dynamicStyles",document.head.appendChild(e)}function x(){localStorage.getItem("darkThemeActivated")==="true"&&v()}function I(){const e=localStorage.getItem("darkThemeActivated");l.checked=e==="true"}function A(){localStorage.setItem("darkThemeActivated",l.checked.toString())}window.onload=function(){x(),I()};l.addEventListener("change",function(){A(),E()});function b(){localStorage.getItem("darkThemeActivated")?f.srcset="/img/black-theme-img/favorite-img-desktop.jpg":f.srcset="/img/favorite-hero/favorite-hero-img.jpg"}T.addEventListener("click",b());const d=q.create({baseURL:"https://energyflow.b.goit.study/api/"}),c=document.querySelector(".render-btn-list-pagination"),Y=(e,t,n)=>{let a="";if(e===1){c.innerHTML=` <li>
        <button 
          class="render-pagination-btn render-pagination-btn-active"
          type="button"
        >1</button></li>`;return}let r=e<2?e:3;for(let o=0;o<r;o++){let s=t;o===0&&s--,o===1&&(s=t),o===2&&s++;let S=` <li>
        <button data-num="${o}"
          class="render-pagination-btn"
          type="button"
        >${s}</button></li>`;a+=S}c.innerHTML=a,c.children[1].children[0].classList.add("render-pagination-btn-active"),c.children[0].children[0].textContent==="0"?c.children[t-1].children[0].remove():parseInt(t)===e&&c.children[2].children[0].remove()};function j(e){e.hidden=!1,e.style.display="block"}function z(e){e.hidden=!0,e.style.display="none"}const J=e=>{const t=["./img/symbol-defs.svg#icon-star","./img/symbol-defs.svg#icon-star","./img/symbol-defs.svg#icon-star","./img/symbol-defs.svg#icon-star","./img/symbol-defs.svg#icon-star"],n="./img/symbol-defs.svg#icon-star-gold",a=parseFloat(e);return t.forEach((r,o)=>{o+1<=a&&(t[o]=n)}),t.reduce((r,o)=>r+` <li>
                <svg height="18" width="18">
                  <use href="${o}"></use>
                </svg>
              </li>`,"")},u=document.querySelector(".modal-rating-background"),k=document.querySelector(".modal-trane-background"),F=document.querySelector(".modal-rating-btn-close");document.querySelector(".modal-trane-btn-rating");function K(){k.classList.remove("modal-trane-background-active"),u.classList.add("modal-rating-background-active")}function m(){k.classList.add("modal-trane-background-active"),u.classList.remove("modal-rating-background-active")}function C(e){e.target===u&&m()}function D(e){e.key==="Escape"&&m()}F.addEventListener("click",m);u.addEventListener("click",C);document.addEventListener("keydown",D);const h=document.querySelectorAll(".modal-rating-svg-star"),O=document.querySelector(".modal-rating-radio-list");O.addEventListener("click",e=>{if(e.target.nodeName==="INPUT"){h.forEach(t=>t.classList.remove("modal-rating-svg-star-gold"));for(let t=0;t<e.target.value;t++)h[t].classList.add("modal-rating-svg-star-gold")}});const M=document.querySelector(".modal-rating-form"),N=document.querySelector(".modal-rating-email"),$=document.querySelector(".modal-rating-comment"),i=e=>{w.show({position:"topRight",messageColor:"#FFFFFF",backgroundColor:"#EF4040",titleSize:"8px",closeOnEscape:!0,...e})};M.addEventListener("submit",async function(e){e.preventDefault();const t=parseInt(e.target.radiostar.value,10),n=e.target.email.value,a=$.value;if(isNaN(t)){i({message:"Please select a valid rate."});return}if(!n.trim()){i({message:"Email is required."});return}if(!a.trim()){i({message:"Textarea is required."});return}const r={rate:t,email:n,review:a};if(N.checkValidity())try{const o=await d.patch("exercises/64f389465ae26083f39b1ae3/rating",r);console.log("Response:",o),o.status===200?(m(),i({backgroundColor:"#7e847f",message:"We are excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow. You have just taken a significant step towards improving your fitness and well-being."})):i({message:"Subscription failed"})}catch(o){console.error("Error:",o),o.response&&o.response.status===409?i({message:"Email already exists. Please use a different email address."}):i({message:"An error occurred while processing your request."})}});const R=async e=>{try{return await d.get("filters",{params:e})}catch(t){console.log(t)}},B=async e=>{try{return await d.get("exercises",{params:e})}catch(t){console.log(t)}},_=async()=>{try{return await d.get("quote")}catch(e){console.log(e)}},P={getFilters:R,getWorkout:B,getQuote:_},y=document.querySelector(".hero-third-container-text")||document.querySelector(".favorite-quote__text"),p=document.querySelector(".hero-third-container-author")||document.querySelector(".favorite-quote__autor"),g="key-quote",U=async()=>{if((await JSON.parse(localStorage.getItem(g))||[]).date!==`${new Date().getDate()}:${new Date().getMonth()+1}:${new Date().getFullYear()}`){const t=await P.getQuote(),n={author:t.data.author,quote:t.data.quote,date:`${new Date().getDate()}:${new Date().getMonth()+1}:${new Date().getFullYear()}`};localStorage.setItem(g,JSON.stringify(n)),y.textContent=n.quote,p.textContent=n.author}else{const t=JSON.parse(localStorage.getItem(g));y.textContent=t.quote,p.textContent=t.author}};export{d as a,Y as b,J as c,P as d,z as h,U as n,K as o,j as s};
//# sourceMappingURL=quote-ff907bd6.js.map
