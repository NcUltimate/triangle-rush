$(function() {
	setTimeout(function() {
		$('.data-container').slideDown(400);
	}, 400);
	$('.post').click(function(event) {
		var dc = $(this).find('.data-container');
		toggle_slide(dc);
	});
	$('.page-header').click(function(event) {
		toggle_slide($('.page-subtitle'));
	});
});
function toggle_slide(el) {
	if(el.css('display') == 'none')
		el.slideDown(400);
	else
		el.slideUp(400);
}