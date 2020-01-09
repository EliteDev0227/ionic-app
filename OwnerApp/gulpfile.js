var gulp = require('gulp');

var requireDir = require('require-dir');
requireDir('./gulp-tasks');

gulp.task('default', ['sass']);
// gulp.task('ionic:watch:before', ['default']);
gulp.task('ionic:watch:before', ['default', 'watch']);
