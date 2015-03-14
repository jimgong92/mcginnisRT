var gulp = require('gulp');

var plugins = require('gulp-load-plugins')();

gulp.task('default', ['serve']);

gulp.task('serve', function(){
  plugins.nodemon({
      script: 'index.js'
  });
});