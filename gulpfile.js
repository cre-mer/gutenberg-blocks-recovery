const gulp = require('gulp')
	watch = require('gulp');
 	react = require('gulp-react')
 	minify = require('gulp-minify');

gulp.task('build', () =>
	gulp.src('index.js')
		.pipe(react())
		.pipe(minify())
		.pipe(gulp.dest('dist'))
);
