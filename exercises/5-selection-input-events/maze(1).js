"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width= context.canvas.width;
let height= context.canvas.height;

let spacing = 10;


drawMaze();





function drawMaze() {
   
    context.lineWidth = '6';
    console.log('checking up');

    let horizontalAmount = width / spacing;
    let verticalAmount = height/ spacing;
    for (let j=0; j< verticalAmount; j++) {
        for (let i = 0; i< horizontalAmount; i++) {
            let random = Math.random();
            if (random < 0.5) {
                Utils.drawLine(i*spacing, j*spacing, spacing + i*spacing, spacing+j*spacing);
            } else {
                Utils.drawLine(spacing + i * spacing, j * spacing, i* spacing, spacing+j*spacing);
            }
        }
    }
}