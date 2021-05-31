'use strict'
const target = document.querySelector(".target");
const coordinateNumb = document.querySelector(".coordinate-numb");
const horisontal = document.querySelector(".horisontal");
const vertical = document.querySelector(".vertical");


window.addEventListener("mousemove",(event)=>{
    const rect = target.getBoundingClientRect();    
    const rectH = horisontal.getBoundingClientRect();    
    const rectV = vertical.getBoundingClientRect();    
    target.style.left = event.pageX - rect.width/2 + "px";
    target.style.top = event.pageY - rect.height/2 + "px";
    coordinateNumb.style.left = event.pageX + 30 + "px";
    coordinateNumb.style.top = event.pageY + 20 + "px";
    horisontal.style.top = event.pageY - rectH.height/2 + "px";
    vertical.style.left = event.pageX - rectV.width/2  + "px";
    coordinateNumb.innerHTML = `${event.pageX}, ${event.pageY}`;
 })