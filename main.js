canvas=document.getElementById("my_canvas");
ctx=canvas.getContext("2d");
var color;
var radius;
var Width_Of_Line;
var mouseEvent="empty";
var last_position_of_x, last_position_of_y;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    color=document.getElementById("color").value;
    Width_Of_Line=document.getElementById("Width_Of_Line").value;
    radius=document.getElementById("radius").value;
    mouseEvent="mousedown";
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e)
{
    color=document.getElementById("color").value;
    Width_Of_Line=document.getElementById("Width_Of_Line").value;
    radius=document.getElementById("radius").value;
    mouseEvent="mouseup";
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e)
{
    color=document.getElementById("color").value;
    Width_Of_Line=document.getElementById("Width_Of_Line").value;
    radius=document.getElementById("radius").value;
    mouseEvent="mouseleave";

}


canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e)
{
    color=document.getElementById("color").value;
    Width_Of_Line=document.getElementById("Width_Of_Line").value;
    radius=document.getElementById("radius").value;
    mouseEvent="mousemove";

}
var current_position_of_x, current_position_of_y;

function my_mousemove(e)
{
    current_position_of_x= e.clientX-canvas.offsetLeft;
     current_position_of_y=e.clientY-canvas.offsetTop;
    
    if(mouseEvent=="mousedown")
console.log("Current position of x and y coordinates =")
console.log("x =" + current_position_of_x + "y=" + current_position_of_y)
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth= Width_Of_Line;
ctx.arc(current_position_of_x, current_position_of_y, radius, 0, 2*Math.PI);
ctx.stroke();
}
