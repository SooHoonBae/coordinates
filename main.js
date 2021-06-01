'use strict'
const target = document.querySelector(".target");
const coordinateNumb = document.querySelector(".coordinate-numb");
const horisontal = document.querySelector(".horisontal");
const vertical = document.querySelector(".vertical");

window.addEventListener('load', ()=> {
    const targetRect = target.getBoundingClientRect();
    
    document.addEventListener("mousemove",(event)=> {
        const x = event.clientX;
        const y = event.clientY;
        target.style.transform = `translate(${x}px,${y}px)`
        target.style.left = `${-targetRect.width/2}px`
        target.style.top = `${-targetRect.height/2}px`
    
        coordinateNumb.style.transform = `translate(${x}px,${y}px)`  
        coordinateNumb.style.left =`20px` 
        coordinateNumb.style.top =`20px` 
        coordinateNumb.innerHTML = `${x}px, ${y}px`;
        horisontal.style.transform = `translateY(${y}px)`
        horisontal.style.top='-1px'
        vertical.style.left = '-1px'
        vertical.style.transform = `translateX(${x}px)`
 })
})
