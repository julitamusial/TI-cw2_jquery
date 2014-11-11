$(document).ready(function(){
	$('.submit-button').click(function(){
		$('#form').toggle();
	});

//Powiększanie ikonek społecznościowych
	$('.social').hover(function(){
		$(this).animate({
			width: "42px",
			height: "42px"
		});
		}, function(){
		$(this).animate({
			width: "32px",
			height: "32px"
		});
		});
			

//Powiększanie submit button//
	$('.submit-button').hover(
	function(){
		$(this).addClass('active');
	}, function() {
		$(this).removeClass('active');
	}
	);
	

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
	
//Obrazki
	$('.image').hover(function(){
		$(this).animate({opacity: "0.7"}, 500);
	}, function(){
		$(this).animate({opacity: "1"}, 500);
		});
	
		

	
//Galeria//
 $('#checkbox').change(function(){
    setInterval(function () {
        moveRight();
    }, 3000);
  });
  
	var slideCount = $('#slider ul li').length;
	var slideWidth = $('#slider ul li').width();
	var slideHeight = $('#slider ul li').height();
	var sliderUlWidth = slideCount * slideWidth;
	
	$('#slider').css({ width: slideWidth, height: slideHeight });
	
	$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
	
    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('p.control_prev').click(function () {
        moveLeft();
    });

    $('p.control_next').click(function () {
        moveRight();
    });

	
	});
	

