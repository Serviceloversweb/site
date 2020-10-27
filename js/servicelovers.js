(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 48)
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
    offset: 54
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 200) {
          $("#mainNav").addClass("navbar-shrink");
          $(".navbar-brand img").attr("src", "img/sl-logo-dark.svg");
          $(".dropdown-toggle img").attr("src", "img/ico-globe-dark.svg");
          $(".dropdown-toggle").css("color", "#666981"); 
          $(".scroll-hint").fadeOut();
    } else {
          $("#mainNav").removeClass("navbar-shrink");
          $(".navbar-brand img").attr("src", "img/sl-logo-white.svg");
          $(".dropdown-toggle img").attr("src", "img/ico-globe-bright.svg");
          $(".dropdown-toggle").css("color", "#fff");
          $(".scroll-hint").fadeIn();
    }
  };
  
  function navBarController() {
  }
  
  navBarController();
  
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict