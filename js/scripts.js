$(function() {
	$('.img-bg').each(function() {
		$(this).parent().css({
			'background': 'url("'+$(this).attr('src')+'") no-repeat center center',
			'background-size': 'cover'
		});
	});
	$('.slider').on('init', function(slick) {
		$(this).find('.slick-dots button').each(function() {
			$(this).text('0'+eval($(this).parent().index()+1));
		});
	}).slick({
		arrows: true,
		dots: true,
		autoplay: true,
		autoplaySpeed: 10000
	});
	$('input, textarea').each(function() {
		$(this).data('holder', $(this).attr('placeholder'));
		$(this).focusin(function() {
			$(this).attr('placeholder', '');
		});
		$(this).focusout(function() {
			$(this).attr('placeholder', $(this).data('holder'));
		});
	});
	$('.reviews .item').on('mouseenter', function() {
		var h = $(this).find('p span').outerHeight();
		$(this).find('p').css({
			height: h
		});
	});
	$('.reviews .item').on('mouseleave', function() {
		$(this).find('p').css({
			height: 144
		});
	});
	$('.tip-icon').on('mouseenter', function(e) {
		$('body').append('<div class="tip-message">'+$('.tip-info[data="'+$(this).attr('data')+'"]').html()+'</div>');
		$('.tip-message').addClass('visible').css({
			left: e.pageX,
			top: e.pageY-$('.tip-message').outerHeight()/2
		}).stop().animate({
			opacity: 1
		}, 200, 'easeOutQuad');
	});
	$('.tip-icon').on('mousemove', function(e) {
		$('.tip-message').css({
			left: e.pageX,
			top: e.pageY-$('.tip-message').outerHeight()/2
		});
	});
	$('.tip-icon').on('mouseleave', function() {
		$('.tip-message').remove();
	});
});