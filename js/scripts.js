$(document).ready(function(){
	// banner carousel
	$('.banners').owlCarousel({
		items:1,
		loop:true,
		nav:false,
		dots:true,
		autoplay:true,
		autoplayTimeout:5000,
	});

	// search cilick function
	$('.search-btn').click(function(){
        $('.add-class').toggleClass('searchbox');
      });

	// menu slide icon
	$('.icon-menu').click(function(){
		$('.menu ul').slideToggle(1000);

		return false;
	});

	// Global show more search-btn
	$('.show-more-btn').click(function(){
		$('.global-show-more-btn').toggleClass('show-more-items')

		return false;
	});



	// works-item carousel
	$('.works-items').owlCarousel({
		items:3,
		loop:true,
		margin:30,
		dots:false,
    	nav:true,
    	responsive:{
	        0:{
	            items:1
	        },
	        768:{
	            items:3
	        }
	    }

	});

	// about single-works-items
	$('.about-single-works-items').owlCarousel({
		items:1,
		loop:true,
		margin:30,
		dots:false,
    	nav:true,

	});


	// works-popup
	$('.works-popup, .isotop-popup, .protfolio-popup').magnificPopup({
	  type: 'image',
	  gallery:{
	    enabled:true
	  }
	});

	// testimonial
	$('.testimonials').owlCarousel({
		items:1,
		nav:false,
		dots:true,
		loop:true,
		autoplay:1000
	});

	// knob js
	
      $('.pie_progress').asPieProgress({
        namespace: 'pie_progress'
      });
        $('.pie_progress').asPieProgress('start');



        // portfolio Single
        $('.single-about-img-items').owlCarousel({
        	items:1,
        	loop:true,
        	nav:true,
        	autoplay:1000,
        	dots:false
        });
        // $('.project-title-carousel').owlCarousel({
        // 	items:1,
        // 	loop:true,
        // 	nav:true, 
        // 	dots:false
        // });

        // mixitup
        var mixer = mixitup('.masonry-portfolio');

        // single blog letest works
});