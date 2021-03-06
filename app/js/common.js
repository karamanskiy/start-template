document.addEventListener("DOMContentLoaded", function () {
	// lazy load
	setTimeout(function () {
		$(".js-bg").each(function () {
			$(this).css('background-image', 'url(' + $(this).data("bg") + ')');
		});
		$(".js-img").each(function () {
			$(this).attr('src', $(this).data("src"));
		});
	}, 200);
	// loader
	setTimeout(function () {
		$('body').removeClass('loaded');
	}, 400);
});

/* viewport width */
function viewport() {
	var e = window,
		a = 'inner';
	if (!('innerWidth' in window)) {
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width: e[a + 'Width'], height: e[a + 'Height'] }
};
/* viewport width */

(function () {

	/* components */

	/*
	if($('.styled').length) {
		$('.styled').styler();
	};
	if($('.fancybox').length) {
		$('.fancybox').fancybox({
			margin  : 10,
			padding  : 10
		});
	};
	if($('.slick-slider').length) {
		$('.slick-slider').slick({
			dots: true,
			infinite: false,
			speed: 300,
			slidesToShow: 4,
			slidesToScroll: 4,
			responsive: [
				{
				  breakpoint: 1024,
				  settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				  }
				},
				{
				  breakpoint: 600,
				  settings: "unslick"
				}				
			]
		});
	};
	if($('.scroll').length) {
		$(".scroll").mCustomScrollbar({
			axis:"x",
			theme:"dark-thin",
			autoExpandScrollbar:true,
			advanced:{autoExpandHorizontalScroll:true}
		});
	};
	*/

	/* components */

	//отмена перетаскивания картинок
	$("img, a").on("dragstart", function (e) {
		e.preventDefault();
	});

}());

var handler = function () {
	var viewport_wid = viewport().width;
	var viewport_height = viewport().height;

	// if (viewport_wid <= 991) {

	// }
}

$(window).bind('load', handler);
$(window).bind('resize', handler);
