$(document).ready(function(){
	$('.submit-button').click(function(){
		$('#form').toggle();
	});
	
//Sprawdzanie pól formularza//	
	$("#submit").click(function() {
		var isValid = true;
		$('input[type="text"], input[type="email"]').each(function(){
			if ($.trim($(this).val()) ==''){
				isValid = false;
				$(this).addClass('empty');
		}else {
				$(this).removeClass('empty');	
		}		
		});
		
		if (isValid == true){
			$('input[type="text"], input[type="email"], textarea').fadeOut('slow').val('');
			$("#submit").val("Twoje zgłoszenie zostało wysłane");
	}
	});
});
	
		
		
		
		
		
		
		
		
		
		
/*		var name = $("#name").val();
		var email = $("#email").val();
		var message = $("#message").val();
		var contact = $("#contact").val();
		
		$("#returnmessage").empty(); // To empty previous error/success message.

		// Checking for blank fields.
		if (name == '') {
			$("#name").addClass('empty');
		} else {
			$("#name").removeClass('empty');
		}
});*/
