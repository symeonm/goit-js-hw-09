const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");let d=null;e.disabled=!0,t.addEventListener("click",(function(){d=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`,t.disabled=!0,e.disabled=!1}),1e3)})),e.addEventListener("click",(function(){clearInterval(d),t.disabled=!1,e.disabled=!0}));
//# sourceMappingURL=01-color-switcher.049d1dea.js.map
