(function ($) {
	"use strict";

	jQuery(document).ready(function ($) {


		$(".testimonial-slide").owlCarousel({
			items:3,
			loop:true,
			autoplay:false,
			dots:false,
			center:true,
			nav:true,
			navText:["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            autoplayTimeout: 3000,
            smartSpeed: 1000,
            responsive: {
                0: {
                    items: 1
                },
                767: {
                    items: 2,
                },
                992: {
                    items: 3
                }
            }
		});

		$(".scroll-top").click(function () {
			$("html,body").animate({
				scrollTop: 0
			}, 1000);
		});
		$(window).scroll(function () {
			if ($(this).scrollTop() > 180) {
				$(".scroll-top").fadeIn();
			} else {
				$(".scroll-top").fadeOut();
			}
		});

		jQuery('nav').meanmenu({
			meanMenuContainer: '.mobile-menu-container',
			meanScreenWidth: "993"
		});




	});


	jQuery(window).load(function () {


	});


}(jQuery));
