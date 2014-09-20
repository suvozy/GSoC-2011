jQuery.noConflict();

/*
 * General DOM ready statemenets
 */
jQuery(function($) {
	
	$("#content-wrap .csc-textpic-imagerow a").attr('rel','gallery').attr('onclick','').fancybox({
		padding: 0,
		overlayOpacity: .7,
		overlayColor: '#000',
		transitionIn: 'elastic',
		transitionOut: 'elastic',
		centerOnScroll: false,
		type: 'ajax',
		cyclic: true,
		autoScale: false,
		ajax: {
			complete: function(data){
				var img = data.responseText.substring(data.responseText.indexOf('<img'));
				img = img.substring(0,img.indexOf('/>')+2);
				$('#fancybox-inner').html(img);
			}
		}		
	});
});

jQuery(function($){

	var $area = $('#developer-area');
	$('> a', $area).click(function(){
		if(!$area.is('.active')) {
			$area.animate({ top: '-54' });
			$area.addClass('active');
		} else {
			$area.animate({ top: '-28' });
			$area.removeClass('active');
		}
		return false;
	});
	
});


/*homepage cycle*/
jQuery(function($){

    $('#content-right-home .csc-textpic-imagewrap').cycle({
        fx: 'fade',
        height: '265px'
    });  
});
