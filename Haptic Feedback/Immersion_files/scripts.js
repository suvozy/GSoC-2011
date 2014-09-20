// helpers
Element.implement({
	isVisible: function() {
		var el = this;
		while (el) {
			if (el.getStyle('display') == 'none') return false;
			el = el.getParent();
		}
		return true;
	},
	show: function(){
		this.set('styles', { 'display': 'block' });
	},
	hide: function(){
		this.set('styles', { 'display': 'none' });
	}
});

//topnav rollover init
var topNavInit = function() {
	
	//hide the top nav - handled by css and noscript because IE JS is very slow
	//$('topnav').getElements('.l2').hide();
	
	// TODO - ideally add the mouseover through a script and not inline...
	/*
	$('topnav').getFirst('ul.l1').getChildren('li').each(function(item,index){
		item.addEvents({
			'mouseover': function(){
				dropMenu(this);
			}
		});
	});
	*/
}

//top navigation scripts
var dropMenu = function(el) {
	
	var elToMod = $(el).getNext();
	
	// show the list and change the class to active
	elToMod.show();
	el.addClass('active');
	
	var afunc;
	var bfunc;
	var cfunc; // not used here, placeholder 
	// delay value incase there is whitespace between L1 and L2 containers
	var delayValue = 10;
	
	// mouseover actions
	el.addEvent('mouseenter', function(){
		afunc = $clear(afunc);
		bfunc = $clear(bfunc);
		cfunc = $clear(cfunc);
	});
	elToMod.addEvent('mouseenter', function(){
		afunc = $clear(afunc);
		bfunc = $clear(bfunc);
		cfunc = $clear(cfunc);
	});
	
	// mouseout actions
	el.addEvent('mouseleave', function(){
		afunc = function(){
			elToMod.hide();
		}.delay(delayValue, this);
		bfunc = function(){
			el.removeClass('active');
		}.delay(delayValue, this);
		cfunc = function(){
		};
	});
	elToMod.addEvent('mouseleave', function(){
		afunc = function(){
			elToMod.hide();
		}.delay(delayValue, this);
		bfunc = function(){
			el.removeClass('active');
		}.delay(delayValue, this);
		cfunc = function(){
		};
	});
	
}

// this adds a class="last" to the last item in the top navigation
var addlast = function(){
	$$('div.l2 ul').each(function(item,index){
		var kidList = item.getChildren();
		var idx = kidList.length - 1;
		kidList[idx].addClass('last');
	});
	
	//adds 'last' class to the level2 leftnav's
	/*
	if($('leftnav')){
		$$('ul.level4').each(function(item,index){
			var kidList = item.getChildren();
			var idx = kidList.length - 1;
			kidList[idx].addClass('last');
		});
	}
	*/
}

// for the subtabs. these cannot be deep linked
var SubTabController = new Class({
	initialize: function() {
		//get the data
		this.nav = $$('.edit-subnav');
		if (!this.nav) return;
		
		//default opened content
		var d = 0;

		//first hide the content
		this.nav.each(function(item,index1){
			//hide the content, except for the first
			item.getParent('div').getNext('div').getElements('.edit-subnavcontent').each(function(item,index2){
				if(index2 != d){ item.hide() };
			});
		});
		
		this.nav.each(function(item,index){
			//get the links
			var qnLinks = item.getElements('li a');
			//select the first
			qnLinks[d].addClass('selected');
			//get the content
			var qnContent = item.getParent('div').getNext('div').getElements('.edit-subnavcontent');
			
			var self = this;
			qnLinks.addEvents({
				//change this to 'mouseover' for mouseover behavior, or 'click' for click behavior			   
				click: function(event){
					event.stop();
					var idx = this;

					qnLinks.removeClass('selected');
					this.addClass('selected');

					qnContent.hide();
					qnContent[idx.getParent().getAllPrevious().length].show();

					//if (sIFR) sIFR.replace();
				}
			});
				
		});
	}
})

