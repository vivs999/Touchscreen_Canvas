var X_last_position, Y_last_position;
canvas=document.getElementById("myCanvas");
ctx=myCanvas.getContext("2d");
color="black";
width_line=3;
width_screen=screen.width;
height_screen=screen.height;
new_width_canvas=width_screen-70;
new_height_canvas=height_screen-300;

if(width_screen<992){
    document.getElementById("myCanvas").width=new_width_canvas;
    document.getElementById("myCanvas").height=new_height_canvas;
    document.body.style.overflow="hidden";
}

canvas.addEventListener("touchstart",my_touchStart);

function my_touchStart(e){
    console.log("my_touchStart");
    color=document.getElementById("color_input").value;
    width_line=document.getElementById("lineWidth").value;
    X_last_position=e.touches[0].clientX-canvas.offsetLeft;
    Y_last_position=e.touches[0].clientY-canvas.offsetTop;
}

canvas.addEventListener("touchmove",my_touchMove);

function my_touchMove(e){
    console.log("my_touchMove")
    X_current_position=e.touches[0].clientX-canvas.offsetLeft;
    Y_current_position=e.touches[0].clientY-canvas.offsetTop;
    
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width_line;
    console.log("Last position of X and Y = ");
    console.log("X = "+X_last_position+" Y = "+Y_last_position);

    ctx.moveTo(X_last_position,Y_last_position);
    
    console.log("Current position of X and Y = ");
    console.log("X = "+X_current_position+" Y = "+Y_current_position);

    ctx.lineTo(X_current_position,Y_current_position);
        
    ctx.stroke();

    X_last_position=X_current_position;
    Y_last_position=Y_current_position;
}

function clearCanvas(){
    ctx.clearRect(0,0,myCanvas.width,myCanvas.height);
}