jQuery(document).ready(function(){

	// Smooth scroll js

	var scroll = new SmoothScroll('a[href*="#"]', {
		speed: 1000,
		easing: 'easeInCubic'
	});

	// Navbar fixed js

	$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var topbarScroll = $(".hero-section").outerHeight(true);
    if (scroll >= topbarScroll) {
      $(".rid-menu-section").addClass("shrink_header");
    } else {
      $(".rid-menu-section").removeClass("shrink_header");
    }
  });

	// Scroll to top js

  $('.scroll-to-top').click(function() {
   $("html, body").animate({ scrollTop: 0 }, "slow");
  });
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    var topScroll = $('#edu-sec').outerHeight(true);
    if (scroll >= topScroll) {
      $('.scroll-to-top').css('opacity','1');
    } else {
      $('.scroll-to-top').css('opacity','0');
    }
  });

	// Testimonial Carousel

	$(".testimonial-carousel").owlCarousel({
		items: 1,
		margin: 10,
		loop: true,
		dots: true,
		autoplay: true,
		autoplayTimeout: 5000,
		nav: false
	});

	// Preloader js
  $(window).load(function() {
    $(".rid-preloader").fadeOut("slow");;
  });

});
