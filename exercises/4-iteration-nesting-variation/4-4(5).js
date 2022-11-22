'use strict';
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

drawCircles();

function drawCircles() {
   context.fillStyle= 'OrangeRed';
   context.strokeStyle= 'OrangeRed';

    for (let i=0; i<10; i++) {
      for (let j =0; j<5; j++){
       Utils.drawCircle(0 +(i*82), 0+(j*162) ,40);
    }   }
    context.fillStyle='LightSkyBlue';
    context.strokeStyle='LightSkyBlue';
    for (let i=0; i<10; i++) {
        for (let j =0; j<5; j++){
         Utils.drawCircle(0 +(i*82), 82+(j*162) ,40);
      }   }
}
