var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    imagemin = require('gulp-imagemin'),
    csso = require('gulp-csso'),
    sass = require('gulp-sass');

gulp.task('sass', function () { 
	gulp.src('./assets/styles/style.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(csso())
		.pipe(gulp.dest('./public/css/'));
});

gulp.task('js', function() {
    gulp.src([
                './assets/javascripts/jquery-2.1.4.js',
                './assets/javascripts/bootstrap.js',
                './assets/javascripts/script.js'
        ])
        .pipe(concat('min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./public/js/'))
});

gulp.task('images', function() {
    gulp.src('.assets/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./public/images/'))
});

gulp.task('watch', function () {
	gulp.watch('./assets/styles/**/*.scss', ['sass']);
	gulp.watch('./assets/javascripts/**/*.js', ['js']);
	gulp.watch('./assets/images/**/*', ['images']);
});