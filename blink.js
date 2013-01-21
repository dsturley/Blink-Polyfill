setInterval(function () {
	'use strict';

	var index, style,
		tags = document.getElementsByTagName('blink');

	for (index = 0; index < tags.length; index += 1) {
		style = tags[index].style;
		style.display = style.display ? '' : 'none';
	}

}, 500);
