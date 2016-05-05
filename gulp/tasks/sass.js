'use strict';

import config from '../config';
import gulp from 'gulp';
import gulpif from 'gulp-if';
import sourcemaps from 'gulp-sourcemaps';
import sass from 'gulp-sass';
import clean from 'gulp-clean-css';
import autoprefixer from 'gulp-autoprefixer';
import handleErrors from '../utils/handleErrors';

gulp.task('sass', () => {
	const createSourceMap = ! global.isProduction && config.sass.sourceMap;

	return gulp.src(config.sass.src)
		.pipe(gulpif(createSourceMap, sourcemaps.init()))
		.pipe(sass({
			sourceComments: ! global.isProduction,
			includePaths: config.sass.includePaths
		}))
		.on('error', handleErrors)
		.pipe(autoprefixer())
		.pipe(clean())
		.pipe(gulpif(createSourceMap, sourcemaps.write()))
		.pipe(gulp.dest(config.sass.dest));
});