// for the subtabs. these cannot be deep linked
var ReadMoreController = new Class({
	initialize: function() {
		//get the data
		this.readmore = $$('.readmore-link');
		if (!this.readmore) return;

		//first hide the content
		//hidden through css

		//loop for each read more pair
		this.readmore.each(function(item,index){
						
			item.addEvents({
				//change this to 'mouseover' for mouseover behavior, or 'click' for click behavior			   
				click: function(event){
					event.stop();
					if(this.hasClass('open')){
						$(this.get('href').replace('#','')).hide();
						this.removeClass('open');
						}else{
							$(this.get('href').replace('#','')).show();
							this.addClass('open');
						};

					//if (sIFR) sIFR.replace();
				}
			});
							
		});
	}
})

// since we hide the content, sifr gets confused. this controller runs the sifr calls after the tabs have been revealed
var sIFRController = new Class({
	fonts: {},
	initialize: function(fonts) {
		this.fonts = fonts;
	},
	replace: function() {
		for (fontname in this.fonts) {
			var font = new Font(fontname);
			var selectors = this.fonts[fontname];
			selectors.each(function(selector) {
				$$(selector).each(function(item){ 
					if (item.isVisible()){
						font.replaceElement(item);
					}
				});
			});
		};
	}
});

// autowidth functions for the hero navigations
var autoWidth = new Class({
	initialize: function() {
		//check to see if we have something to work with
		this.container = $('edit-bp-hero');
		if (!this.container) return;
		
		//get some elements. limited to a list right now, could be modified to use 'children' instead
		this.container = $('edit-bp-hero').getFirst('ul');
		this.elems = this.container.getElements('li');
		//cancel the script if there are less than 5 links
		if (this.elems.length < 5) return;
		
		//so i can use 'this' in loops
		var self = this;
		
		//widths
		var totalWidth = this.container.getStyle('width').toInt()
		var elemsTotalWidth = 0;
		
		//calculate the total width of items
		this.elems.each(function(item,index){
			elemsTotalWidth = elemsTotalWidth + item.getStyle('width').toInt()+1;
			var thisWidth = item.getStyle('width').toInt()+1;
		});
		
		//do some math to get the correct spacing
		var widthDiff = totalWidth-elemsTotalWidth;
		var padToAdd = Math.round(widthDiff/(this.elems.length-1));
		
		//add the correct spacing to the elements
		this.elems.each(function(item,index){
			if(index < (self.elems.length-1)){
				item.set('styles', {
					'margin-right': padToAdd+'px'
					});
			}
		});
	}
});

// product selector page script vor the transparent overlay mouseovers
var categoryselectorController = new Class({
	initialize: function() {
		this.container = $('edit-categoryselector');
		if (!this.container) return;
		
		if (this.container){
			this.container.big = $('edit-categoryselector').hasClass('big');
			if (this.container.big) return;
			}
		
		this.categories = this.container.getElements('li');
		var self = this;

		this.categories.addEvent('mouseover', function(event) {
			var categoryhover = this;
			self.categories.each(function(category) {
				if (categoryhover != category) category.setStyle('opacity', 0.5);
			});
		});
		this.categories.addEvent('mouseout', function(event) {
			self.categories.setStyle('opacity', 1);
		});
	}
});

