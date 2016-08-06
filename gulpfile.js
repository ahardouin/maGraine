var gulp = require('gulp');
var connect = require('gulp-connect');
var inject = require('gulp-inject');
var sourcemaps = require("gulp-sourcemaps");
var concat = require("gulp-concat");
var rev = require('gulp-rev');
var useref = require('gulp-useref');
var clean = require('gulp-clean');
var gulpif = require('gulp-if');
var csso = require('gulp-csso');
var minify = require('gulp-minify');
var uglify = require('gulp-uglify');
var filter = require('gulp-filter');
var revReplace = require('gulp-rev-replace');
var debug = require('gulp-debug');

var dist="./dist";
var dist_app = "./dist/app";
var img = "/img"

gulp.task('default', function() {
  // place code for your default task here
});

// distribution de l'application pour mise en production
gulp.task('dist', ['clean', 'copyRessources', 'build'], function() {
	
});

// suppression du répertoire dist
gulp.task('clean', function() {
	return gulp.src(dist, {read: false})
    .pipe(clean());
});

//copie des ressources html dans le repertoire dist
gulp.task('copyRessources', ['clean'], function() {
	gulp.src(['./app/**/*.html']).pipe(gulp.dest(dist_app));
	gulp.src(['./app/img/**/*.*']).pipe(gulp.dest(dist_app + img));
});

// concatene JS et CSS, minify CSS uglify JS et ajoute version
gulp.task('build', ['clean'], function() {
	
	var jsFilter = filter("**/*.js");
	var cssFilter = filter("**/*.css");
	 
	return gulp.src('./index.html')
	.pipe(useref())
	.pipe(sourcemaps.init())
	.pipe(debug({title: 'init sourcemap'}))
	.pipe(gulpif('*.css', csso()))
	.pipe(gulpif('*.js', uglify({ mangle: false, compress:true, output: { beautify: false }})))
	.pipe(gulpif(['*.js', '*.css'],rev())) 
	.pipe(revReplace())   
	.pipe(gulpif(['*.js', '*.css'],sourcemaps.write('.')))
	.pipe(debug({title: 'write sourcemap'}))
    .pipe(gulp.dest(dist))
    ;
});

gulp.task('connect', ['index'], function() {
  connect.server({
    livereload: true
  });
});

gulp.task('connect:watch', ['index','watch'], function() {
  connect.server({
    livereload: true
  });
});

gulp.task('connect:dist', function() {
	  connect.server({
	    livereload: false,
	    root: dist,
	    port: 7777
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