"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

drawdots();

function drawdots() {
    for (let i=0; i<10000; i++) {
    let x = Math.random()* width;
    let y = Math.random()*height;
    
     if (x< width/4 ) {
    context.fillStyle='blue';
    context.strokeStyle='blue';
 } else if (x>(width/4) *3) {
    context.fillStyle='blue';
    context.strokeStyle='blue'; 
 } else if (y<height/4) {
    context.fillStyle='blue';
    context.strokeStyle='blue'; 
 } else if (y>(height/4)*3) {
    context.fillStyle='blue';
    context.strokeStyle='blue';
 }
 else {
    context.fillStyle='white';
    context.strokeStyle='white';
 }


    Utils.drawCircle(x, y, 2);
   
}
}