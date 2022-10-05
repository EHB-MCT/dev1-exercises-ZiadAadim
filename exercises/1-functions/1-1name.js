"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

drawName();

function drawName() {
    //Letter Z

context.beginPath()
context.moveTo(300, 300);
context.lineTo(500, 300)
context.lineTo(300, 500)
context.stroke()
context.moveTo()

}
