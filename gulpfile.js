// import gulp
var gulp = require('gulp');
var jscs = require('gulp-jscs');
var autoprefixer = require('gulp-autoprefixer');
var livereload = require('gulp-livereload');
var ngAnnotate = require('gulp-ng-annotate');
var rubySass = require('gulp-ruby-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var stylish = require('jshint-stylish');
var jshint = require('gulp-jshint');
var rename = require('gulp-rename');
var connect = require('gulp-connect');

// set distribution directory
var dist = 'public/';

gulp.task('connect', function() {
    connect.server({
        root: './',
        port: 8001,
        livereload: false
    });
});

// compile styles
gulp.task('styles', function() {
    return rubySass('src/styles/main.scss', {
            style: 'compressed',
    })
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(gulp.dest(dist + '/styles/'));
});

// concatenate & uglify js
gulp.task('js', function() {
    return gulp.src([
        'src/javascript/app.js',
        'src/javascript/controllers/home.controller.js',
        'src/javascript/directives/*',
        'src/javascript/services/*'
    ])
    .pipe(ngAnnotate({ add: true }))
    .pipe(concat('app.min.js'))
    .pipe(uglify({ mangle: true }))
    .pipe(gulp.dest(dist + 'javascript/'))
    .pipe(livereload());
});

// concatenate & uglify vendor js
gulp.task('jsvendor',function() {
    return gulp.src([
            'node_modules/angular/angular.min.js',
            'node_modules/angular-route/angular-route.min.js',
        ])
        .pipe(concat('vendor.min.js'))
        .pipe(uglify({ mangle: false }))
        .pipe(gulp.dest(dist + 'javascript/vendor/'));
});

// lint js
gulp.task('jslinting', function() {
    return gulp.src([
        'src/javascript/**/*.js'
    ])
    .pipe(jscs())
    .pipe(jscs.reporter())
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

// watch for changes
gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('src/styles/**/*.scss', ['styles']);
    gulp.watch(['src/javascript/**/*.js'], ['js']);
});

// default task
gulp.task('default', ['styles', 'js', 'watch', 'connect']);

// deploy task
gulp.task('deploy', ['styles', 'js']);
