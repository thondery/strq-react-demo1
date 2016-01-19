'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var del = require('del');
var runSequence = require('run-sequence').use(gulp);
var config = require('./config');
var paths = config.paths;
var clean = config.clean;
var vendor = config.vendor;
var webpack = config.webpack;
var server = config.server;

gulp.task('cleanall', function () {
  del.sync(paths.dist.base, { dot: true });
});

gulp.task('clean', function () {
  del.sync(clean, { dot: true });
});

gulp.task('html', function () {
  return gulp.src(paths.assets.base + '/index.html')
    .pipe(gulp.dest(paths.dist.base));
});

gulp.task('vendor', function () {
  return gulp.src(vendor.modules)
    .pipe($.concat('vendor.js'))
    .pipe(gulp.dest(paths.dist.base))
    .pipe($.sourcemaps.init())
    .pipe($.rename({ suffix: '.min' }))
    .pipe($.uglify())
    .pipe($.sourcemaps.write('./'))
    .pipe(gulp.dest(paths.dist.base));
});

gulp.task('webpack', function () {
  return gulp.src(webpack.entry.index)
    .pipe($.webpack(webpack))
    .pipe(gulp.dest(paths.dist.base));
});

gulp.task('server', function () {
  return gulp.src(paths.dist.base)
    .pipe($.webserver(server));
});

gulp.task('init', function () {
	runSequence('cleanall', ['html', 'vendor']);
});

gulp.task('devall', function () {
	runSequence('init', ['webpack'], ['server']);
});

gulp.task('buildall', function () {
	runSequence('init', ['webpack']);
});

gulp.task('dev', function () {
	runSequence('clean', ['webpack'], ['server']);
});

gulp.task('build', function () {
	runSequence('clean', ['webpack']);
});
