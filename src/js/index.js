"use strict";

//selecting elements
const nav_toggle_btn = document.getElementById('nav-toggle-btn');
const mob_nav = document.getElementById('mob-nav');

//functions
const elemClassToggler = function(elem, classToToggle){
    elem.classList.toggle(classToToggle)
}

//eventListners
nav_toggle_btn.addEventListener("click",()=>{
    elemClassToggler(mob_nav, "hidden");
})

//consoles for debugging