$(document).ready(function(){
	
//Link menu icon
	$('#Link').hover(function(){
		$(this).css({
			"background-color": "#CB1F55"},
		$(this).children().css({
			"color": "#ECF0F1"
		}));		
	}, function(){
		$(this).css({"background-color": "none"},
		$(this).children().css({
			"color": "none"
		}));		
	});
	
//Submit button
	$('.submit-button').click(function(){
		$('#form').toggle();
	});

//Styling submit button
	$('.submit-button').hover(function(){
		$(this).addClass('active');
	}, function() {
		$(this).removeClass('active');
	}
	);
	
//Social icons - animation
	$('.social').hover(function(){
		$(this).animate({
			width: "40px",
			height: "40px"
		});
		}, function(){
		$(this).animate({
			width: "32px",
			height: "32px"
		});
		});
			
//Dynamic page load "page2.html"
	$('#Link').click(function(){
		$('body').load("page2.html");
	});

//Adding post on subpage "page2.html"
	$('.form-send-button').click(function(event){
		var post = $('.status-box').val();
		$('<li>').text(post).prependTo('.posts');
		$('.status-box').val('');
		$('.counter').text(140);
		$('.form-send-button').addClass('disabled');
		
	});
	
	$('.status-box').keyup(function(event) {
		var postLength = $(this).val().length;
		var charLeft = 140 - postLength;
		$('.counter').text(charLeft);
		
		if(charLeft < 0){
			$('.form-send-button').addClass('disabled');
		}
		else if(charLeft === 140){
			$('.form-send-button').addClass('disabled');
		}
		else {
		$('.form-send-button').removeClass('disabled');
		}
	});
		$('.form-send-button').addClass('disabled');


//Checking empty values in form
	$("#submit").click(function() {
		var isValid = true;
		$('input[type="text"], input[type="email"]').each(function(){
			if ($.trim($(this).val()) ==''){
				isValid = false;
				$(this).addClass('empty');
				alert("Please enter all the required information");
			}else {
				$(this).removeClass('empty');	
		}		
		});
		if (isValid == true){
			$('input[type="text"], input[type="email"], textarea').fadeOut('slow').val('');
			$("#submit").val("Great job!");
		}
	});

//ReadMore icons
	$(".read-more").hover(function(){
		$(this).css({
			"background-color": "#3A3D8F",
			"border-color": "white"});
		$(this).children().css(
			"color", "white"
		);
	}, function(){
		$(this).css({
			"background-color": "transparent",
			"border-color": "#3A3D8F"});
		$(this).children().css(
			"color", "#3A3D8F"
		);
	});
	
//Images on page
	$('.image').hover(function(){
		$(this).animate({opacity: "0.7"}, 500);
	}, function(){
		$(this).animate({opacity: "1"}, 500);
		});
	
//Gallery appearing
	$('.break').click(function(){
		$('.g-container').fadeIn();
	});		

	
//Slide gallery
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
        }, 400, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 400, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('p.arrow_prev').click(function () {
        moveLeft();
    });

    $('p.arrow_next').click(function () {
        moveRight();
    });
	
});
	

