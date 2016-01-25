var gulp = require('gulp');
// var browserify = require('gulp-browserify');
var browserify = require("browserify");
var less = require('gulp-less');
var rt = require('gulp-react-templates');
var fs = require('fs');
var browserSync = require('browser-sync').create();
var renderReact = require('./tools/gulp-render-react');

gulp.task('rt', function() {
  gulp.src('app/components/**/*.rt')
    .pipe(rt({ modules: 'commonjs', format: 'stylish' }))
    .pipe(gulp.dest('app/components/'));
});

gulp.task('scripts', function() {
  browserify('./app/main.js')
    .transform('babelify')
    .bundle()
    .pipe(fs.createWriteStream("public/main.js"));
});

gulp.task('less', function() {
  gulp.src('app/less/main.less')
    .pipe(less({
      paths: [ 'less' ],
      compress: false
    }))
    .pipe(gulp.dest('public/'));
});

gulp.task('static', function() {
  gulp.src('app/images/*').pipe(gulp.dest('public/images/'));
});

gulp.task('html', ['static'], function() {
  gulp.src('app/index.html')
    .pipe(renderReact())
    .pipe(gulp.dest('public/'));
});

// Browsersync server
gulp.task('serve', ['html'], function() {
    browserSync.init({
        server: "public/"
    });

    gulp.watch('app/*.html', ['html']);
    gulp.watch('app/**/*.js', ['scripts']);
    // gulp.watch('app/**/*.rt', ['rt']);
    gulp.watch('app/**/*.less', ['less']);

    gulp.watch('public/*').on('change', browserSync.reload);
});

gulp.task('default', ['rt', 'scripts', 'less', 'html']);
