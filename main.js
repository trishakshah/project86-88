var canvas=new fabric.Canvas('myCanvas');
var blockWidth=30;
var blockHeight=30;
var playerX=0;
var playerY=0;
var playerObject="";
var blockImage="";

function update(){
    fabric.Image.fromURL("https://i.postimg.cc/zDwfFdYY/player.png"),function(Img){
        playerObject=Img;
        playerObject.scaleToWidth(150);
        playerObject.scaleToHeight(150);
        playerObject.set({
            top:playerY,
            left:playerX
        });
        canvas.add(playerObject);
    });
}
function newImage(get_image){
    fabric.Image.fromURL(get_image,function(Img){
    blockImage= Img;
    blockImage.scaleToWidth(blockWidth);
    blockImage.scaleToHeight(blockHeight);
    blockImage.set({
        top:playerY,
        left:playerX
    });
    canvas.add(blockImage);
});}
window.addEventListener("keydown",mykeydown);

function mykeydown(){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if (e.shiftKey==true&&keyPressed=='80'){
        console.log("P and shift pressed.");
        blockWidth=blockWidth+10;
        blockHeight=blockHeight+10;
        document.getElementById("currentWidth").innerHTML=blockWidth;
        document.getElementById("currentHeight").innerHTML=blockHeight;
    }
    if (e.shiftKey==true&&keyPressed=='77'){
        console.log("M and shift key pressed.");
        blockWidth=blockWidth-10;
        blockHeight=blockHeight-10;
        document.getElementById("currentWidth").innerHTML=blockWidth;
        document.getElementById("currentHeight").innerHTML=blockHeight;
    }
    if (keyPressed=='70'){
        newImage('hulk_face.png');
        console.log("F pressed.")
    }
    if (keyPressed=='66'){
        newImage('hulkd_body.png');
        console.log("B pressed.")
    }
    if (keyPressed=='76'){
        newImage('hulk_legs.png');
        console.log("L pressed.")
    }
    if (keyPressed=='70'){
        newImage('hulk_right_hand.png');
        console.log("R pressed.")
    }
    if (keyPressed=='72'){
        newImage('hulk_left_hand.png');
        console.log("H pressed.")
    }
    if (keyPressed=='38'){
        up();
        console.log("Up pressed.");
    }
    if (keyPressed=='40'){
        down();
        console.log("Down pressed.");
    }
    if (keyPressed=='37'){
        left();
        console.log("Left pressed.");
    }
    if (keyPressed=='39'){
            right();
            console.log("Right pressed.");
    }
}

function up(){
    if (playerY>=0) {
        playerY=playerY-blockHeight;
        console.log(blockHeight);
        console.log("When up arrow key is pressed, X = "+playerX+", Y = "+playerY);
        canvas.remove(playerObject);
        update();
    }
}

function down(){
    if (playerY>=800) {
        playerY=playerY+blockHeight;
        console.log(blockHeight);
        console.log("When down arrow key is pressed, X = "+playerX+", Y = "+playerY);
        canvas.remove(playerObject);
        update();
    }
}

function left(){
    if (playerX>=0) {
        playerX=playerX-blockHeight;
        console.log(blockHeight);
        console.log("When left arrow key is pressed, X = "+playerX+", Y = "+playerY);
        canvas.remove(playerObject);
        update();
    }
}

function right(){
    if (playerX>=1000) {
        playerX=playerX+blockHeight;
        console.log(blockHeight);
        console.log("When right arrow key is pressed, X = "+playerX+", Y = "+playerY);
        canvas.remove(playerObject);
        update();
    }
}