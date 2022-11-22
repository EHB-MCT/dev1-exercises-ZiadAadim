"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;
let randwidth = Utils.randomNumber(5, 15);



linesback();
function linesback() {
    for (let i=0;i<300;i++) {
        context.lineWidth = randwidth;
        let grey = Math.floor(Math.random() * 255);
        context.strokeStyle = "rgba("+grey+","+grey+","+grey+","+Math.random()+")";
        let distance1 = Math.random() * height;
        let distance2 = Math.random() * height;
    Utils.drawLine(0, distance1, width, distance2);
}
}
text();
function text() {
    context.textAlign = "center";
    context.font ="200px Arial";
    context.fillStyle = 'black';
    context.fillText('MCT',width/2,height/2);
    context.fillStyle = "red";
    context.fillText('ehb', width/2, height/2-200);
    context.fillStyle = 'white';
    context.fillText('is da shit', width/2, height/2 +200);

    

}

 for (let t=0; t<100; t++) {
    textmany();
    let grey = Math.floor(Math.random() * 255);
    function textmany() {
        let fontSize = Utils.randomNumber(25, 50);
        context.fillStyle = 'rgba('+3*t+","+3*t+","+3*t+","+Math.random()+")";
        context.fillText('MCT',Math.random()*width,Math.random()*height);
        context.font = fontSize + "px Arial";
        
    
    }
 }
 kader();

 function kader() {
    context.fillStyle ='black'
    context.beginPath();
    context.moveTo(0,0);
    context.lineTo(0,height/2);
    context.lineTo(width/2,0);
    context.fill();
    context.beginPath();
    context.moveTo(width,0);
    context.lineTo(width,height/2);
    context.lineTo(width/2,0);
    context.fill();
    context.beginPath();
    context.moveTo(width, height/2);
    context.lineTo(width,height);
    context.lineTo(width/2, height);
    context.fill();
    context.beginPath();
    context.moveTo(width/2, height);
    context.lineTo(0,height);
    context.lineTo(0, height/2);
    context.fill();

    
    
 }
 


