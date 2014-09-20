/*1302564578,176820406*/

if (window.CavalryLogger) { CavalryLogger.start_js(["pdgj7"]); }

var ChatOnlineFriends=window.ChatOnlineFriends||{chatFriends:{},chatStatuses:['chatOnline','chatIdle','chatOffline'],_subscribe:function(event,a){this._tokens.push(Arbiter.subscribe(event,a));},clickHandler:function(event){var c=event.getTarget();var b=Parent.byClass(c,'uiListItem');if(b){var a=this.chatFriends[b.id];if(Chat.isOnline()){Chat.openTab(a.user_id,a.name,'friend');}else goURI(a.uri);return false;}},onunload:function(){this._tokens.forEach(function(a){Arbiter.unsubscribe(a);});},_setStatus:function(a,b){if(CSS.hasClass(a,b))return;this.chatStatuses.forEach(function(c){CSS.conditionClass(a,c,c==b);});},initTypeahead:function(b,a){b.subscribe('reset',function(){CSS.show(a);});b.subscribe('query',function(c,d){if(d.value){CSS.hide(a);}else CSS.show(a);});},init:function(d,e,f,a,c,b){this._initShared(d,f,a,b);this._orderedFriends=e;this._hashedFriends={};this._orderedFriends.forEach(function(g){this._hashedFriends[g]=true;}.bind(this));this._facepile=c.firstChild;this._faceFutures&&this._hideAllFaces();this._faceFutures=[];this._subscribe(['buddylist/initialized','buddylist/availability-changed'],this.update.shield(this));Event.listen(c,'click',this.clickHandlerClientRendering.bind(this));AvailableList.update();},_initShared:function(c,d,a,b){this.maxElements=c;this._faceTmpl=b;this._tokens=[];onleaveRegister(this.onunload.bind(this));this.initTypeahead(d,DOM.find(a,'div.fbFriendsOnlineFacepile'));},update:function(){var g=ge('chatFriendsOnline');if(g)CSS.conditionClass(g,'isOffline',!Chat.isOnline());if(!Chat.isOnline()||!AvailableList.isReady())return;AvailableList.getAvailableIDs().forEach(function(h){if(!this._hashedFriends[h]){this._orderedFriends.push(h);this._hashedFriends[h]=true;}}.bind(this));var b=0;for(var e=0;e<this._orderedFriends.length;e++){var d=this._orderedFriends[e];var a=AvailableList.get(d);var c=this._faceFutures[e];var f=b<this.maxElements;if(a&&f){if(!c){c=this._makeFace(e);this._faceFutures[e]=c;}b++;}this._updateFace(c,f,this._mapChatStatus(a));}},_mapChatStatus:function(a){switch(a){case AvailableList.OFFLINE:return 'chatOffline';case AvailableList.IDLE:return 'chatIdle';case AvailableList.ACTIVE:return 'chatOnline';}},_updateFace:function(b,c,a){b&&b(function(d){this._setStatus(d,a);CSS.conditionShow(d,c);}.bind(this));},_makeFace:function(c){var d=null;var a=null;var b=this._orderedFriends[c];ChatUserInfoManager.get(b,function(j){a=this._faceTmpl.render();DataStore.set(a,'friendID',b);var i=XHPTemplate.getNode(a,'img');var k=i.cloneNode(false);k.setAttribute('src',j.thumbSrc);DOM.replace(i,k);var e=XHPTemplate.getNode(a,'anchor');TooltipLink.setTooltipText(e,j.name);d&&d(a);var f=false;for(var h=c+1;h<this._orderedFriends.length&&!f;h++){var g=this._faceFutures[h];var l=g&&g();if(l){this._facepile.insertBefore(a,l);f=true;}}if(!f)this._facepile.appendChild(a);}.bind(this));return function faceFuture(e){if(e)if(a){e(a);}else d=e;return a;};},clickHandlerClientRendering:function(event){var c=event.getTarget();var a=Parent.byClass(c,'uiFacepileItem');if(a){var b=DataStore.get(a,'friendID');if(b&&Chat.isOnline()){ChatUserInfoManager.get(b,function(d){Chat.openTab(b,d.name,'friend');});return false;}}},_hideAllFaces:function(){this._faceFutures.forEach(function(a){a&&a(function(b){DOM.remove(b);});});}};
onloadRegister(function(){Event.listen(document.documentElement,'submit',function(b){var a=b.getTarget().getElementsByTagName('*');for(var c=0;c<a.length;c++)if(a[c].getAttribute('required')&&Input.isEmpty(a[c])){a[c].focus();return false;}},Event.Priority.URGENT);});