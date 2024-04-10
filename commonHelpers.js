import{S as u}from"./assets/vendor-10cb7c31.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();const d="43229178-92086ef52b57e39ce4e68da2d";async function f(e){const s=`https://pixabay.com/api/?key=${d}&q=${e}&image_type=photo&orientation=horizontal&safesearch=true`;try{const t=await fetch(s);if(!t.ok)throw new Error("Network response was not ok");return(await t.json()).hits}catch(t){throw console.error("Error fetching images:",t),t}}function h(e){return`
    <div class="card">
      <a href="${e.largeImageURL}">
        <img src="${e.webformatURL}" alt="${e.tags}">
      </a>
      <div class="stats">
        <span>Likes: ${e.likes}</span>
        <span>Views: ${e.views}</span>
        <span>Comments: ${e.comments}</span>
        <span>Downloads: ${e.downloads}</span>
      </div>
    </div>
  `}function c(e){iziToast.error({title:"Error",message:e})}const p=document.querySelector(".search-form"),i=document.querySelector(".gallery"),l=document.querySelector(".loader"),y=new u(".gallery a",{});function m(){l.style.display="block"}function g(){l.style.display="none"}p.addEventListener("submit",w);async function w(e){e.preventDefault();const s=e.target.search.value.trim();if(!s){c("Please enter a search query");return}try{m(),i.innerHTML="";const t=await f(s);t.length===0?c("Sorry, there are no images matching your search query. Please try again!"):L(t)}catch{c("An error occurred while fetching images. Please try again later.")}finally{g()}}function L(e){const s=e.map(h).join("");i.insertAdjacentHTML("beforeend",s),y.refresh()}
//# sourceMappingURL=commonHelpers.js.map
