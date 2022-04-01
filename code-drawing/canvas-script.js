window.onload = function () {

//definitions
let canvas = document.getElementById("rectangle-canvas");
let context = canvas.getContext("2d");

//Green rectangle
context.fillStyle = "green";//Creates green brush
context.fillRect(10,40,40,80);//fills rectangle, 2 coordinate, 1 width, 1 height.

//Purple rectangle
context.fillStyle = "purple";//selects color of brush
context.fillRect(30,70,40,80);

//Draw line steps
context.beginPath();//starting, reset the context state.
context.strokeStyle = "red"; //red brush color.
context.lineWidth = 10; //width of stroke.
context.moveTo(30, 70); //moveTo(x,y) starting point of line.
context.lineTo(130, 70); //line(x,y) endpoint of the line.
//draw the line, calling the function:
context.stroke();

//Draw zick-zack line
context.beginPath();//starting, reset the context state.
context.strokeStyle = "purple"; //red brush color.
context.lineWidth = 5; //width of stroke.
context.moveTo(15, 10); //moveTo(x,y) starting point of line.
context.lineTo(40, 35); //line(x,y) endpoint of the line.
context.lineTo(65, 10);
context.lineTo(90, 35);
context.lineTo(115, 10);
//draw the line, calling the function:
context.stroke();




}

