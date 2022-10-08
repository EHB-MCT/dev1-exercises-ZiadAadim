'use strict'

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

DrawBoxes();

function DrawBoxes() {

  // Top left red box

context.strokeStyle = 'red'
context.beginPath();
context.rect(50, 50, 350, 350 )
context.stroke();

  // 2nd big Red box below

  context.strokeStyle = 'red'
  context.rect(400, 400, 350, 350);
  context.stroke();

    // Middle black box

    context.beginPath();
    context.strokeStyle = 'black'
    context.rect(225, 225, 350, 350);
    context.fillRect(225, 225, 350, 350);
    context.stroke();

      // Little red boxes

      context.strokeStyle = 'red'
      context.rect(575, 100, 125, 125);
      context.rect(100, 575, 125, 125);
      context.stroke();

      //  Little black boxes
      context.beginPath();
      context.fillStyle = 'black'
      context.fillRect(50, 700, 50, 50);
      context.fill();

      context.fillRect(700, 50, 50, 50);




}