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
   if (x<= width / 4) {
    context.fillStyle='red';
    context.strokeStyle='red';
   } else if (x<= (width/4)*3) {
    context.fillStyle='white';
    context.strokeStyle='white';
   } else {
    context.fillStyle='yellow';
    context.strokeStyle='yellow';
   }
    Utils.drawCircle(x, y, 2);
   
}
}