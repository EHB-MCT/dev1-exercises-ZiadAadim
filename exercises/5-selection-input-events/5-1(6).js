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
    let distance = Utils.calculateDistance(x,y, width/2, height/2);
    if(distance < 200) {
        context.fillStyle='red';
        context.strokeStyle='red';
    }
    else {
        context.fillStyle='white';
        context.strokeStyle='white'; 
    }
    Utils.drawCircle(x, y, 2);
   
}
}