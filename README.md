# Frontend Boilerplate

## Requirements
* Node >= 0.9
* Gulp
* Bower

## Installation

Install Node using [Homebrew](http://brew.sh) or [NVM](https://github.com/creationix/nvm)

	[sudo] brew install node

Install [Gulp](http://gulpjs.com) and [Bower](http://bower.io) globally:

	[sudo] npm install -g gulp bower

Install dependencies:

	[sudo] npm install

## Tasks

	gulp - Bundle Sass and JavaScript files
	gulp css - Bundle the Sass files
	gulp js - Bundle the JavaScript files
	gulp watch - Watch Sass and JavaScript files and bundle on changes

### Options

By default, the tasks will compress the files, pass the `-u` flag to stop the compression of files.
