'use strict';
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

context.strokeStyle= 'white';
context.lineWidth= 2;
yellowrect();

function yellowrect() {
context.fillStyle= "orange";
context.fillRect(50, 50, 600, 300);
}

for (let i=0; i<=30; i++) {
    Utils.drawLine(50, 50+(10*i), 650, 350 -(10*i));
    
}
for (let i=0; i<=60; i++) {
    Utils.drawLine(50+(10*i), 50, 650-(10*i), 350);
    
}
