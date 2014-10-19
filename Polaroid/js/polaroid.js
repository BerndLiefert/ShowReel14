$(document).ready(function(){

var picture = ['example1.png','example2.png','example3.png'];

for(var i = 1; i <= 10; i++){
$('body').append('<div id="'+i+'" class="box" style="transform: rotate('+random(0,360)+'deg); left: '+random(0,800)+'px; top: '+random(0,400)+'px; -webkit-transform: rotate('+random(0,360)+'deg); z-index='+i+'"><div class="image" style="background:url(' + picture[random(0, 3)] + '); background-size:108px 88px;"></div></div>');
}

var min = 0;
var max = 0;

function random(min, max){
var number = Math.random();
number *= max;
number += min;
number = Math.floor(number);
return number;
}


    $(document).mousemove(function(event) {

		$('#mousepos').text('pos-x:' + event.pageX + ' / pos-y: ' + event.pageY);
    });


for (var i = 1; i <= 10; i++){
$('#' + i).draggable();
}	
	
});