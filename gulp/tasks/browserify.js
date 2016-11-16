'use strict';

import config from '../config';
import gulp from 'gulp';
import gulpif from 'gulp-if';
import source from 'vinyl-source-stream';
import sourcemaps from 'gulp-sourcemaps';
import buffer from 'vinyl-buffer';
import browserify from 'browserify';
import watchify from 'watchify';
import babelify from 'babelify';
import streamify from 'gulp-streamify';
import uglify from 'gulp-uglify';
import {assign} from 'lodash';
import bundleLogger from '../utils/bundleLogger';
import handleErrors from '../utils/handleErrors';

gulp.task('browserify', () => {
	const createSourceMap = ! global.isProduction && config.browserify.sourceMap;

	let bundler = browserify({
		entries: config.browserify.entries,
		debug: createSourceMap,
		cache: {},
		packageCache: {},
		fullPaths: ! global.isProduction
	});

	const transforms = [babelify];

	transforms.forEach(function(transform) {
		bundler.transform(transform);
	});

	bundler = watchify(bundler);
	bundler.on('update', bundle);

	function bundle() {
		bundleLogger.start();

		return bundler.bundle()
			.on('error', handleErrors)
			.on('end', bundleLogger.end)
			.pipe(source(config.browserify.name))
			.pipe(gulpif(createSourceMap, buffer()))
			.pipe(gulpif(createSourceMap, sourcemaps.init({loadMaps: true})))
			.pipe(gulpif(global.isProduction, streamify(uglify({compress: {drop_console: true}}))))
			.pipe(gulpif(createSourceMap, sourcemaps.write()))
			.pipe(gulp.dest(config.browserify.dest));
	}

	return bundle();
});
