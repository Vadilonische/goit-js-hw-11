import{S as u,i as m}from"./assets/vendor-5b791d57.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();function p(e){const r=`https://pixabay.com/api/?${new URLSearchParams({key:"43027041-c13525989a1527b0b019a35b5",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;return fetch(r)}function f(e){return`<li class="image-items">
        <a class="image-link" href="${e.largeImageURL}"></a>
        <img
          src="${e.webformatURL}"
          alt="${e.tags}"
          class="photo-image"
        />
        <div class="image-info">
          <p><span class="accent">Likes</span>${e.likes}</p>

          <p><span class="accent">Views</span>${e.views}</p>

          <p><span class="accent">Comments</span>${e.comments}</p>

          <p><span class="accent">Downloads</span>${e.downloads}</p>
        </div>
      </li>`}function h(e){const a=document.querySelector("#search-results");a.innerHTML=e.map(f).join("");let r=new u(".gallery a",{captionsData:"alt",captionDelay:250});r.on("show.simplelightbox",function(){}),r.refresh()}const l={searchForm:document.querySelector(".search-form"),inputSearch:document.querySelector(".input-search"),gallery:document.querySelector(".gallery")};function n(e){m.error({title:"Error",message:e,position:"topRight"})}function i(){l.gallery.innerHTML=""}l.searchForm.addEventListener("submit",d);function d(e){e.preventDefault();const a=e.target.elements.name.value.trim();a===""?(n("Sorry, there are no images matching your search query. Please try again!"),i()):p(a).then(r=>(r.ok||n("Request failed. try again later"),i(),r.json())).then(r=>{r.hits.length==0?(n("Sorry, there are no images matching your search query. Please try again!"),i()):h(r.hits)}).catch(r=>{console.log(r)}),e.target.elements.name.value=""}
//# sourceMappingURL=commonHelpers.js.map
