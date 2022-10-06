"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

drawName();

function drawName() {
    //Letter Z

context.lineWidth = '10'
context.strokeStyle = 'blue'
context.beginPath()
context.moveTo(300, 300);
context.lineTo(500, 300)
context.lineTo(300, 500)
context.stroke()
context.moveTo(300, 500);
context.lineTo(500, 500)
context.stroke() 

  //Letter I
  context.strokeStyle = 'green'
  context.beginPath()
  context.moveTo(650, 300)
  context.lineTo(650, 500)
  context.stroke() 

    //Letter A
    context.strokeStyle = 'purple'
    context.beginPath()
    context.moveTo(900, 300)
    context.lineTo(800, 500)
    context.moveTo(900, 300)
    context.lineTo(1000, 500)
    context.moveTo(850, 400)
    context.lineTo(950, 400)
    context.stroke()

      //Letter D
      context.strokeStyle = 'orange'
      context.beginPath()
      context.moveTo(1100, 300)
      context.lineTo(1100, 500)
      context.moveTo(1250, 350)
      context.lineTo(1250, 450)
      context.stroke()

      context.beginPath()
      context.moveTo(1250, 350)
      context.lineTo(1100, 300)
      context.moveTo(1250, 450)
      context.lineTo(1100, 500)
      context.stroke()

  
    
}
