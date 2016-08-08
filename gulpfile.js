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

/**
 * Tâche default : appelle la tâche connect 
 */	
gulp.task('default', ['connect'], function() {

});

/**
 * Tâche dist : construit l'application dans le repertoire dist
 * depend des taches clean, copyRessources et build 
 */
// distribution de l'application pour mise en production
gulp.task('dist', ['clean', 'copyRessources', 'build'], function() {
	
});

/**
 * Tâche clean : supprime le repertoire dist 
 */
gulp.task('clean', function() {
	return gulp.src(dist, {read: false})
    .pipe(clean());
});

/**
 * Tâche copyRessources : copie les fichiers html, les images
 * dans le répertoire dist
 */
gulp.task('copyRessources', ['clean'], function() {
	gulp.src(['./app/**/*.html']).pipe(gulp.dest(dist_app));
	gulp.src(['./app/img/**/*.*']).pipe(gulp.dest(dist_app + img));
});

/**
 * Tâche build : concatene les js, css, minify les css, uglify le js,
 * crée les fichiers map, ajoute un numero de version, met à jour les liens dans index.html
 * et copie le tout dans le répertoire dist
 * depend de la tache clean
 */
gulp.task('build', ['clean'], function() {
	
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

/**
 * Tâche connect : sert l'application à l'adresse localhost:8080
 * depend de la tache index
 */
gulp.task('connect', ['index'], function() {
  connect.server({
    livereload: true
  });
});

/**
 * Tâche connect:watch : sert l'application à l'adresse localhost:8080
 * et reload l'application si modification des fichiers html, css et js
 * depend de la tache index
 */
gulp.task('connect:watch', ['index','watch'], function() {
  connect.server({
    livereload: true
  });
});

/**
 * Tâche connect:dist : sert l'application du répertoire dist à l'adresse localhost:7777
 */
gulp.task('connect:dist', function() {
	  connect.server({
	    livereload: false,
	    root: dist,
	    port: 7777
	  });
	});

/**
 * Tâche index : injection des fichiers js et css du projet (pas des librairies)
 */
gulp.task('index', function () {
	  var target = gulp.src('./index.html');
	  // It's not necessary to read the files (will speed up things), we're only after their paths: 
	  var sources = gulp.src(['./app/**/*.js','./app/**/*.css'], {read: false});
	  return target.pipe(inject(sources))
	    .pipe(gulp.dest('./'));
	});

/**
 * Tâche watch : ecoute les modifications des fichiers html, css et js
 */
gulp.task('watch', function () {
  gulp.watch(['./app/**/*.html'], ['html']);
  gulp.watch(['./app/style/*.css'], ['css']);
  gulp.watch(['./app/**/*.js'], ['js']);
});

/**
 * Tâche html : reload des fichiers html
 */
gulp.task('html', function () {
  gulp.src('./app/**/*.html')
    .pipe(connect.reload());
});

/**
 * Tâche js : reload des fichiers js
 */
gulp.task('js', function () {
  gulp.src('./app/**/*.js')
    .pipe(connect.reload());
});

/**
 * Tâche css : reload des fichiers css
 */
gulp.task('css', function () {
	  gulp.src('./app/style/*.css')
	    .pipe(connect.reload());
	});