$(document).ready(function(){

var img = ['example1.png','example2.png', 'example3.png', 'example4.png'];
var file = "";
var angle = 0;

	for(var i=0; i<10; i++){
	
		file = img[random(0,3)];
	
		$('#trigger').append('<div class="stack" id="'+i+'" style="z-index: '+i+'; -webkit-transform: rotate('+angle+'deg); transform: rotate('+angle+'deg)"><div class="description" id="name'+ i +'" style="z-index:' + i + '"><span class="desc">Image: '+ file +'</span></div><img src="'+ file +'" width="128px" height="64px"></div>');
	
	
		
	
	}


	var toggle = false;
	$('#trigger').click(function(){

		if(toggle == false){
		
			var angle1 = 0;
			
			for(var i = 0; i<10; i++){
					
				angle1 = i*10;	
				$('#'+i).css({
				'-webkit-transform' : 'rotate('+angle1+'deg)',
				'transform' : 'rotate('+angle1+'deg)'
				});
				$('.desc').css('display','inline');
			}
			
		toggle = true;
		}else{

			for(var i = 0; i<10; i++){
				$('#'+i).css({
				'-webkit-transform' : 'rotate(0deg)',
				'transform' : 'rotate(0deg)'
				});
				$('.desc').css('display','none');
			}
		toggle = false
	}

});

function random(min, max){

	var number = Math.floor(Math.random() * (max - min) + min);
		
	return number;
	
}


});