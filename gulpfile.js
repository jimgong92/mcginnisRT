var gulp = require('gulp');

/**
 * Utilities
 */
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
var plugins = require('gulp-load-plugins')();
var path = {
  HTML: 'src/index.html',
  OUT: 'build.js',  
  MINIFIED_OUT: 'build.min.js',
  DEST: 'dist',
  DEST_SRC: 'dist/src',
  DEST_BUILD: 'dist/build',
  ENTRY_POINT: './src/js/App.js'
};

/**
 * Development tasks
 */
gulp.task('default', ['watch','serve']);

gulp.task('copy', function(){
  gulp.src(path.HTML)
    .pipe(gulp.dest(path.DEST));
});
gulp.task('watch', function(){
  gulp.watch(path.HTML, ['copy']);

  var watcher = watchify(browserify({
    entries: [path.ENTRY_POINT],
    transform: [reactify],
    debug: true,
    cache: {}, packageCache: {}, fullPaths: true
  }));

  return watcher.on('update', function(){
    watcher.bundle()
      .pipe(source(path.OUT))
      .pipe(gulp.dest(path.DEST_SRC))
      console.log('Updated');
  })
    .bundle()
    .pipe(source(path.OUT))
    .pipe(gulp.dest(path.DEST_SRC));
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