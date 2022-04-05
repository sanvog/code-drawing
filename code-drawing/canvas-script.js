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
context.moveTo(0, 10);
context.lineTo(15, 10); 
context.lineTo(40, 35); 
context.lineTo(65, 10);
context.lineTo(90, 35);
context.lineTo(115, 10);
context.lineTo(140, 35);
context.lineTo(180, 30);
context.stroke();

context.beginPath();
context.lineCap = "butt" //default
context.strokeStyle = "red";
context.lineWidth = 30;
context.moveTo(100,100);
context.lineTo(300,100);
context.stroke();


context.beginPath();
context.lineCap = "round";
context.strokeStyle = "green";
context.lineWidth = 10;
context.moveTo(100,125);
context.lineTo(300,125);
context.stroke();

context.beginPath();
context.lineCap = "square";
context.strokeStyle = "purple";
context.lineWidth = 10;
context.moveTo(100,140);
context.lineTo(300,140);
context.stroke();

context.lineJoin = "round";
context.lineWidth = 20;
context.strokeStyle = " rgb(10, 20, 220)";
context.beginPath();
context.moveTo(150,0);
context.lineTo(150,30);
context.lineTo(180,30);
context.lineTo(130,80);
context.lineTo(150,150);
context.lineTo(240,20);
context.lineTo(2100,20);
context.stroke();

}

