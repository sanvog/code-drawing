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
context.moveTo(0, 10);
context.lineTo(15, 10); //moveTo(x,y) starting point of line.
context.lineTo(40, 35); //line(x,y) endpoint of the line.
context.lineTo(65, 10);
context.lineTo(90, 35);
context.lineTo(115, 10);
context.lineTo(140, 35);
context.lineTo(180, 30);
//draw the line, calling the function:
context.stroke();

//Line Caps. context.lineCap = ""; butt is default.

//1st Line
context.beginPath();
context.lineCap = "butt" //default
context.strokeStyle = "red";
context.lineWidth = 30;
context.moveTo(100,100);
context.lineTo(300,100);
context.stroke();

//2nd Line
context.beginPath();
context.lineCap = "round";//line will be increased.
context.strokeStyle = "green";
context.lineWidth = 10;
context.moveTo(100,125);
context.lineTo(300,125);
context.stroke();

//3rd Line
context.beginPath();
context.lineCap = "square";//line will be increased
context.strokeStyle = "purple";
context.lineWidth = 10;
context.moveTo(100,140);
context.lineTo(300,140);
context.stroke();

//lineJoin 
context.lineJoin = "round";//round endpoint
context.lineWidth = 20;
context.strokeStyle = " rgb(10, 20, 220)";
context.beginPath();
context.moveTo(150,0);
context.lineTo(150,30);//straight line only increasing the x.
context.lineTo(180,30);
context.lineTo(130,80);
context.lineTo(150,150);
context.lineTo(240,20);
context.lineTo(2100,20);
context.stroke();

}

