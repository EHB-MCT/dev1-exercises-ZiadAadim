"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let spacing = 10;

drawMaze();

function drawMaze() {
    context.lineWidth = 4;
    console.log('checking up');
    let verticalAmount = height / spacing;
let horizontalAmount = width / spacing;

for (let i=0; i<horizontalAmount; i++) {
    for (let y=0; y<verticalAmount; y++) {
        let randomColor = Math.floor(Math.random() * 360);
        context.strokeStyle = Utils.hsl(randomColor, 80, 50);
        let random = Math.random();
        if (random < 0.5) {
            Utils.drawLine(i*spacing, y*spacing, i* spacing + spacing, y*spacing+ spacing);
        } else {
            Utils.drawLine(spacing + i* spacing, y*spacing, i*spacing, y*spacing + spacing);
        }
        
    }
}
}