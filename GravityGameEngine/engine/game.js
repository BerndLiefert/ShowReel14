var gameCanvas = document.getElementById('graphics');
var ctx = gameCanvas.getContext('2d');
var player = new Element('IMAGES/myplayer_sprite_2.png',32,0,16,32,false);

var shoot = [];
var counter = 0;

var isLeft = false;
var isRight = false;
var isSpace = false;
var isfire = false;

var direction = false;

//Bilder
var myfire = new Image();
myfire.src = 'IMAGES/shoot.png';

var close = new Image();
close.src = 'IMAGES/close.png'


player.Gravity = 20;
player.Weight = 0.1;

var currentImg = 0;
var Xpos = [0,16,32];
var Ypos = 0;
var Xdraw = 0;

/* Level */

var block = [];

var level = [
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],
[1,0,0,0,0,0,0,0,0,1,1,0,0,3,3,3,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],
[1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1],
[1,3,3,3,3,0,0,0,0,0,0,2,2,2,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[1,0,0,0,3,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[1,0,0,0,3,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[1,1,1,1,1,1,2,2,1,1,2,2,2,1,2,1,1,2,2,0,0,1,1,1,1,1,1,1,1,1,1,1]
];


var bx = 0;
var by = 0;
var bindex = 0;
for(var n = 0; n < level.length; n++){
 for(var m = 0; m < level[n].length; m++){
 if(level[n][m] == 1){
 block[bindex] = new Element('IMAGES/tiles1.png',bx,by,16,16, 0, 0);
 console.log(block[bindex]); 
 bindex++;
 maxBlock = bindex;
 bx = bx + 16;
 console.log("bx: " + bx + " / by: " + by);
 }else if(level[n][m] == 2){

 block[bindex] = new Element('IMAGES/tiles1.png',bx,by,16,16, 16, 0);
 bindex++;
 maxBlock = bindex;
 bx = bx + 16;

 }else if(level[n][m] == 3){

 block[bindex] = new Element('IMAGES/tiles1.png',bx,by,16,16, 32, 0);
 bindex++;
 maxBlock = bindex;
 bx = bx + 16;

 } else {
 bx = bx + 16;
 }
 }
bx = 0;
by = by + 16;
}










/* ================================================ */




















setInterval(function(){draw()}, 100);

function draw(){

if(isRight || isLeft){
console.log('draw');
if(currentImg == 3){
currentImg = 0;
}
}

if(!isRight && !isLeft){
currentImg = 0;
//console.log('standing');
}

if(isRight){
Ypos = 0;
}

if(isLeft){
Ypos = 32;
}


Xdraw = Xpos[currentImg];
currentImg++;
//console.log(Xdraw);





//end function draw
}


//EVENTS
function keyDown(e){
//LEFT
if(String.fromCharCode(e.keyCode) == "%") {isLeft = true}
if(String.fromCharCode(e.keyCode) == "'") {isRight = true}
if(String.fromCharCode(e.keyCode) == " ") {isSpace = true}
if(e.keyCode == 88) {isfire = true}
}
function keyUp(e){
if(String.fromCharCode(e.keyCode) == "%") {isLeft = false}
if(String.fromCharCode(e.keyCode) == "'") {isRight = false}
if(String.fromCharCode(e.keyCode) == " ") {isSpace = false}
if(e.keyCode == 88) {isfire = false}
}


//Mainloop
MainLoop();
function MainLoop(){
player.Y += player.Velocity_Y; 
player.X += player.Velocity_X;




/* move Tiles */
if(player.X > gameCanvas.width/2-32){
for(var f=0;f<maxBlock;f++){
block[f].X -= player.Velocity_X*2;
}}else{
player.X += player.Velocity_X; 
}




/* ============================ */



for(var j=0; j<shoot.length;j++){
if(shoot[j].dir==false){
shoot[j].X += shoot[j].Velocity_X;
console.log('fire right');
}else{
shoot[j].X -= shoot[j].Velocity_X;
console.log('fire left');
}
}



//Logic
if(!isLeft || !isRight){
player.Velocity_X = 0;
}
if (isLeft){
player.Velocity_X = -2;
}

if (isRight){
player.Velocity_X = 2;
}

if (!isLeft && !isRight && player.Velocity_Y == 0){
player.Velocity_X = 0;
}

if(player.Velocity_Y < player.Gravity){
player.Velocity_Y += player.Weight;
}


if(isRight){
player.dir = false;
}

if(isLeft){
player.dir = true;
}

//fire
if(isfire){

if(player.dir == false){
direction = false;
}
if(player.dir == true){
direction = true;
}


shoot[counter] = new Element('IMAGES/shoot.png',-16, 0,16,16, 0, 0, direction);

shoot[counter].Velocity_X = 4;
shoot[counter].X = player.X;
shoot[counter].Y = player.Y+player.Height/2;
isfire = false;


counter++;

//end is fire statement
}













//Collision Up
for(var a = 0; a < maxBlock; a++){
if(player.Collision(block[a]) == "b"){
player.Y = block[a].Y - player.Height;
player.Velocity_Y = 0;

document.getElementById('info').innerHTML = "Player Y: " + player.Y;
}
}


//Collision Down
for(var a = 0; a < maxBlock; a++){
if(player.Collision(block[a]) == "t"){
player.Velocity_Y = 1;
isSpace=false;
var info = document.getElementById('info');
info.innerHTML = "it works! top";
}
}


//Collision Left
for(var a = 0; a < maxBlock; a++){
if(player.Collision(block[a]) == "l"){
var info = document.getElementById('info');
info.innerHTML = "it works! left";
player.X = block[a].X + block[a].Width;
player.Veloctiy_X = 0;
isLeft = false;
}
}

//Collision Right
for(var a = 0; a < maxBlock; a++){
if(player.Collision(block[a]) == "r"){
var info = document.getElementById('info');
info.innerHTML = "it works! right";
player.X = block[a].X - player.Width;
player.Veloctiy_X = 0;
isRight = false;
}
}









//JUMP
if(isSpace && player.Velocity_Y == 0){
player.Velocity_Y = -4;
}
  
//Rendering
ctx.clearRect(0,0,gameCanvas.width,gameCanvas.height);
//imageObj, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight
ctx.drawImage(player.Sprite,Xdraw,Ypos,16,32,player.X,player.Y,16,32);

//Rendering Tiles
for(var j=0; j<maxBlock; j++){
ctx.drawImage(block[j].Sprite,block[j].sourcex,block[j].sourcey,16,16,block[j].X,block[j].Y,16,16);
}






//Render fire

for(var i=0; i<shoot.length;i++){
ctx.drawImage(shoot[i].Sprite,shoot[i].X,shoot[i].Y);
}









































setTimeout(MainLoop,1000/60);
}

function Element(img, x, y, width, height, sourcex, sourcey, direction){
this.Sprite = new Image();
this.Sprite.src = img;
this.X = x;
this.Y = y;

this.dir = direction;

this.Width = width;
this.Height = height;

this.Velocity_X = 0;
this.Velocity_Y = 0;
this.Gravity = 0;
this.Weight = 0;

this.sourcex = sourcex;
this.sourcey = sourcey;


this.Collision = function(obj){

    // get the vectors to check against
    var vX = (this.X + (this.Width / 2)) - (obj.X + (obj.Width / 2));
        vY = (this.Y + (this.Height / 2)) - (obj.Y + (obj.Height / 2));
        // add the half widths and half heights of the objects
        hWidths = (this.Width / 2) + (obj.Width / 2);
        hHeights = (this.Height / 2) + (obj.Height / 2);
        

    // if the x and y vector are less than the half width or half height, they we must be inside the object, causing a collision
    if (Math.abs(vX) < hWidths && Math.abs(vY) < hHeights) {
        // figures out on which side we are colliding (top, bottom, left, or right)
        var oX = hWidths - Math.abs(vX),
            oY = hHeights - Math.abs(vY);
        if (oX >= oY) {
            if (vY > 0) {
                return  "t";
                
            } else {
                return "b";
                
            }
        } else {
            if (vX > 0) {
                return "l";
               
            } else {
                return "r";
                
            }
        }
    }
    
}












}