'use strict';

import bourbon from 'node-bourbon';
import neat from 'node-neat';

export default {
	sass: {
		src: 'scss/**/*.scss',
		dest: 'public/css',
		sourceMap: true,
		includePaths: [bourbon.includePaths, neat.includePaths]
	},
	browserify: {
		name: 'bundle.js',
		dest: 'public/js',
		sourceMap: true,
		entries: ['js/main.js']
	}
};
