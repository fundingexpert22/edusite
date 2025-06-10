"use strict";

function init_template() {

	var mediaQuerie = {
		sm: 576,
		md: 768,
		lg: 992,
		xl: 120
	};
	var element = {
		window: $(window),
		header: $('.header'),
		logo: $('.logo'),
		logoSm: $('.logo-sm'),
		menuBar: $('.menu-bar'),
		hContent: $('.highlighted-content'),
		hBtns: $('.highlighted-btns')
	};

	
	
	// Cambios de los logos
	element.window.scroll(function () {
		if (element.window.width() >= mediaQuerie.md) {
			if (element.window.scrollTop() > 0) {
				element.logoSm.show('slow');
				element.logo.fadeOut('fast');
				element.menuBar.fadeOut('fast');
			} else {
				element.logoSm.fadeOut('slow');
				element.logo.show('slow');
				element.menuBar.show('fast');
			}
		}
	});
}
