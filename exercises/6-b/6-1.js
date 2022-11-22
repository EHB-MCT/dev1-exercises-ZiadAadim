"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;


window.onmousemove = move;



/**
 * 
 * @param {MouseEvent} eventData
 */
function move(eventData) {
    let x = eventData.pageX;
    let y = eventData.pageY;
    context.lineWidth= '4';   
    context.strokeStyle= 'red';
    context.fillStyle= 'white';
    context.fillRect(0,0,width, height);
    Utils.drawLine(x, y, width, y);
    Utils.drawLine(x, y, 0, y);
    Utils.drawLine(x, y, x, height);
    Utils.drawLine(x, y, x, 0);

}