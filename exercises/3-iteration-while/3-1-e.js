"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "black";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawDiagonalGrid();
}

function drawDiagonalGrid() {
    let i = 0;
    while (i <7 ) {
        Utils.drawLine(200 +(25*i), 50 +(25* i) ,50 +(25*i),200 +(25*i) );
        Utils.drawLine(50 +(25*i), 200 +(25* i) , 200+(25*i),350 +(25*i)  );
        i = i+1;
    }
}
