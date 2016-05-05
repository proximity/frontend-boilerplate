# Frontend Boilerplate

## Requirements
* Node >= 5.0
* Gulp
* Bower

## Installation

Install Node using [NVM](https://github.com/creationix/nvm) or [n](https://github.com/tj/n)

	nvm install stable
	nvm alias default stable

Install [Gulp](http://gulpjs.com) and [Bower](http://bower.io) globally:

	npm install -g gulp-cli bower

Install dependencies:

	npm install

## Tasks

	gulp - Bundle Sass and JavaScript files
	gulp sass - Bundle the Sass files
	gulp browserify - Bundle the JavaScript files
	gulp watch - Watch Sass and JavaScript files and bundle on changes

### Options

By default, the bundled files will contain source maps, pass the `--production` flag to omit them.
