"use strict";

//selecting elems from dom
const allObserverableElems = document.querySelectorAll('[data-observerable_elem]')
const counterAniElems = document.querySelectorAll("[data-textcounter]")

//creating observer, options new IntersectionObserver and asiging each elem for observations
const createObserver = function(elemArr){
    let observer;

    let options = { //setting up options
      root: null,
      rootMargin: "0px",
      threshold: 0.7,
    };
  
    observer = new IntersectionObserver(handleIntersect, options); //making a new IntersectionObserver

    //passing each element to be observed
    elemArr.forEach(element => {
        observer.observe(element);
    });
}

//manipulating thins accoding to intersection
function handleIntersect(entries) {
    entries.forEach((entry) => {
        // checking if it's for the text animation or animation on scroll
        if(entry.target.dataset.textcounter){
            if(entry.isIntersecting){
                textcounter(entry.target)
            }
        }else{
            if (entry.isIntersecting) { //when elem comes in viewport
                entry.target.classList.remove("opacity-0");
                entry.target.classList.add("opacity-100");
            } else {
                //when elem goes out of viewport
                entry.target.classList.add("opacity-0");
                entry.target.classList.remove("opacity-100");
            }
        }
    })
}

// text counting animation
function textcounter(elem){
    //getting the destination number of the element from it's data set
    const endNum = parseInt(elem.dataset.textcounter);
    let currentNum = 1;
    
    // setting a interval function to change the number (causing an animation)
    const countAdd = setInterval(() => {
        currentNum++
        currentNum > endNum ? clearInterval(countAdd) :  elem.innerText = currentNum;
    }, 4);
}

//calling functions
createObserver(allObserverableElems)
// adding counting animation elems
createObserver(counterAniElems)
