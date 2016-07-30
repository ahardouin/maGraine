var gulp = require('gulp');
var connect = require('gulp-connect');
var inject = require('gulp-inject');

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('connect', ['index','watch'], function() {
  connect.server({
    livereload: true
  });
});

gulp.task('index', function () {
	  var target = gulp.src('./index.html');
	  // It's not necessary to read the files (will speed up things), we're only after their paths: 
	  var sources = gulp.src(['./app/**/*.js','./app/**/*.css'], {read: false});
	 
	  return target.pipe(inject(sources))
	    .pipe(gulp.dest('./'));
	});

gulp.task('watch', function () {
  gulp.watch(['./app/**/*.html'], ['html']);
  gulp.watch(['./app/style/*.css'], ['css']);
  gulp.watch(['./app/**/*.js'], ['js']);
});

gulp.task('html', function () {
  gulp.src('./app/**/*.html')
    .pipe(connect.reload());
});

gulp.task('js', function () {
  gulp.src('./app/**/*.js')
    .pipe(connect.reload());
});

gulp.task('css', function () {
	  gulp.src('./app/style/*.css')
	    .pipe(connect.reload());
	});
