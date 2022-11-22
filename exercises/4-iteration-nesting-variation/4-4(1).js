'use strict';
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

drawCircles();

function drawCircles() {
   context.fillStyle= 'LightSkyBlue';
   context.strokeStyle= 'LightSkyBlue';

    for (let i=0; i<10; i++) {
      for (let j =0; j<10; j++)
   Utils.drawCircle(0+(i*81), 0+(j*81), 40);
   
}
}