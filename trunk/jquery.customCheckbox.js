/*
 * Custom Checkbox 1.0, jQuery plugin
 *
 * Copyright(c) 2012, Javier Prieto
 */
(function($){
	jQuery.fn.myPlugin = function(settings) {
		var config = {
			'theme': null
		};
		return this.find('input[type=checkbox]').each(function(i,input){

			hasParent = false;
			if($(input).parent().attr('name') == 'jquery-custom-checkbox') {
				span = $(input).parent();
				hasParent = true;
			} else {
				span = $("<span/>");
			}

			if (settings) {
				$.extend(config, settings);
			}

			if (config.theme == null) {
				config.theme = 'simple'
			}

			$(input).hide();

			if (!$(input).is(':disabled')) {
				if ($(input).is(':checked')) {
					$(span).attr('class',config.theme + ' enable-chckon');
				} else {
					$(span).attr('class',config.theme + ' enable-chckoff');
				}
			} else {
				if ($(input).is(':checked')) {
					$(span).attr('class',config.theme + ' disable-chckon');
				} else {
					$(span).attr('class',config.theme + ' disable-chckoff');
				}
			}

			$(span).attr('name','jquery-custom-checkbox');

			$(span).unbind('click');
			$(span).click(function(){
				if (!$(input).is(':disabled')) {
					$(input).attr('checked', !($(input).is(':checked')));
					$(this).toggleClass('enable-chckoff').toggleClass('enable-chckon');
				}
			/*
				if (typeof config.onNone == 'function') {
					if ($(selector).find('input[type=checkbox]:checked').length == 0 ){
						$(config.onNone);
					}
				}
				if (typeof config.onSelect == 'function') {
					if ($(selector).find('input[type=checkbox]:checked').length > 0 ){
						$(config.onSelect)
					}
				}
				*/
			});
			if (!hasParent)
				$(input).wrap(span);
		});


		if (typeof config.onNone == 'function') {
			if ($(selector).find('input[type=checkbox]:checked').length == 0 ){
				$(config.onNone);
			}
		}
		if (typeof config.onSelect == 'function') {
			if ($(selector).find('input[type=checkbox]:checked').length > 0 ){
				$(config.onSelect)
			}
		}
	};
	jQuery.myPlugin = function(settings) {
		return $('body').myPlugin(settings);
	}
})(jQuery);






(function($){
	$.customCheckbox = function(selector,settings){
		var config = {
			'onNone': null,
			'onSelect': null
		};
		if (settings)
			$.extend(config, settings);

		if (!selector)
			selector = 'body';

		$(selector).find('input[type=checkbox]').each(function(i,input){
			span = $("<span/>");

			if ($(input).is(':checked'))
				$(span).attr('class','chckon');
			else
				$(span).attr('class','chckoff');

			$(span).click(function(){
				if (!$(input).is(':disabled')) {
					if ($(input).is(':checked')) {
						$(input).attr('checked', false);
						$(this).attr('class','chckoff');
					} else {
						$(input).attr('checked', true);
						$(this).attr('class','chckon');
					}
				}

				if (typeof config.onNone == 'function') {
					if ($(selector).find('input[type=checkbox]:checked').length == 0 ){
						$(config.onNone);
					}
				}
				if (typeof config.onSelect == 'function') {
					if ($(selector).find('input[type=checkbox]:checked').length > 0 ){
						$(config.onSelect)
					}
				}

			}).prependTo($(this).parent());
			$(this).hide();

		});
	};
})(jQuery);
