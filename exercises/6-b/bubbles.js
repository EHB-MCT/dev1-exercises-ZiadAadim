"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;








drawBubbles(Math.random()*width, Math.random()*height, 50);

function drawBubbles(x, y, radius, hue) {
    
    hue = Utils.randomNumber(160, 210);
    context.fillStyle = Utils.hsl(hue,50,50);
    Utils.fillCircle(x,y,radius);
    context.fillStyle = Utils.hsl(hue,50,75);
    Utils.fillCircle(x+ radius/3,y+ radius/3,radius/4);
    
    console.log(drawBubbles);
    
}



