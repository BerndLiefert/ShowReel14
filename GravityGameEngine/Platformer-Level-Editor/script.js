
var myimage = new Image;
myimage.src = "stones.png";
var tile = [];

var myimg = new Image;
myimg.src = "stones.png";

var globalX = new Number;
var globalY = new Number;

var selectimg = new Image;
selectimg.src = "tile.png";



function tiles (x, y, xsource, ysource, width, height){
  this.x = x; 
  this.y = y;
  
  this.xsource = xsource;
  this.ysource = ysource;
  
  this.height = height; 
  this.width = width;
  
  var mycanvas = document.getElementById('mycanvas');
  var context = mycanvas.getContext("2d");
  
  context.drawImage(myimage, this.xsource, this.ysource, this.width, this.height, x, y, this.width, this.height);
 
};

function ready(){

var mypreview = document.getElementById('mypreview');
var mycontext = mypreview.getContext('2d');
	
	//mycontext.drawImage(myimage,0,0);
	
	var level = [
	[1, 1, 1, 1, 1, 1],
	[1, 0, 0, 0, 0, 1],
	[1, 0, 1, 2, 1, 1],
	[1, 0, 1, 2, 1, 1],
	[1, 0, 0, 2, 1, 1],
	[1, 1, 1, 1, 1, 1],
	
	];
	
var blockx = 0;
var blocky = 0;
var k = 0;
	for(var i=0; i<level.length; i++){
		for(var j=0; j<level[i].length; j++){
			
			if(level[i][j] == 1){
				tile[k] = new tiles(blockx, blocky, 0, 0, 16, 16);
				blockx = blockx + 16;
			}else if(level[i][j] == 2){
				tile[k] = new tiles(blockx, blocky, 16, 0, 16, 16);
				blockx = blockx + 16;
			} else {
				tile[k] = new tiles(blockx, blocky, 32, 0, 16, 16);
				blockx = blockx + 16;
			}
			k++;
		}
			blockx = 0;
			blocky = blocky + 16;
			
	}

for(var a = 0; a < tile.length; a++){	
console.log(tile[a]);
}

console.log(tile.length);





gpos();
gpospreview();

function gpos(){

var canvas = document.getElementById('mycanvas');

canvas.addEventListener("mousedown", getPosition, false);

function getPosition(event)
      {
        var x = new Number();
        var y = new Number();
        var canvas = document.getElementById("mycanvas");

        if (event.x != undefined && event.y != undefined)
        {
          x = event.x;
          y = event.y;
        }
        else // Firefox method to get the position
        {
          x = event.clientX + document.body.scrollLeft +
              document.documentElement.scrollLeft;
          y = event.clientY + document.body.scrollTop +
              document.documentElement.scrollTop;
        }

        x -= canvas.offsetLeft;
        y -= canvas.offsetTop;
		
		var xblock = Math.round(x / 16);
		var yblock = Math.round(y / 16);
		console.log(xblock);
		console.log(yblock);
		
		var context = canvas.getContext("2d");
		
		
		context.drawImage(myimg, globalX*16, globalY*16, 16, 16, xblock * 16, yblock * 16 , 16, 16);
		
      }

}


/* ====================================================================================================== */

function gpospreview(){

var c = document.getElementById('mypreview');

c.addEventListener("mousedown", getPosition, false);

function getPosition(event)
      {
        var x = new Number();
        var y = new Number();
        var thiscanvas = document.getElementById("mypreview");

        if (event.x != undefined && event.y != undefined)
        {
          x = event.x;
          y = event.y;
        }
        else // Firefox method to get the position
        {
          x = event.clientX + document.body.scrollLeft +
              document.documentElement.scrollLeft;
          y = event.clientY + document.body.scrollTop +
              document.documentElement.scrollTop;
        }

        x -= thiscanvas.offsetLeft;
        y -= thiscanvas.offsetTop;
		
		var xblock = Math.round(x / 16);
		var yblock = Math.round(y / 16);
		console.log(xblock);
		console.log(yblock);
		
		var precontext = thiscanvas.getContext("2d");
		
		globalX = xblock;
		globalY = yblock;
		
		precontext.clearRect(0,0,128,128);
		precontext.drawImage(selectimg, xblock*16, yblock*16, 16, 16);
		//context.drawImage(myimg, globalX, globalY, 16, 16, xblock * 16, yblock * 16 , 16, 16);
		
      }


}









//end ready() function 
}