// form validation for contact page
// requires mootools-more
function validate(form){
	//get required fields
	var fields = $$('.req').map(function(f){
		return f.getChildren().getLast().get('tabindex').toInt();
	}).sort(function(a,b){return a - b;}).map(function(f){
		return $$('.req *[tabindex='+f+']');
	}).flatten();
	
	//validate
	var stop = true;
	fields.each(function(field,i){
		if(!stop){ return; }

var value;
if(field.get('value')){
	value = field.get('value');
}else if(field.get('id')){
	value = document.getElementById(field.get('id')).selectedIndex;
	if($defined(value)){
		if(value <2){	
			value = undefined;
		}else{
			value = 'good';
		}
	}
}
	
	if($defined(value)){	
		value = value.replace(/(^\s*)|(\s*$)/gi,"");	
	if(!value){
			value = undefined;
		}
	}


		if(!$defined(value) || value.test(/^\s+$/) || value.length < 2 || value.test(/href=/)){ //if empty
			$('error').set({
				'styles': { 'display':'block' }, 
				'text': field.getParent('.req').get('rel')
			});
			var myFx = new Fx.Scroll(window).toTop();
			field.focus();
			stop = false;
		} else if(field.get('name')=='Lead_LeadEmail' && !value.test(/^([a-zA-Z0-9_\-\.\+\~]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-\+\~]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,'i')){ //validate email addresses
			$('error').set({
				'styles': { 'display':'block' },
				'text': 'Invalid email address'
			});
			var myFx = new Fx.Scroll(window).toTop();
			field.focus();
			stop = false;
		} else if(field.get('name')=='Lead_PrimaryPhone' && (value.test(/[^0-9\-\+\x\)\(\ ]/,'i') || value.length < 5)){ //validate phone numbers
			$('error').set({
				'styles': { 'display':'block' }, 
				'text': 'Enter a valid  telephone number.'
			});
			var myFx = new Fx.Scroll(window).toElement('error');
			field.focus();
			stop = false;
		} else if(field.get('name')=='Lead_LeadFirstName' && value.test(/[^a-zA-Z\-\.\,\'\ ]/,'i')){ 
			$('error').set({
				'styles': { 'display':'block' }, 
				'text': 'Enter a valid first name'
			});
			var myFx = new Fx.Scroll(window).toElement('error');
			field.focus();
			stop = false;
		} else if(field.get('name')=='Lead_LeadLastName' && value.test(/[^a-zA-Z\-\.\,\'\ ]/,'i')){ 
			$('error').set({
				'styles': { 'display':'block' }, 
				'text': 'Enter a valid last name'
			});
			var myFx = new Fx.Scroll(window).toElement('error');
			field.focus();
			stop = false;
		} else if(field.get('name')=='Lead_Province' && value.test(/[^a-zA-Z]/,'i')){ 
			$('error').set({
				'styles': { 'display':'block' }, 
				'text': 'Enter a valid province'
			});
			var myFx = new Fx.Scroll(window).toElement('error');
			field.focus();
			stop = false;
		} else if(field.get('name')=='Lead_City' && value.test(/[^a-zA-Z]/,'i')){
                        $('error').set({
                                'styles': { 'display':'block' },
                                'text': 'Enter a valid city'
                        });
                        var myFx = new Fx.Scroll(window).toElement('error');
                        field.focus();
                        stop = false;
                } else if(field.get('name')=='Lead_Zip' && value.test(/[^0-9\ \-a-zA-Z]/,'i')){
						
                        	$('error').set({
                                	'styles': { 'display':'block' },
                                	'text': 'Enter a valid postal code'
                        	});
                        	var myFx = new Fx.Scroll(window).toElement('error');
                        	field.focus();
                        	stop = false;
                
		} else if(field.get('name')=='Lead_Zip' && value.test(/[a-zA-Z]/) && !(value.test(/[0-9]/))){
						
                        	$('error').set({
                                	'styles': { 'display':'block' },
                                	'text': 'Enter a valid postal code'
                        	});
                        	var myFx = new Fx.Scroll(window).toElement('error');
                        	field.focus();
                        	stop = false;
                
		}
	});


		var v_fields = $$('.valid').map(function(f){
	return f.getChildren().getLast().get('tabindex').toInt();
	}).sort(function(a,b){return a - b;}).map(function(f){
		return $$('.valid *[tabindex='+f+']');
	}).flatten();


        //validate
        v_fields.each(function(field,i){
                if(!stop){ return; }



var value;
if(field.get('value')){
value = field.get('value');
}else if(field.get('id')){
value = document.getElementById(field.get('id')).selectedIndex;
   if($defined(value)){
                if(value <2){
                        value = undefined;
                }else{
                        value = 'good';
                }
        }
}

	if($defined(value)){	
		value = value.replace(/(^\s*)|(\s*$)/gi,"");	
	if(!value){
			value = undefined;
		}
	}

if($defined(value) && value.length > 0){
                if(value.test(/^\s+$/) || value.length < 2  ){ //if empty
                        $('error').set({
                                'styles': { 'display':'block' },
                                'text': field.getParent('.req').get('rel')
                        });
                        var myFx = new Fx.Scroll(window).toTop();
                        field.focus();
                        stop = false;
                } else if(field.get('name')=='Lead_LeadEmail' && (!value.test(/^([a-zA-Z0-9_\-\.\+\~]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-\+\~]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,'i') || value.test(/href=/))){ //validate email addresses
                        $('error').set({
                                'styles': { 'display':'block' },
                                'text': 'Invalid email address'
                        });
                        var myFx = new Fx.Scroll(window).toTop();
                        field.focus();
                        stop = false;
                } else if(field.get('name')=='Lead_PrimaryPhone' && (value.test(/[^0-9\-\+\x\)\(\ ]/,'i') || value.test(/href=/) || value.length < 5)){ //validate phone numbers
                        $('error').set({
                                'styles': { 'display':'block' },
                                'text': 'Enter a valid  telephone number'
                        });
                        var myFx = new Fx.Scroll(window).toElement('error');
                        field.focus();
                        stop = false;
                } else if(field.get('name')=='Lead_LeadFirstName' && (value.test(/[^a-zA-Z\-\.\,\'\ ]/,'i') || value.test(/href=/))){
                        $('error').set({
                                'styles': { 'display':'block' },
                                'text': 'Enter a valid first name'
                        });
                        var myFx = new Fx.Scroll(window).toElement('error');
                        field.focus();
                        stop = false;
                } else if(field.get('name')=='Lead_LeadLastName' && (value.test(/[^a-zA-Z\-\.\,\'\ ]/,'i') || value.test(/href=/))){
                        $('error').set({
                                'styles': { 'display':'block' },
                                'text': 'Enter a valid last name'
                        });
                        var myFx = new Fx.Scroll(window).toElement('error');
                        field.focus();
                        stop = false;
                } else if(field.get('name')=='Lead_JobTitle' && (value.test(/[^a-zA-Z0-9\-\.\,\'\ \"\#\:\;]/,'i') || value.test(/href=/))){
                        $('error').set({
                                'styles': { 'display':'block' },
                                'text': 'Enter a valid job title'
                        });
                        var myFx = new Fx.Scroll(window).toElement('error');
                        field.focus();
                        stop = false;
                } else if(field.get('name')=='Lead_City' && (value.test(/[^a-zA-Z\-\.\,\'\ ]/,'i') || value.test(/href=/))){
                       
			$('error').set({
                                'styles': { 'display':'block' },
                                'text': 'Enter a valid city'
                        });
                        var myFx = new Fx.Scroll(window).toElement('error');
                        field.focus();
                        stop = false;
                } else if(field.get('name')=='Lead_Province' && (value.test(/[^a-zA-Z\-\.\,\'\ ]/,'i') || value.test(/href=/))){
                        $('error').set({
                                'styles': { 'display':'block' },
                                'text': 'Enter a valid Province'
                        });
                        var myFx = new Fx.Scroll(window).toElement('error');
                        field.focus();
                        stop = false;
                } else if(field.get('name')=='Ship_Province' && (value.test(/[^a-zA-Z\-\.\,\'\ ]/,'i') || value.test(/href=/))){
                        $('error').set({
                                'styles': { 'display':'block' },
                                'text': 'Enter a valid Shipping Province'
                        });
                        var myFx = new Fx.Scroll(window).toElement('error');
                        field.focus();
                        stop = false;
                } else if(field.get('name')=='Bill_Province' && (value.test(/[^a-zA-Z\-\.\,\'\ ]/,'i') || value.test(/href=/))){
                        $('error').set({
                                'styles': { 'display':'block' },
                                'text': 'Enter a valid Billing Province'
                        });
                        var myFx = new Fx.Scroll(window).toElement('error');
                        field.focus();
                        stop = false;
                }
}{
}
        });


	return stop; //will return false if any value is not defined properly
}



function validate2(form){
	//get required fields
	var fields = $$('.req').map(function(f){
	return f.getChildren().getLast().get('tabindex').toInt();
	}).sort(function(a,b){return a - b;}).map(function(f){
		return $$('.req *[tabindex='+f+']');
	}).flatten();
	
	//validate
	var stop = true;
	fields.each(function(field,i){
		if(!stop){ return; }

	var value;
	if(field.get('value')){
		value = field.get('value');
	}else if(field.get('id')){
		value = document.getElementById(field.get('id')).selectedIndex;
		if($defined(value)){
			if(value <2){	
				value = undefined;
			}else{
				value = 'good';
			}
		}
	}
		if(!$defined(value) || value.test(/^\s+$/) || value.length < 2 || value.test(/href=/)){ //if empty
			$('error').set({
				'styles': { 'display':'block' }, 
				'text': field.getParent('.req').get('rel')
			});
			var myFx = new Fx.Scroll(window).toTop();
			field.focus();
			stop = false;
		} else if(field.get('name')=='Lead_LeadEmail' && !value.test(/^([a-zA-Z0-9_\-\.\+\~]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-\+\~]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,'i')){ //validate email addresses
			$('error').set({
				'styles': { 'display':'block' },
				'text': 'Invalid email address'
			});
			var myFx = new Fx.Scroll(window).toTop();
			field.focus();
			stop = false;
		} else if(field.get('name')=='Lead_PrimaryPhone' && (value.test(/[^0-9\-\+\x\)\(\ ]/,'i') || value.length < 5)){ //validate phone numbers
			$('error').set({
				'styles': { 'display':'block' }, 
				'text': 'Enter a valid  telephone number.'
			});
			var myFx = new Fx.Scroll(window).toElement('error');
			field.focus();
			stop = false;
		} else if(field.get('name')=='Lead_LeadFirstName' && value.test(/[^a-zA-Z\-\.\,\'\ ]/,'i')){ 
			$('error').set({
				'styles': { 'display':'block' }, 
				'text': 'Enter a valid first name'
			});
			var myFx = new Fx.Scroll(window).toElement('error');
			field.focus();
			stop = false;
		} else if(field.get('name')=='Lead_LeadLastName' && value.test(/[^a-zA-Z\-\.\,\'\ ]/,'i')){ 
			$('error').set({
				'styles': { 'display':'block' }, 
				'text': 'Enter a valid last name'
			});
			var myFx = new Fx.Scroll(window).toElement('error');
			field.focus();
			stop = false;
		} else if(field.get('name')=='Lead_Province' && value.test(/[^a-zA-Z]/,'i')){ 
			$('error').set({
				'styles': { 'display':'block' }, 
				'text': 'Enter a valid province'
			});
			var myFx = new Fx.Scroll(window).toElement('error');
			field.focus();
			stop = false;
		} else if(field.get('name')=='Lead_City' && value.test(/[^a-zA-Z]/,'i')){
                        $('error').set({
                                'styles': { 'display':'block' },
                                'text': 'Enter a valid city'
                        });
                        var myFx = new Fx.Scroll(window).toElement('error');
                        field.focus();
                        stop = false;
                } else if(field.get('name')=='Lead_Zip' && value.test(/[^0-9\ \-a-zA-Z]/,'i')){
						
                        	$('error').set({
                                	'styles': { 'display':'block' },
                                	'text': 'Enter a valid postal code'
                        	});
                        	var myFx = new Fx.Scroll(window).toElement('error');
                        	field.focus();
                        	stop = false;
                
		} else if(field.get('name')=='Lead_Zip' && value.test(/[a-zA-Z]/) && !(value.test(/[0-9]/))){
						
                        	$('error').set({
                                	'styles': { 'display':'block' },
                                	'text': 'Enter a valid postal code'
                        	});
                        	var myFx = new Fx.Scroll(window).toElement('error');
                        	field.focus();
                        	stop = false;
                
		}
	});


		var v_fields = $$('.valid').map(function(f){
	return f.getChildren().getLast().get('tabindex').toInt();
	}).sort(function(a,b){return a - b;}).map(function(f){
		return $$('.valid *[tabindex='+f+']');
	}).flatten();


        //validate
        v_fields.each(function(field,i){
                if(!stop){ return; }



var value;
if(field.get('value')){
value = field.get('value');
}else if(field.get('id')){
value = document.getElementById(field.get('id')).selectedIndex;
   if($defined(value)){
                if(value <2){
                        value = undefined;
                }else{
                        value = 'good';
                }
        }
}
if($defined(value) && value.length > 0){
                if(value.test(/^\s+$/) || value.length < 2  ){ //if empty
                        $('error').set({
                                'styles': { 'display':'block' },
                                'text': field.getParent('.req').get('rel')
                        });
                        var myFx = new Fx.Scroll(window).toTop();
                        field.focus();
                        stop = false;
                } else if(field.get('name')=='Lead_LeadEmail' && (!value.test(/^([a-zA-Z0-9_\-\.\+\~]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-\+\~]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,'i') || value.test(/href=/))){ //validate email addresses
                        $('error').set({
                                'styles': { 'display':'block' },
                                'text': 'Invalid email address'
                        });
                        var myFx = new Fx.Scroll(window).toTop();
                        field.focus();
                        stop = false;
                } else if(field.get('name')=='Lead_PrimaryPhone' && (value.test(/[^0-9\-\+\x\)\(\ ]/,'i') || value.test(/href=/) || value.length < 5)){ //validate phone numbers
                        $('error').set({
                                'styles': { 'display':'block' },
                                'text': 'Enter a valid  telephone number'
                        });
                        var myFx = new Fx.Scroll(window).toElement('error');
                        field.focus();
                        stop = false;
                } else if(field.get('name')=='Lead_LeadFirstName' && (value.test(/[^a-zA-Z\-\.\,\'\ ]/,'i') || value.test(/href=/))){
                        $('error').set({
                                'styles': { 'display':'block' },
                                'text': 'Enter a valid first name'
                        });
                        var myFx = new Fx.Scroll(window).toElement('error');
                        field.focus();
                        stop = false;
                } else if(field.get('name')=='Lead_LeadLastName' && (value.test(/[^a-zA-Z\-\.\,\'\ ]/,'i') || value.test(/href=/))){
                        $('error').set({
                                'styles': { 'display':'block' },
                                'text': 'Enter a valid last name'
                        });
                        var myFx = new Fx.Scroll(window).toElement('error');
                        field.focus();
                        stop = false;
                } else if(field.get('name')=='Lead_JobTitle' && (value.test(/[^a-zA-Z0-9\-\.\,\'\ ]/,'i') || value.test(/href=/))){
                        $('error').set({
                                'styles': { 'display':'block' },
                                'text': 'Enter a valid job title'
                        });
                        var myFx = new Fx.Scroll(window).toElement('error');
                        field.focus();
                        stop = false;
                } else if(field.get('name')=='Lead_City' && (value.test(/[^a-zA-Z\-\.\,\'\ ]/,'i') || value.test(/href=/))){
                       
			$('error').set({
                                'styles': { 'display':'block' },
                                'text': 'Enter a valid city'
                        });
                        var myFx = new Fx.Scroll(window).toElement('error');
                        field.focus();
                        stop = false;
                } else if(field.get('name')=='Lead_Province' && (value.test(/[^a-zA-Z\-\.\,\'\ ]/,'i') || value.test(/href=/))){
                        $('error').set({
                                'styles': { 'display':'block' },
                                'text': 'Enter a valid Province'
                        });
                        var myFx = new Fx.Scroll(window).toElement('error');
                        field.focus();
                        stop = false;
                }
}{
}


        });


	return stop; //will return false if any value is not defined properly
}

// Once the HTML has loaded, run some scripts
window.addEvent('domready', function() {

	//topNavInit();
	addlast();

	new SubTabController();
	new ReadMoreController();
	new categoryselectorController();
	//new autoWidth();
	
	/*
	// Make sIFR variable global
	window.sIFR = new sIFRController({
		'ApexSansBookT.swf': ['span.sifr','h1.sifr','h2.sifr','div.edit-sidebar-block h3','p.sifr', '#edit-categoryselector h3'],
		'ApexSansLightT_bold.swf': ['h2.category','h1.sifr-lt','#edit-partners-hero h2']
	});
	sIFR.replace();
	*/
	
});

function spawn (targ,x,y) {
        window.open(targ,'secondary','width=' + x + ',height=' + y + ',scrollbars=yes,resizable=yes,toolbar=yes,left=10,top=10,screenX=10,screenY=10');
}
