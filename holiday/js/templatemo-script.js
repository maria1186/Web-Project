/**
 *	www.templatemo.com
 */

/* HTML document is loaded. DOM is ready.
-----------------------------------------*/
$(document).ready(function(){

	// Mobile menu
	$('.mobile-menu-icon').on('click',function(){
		$('.tm-nav').toggleClass('show');
	});
  
  	// http://stackoverflow.com/questions/2851663/how-do-i-simulate-a-hover-with-a-touch-in-touch-enabled-browsers
  	$('body').on('touchstart', function() {});
});

$(function() {

	$('#hotelCarTabs a').on('click',function (e) {
	  e.preventDefault()
	  $(this).tab('show')
	})

	// $('.date').datetimepicker({
	// 	format: 'MM/DD/YYYY'
	// });
	// $('.date-time').datetimepicker();

	// https://css-tricks.com/snippets/jquery/smooth-scrolling/
	  $('a[href*=\"#"]:not([href=\"#"])').on('click',function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		  if (target.length) {
			$('html,body').animate({
			  scrollTop: target.offset().top
			}, 1000);
			return false;
		  }
		}
	  });
});

// Load Flexslider when everything is loaded.
$(window).on('load',function() {	  		
	//	For images only
				$('.flexslider').flexslider({
					controlNav: false
				});
	
	
			  });


			  $(window).on('load',function(){
				// Flexsliders
				  $('.flexslider.flexslider-banner').flexslider({
					controlNav: false
				});
				  $('.flexslider').flexslider({
					animation: "slide",
					directionNav: false,
					slideshow: false
				  });
			});