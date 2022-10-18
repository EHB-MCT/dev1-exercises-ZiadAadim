'use strict';

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

let width = context.canvas.width;
let height = context.canvas.height;


let margin = 50;
drawLines();
function drawLines() {

    context.lineWidth = '3';
    //Upperline

context.beginPath();
context.moveTo(margin, 50);
context.lineTo(width-margin, 50);
context.stroke();


//Lines

context.beginPath();
context.moveTo(width-margin, 50);
context.lineTo(margin, 50+100);
context.lineTo(width-margin, 50+100);
context.lineTo(margin, 50+100*2);
context.lineTo(width-margin, 50+100*2);
context.lineTo(margin, 50+100*3);
context.lineTo(width-margin, 50+100*3);
context.lineTo(margin, 50+100*4);
context.lineTo(width-margin, 50+100*4);
context.lineTo(margin, 50+100*5);
context.lineTo(width-margin, 50+100*5);
context.lineTo(margin, 50);
context.stroke();



}


