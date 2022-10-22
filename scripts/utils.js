"use strict";

import context from "./context.js";

/**
 * Draws a filled ellipse of wich the center is at x, y
 * @param {*} x1 x coordinate of the starting point
 * @param {*} y1 y coordinate of the starting point
 * @param {*} x2 x coordinate of the end point
 * @param {*} y2 y coordinate of the end point
 */



   export function drawLine(x1, y1, x2, y2) {
    
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
   }

   export function strokeCircle (x, y, radius)  {
    context.beginPath();
    context.arc(x,y, radius, 0, 2 * Math.PI);
    context.stroke();

}
    export function rgb(r, g, b) {
      let rgb = "rgb("+r+","+g+","+b+")";
      return rgb; 
    }

    export function fillAndStrokeCircle(x, y, radius) {
      context.beginPath();
      context.arc(x, y, radius, 0, 2*Math.PI);
      context.fillStyle = rgb;
      context.fill();
      context.stroke();
    }
    export function fillAndStrokeEllipse(x, y, rX, rY){
      context.beginPath();
      context.ellipse(x, y, rX, rY, Math.PI, 0, 2*Math.PI);
      context.fillStyle = rgb;
      context.fill();
      context.stroke();
    }


      
   
