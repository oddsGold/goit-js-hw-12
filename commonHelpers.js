import{a as f,S as h,i as v}from"./assets/vendor-da186403.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(e){if(e.ep)return;e.ep=!0;const a=o(e);fetch(e.href,a)}})();const b="42527051-ab9ea8069b5c425aa0269f2a2",r={image_type:"photo",orientation:"horizontal",safesearch:!0},_=f.create({baseURL:"https://pixabay.com/api",headers:{Accept:"application/json"}}),L={async getImages(s,t){return(await _.get(`?key=${b}&q=${encodeURIComponent(s)}`,{params:r})).data}},w=document.querySelector(".gallery"),I=s=>{const t=new h(".gallery .gallery-link",{className:"gallery-link",closeText:['<i class="fa fa-times">&#10006;</i>'],navText:['<i class="fa fa-angle-left">&lt;</i>','<i class="fa fa-angle-right">&gt;</i>'],captionsData:"alt",captionDelay:250}),o=s.map(({webformatURL:i,largeImageURL:e,tags:a,likes:n,views:m,comments:y,downloads:u})=>`<a class="gallery-link" href="${e}">
                          <img
                            class="gallery-image"
                            src="${i}"
                            alt="${a}"
                          />
                          <figcaption class="gallery__figcaption">
                             <div class="gallery__caption">Likes: <span>${n}</span></div>
                             <div class="gallery__caption">Views: <span>${m}</span></div>
                             <div class="gallery__caption">Comments: <span>${y}</span></div>
                             <div class="gallery__caption">Downloads: <span>${u}</span></div>
                          </figcaption>
                        </a>`).join("");w.insertAdjacentHTML("beforeend",o),t.refresh()},S=document.querySelector(".form"),c=document.getElementById("get-images"),l=document.querySelector(".loader"),p=15,d=()=>{const s=document.querySelector("[name='search']");s.value.trim()!==""?(l.style.display="block",L.getImages(s.value.trim()).then(t=>{const o=Math.ceil(t.totalHits/p);if(r.page>o)throw c.style.display="none",new Error("We are sorry, but you've reached the end of search results.");if(parseInt(t.totalHits)<=0)throw new Error("Sorry, there are no images matching your search query. Please try again!");c.style.display="inline-block",I(t.hits),l.style.display="none"}).catch(t=>{l.style.display="none",console.error(t.message),g(t.message)})):(l.style.display="none",g("The field cannot be empty"))};S.addEventListener("submit",s=>{s.preventDefault(),r.per_page=p,r.page=1,document.querySelector(".gallery").innerHTML="",d()});c.addEventListener("click",()=>{r.per_page=p,r.page++,document.querySelector(".gallery-link").getBoundingClientRect(),d(),setTimeout(()=>{window.scrollBy({top:850,behavior:"smooth"})},"500")});const g=s=>{v.error({message:s,position:"topRight",timeout:5e3})};
//# sourceMappingURL=commonHelpers.js.map