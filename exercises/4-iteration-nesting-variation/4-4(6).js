'use strict';
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

//I could've done it with less code but once i made my two first nested 'for' functions, i was to lazy to check how i could nest it further or use less code by adjusting the 'for' functions.
drawcircles();

function drawcircles() {

    for (let i=0; i<5;i++) {
        context.fillStyle= 'OrangeRed';
        context.strokeStyle= 'OrangeRed';
        for (let y=0; y<5; y++)
       Utils.drawCircle(0 +(i*162), 0+(y*162), 40);
}
}

drawRond();

function drawRond() {
    for (let i=0; i<5;i++) {
        context.fillStyle= 'LightSkyBlue';
        context.strokeStyle= 'LightSkyBlue';
        for (let y=0; y<5; y++)
       Utils.drawCircle(0 +(i*162), 81+(y*162), 40);
}
}
drawrondd();
function drawrondd() {

    for (let i=0; i<5;i++) {
        context.fillStyle= 'LightSkyBlue';
        context.strokeStyle= 'LightSkyBlue';
        for (let y=0; y<5; y++)
       Utils.drawCircle(82 +(i*162), 0+(y*162), 40);
    }
}

drawronddd();
function drawronddd() {

    for (let i=0; i<5;i++) {
        context.fillStyle= 'OrangeRed';
        context.strokeStyle= 'OrangeRed';
        for (let y=0; y<5; y++)
       Utils.drawCircle(82 +(i*162), 82+(y*162), 40);
    }
}