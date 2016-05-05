'use strict';

import config from '../config';
import gulp from 'gulp';
import watch from 'gulp-watch';

gulp.task('watch', ['browserify', 'sass'], () => {
	global.isWatching = true;

	watch(config.sass.src, () => {
		gulp.start('sass');
	});
});
