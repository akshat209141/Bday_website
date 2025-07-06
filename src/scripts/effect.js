$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});
$('document').ready(function(){
		var vw;
		$(window).resize(function(){
			 vw = $(window).width()/2;
			$('#card *').hide();
			$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
			$('#b11').animate({top:240, left: vw-350},500);
			$('#b22').animate({top:240, left: vw-250},500);
			$('#b33').animate({top:240, left: vw-150},500);
			$('#b44').animate({top:240, left: vw-50},500);
			$('#b55').animate({top:240, left: vw+50},500);
			$('#b66').animate({top:240, left: vw+150},500);
			$('#b77').animate({top:240, left: vw+250},500);
		});


	$('#initial').click(function(){
		$(this).fadeOut('slow').delay(50).promise().done(function(){
			$('#turn_on').fadeIn('slow');
		});
	});

	$('#play').click(function(){
		// changeColor();
		var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').css('backgroud-color','#FFF');
		$('body').addClass('peach-after');
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#bannar_coming').fadeIn('slow');
		});
	});

	$('#turn_on').click(function(){
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach');
		$("#welcome_dance").remove();
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#play').fadeIn('slow');
		});
	});

	$('#bannar_coming').click(function(){
		$('#banner').css("display", "block");
		$('.bannar').addClass('center');
		$('.bannar').addClass('bannar-come');
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#balloons_flying').fadeIn('slow');
		});
	});

	function loopOne() {
		var randleft = Math.floor((Math.random() * $(window).width()) + 1);
		var randtop =  Math.floor((Math.random() * $(window).height()) + 1);
		$('#b1').animate({left:randleft,bottom:randtop},8000,function(){
			loopOne();
		});
	}
	function loopTwo() {
		var randleft = Math.floor((Math.random() * $(window).width()) + 1);
		var randtop =  Math.floor((Math.random() * $(window).height()) + 1);
		$('#b2').animate({left:randleft,bottom:randtop},8000,function(){
			loopTwo();
		});
	}
	function loopThree() {
		var randleft = Math.floor((Math.random() * $(window).width()) + 1);
		var randtop =  Math.floor((Math.random() * $(window).height()) + 1);
		$('#b3').animate({left:randleft,bottom:randtop},8000,function(){
			loopThree();
		});
	}
	function loopFour() {
		var randleft = Math.floor((Math.random() * $(window).width()) + 1);
		var randtop =  Math.floor((Math.random() * $(window).height()) + 1);
		$('#b4').animate({left:randleft,bottom:randtop},8000,function(){
			loopFour();
		});
	}
	function loopFive() {
		var randleft = Math.floor((Math.random() * $(window).width()) + 1);
		var randtop =  Math.floor((Math.random() * $(window).height()) + 1);
		$('#b5').animate({left:randleft,bottom:randtop},8000,function(){
			loopFive();
		});
	}

	function loopSix() {
		var randleft = Math.floor((Math.random() * $(window).width()) + 1);
		var randtop =  Math.floor((Math.random() * $(window).height()) + 1);
		$('#b6').animate({left:randleft,bottom:randtop},8000,function(){
			loopSix();
		});
	}
	

	$('#balloons_flying').click(function(){
		$('.balloon-border').animate({top:-500},8000);
		$('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');
		// $('#b3').addClass('balloons-rotate-behaviour-two');
		// $('#b4').addClass('balloons-rotate-behaviour-one');
		// $('#b5').addClass('balloons-rotate-behaviour-one');
		// $('#b6').addClass('balloons-rotate-behaviour-two');
		// $('#b7').addClass('balloons-rotate-behaviour-one');
		loopOne();
		loopTwo();
		loopThree();
		loopFour();
		loopFive();
		loopSix();
		
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#cake_fadein').fadeIn('slow');
		});
	});	

	$('#cake_fadein').click(function(){
		$('#cake_pink').css("display", "block");
		$('#candle').css("display", "block");

		$('#cake_pink').fadeIn('slow');
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#blow_candle').fadeIn('slow');
		});
	});
	let birthdayAudio = document.getElementById('happy_birthday_audio');
	$('#blow_candle').click(function(){
		$('#candle').fadeOut('fast');  // Blow out the candle
		var audio = $('.song')[0];
		audio.pause();
		
		birthdayAudio.play();

		$(this).fadeOut('slow');  // Hide blow candle button

		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#cake_cut').fadeIn('slow');  // Show DJ time after song ends
		});
	});

	
 
		
	$('#cake_cut').click(function(){

		$('#cake_cutt').css("display", "block");
		$('body').addClass('peach-disco');
		// $('#f1').addClass('dance-one')
		// $('#f3').addClass('dance-two')
		// $('#f2').addClass('dance-one')
		// $('#f4').addClass('dance-two')
		// $('#f5').addClass('dance-one')
		// $('#f6').addClass('dance-one')
		// $('#f7').addClass('dance-two')
		// $('#f8').addClass('dance-two')
		// $('#f11').addClass('dance-two')
		//  $('#f12').addClass('dance-two')
		// $('#self').addClass('dance-one')
		//  $('#f9').addClass('dance-one')
		// $('#f10').addClass('dance-one')
		
		$('#bulb_yellow').addClass('bulb-glow-yellow-disco');
		$('#bulb_red').addClass('bulb-glow-red-disco');
		$('#bulb_blue').addClass('bulb-glow-blue-disco');
		$('#bulb_green').addClass('bulb-glow-green-disco');
		$('#bulb_pink').addClass('bulb-glow-pink-disco');
		$('#bulb_orange').addClass('bulb-glow-orange-disco');
		let vw = $(window).width() / 6;
		 count=6

		$('#b1,#b2,#b3,#b4,#b5,#b6').stop();
		$('#b1').attr('id','b11');
		$('#b2').attr('id','b22')
		$('#b3').attr('id','b33')
		$('#b4').attr('id','b44')
		$('#b5').attr('id','b55')	
		$('#b6').attr('id','b66')
		$('#b11').animate({top:240, left: vw * 0}, 500);
		$('#b22').animate({top:240, left: vw * 1}, 500);
		$('#b33').animate({top:240, left: vw * 2}, 500);
		$('#b44').animate({top:240, left: vw * 3}, 500);
		$('#b55').animate({top:240, left: vw * 4}, 500);
		$('#b66').animate({top:240, left: vw * 5}, 500);
		$('.balloons').css('opacity','0.9');
		$('.balloons h2').fadeIn(3000);
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#story').fadeIn('slow');
		});
	});
	
	$('#story').click(function(){
		$(this).fadeOut('slow');
		$('#card').css("display", "block");
		$('#card').show();
		$('#card').css('position', 'absolute');
		$('#card').css('z-index', 9999);
		$('.cake').fadeOut('fast').promise().done(function(){
			$('.message').fadeIn('slow');
		});
		$('#card').fadeIn('slow');

		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#picture_time').fadeIn('slow');
		});
	
		
	});

	$('#picture_time').click(function(){
		window.location.replace("src/html/surprise.html")
		
	});
});




