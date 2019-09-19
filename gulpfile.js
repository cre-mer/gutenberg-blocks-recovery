const gulp = require('gulp')
	babel = require('gulp-babel')
	terser = require('gulp-terser');

gulp.task('build', () =>
	gulp.src('index.js')
		.pipe(babel({
			presets: ["@babel/preset-env", "@babel/preset-react"]
		}))
		.pipe(terser())
		.pipe(gulp.dest('dist'))
);
