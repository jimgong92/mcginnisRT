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

/**
 * Development tasks
 */
gulp.task('default', ['watch','serve']);
gulp.task('transform', function(){
  gulp.src(path.JS)
    .pipe(plugins.react())
    .pipe(gulp.dest(path.DEST_SRC));
});
gulp.task('copy', function(){
  gulp.src(path.HTML)
    .pipe(gulp.dest(path.DEST));
});
gulp.task('watch', function(){
  gulp.watch(path.ALL, ['transform', 'copy']);
});
gulp.task('serve', function(){
  plugins.nodemon({
      script: 'index.js'
  });
});
/**
 * Production tasks
 */
gulp.task('production', ['replaceHTML', 'build']);
gulp.task('replaceHTML', function(){
  gulp.src(path.HTML)
    .pipe(plugins.htmlreplace({
      'js': 'build/' + path.MINIFIED_OUT
    }))
    .pipe(gulp.dest(path.DEST));
});
gulp.task('build', function(){
  gulp.src(path.JS)
    .pipe(plugins.react())
    .pipe(plugins.concat(path.MINIFIED_OUT))
    .pipe(plugins.uglify(path.MINIFIED_OUT))
    .pipe(gulp.dest(path.DEST_BUILD));
});