'use strict';
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

drawCircles();

function drawCircles() {
   context.fillStyle= 'OrangeRed';
   context.strokeStyle= 'OrangeRed';

    for (let i=0; i<5; i++) {
      for (let j =0; j<10; j++){
       Utils.drawCircle(0 +(i*162), 0 +(j* 81) ,40);
    }   }
    for (let i=0; i<5; i++) {
        for (let j =0; j<10; j++){
            context.fillStyle= 'LightSkyBlue';
            context.strokeStyle= 'LightSkyBlue';
         Utils.drawCircle(81 +(i*162), 0 +(j* 81) ,40);
      }   }
}
