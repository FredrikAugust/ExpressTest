'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat')

// Compile SASS
gulp.task('sass', function () {
	return gulp.src('./public/stylesheets/sass/**/*.sass')
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(concat('style.css'))
		.pipe(gulp.dest('./public/stylesheets/'));
});

// Watch SASS files
gulp.task('sass:watch', function () {
  gulp.watch('./public/stylesheets/sass/**/*.sass', ['sass']);
});