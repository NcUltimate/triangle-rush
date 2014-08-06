var collapsed = false;
$(function() {
	// setTimeout(function() {
	// 	$('.post').toggleClass('minified');
	// 	$('.data-container').slideDown(400);
	// }, 800);
	$('.post').click(function(event) {
		var dc = $(event.currentTarget).find('.data-container');
		toggle_info($(this), dc);
	});
	$('.page-header').click(function(event) {
		toggle_info($(this), $('.page-subtitle'));
	});
	$('.collapse-all').click(function() {
		var text;
		if(!collapsed) {
			$('.page-subtitle, .data-container').slideUp(400);
			$('.page-header, .post').addClass('minified');
			text = '+';
		}
		else {
			$('.data-container').slideDown(400);
			$('.post').removeClass('minified');
			text = '-';
		}
		$('.collapse-all span').fadeOut(100, function() {
			$('.collapse-all span').html(text);
			$('.collapse-all span').fadeIn(100);
		});
		collapsed = !collapsed;
	});
});

function toggle_info(par, el) {
	if(el.css('display') == 'none') {
		par.removeClass('minified');
		el.slideDown(400);
	}
	else {
		par.addClass('minified');
		el.slideUp(400);
	}
}