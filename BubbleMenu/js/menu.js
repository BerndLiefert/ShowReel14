$(document).ready(function(){
var toggle = false;

$('#mtrigger').click(function(){

	if(toggle == false){
	for(var i=0; i<=7; i++){
	 $('#w'+i).css('transform', 'rotate('+i*45+'deg)');
	 $('#w'+i+' a').css('transform', 'rotate(-'+i*45+'deg)');
	 $('#w'+i+' a').addClass('bg');
	};
		

	toggle = true;
	}else{
	for(var i=0; i<=7; i++){
	 $('#w'+i).removeAttr('style');
	 $('#w'+i).css('transform', 'rotate(0deg)!important');
		};
	toggle = false;
	};
	
	
	
});

});






