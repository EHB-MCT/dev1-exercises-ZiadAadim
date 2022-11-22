"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;
fillrect();
function fillrect() {
    context.fillRect(0,0,width,height);
}
drawdots();

function drawdots() {
    for (let i=0; i<10000; i++) {
    let x = Math.random()* width;
    let y = Math.random()*height;
   if (y<= height / 3) {
    context.fillStyle='blue';
    context.strokeStyle='blue';
   }  else if (y< (height/3)*2){
    context.fillStyle="white";
    context.strokeStyle='white';
   } else {
    context.fillStyle='red';
    context.strokeStyle='red';
   }
    Utils.drawCircle(x, y, 2);
   
}
}

