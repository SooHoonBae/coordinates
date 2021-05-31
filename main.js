'use strict'
const target = document.querySelector(".target");
const coordinateNumb = document.querySelector(".coordinate-numb");
const horisontal = document.querySelector(".horisontal");
const vertical = document.querySelector(".vertical");
document.addEventListener("mousemove",(event)=>{
    const x = event.clientX;
    const y = event.clientY;
    target.style.left =`${x}px`
    target.style.top =`${y}px`
    coordinateNumb.style.left =`${x}px` 
    coordinateNumb.style.top =`${y}px` 
    vertical.style.left = `${x}px`
    horisontal.style.top =`${y}px`
    coordinateNumb.innerHTML = `${x}px, ${y}px`;
 })