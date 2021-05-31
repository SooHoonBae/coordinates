'use strict'
const target = document.querySelector(".target");
const horisontal = document.querySelector(".horisontal");
const vertical = document.querySelector(".vertical");

window.addEventListener("mousemove",(event)=>{
    const rect = target.getBoundingClientRect();    
    const rectH = horisontal.getBoundingClientRect();    
    const rectV = vertical.getBoundingClientRect();    
    target.style.left = event.pageX - rect.width/2 + "px";
    target.style.top = event.pageY - rect.height/2 + "px";
    horisontal.style.top = event.pageY - rectH.height/2 + "px";
    vertical.style.left = event.pageX - rectV.width/2  + "px";

 })