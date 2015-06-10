var gulp = require('gulp');
var babel = require('gulp-babel');
var run = require('gulp-run');
var rename = require('gulp-rename');
var asar = require('gulp-asar');
var clean = require('gulp-clean');

gulp.task('transpile-app', function() {
  return gulp.src('app/main.es6.js')
    .pipe(babel())
    .pipe(rename('main.js'))
    .pipe(gulp.dest('app'));
});


gulp.task('clean', function(){
  return gulp.src('package', {read: false})
    .pipe(clean({force: true}));
});

gulp.task('copy-app', ['clean'], function(){
  return gulp.src(['app/**/*', 'browser/**/*', 'package.json'], {base: '.'})
    .pipe(gulp.dest('package'));
});

gulp.task('package', ['copy-app'], function(){
  return gulp.src('package/**/*')
    .pipe(asar('app.asar'))
    .pipe(gulp.dest('dist'));
});

gulp.task('run', ['default'], function() {
  return run('electron .').exec();
});

gulp.task('default', ['transpile-app']);