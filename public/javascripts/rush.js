$(function() {
	// setTimeout(function() {
	// 	$('.post').toggleClass('minified');
	// 	$('.data-container').slideDown(400);
	// }, 800);
	$('.img-container, .title').click(function(event) {
		var dc = $(event.currentTarget).siblings('.data-container');
		toggle_info(dc);
		$(event.currentTarget).parent().toggleClass('minified');
	});
	$('.page-header').click(function(event) {
		toggle_info($('.page-subtitle'));
	});
	$('.data-container').click(function(event) {
		$(this).toggleClass('aside');
	});
});
function toggle_info(el) {
	if(el.css('display') == 'none')
		el.slideDown(400);
	else
		el.slideUp(400);
}