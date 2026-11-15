(()=>{"use strict";
const toggle=document.querySelector(".menu-toggle");
const nav=document.querySelector(".nav-links");
if(toggle&&nav){
 const close=()=>{nav.classList.remove("open");toggle.setAttribute("aria-expanded","false");toggle.setAttribute("aria-label","Open navigation");toggle.textContent="☰"};
 toggle.addEventListener("click",()=>{const open=!nav.classList.contains("open");nav.classList.toggle("open",open);toggle.setAttribute("aria-expanded",String(open));toggle.setAttribute("aria-label",open?"Close navigation":"Open navigation");toggle.textContent=open?"×":"☰"});
 nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",close));
 document.addEventListener("keydown",e=>{if(e.key==="Escape")close()});
}
const search=document.querySelector("#article-search");
const cards=[...document.querySelectorAll("[data-article]")];
const filters=[...document.querySelectorAll("[data-filter]")];
let active="all";
function apply(){const q=(search?.value||"").trim().toLowerCase();let count=0;cards.forEach(card=>{const matchText=card.textContent.toLowerCase().includes(q);const matchCategory=active==="all"||card.dataset.category===active;const show=matchText&&matchCategory;card.hidden=!show;if(show)count++});const empty=document.querySelector(".empty-state");if(empty)empty.hidden=count!==0}
search?.addEventListener("input",apply);
filters.forEach(btn=>btn.addEventListener("click",()=>{active=btn.dataset.filter;filters.forEach(x=>x.classList.toggle("active",x===btn));apply()}));
document.addEventListener("keydown",e=>{if(e.key==="/"&&!/input|textarea|select/i.test(document.activeElement?.tagName||"")){if(search){e.preventDefault();search.focus()}}});
const reduce=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
if(!reduce&&"IntersectionObserver"in window){
 const targets=[...document.querySelectorAll(".featured-section,.journal-heading,.article-toolbar,.article-card,.about-strip,.article-shell,.post-content h2,.post-content p")];
 targets.forEach((el,i)=>{el.classList.add("reveal");if(el.matches(".article-card"))el.classList.add("reveal-delay-"+((i%3)+1))});
 document.documentElement.classList.add("motion-ready");
 const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("is-visible");observer.unobserve(entry.target)}}),{threshold:.12,rootMargin:"0px 0px -35px 0px"});
 targets.forEach(el=>observer.observe(el));
}
})();