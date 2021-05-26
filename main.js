var canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown",my_mouse_down);
function my_mouse_down(e){
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width_of_line").value;
    mouseEvent = "mouseDown"
    mouse_x=e.clientX-canvas.offsetLeft;
    mouse_y=e.clientY-canvas.offsetTop;
    circle(mouse_x,mouse_y);
}
function circle(mouse_x,mouse_y){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width_of_line;
    ctx.arc(mouse_x,mouse_y,40,0,2*Math.PI);
    ctx.stroke();   
}
function clearArea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}