/*
Quick deeplinking tabsets built on Mootools 1.2

Usage:
	1. Include Mootools 1.2 (<script type="text/javascript" src="js/mootools1.2.js"></script>)
	2. Include this file (<script type="text/javascript" src="quicktabs.js"></script>)
	3. Create tabsets based on classes.  Each class set and create call is a different tab set:
			<script type="text/javascript">
				createTabs('maintabs');
				createTabs('footertabs');
			</script>
	4. Ensure anchors to tabs and the tab itself is marked up as follows:
		<li><a href="#id-of-tab">....</li> 
		<elem id="id-of-tab" class="tabSetClassName">
	5. Add class "default" to the tab that should load initially.
	
	That's it...
*/

tabsets = {};
var TabSet = new Class({
	initialize: function(cName) {
		this.className = cName;
		this.links = [];
		this.tabs = $$('.' + cName);

		$$('a[href^=#]').each(function(lin) {
			if ($(lin.getProperty('href').replace(/#/, '')) && lin.getParent('li')) this.links.push(lin);
		}.bind(this));

		this.tabs.each(function(el) {
			//default wont show if a hash other than the default specified
			if (el.getProperty('id') != location.hash.substring(5) && !(el.hasClass('default') && !location.hash )) {
				el.setStyle('display', 'none');
			}
		}.bind(this));
		
		this.links.each(function(el) {
			if (el.getProperty('href').substring(1) == location.hash.substring(5) || (!location.hash && $(el.getProperty('href').replace(/#/, '')).hasClass('default'))) el.addClass('selected');
			el.addEvent('click', function(event) {
				event.preventDefault();
				this.links.each(function(lin) {
					// if/else is to prevent problem with clicking the span tag within the links
					if(lin.getProperty('href')){
						lin.getProperty('href') == ($(event.target)).getProperty('href') ? lin.addClass('selected') : lin.removeClass('selected');
						}else{
							lin.getProperty('href') == ($(event.target)).getParent().getProperty('href') ? lin.addClass('selected') : lin.removeClass('selected');
					};
				});
				this.tabs.setStyle('display', 'none');
				// if/else is to prevent problem with clicking the span tag within the links
				if($(event.target).getProperty('href')){						   
					var tabId = $(event.target).getProperty('href').replace(/#/, '');
					}else{
						var tabId = $(event.target).getParent().getProperty('href').replace(/#/, '');
				};
				$(tabId).setStyle('display', 'block');
				window.location.replace(window.location.href.split('#')[0] + '#tab='+tabId); // Update URL with tab id
			}.bind(this));
		}.bind(this));
	}
});

function createTabs(cName) {
	window.addEvent('domready', function() {
		tabsets[cName] = new TabSet(cName);
	});
}