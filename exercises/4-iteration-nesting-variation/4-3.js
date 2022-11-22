'use strict';
import context from "../../scripts/context.js";


context.fillStyle= 'brown';

for (let i=0; i<3; i++) {
    for (let j=0; j<6; j++) {
        context.fillRect(50 +(j* 105) ,50 +(i*110) , 100, 50);
         console.log(j);
    }
}
for (let i=0; i<3; i++) {
    for (let j=0; j<6; j++) {
        context.fillRect(100 +(j* 105) ,105 +(i*110) , 100, 50);
         console.log(j);
    }
}
