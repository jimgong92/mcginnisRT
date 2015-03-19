var gulp = require('gulp');

var plugins = require('gulp-load-plugins')();
var path = {
  HTML: 'src/index.html',
  ALL: ['src/js/*.js', 'src/js/**/*.js', 'src/index.html'],
  JS: ['src/js/*.js', 'src/js/**/*.js'],
  MINIFIED_OUT: 'build.min.js',
  DEST_SRC: 'dist/src',
  DEST_BUILD: 'dist/build',
  DEST: 'dist'
}
gulp.task('default', ['serve']);

/**
 *
 */
gulp.task('transform', function(){
  gulp.src(path.JS)
    .pipe(plugins.react())
    .pipe(gulp.dest(path.DEST_SRC));
});
gulp.task('serve', function(){
  plugins.nodemon({
      script: 'index.js'
  });
});