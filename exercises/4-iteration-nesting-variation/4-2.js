'use strict';
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";


let width = context.canvas.width;
let height = context.canvas.height;


blackbackground();

function blackbackground() {
context.fillStyle= 'black';
context.fillRect(0, 0, width, height);
}

marginbox();

function marginbox() {
    context.fillStyle= 'black';
context.fillRect(200, 200, width-400,height-400);
}

drawBubbles();

function drawBubbles() {
    for (let i=0; i<70; i++) {
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        let color = "rgba("+r+","+g+","+b+","+.50+")";
        
    context.fillStyle= color;
    context.strokeStyle= color;
    let x =200+Math.floor(Math.random() * 1520);
    let y =200+Math.floor(Math.random() * 529);
    let radius = Math.floor(Math.random() * 100);
    Utils.drawCircle(x,y, radius);
}
}



  





