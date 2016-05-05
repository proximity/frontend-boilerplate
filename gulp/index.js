'use strict';

import fs from 'fs';
import gulp from 'gulp';

const tasks = fs.readdirSync('./gulp/tasks');

gulp.on('stop', function() {
	if (! global.isWatching) {
		process.nextTick(function() {
			process.exit(0);
		});
	}
});

tasks.forEach(function(task) {
	require('./tasks/' + task);
});


