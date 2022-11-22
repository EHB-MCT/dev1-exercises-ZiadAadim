'use strict';
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

drawcircles();

function drawcircles() {
context.fillStyle= 'rgba(135, 206, 250,.5)';
context.strokeStyle= 'rgba(135, 206, 250,.5)';

for (let i=0; i<10; i++) {
    for (let y=0; y<10; y++) 
    Utils.drawCircle(0 +(i*81), 0+(y*81), Math.floor(Math.random() * 80));
}
}