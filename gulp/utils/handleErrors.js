'use strict';

import gutil from 'gulp-util';
import notify from 'gulp-notify';

export default function(error) {
	const args = Array.prototype.slice.call(arguments);

	notify.onError({
		title: 'Compile Error',
		message: '<%= error.message %>'
	}).apply(this, args);

	this.emit('end');
}
