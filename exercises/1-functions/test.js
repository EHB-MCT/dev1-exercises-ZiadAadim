'use strict';

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');






Drawbox(300, 300);
Drawbox(200, 200);
Drawbox(100, 100);

function Drawbox(pos, size) {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let color = "rgb(" + r + "," + g + "," + b + ")";

    context.fillStyle = color;
    context.fillRect(pos, pos, size, size);
    





}

