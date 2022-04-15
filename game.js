var canvas=new fabric.Canvas('myCanvas');
var player_X=20;
var player_Y=20;
var player_image="";
var block_image_object="";
var block_imagewidth=30;
var block_imageheighgth=30;
function player_update(){
    fabric.Image.fromURL("player.png",function(Img)
    {
        player_image=Img;
        player_image.scaleToWidth(150);
        player_image.scaleToHeight(140);
        player_image.set(
            {
            top:player_Y,
            left:player_X
            });
            canvas.add(player_image);
    });
}
function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img)
    {
    block_image_object=Img;
    block_image_object.scaleToWidth(block_imagewidth);
    block_image_object.scaleToHeight(block_imageheighgth);
    block_image_object.set(
{
top:player_Y,
left:player_X
});
canvas.add(block_image_object);
    });
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    var keypressed=e.keyCode;
    console.log(keypressed);
    if(e.shiftKey && keypressed=="80"){
        console.log("P & shift key pressed together");
        block_imageheighgth=block_imageheighgth+15;
        block_imagewidth=block_imagewidth+15;
        document.getElementById("current_width").innerHTML=block_imagewidth;
        document.getElementById("current_hieght").innerHTML=block_imageheighgth;
    }
    if(e.shiftKey && keypressed=="77"){
        console.log("M & shift key pressed together");
        block_imageheighgth=block_imageheighgth-15;
        block_imagewidth=block_imagewidth-15;
        document.getElementById("current_width").innerHTML=block_imagewidth;
        document.getElementById("current_hieght").innerHTML=block_imageheighgth;
    }
    if(keypressed=="38"){
        up();
console.log("up")
    }
    if (keypressed=="37"){
        left();
        console.log("left")
    }
    if (keypressed=="40"){
        down();
        console.log("down")
    }
    if (keypressed=="39"){
        right();
        console.log("right")
    }
    if (keypressed=="87"){
        new_image("wall.jpg");
        console.log("W");
    }
    if (keypressed=="67"){
        new_image("cloud.jpg");
        console.log("C");
    }
    if (keypressed=="68"){
        new_image("dark_green.png");
        console.log("D");
    }
    if (keypressed=="71"){
        new_image("ground.png");
        console.log("G");
    }
    if (keypressed=="76"){
        new_image("light_green.png");
        console.log("L");
    }
    if (keypressed=="82"){
        new_image("roof.jpg");
        console.log("R");
    }
    if (keypressed=="84"){
        new_image("trunk.jpg");
        console.log("T");
    }
    if (keypressed=="85"){
        new_image("unique.png");
        console.log("U");
    }
    if (keypressed=="89"){
        new_image("yellow_wall.png");
        console.log("Y");
    }
}
function up(){
if (player_Y>=0){
player_Y=player_Y-block_imageheighgth;
console.log("block image height ="+block_imageheighgth);
console.log("when up arrow is presed X="+player_X+"Y="+player_Y);
canvas.remove(player_image);
player_update();
}
}
function down(){
    if (player_Y<=500){
        player_Y=player_Y+block_imageheighgth;
        console.log("block image height ="+block_imageheighgth);
console.log("when down arrow is presed X="+player_X+"Y="+player_Y);
canvas.remove(player_image);
player_update();
    }
}
function left(){
    if (player_X>=0){
        player_X=player_X-block_imagewidth;
        console.log("block image widht ="+block_imagewidth);
console.log("when left arrow is presed X="+player_X+"Y="+player_Y);
canvas.remove(player_image);
player_update();
    }
}
function right(){
    if (player_X<=900){
        player_X=player_X+block_imagewidth;
        console.log("block image widht ="+block_imagewidth);
console.log("when right arrow is presed X="+player_X+"Y="+player_Y);
canvas.remove(player_image);
player_update();
    }
}