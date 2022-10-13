'use strict'

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

let width = context.canvas.width;
let height = context.canvas.height;

let margin = 50
drawLines();
function drawLines() {

    context.lineWidth = '2'
    //Upperline

context.beginPath();
context.moveTo(margin, margin);
context.lineTo(width-margin, margin)
context.stroke();


//Lines 

context.beginPath();
context.moveTo(margin, margin);
context.lineTo(width-margin, height-25);
context.stroke();

context.beginPath();
context.moveTo(width-margin, margin);
context.lineTo(margin, height/4 + 25);
context.lineTo(width-margin, height/4 + 25);
context.lineTo(margin, height/4*2+ 25);
context.lineTo(width-margin, height/4*2+25);
context.lineTo(margin, height/4*3+25);
context.lineTo(width-margin, height/4*3+25);
context.lineTo(margin, height -25);
context.lineTo(width- margin, height-25)


context.stroke();


}