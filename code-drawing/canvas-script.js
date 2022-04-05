window.onload = function () {

//definitions
let canvas = document.getElementById("rectangle-canvas");
let context = canvas.getContext("2d");

context.fillStyle = "green";
context.fillRect(10,40,40,80);

context.fillStyle = "purple";
context.fillRect(30,70,40,80);

context.beginPath();
context.strokeStyle = "red"; 
context.lineWidth = 10; 
context.moveTo(30, 70); 
context.lineTo(130, 70); 
context.stroke();

context.beginPath();
context.strokeStyle = "purple"; 
context.lineWidth = 5; 
context.moveTo(15, 10); 
context.lineTo(40, 35); 
context.lineTo(65, 10);
context.lineTo(90, 35);
context.lineTo(115, 10);
context.stroke();

}

