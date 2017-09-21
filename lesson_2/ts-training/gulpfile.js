'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const typescript = require("gulp-typescript");
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();


/* Sass / CSS */
gulp.task('sass', function(){
	gulp.src('./src/scss/application.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(autoprefixer({
    	browsers: ['last 2 versions', 'ie 11', 'android 4']
    })) // Using gulp-autoprefixer
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream());
  });

/* TypeScript */ 
gulp.task('ts', function(){
  gulp.src(['src/**/*.ts'])
		.pipe(typescript())		
		.pipe(babel({
			presets: ['env']
		}))
		.pipe(uglify())
    .pipe(gulp.dest('dist/'))
})

// Static server
gulp.task('browser-sync', function() {
	browserSync.init({
		server: {
			baseDir: "./"
		}
	});
});

/* Global main tasks */
// Development mode without watching
gulp.task('default', ['ts', 'sass']);

