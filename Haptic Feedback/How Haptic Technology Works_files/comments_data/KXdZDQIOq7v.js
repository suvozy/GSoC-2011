/*1300138095,169776320*/

if (window.CavalryLogger) { CavalryLogger.start_js(["jjrSX"]); }

function Overlay(){}!function(){var a=null;copy_properties(Overlay,{getInstance:function(b){var c=Parent.byClass(b,'uiOverlay');return c?DataStore.get(c,'overlay'):null;}});Overlay.mixin('Arbiter',{_root:null,_transitionSubscription:null,destroyOnHide:true,init:function(d){this._transitionSubscription=Arbiter.subscribe('page_transition',this.hide.bind(this,true,false),Arbiter.SUBSCRIBE_NEW);if(HTML.isHTML(d)){this._root=HTML.replaceJSONWrapper(d).getRootNode();}else this._root=d;DataStore.set(this._root,'overlay',this);this._overlay=DOM.scry(this._root,'div.uiOverlay')[0]||this._root;var f=DataStore.get(this._root,'width');f&&this.setWidth(f);var b=DataStore.get(this._root,'destroyonhide')!='false';this.setDestroyOnHide(b);var e=DataStore.get(this._root,'optimistic')=='true';this.setOptimistic(e);DOM.appendContent(document.body,this._root);Event.listen(this._root,'click',this.click.bind(this));var c=DOM.scry(this._root,'form.uiOverlayContent')[0];if(c)Event.listen(c,'submit',this.submit.bind(this));return this;},setDestroyOnHide:function(b){this.destroyOnHide=b;return this;},setOptimistic:function(b){this.optimistic=b;return this;},setWidth:function(b){this.width=parseInt(b,10);return this;},show:function(){this.updatePosition();CSS.show(this._root);this.inform('show');return this;},hide:function(b){if(this.inform('beforehide')===false)return;var c=function(){this.inform('hide');this.destroyOnHide&&this.destroy();}.bind(this);animation(this._root).to('opacity',0).hide().duration(b===false?0:250).checkpoint().to('opacity',1).duration(0).ondone(c).go();},destroy:function(){Arbiter.unsubscribe(this._transitionSubscription);DOM.remove(this._root);DataStore.remove(this._root,'overlay');this._root=null;},click:function(c){var b=Parent.byClass(c.getTarget(),'uiOverlayButton');if(b){a=b;if(CSS.hasClass(b,'uiOverlayCancelButton')){if(this.inform('cancel')!==false)this.hide();c.prevent();}}},submit:function(d){var e=d.getTarget();if(this.inform('submit')!==false){var g=(Form.getAttribute(e,'method')||'GET').toUpperCase();var c=Form.serialize(e,a);Form.setDisabled(e,true);var h=Parent.byClass(a,'stat_elem')||e;var b=Form.getAttribute(e,'ajaxify')||Form.getAttribute(e,'action');var f=function(){if(this.inform('success')!==false)this.hide();}.bind(this);if(this.optimistic){f();f=bagofholding;}new AsyncRequest(b).setData(c).setNectarModuleDataSafe(e).setReadOnly(g=='GET').setMethod(g).setStatusElement(h).setRelativeTo(e).setHandler(f).setErrorHandler(function(i){this.inform('error');}.bind(this)).setFinallyHandler(Form.setDisabled.bind(null,e,false)).send();}d.kill();},updatePosition:function(){CSS.setStyle(this._overlay,'width',this.width+'px');}});}();
function ContextualDialogX(){this.parent.construct(this);return this;}ContextualDialogX.extend('Overlay');copy_properties(ContextualDialogX,{ARROW_OFFSET:22,HALO_WIDTH:6,getInstance:function(b){var a=DataStore.get(b,'ContextualDialogX');if(!a){var c=Parent.byClass(b,'uiContextualDialogPositioner');a=c&&DataStore.get(c,'overlay');}return a;}});ContextualDialogX.prototype={init:function(c){this.parent.init(c);var b=DataStore.get.curry(this._root);this.setAlignH(b('alignh','left'));this.setFixed(b('fixed',false));this.setOffsetX(b('offsetx',0));this.setOffsetY(b('offsety',0));this.setPosition(b('position'));var a=b('context');if(a){this.setContext($(a));}else{a=b('contextselector');if(a)this.setContext(DOM.find(document,a));}var e=null;var d=null;this.subscribe('show',function(){e=Event.listen(window,'resize',function(){this.updatePosition();}.bind(this));d=Arbiter.subscribe('reflow',this.updatePosition.shield(this));}.bind(this));this.subscribe('hide',function(){e.remove();Arbiter.unsubscribe(d);});},setAlignH:function(a){this.alignH=a;return this;},getContext:function(){return this.context;},setContext:function(a){if(this.context&&this.context!=a)DataStore.remove(this.context,'ContextualDialogX');this.context=$(a);DataStore.set(this.context,'ContextualDialogX',this);return this;},setFixed:function(a){this.fixed=a;return this;},setOffsetX:function(a){this.offsetX=parseInt(a,10)||0;return this;},setOffsetY:function(a){this.offsetY=parseInt(a,10)||0;return this;},setPosition:function(a){this.position=a;return this;},updatePosition:function(){if(!this.context)return;this.parent.updatePosition();var c=this.fixed?'viewport':'document';var g=Vector2.getElementPosition(this.context,c);var a=Vector2.getElementDimensions(this.context);var j=this.position=='above'||this.position=='below';var d=intl_locale_is_rtl();if(d!=(this.position=='right'))g=g.add(a.x,0);if(this.position=='below')g=g.add(0,a.y);var f=new Vector2(0,0);var b=this.width+2*ContextualDialogX.HALO_WIDTH;if(j&&this.alignH=='center'){f=f.add((a.x-b)/2,0);}else{f=f.sub(j?ContextualDialogX.HALO_WIDTH:0,j?0:ContextualDialogX.HALO_WIDTH);var i=j?a.x:a.y;var e=2*(ContextualDialogX.ARROW_OFFSET+ContextualDialogX.HALO_WIDTH);if(i<e){var h=i/2-ContextualDialogX.ARROW_OFFSET;f=f.add(j?h:0,j?0:h);}}if(j&&this.alignH=='right')f=f.mul(-1,1).add(a.x-b,0);f=f.add(this.offsetX,this.offsetY);if(d)f=f.mul(-1,1);g=g.add(f);if(this.fixed)g=new Vector2(g.x,g.y,'document');g.setElementPosition(this._root);},scrollTo:function(){if(this.context)Bootloader.loadComponents('dom-scroll',function(){DOMScroll.scrollTo(this.context,true,true);}.bind(this));},destroy:function(){this.context&&DataStore.remove(this.context,'ContextualDialogX');this.parent.destroy();}};

if (window.Bootloader) { Bootloader.done(["jjrSX"]); }