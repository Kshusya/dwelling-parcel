const e=document.getElementsByClassName("product-block__list")[0],t=document.getElementById("next"),c=document.getElementById("prev");e.style.setProperty("--gap","30px"),t.addEventListener("click",(s=>{e.scrollBy(l+30,0),0!==e.scrollWidth&&c.classList.add("product-block__circle_active"),e.scrollWidth-l-30<=e.scrollLeft+l&&t.classList.remove("product-block__circle_active")})),c.addEventListener("click",(s=>{e.scrollBy(-(l+30),0),e.scrollLeft-l-30<=0&&c.classList.remove("product-block__circle_active"),!e.scrollWidth-l-30<=e.scrollLeft+l&&t.classList.add("product-block__circle_active")}));let l=e.offsetWidth;window.addEventListener("resize",(t=>l=e.offsetWidth));
//# sourceMappingURL=index.40397545.js.map
