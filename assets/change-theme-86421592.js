import{a as q,i as w}from"./vendor-0a7943b3.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();const d=q.create({baseURL:"https://energyflow.b.goit.study/api/"}),i=document.querySelector(".render-btn-list-pagination"),H=(e,t,n)=>{let a="";if(e===1){i.innerHTML=` <li>
        <button 
          class="render-pagination-btn render-pagination-btn-active"
          type="button"
        >1</button></li>`;return}let r=e<2?e:3;for(let o=0;o<r;o++){let s=t;o===0&&s--,o===1&&(s=t),o===2&&s++;let S=` <li>
        <button data-num="${o}"
          class="render-pagination-btn"
          type="button"
        >${s}</button></li>`;a+=S}i.innerHTML=a,i.children[1].children[0].classList.add("render-pagination-btn-active"),i.children[0].children[0].textContent==="0"?i.children[t-1].children[0].remove():parseInt(t)===e&&i.children[2].children[0].remove()};function J(e){e.hidden=!1,e.style.display="block"}function K(e){e.hidden=!0,e.style.display="none"}const l="/project-03/assets/symbol-defs-092448a0.svg",U=e=>{const t=[`${l}#icon-star`,`${l}#icon-star`,`${l}#icon-star`,`${l}#icon-star`,`${l}#icon-star`],n=`${l}#icon-star-gold`,a=parseFloat(e);return t.forEach((r,o)=>{o+1<=a&&(t[o]=n)}),t.reduce((r,o)=>r+` <li>
                <svg height="18" width="18">
                  <use href="${o}"></use>
                </svg>
              </li>`,"")},u=document.querySelector(".modal-rating-background"),b=document.querySelector(".modal-trane-background"),E=document.querySelector(".modal-rating-btn-close");document.querySelector(".modal-trane-btn-rating");function W(){b.classList.remove("modal-trane-background-active"),u.classList.add("modal-rating-background-active")}function m(){b.classList.add("modal-trane-background-active"),u.classList.remove("modal-rating-background-active")}function L(e){e.target===u&&m()}function T(e){e.key==="Escape"&&m()}E.addEventListener("click",m);u.addEventListener("click",L);document.addEventListener("keydown",T);const h=document.querySelectorAll(".modal-rating-svg-star"),x=document.querySelector(".modal-rating-radio-list");x.addEventListener("click",e=>{if(e.target.nodeName==="INPUT"){h.forEach(t=>t.classList.remove("modal-rating-svg-star-gold"));for(let t=0;t<e.target.value;t++)h[t].classList.add("modal-rating-svg-star-gold")}});const A=document.querySelector(".modal-rating-form"),I=document.querySelector(".modal-rating-email"),$=document.querySelector(".modal-rating-comment"),c=e=>{w.show({position:"topRight",messageColor:"#FFFFFF",backgroundColor:"#EF4040",titleSize:"8px",closeOnEscape:!0,...e})};A.addEventListener("submit",async function(e){e.preventDefault();const t=parseInt(e.target.radiostar.value,10),n=e.target.email.value,a=$.value;if(isNaN(t)){c({message:"Please select a valid rate."});return}if(!n.trim()){c({message:"Email is required."});return}if(!a.trim()){c({message:"Textarea is required."});return}const r={rate:t,email:n,review:a};if(I.checkValidity())try{const o=await d.patch("exercises/64f389465ae26083f39b1ae3/rating",r);console.log("Response:",o),o.status===200?(m(),c({backgroundColor:"#7e847f",message:"We are excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow. You have just taken a significant step towards improving your fitness and well-being."})):c({message:"Subscription failed"})}catch(o){console.error("Error:",o),o.response&&o.response.status===409?c({message:"Email already exists. Please use a different email address."}):c({message:"An error occurred while processing your request."})}});const C=document.querySelector(".burger-menu-block"),F=document.querySelector(".button-burger"),D=document.querySelector(".burger-menu__btn-close"),M=document.body,v=()=>{C.classList.toggle("is-hidden"),M.classList.toggle("no-scroll")};F.addEventListener("click",v);D.addEventListener("click",v);const O=async e=>{try{return await d.get("filters",{params:e})}catch(t){console.log(t)}},N=async e=>{try{return await d.get("exercises",{params:e})}catch(t){console.log(t)}},_=async()=>{try{return await d.get("quote")}catch(e){console.log(e)}},B={getFilters:O,getWorkout:N,getQuote:_},y=document.querySelector(".hero-third-container-text")||document.querySelector(".favorite-quote__text"),p=document.querySelector(".hero-third-container-author")||document.querySelector(".favorite-quote__autor"),f="key-quote",V=async()=>{if((await JSON.parse(localStorage.getItem(f))||[]).date!==`${new Date().getDate()}:${new Date().getMonth()+1}:${new Date().getFullYear()}`){const t=await B.getQuote(),n={author:t.data.author,quote:t.data.quote,date:`${new Date().getDate()}:${new Date().getMonth()+1}:${new Date().getFullYear()}`};localStorage.setItem(f,JSON.stringify(n)),y.textContent=n.quote,p.textContent=n.author}else{const t=JSON.parse(localStorage.getItem(f));y.textContent=t.quote,p.textContent=t.author}},g=document.querySelector(".change");document.querySelector(".page-link")||document.querySelector(".change");document.querySelector(".collection-img");function R(){const e=document.getElementById("dynamicStyles");e?e.remove():k(),P()}function P(){g.checked?localStorage.setItem("darkThemeActivated","true"):localStorage.removeItem("darkThemeActivated")}function k(){const e=`<link rel="stylesheet" href="/css/layout/dark-theme.css" id='dynamicStyles'>`;document.querySelector("head").insertAdjacentHTML("afterend",e)}function Q(){localStorage.getItem("darkThemeActivated")==="true"&&k()}function Y(){const e=localStorage.getItem("darkThemeActivated");g.checked=e==="true"}function j(){localStorage.setItem("darkThemeActivated",g.checked.toString())}window.onload=function(){Q(),Y()};g.addEventListener("change",function(){j(),R()});export{d as a,H as b,U as c,B as d,K as h,l as i,V as n,W as o,J as s};
//# sourceMappingURL=change-theme-86421592.js.map
