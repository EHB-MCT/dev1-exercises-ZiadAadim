'use strict';
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawLines();
}

function drawLines() {
    let i = 0;
    while (i <= 12) {
        console.log(i);

        Utils.drawLine(70, i* 30 ,335 , i* 30);
        
        i= i + 1;
        
    }
}
