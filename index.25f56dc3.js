const e=document.getElementsByClassName("review"),t=document.getElementsByClassName("reviews-block__dot");let s=0;function l(l){for(let s=0;s<e.length;s++){const l=e[s],i=t[s];l.classList.remove("review_visible"),i.classList.remove("reviews-block__dot_active")}s=l,e[s].classList.add("review_visible"),t[s].classList.add("reviews-block__dot_active")}function i(){return setInterval((()=>{l((s+1)%t.length)}),5e3)}let r=i();function c(e){clearInterval(r),l(Array.prototype.indexOf.call(t,e.currentTarget)),r=i()}for(let e of t)e.addEventListener("click",c);
//# sourceMappingURL=index.25f56dc3.js.map
