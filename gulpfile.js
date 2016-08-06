var gulp = require('gulp');
var connect = require('gulp-connect');
var inject = require('gulp-inject');
var sourcemaps = require("gulp-sourcemaps");
var concat = require("gulp-concat");
var rev = require('gulp-rev');
var useref = require('gulp-useref');
var clean = require('gulp-clean');

var dist="./dist";
var dist_app = "./dist/app";
var img = "/img"

gulp.task('default', function() {
  // place code for your default task here
});

// distribution de l'application pour mise en production
gulp.task('dist', ['clean', 'copyRessources'], function() {
	return gulp.src(dist, {read: false})
    .pipe(clean());
});

// suppression du répertoire dist
gulp.task('clean', function() {
	
});

//copie des ressources html dans le repertoire dist
gulp.task('copyRessources', function() {
	gulp.src(['./app/**/*.html']).pipe(gulp.dest(dist_app));
	gulp.src(['./app/img/**/*.*']).pipe(gulp.dest(dist_app + img));
});

//concatene, sourcemap les fichiers javascripts
gulp.task('build', ['clean'], function() {
	return gulp.src('./index.html')
	.pipe(useref())
    .pipe(gulp.dest(dist));
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

	
// modification avant de changer de branch.