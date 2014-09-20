/*
# ------------------------------------------------------------------------
# JA Usersetting plugin for Joomla 1.5
# ------------------------------------------------------------------------
# Copyright (C) 2004-2010 JoomlArt.com. All Rights Reserved.
# @license - PHP files are GNU/GPL V2. CSS / JS are Copyrighted Commercial,
# bound by Proprietary License of JoomlArt. For details on licensing, 
# Please Read Terms of Use at http://www.joomlart.com/terms_of_use.html.
# Author: JoomlArt.com
# Websites:  http://www.joomlart.com -  http://www.joomlancers.com
# Redistribution, Modification or Re-licensing of this file in part of full, 
# is bound by the License applied. 
# ------------------------------------------------------------------------
*/

JAUserSetting = new Class({

    initialize: function (defaults) {
        this.options = $extend({
            ajxURL: '',
            quees: [],
            blocks: [],
            containerClass: 'ja-usersetting-options'
        },
        defaults || {});
        this.idsReload = new Array();
    },
    /**
	 * show user setting form.
	 */
    showForm: function (a, parent, idReload) {

        var action = 'loadform';
        parent.idReload = idReload;
        // looking for container which contain setting form.
        var container = parent.getElement('.' + this.options.containerClass);
        if (container == null) {
            var url = a.href + "&action=" + action + "&tmpl=component&rand=" + (Math.random() * Math.random());
            new Ajax(url, {
                method: 'get',
                onComplete: function (data) {
                    this._renderForm(data, parent, a);

                    //begin: thanhnv
                    //excute javascript
                    newobj = new Element('DIV');
                    newobj.innerHTML = data;
                    newobj.getElements('script').each(function (script) {
                        //alert(script.innerHTML);
                        if (script.src) {
                            new Element('script', {
                                'type': 'text/javascript',
                                'src': script.src
                            }).inject($E('head'));
                        } else {
                            eval(script.innerHTML);
                        }
                    });

                    //excute callback function
                    if (this.callBack) {
                        this.callBack(idReload);
                    }
                    //end:thanhnv
                }.bind(this),
                onFailure: function () {
                    alert('fail request');
                }
            }).request();

        } else { if (container.getStyle('height').toInt() <= 0) {
                this.showElement(container, container.maxHeight);
            } else {
                this.hideElement(container);
            }
        }
        return false;
    },
    /**
	 * building and render html.
	 */
    _renderForm: function (text, obj, a) {
        if (obj.getElement('.' + this.options.containerClass) != null) return;
        var divcontainer = new Element('div');
        divcontainer.addClass(this.options.containerClass);
        divcontainer.setStyles({
            'overflow': 'hidden'
        });
        divcontainer.innerHTML = text;
        obj.adopt(divcontainer);
        // store height using for last 
        divcontainer.maxHeight = divcontainer.offsetHeight;
        divcontainer.storeURL = a.href;
        // binding and processing event of form
        this._bindingAndprocessingEventForm(divcontainer, obj);
    },
    /**
	 * binding event and proccess even which happen with each element of form.
	 */
    _bindingAndprocessingEventForm: function (containter, obj) {
        var form = obj.getElement('form');
        // catch exeption
        if ($defined(form) == false) {
            alert("Could not found the form setting for this module, please try to check again");
            return;
        }

        // checkbox: click chooise all
        if (form.checkall != null) {
            $(form.checkall).addEvent('click', function () {
                var doCheck = this.checked;
                form.getElements('input.checkbox').each(function (elm) {
                    elm.checked = doCheck;
                }.bind(this));
            });
        }
        // if click button cancel.
        form.getElement('input.ja-cancel').addEvent('click', function () {
            this.hideElement(containter);
        }.bind(this));
        // if click button submit.
        form.getElement('input.ja-submit').addEvent('click', function () {
            var action = obj.idReload != "" && (obj.idReload != null) && ($(obj.idReload) != null) ? 'save_reload_module' : 'save_setting';

            new Ajax(containter.storeURL + "&action=" + action + "&tmpl=component&rand=" + (Math.random() * Math.random()), {
                method: 'post',
                data: form.toQueryString(),
                onComplete: function (data) {
                    this.hideElement(containter);
                    // reload module
                    if (action == 'save_reload_module') {
                        newobj = new Element('DIV');
                        newobj.innerHTML = data;
                        //alert(newobj.getElement ('#'+obj.idReload).innerHTML);
                        if (newobj.getElement('#' + obj.idReload)) $(obj.idReload).innerHTML = newobj.getElement('#' + obj.idReload).innerHTML;
                        else $(obj.idReload).innerHTML = data;
                        //parse js
                        //alert(newobj.getElements ('script'));
                        newobj.getElements('script').each(function (script) {
                            //alert(script.innerHTML);
                            if (script.src) {
                                new Element('script', {
                                    'type': 'text/javascript',
                                    'src': script.src
                                }).inject($E('head'));
                            } else {
                                eval(script.innerHTML);
                            }
                        });

                    }
                }.bind(this),
                onFailure: function () {
                    alert('fail request');
                }
            }).request();
        }.bind(this));

    },

    /**
	 *  Show or hide element
	 */
    showElement: function (obj, height) {
        if (!obj.fx) {
            obj.fx = new Fx.Style(obj, 'height');
        }
        obj.fx.start(height);
    },
    hideElement: function (obj) {
        obj.maxHeight = obj.offsetHeight;
        if (!obj.fx) {
            obj.fx = new Fx.Style(obj, 'height');
        }
        obj.fx.start(0);
    }

});