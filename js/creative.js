(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 57)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 57
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Scroll reveal calls
  window.sr = ScrollReveal();
  sr.reveal('.sr-icons', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 200);
  sr.reveal('.sr-button', {
    duration: 1000,
    delay: 200
  });
  sr.reveal('.sr-contact', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 300);
	
	

	//Simple custom handler for the image-display section of my project modals. Works automatically for each modal without having to individually set which images belong to which modal and whatnot
	$('.project-img').click(function(e) {
		console.log($(e.target).attr('src')); 
		
		//check if element has a 'video' data-attribute, if not then set the src of the .project-img-main img in this modal to the source of the image clicked
		if ($(e.target).data("video") == null) { 
			//Set main-img src to the src of the clicked img
			$(e.target).parent().children('.project-img-display').children('.project-img-main').attr('src', $(e.target).attr('src'));

			//Set the href of the link in the main-img to the src of clicked img
			$(e.target).parent().children('.project-img-display').attr('href', $(e.target).attr('src'));

			//Remove the img-active class from currently active img
			$(e.target).parent().children('.img-active').removeClass('img-active');

			//Add img-active class to the clicked img
			$(e.target).addClass('img-active');
			
		//if the element DOES have a 'video' data-attribute, then set the iframe in this modals source to the url in the data-video attribute
		} else { 
			console.log("setting source of:", $(e.target).parent().children('.project-img-display').children('.project-iframe-wrapper').children('.project-iframe'));
			console.log("to:", $(e.target).data("video"));
			
			//find the project-iframe element, set it's source to the data-video attribute of clicked image
			$(e.target).parent().children('.project-img-display').children('.project-iframe-wrapper').children('.project-iframe').attr('src', $(e.target).data("video"));
			
			//Remove the img-active class from currently active img
			$(e.target).parent().children('.img-active').removeClass('img-active');

			//Add img-active class to the clicked img
			$(e.target).addClass('img-active');
		}
	});
  

})(jQuery); // End of use strict














