$(document).ready(function(){
	$('.form-button').click(function(){
		$('.form').toggle();
	});
	
	/*Formularz*/
	$('.f-button').click(function(){
		var addImie = $('#fname').val();
		var addNazw= $('#lname').val();
		var addEmail = $('#email').val();
		var addMess = $('#message').val().length;
		var charactersLeft = 140 - addMess; 
		
		if(addImie === ""){
			$('#r-fname').addClass('empty');
		}else{
			$('#r-fname').removeClass('empty');
		}
		if(addNazw === ""){
			$('#r-lname').addClass('empty');	
		}else{
			$('#r-lname').removeClass('empty');
		}
		if(addEmail === ""){
			$('#r-email').addClass('empty');	
		}else{
			$('#r-email').removeClass('empty');
		};
		if(addMess === ""){
			$('#r-mess').addClass('empty');	
		}else if (charactersLeft == 140){
			$('.f-button').addClass('empty');
		}
		else{
			$('#r-mess').removeClass('empty');
		}
		
	$('input[type=text]').val('');
	
});