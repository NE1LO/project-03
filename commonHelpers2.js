/* empty css                     */import{a as m,i as f}from"./assets/vendor-0a7943b3.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function a(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=a(r);fetch(r.href,o)}})();const g=document.querySelector(".render-btn-list-pagination"),y=(e,t)=>{let a="";for(let n=1;n<=e;n++){let r=` <li>
        <button
          class="render-pagination-btn "
          type="button"
        >${n}</button></li>`;a+=r}g.innerHTML=a,g.children[t-1].children[0].classList.add("render-pagination-btn-active")},u=m.create({baseURL:"https://energyflow.b.goit.study/api/"}),b=async e=>{try{return await u.get("filters",{params:e})}catch(t){console.log(t)}},h=async e=>{try{return await u.get("exercises",{params:e})}catch(t){console.log(t)}},L=async()=>{try{return await u.get("quote")}catch(e){console.log(e)}},w={getFilters:b,getWorkout:h,getQuote:L},d=async e=>{const t=i=>{const s=i;if(s==="Muscles")return s.toLowerCase();if(s==="Body parts")return"bodypart";if(s==="Equipment")return s.toLowerCase()},a={...e},n=await w.getFilters(a),r=n.data.results;return y(n.data.totalPages,e.page),r.reduce((i,s)=>i+` <li class="render-page-one-item" data-filter="${t(e.filter)}" data-name="${s.name}">
            <img src="${s.imgUrl}" alt="" />
            <div class="render-page-one-img-container">
              <p class="render-page-one-item-title">${s.name}</p>
              <p class="render-page-one-item-zones">${s.filter}</p>
            </div>
          </li>`,"")},E=document.querySelector(".render-page-one-list"),p=async e=>{const t=await e;E.innerHTML=t},v=document.querySelector(".render-btn-list-pagination");document.querySelector(".render-pagination-btn-active");document.querySelectorAll(".render-pagination-btn");const q=document.querySelector(".render-page-one-list-btn"),S=document.querySelectorAll(".render-page-one-btn"),k=getComputedStyle(document.querySelector("body")).width,F=parseInt(k)<768?8:12,l={limit:F,page:1,filter:"Muscles"},x=e=>{e.target.nodeName==="BUTTON"&&(S.forEach(t=>t.classList.remove("render-page-one-btn-active")),e.target.classList.add("render-page-one-btn-active"),l.filter=e.target.textContent.trimStart().trimEnd(),l.page=1,p(d(l)))},C=e=>{l.page=parseInt(e.target.textContent),p(d(l))};v.addEventListener("click",C);q.addEventListener("click",x);const T=document.querySelector(".footer-input"),c=e=>{f.show({position:"topRight",messageColor:"#FFFFFF",backgroundColor:"#EF4040",titleSize:"8px",closeOnEscape:!0,...e})},A=async e=>{e.preventDefault();const t=e.target.email.value;if(!t.trim()){c({message:"Email is required."});return}const a={email:t};if(T.checkValidity())try{const n=await u.post("subscription",a);console.log("Response:",n),n.status===201?c({backgroundColor:"#7e847f",message:"We are excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow. You have just taken a significant step towards improving your fitness and well-being."}):c({message:"Subscription failed"})}catch(n){console.error("Error:",n),n.response&&n.response.status===409?c({message:"Email already exists. Please use a different email address."}):c({message:"An error occurred while processing your request."})}};p(d({page:1,filter:"Muscles"}));const M=document.querySelector(".form");M.addEventListener("submit",A);
//# sourceMappingURL=commonHelpers2.js.map
