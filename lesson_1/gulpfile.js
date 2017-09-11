'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

// gulp.task('hello', function() {
//   console.log('Hello Zell');
// });


/* Sass / CSS */
gulp.task('sass', function(){
  gulp.src('./assets/stylesheets/application.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(autoprefixer({
    	browsers: ['last 2 versions', 'ie 11', 'android 4']
    })) // Using gulp-autoprefixer
    .pipe(gulp.dest('dist/css'))
});


/* JavaScript */
gulp.task('scripts', function(){
	return gulp.src([
		'./assets/javascripts/lib/jquery-1.11.0.min.js',
		'./assets/javascripts/bootstrap.min.js',
		'./assets/javascripts/script.js'
	])
		.pipe(babel({
    	presets: ['env']
    }))
		.pipe(concat('all.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'));
});

/* Global main tasks */
// Development mode without watching
gulp.task('default', ['scripts', 'sass']);