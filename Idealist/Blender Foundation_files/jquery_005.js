$(document).ready(function () {  
	var top = $('#col-one-wrapper').offset().top - parseFloat($('#col-one-wrapper').css('marginTop').replace(/auto/, 0));
	var colheight = parseFloat($('#col-one-wrapper').css('height').replace(/auto/, 0));
  

	$(window).scroll(function (event) {
	// what the y position of the scroll is
	var y = $(this).scrollTop();
	
    // whether that's below the form
	if (y >= top) {
		//colheight is checked and according to its vaule the scrolling
		//is triggered or not
		if (colheight <= window.innerHeight) {
			// if so, ad the fixed class
			$('#col-one-wrapper').addClass('fixed');
			} else {
			// otherwise remove it
			$('#col-one-wrapper').removeClass('fixed');
		}
    } else {
      // otherwise remove it
      $('#col-one-wrapper').removeClass('fixed');
    }
  });
});
