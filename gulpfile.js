var gulp = require('gulp');
var gutil = require('gulp-util');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var notify = require('gulp-notify');

function puts(error, stdout, stderr) { console.log(stdout); }

var paths = {
  server: ['./server/**/*.js', './server/**/*.coffee']
};

// lint task
gulp.task('lint', function () {
  gulp.src('./server/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

// default task
gulp.task('default', ['lint'], function () {
  gulp.watch(paths.server, function () {
    gulp.run('lint');
  });
});
