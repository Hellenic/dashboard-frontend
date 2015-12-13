var gulp = require('gulp');
var browserify = require('gulp-browserify');
var less = require('gulp-less');
var rt = require('gulp-react-templates');
var path = require('path');

gulp.task('rt', function() {
  gulp.src('app/components/**/*.rt')
    .pipe(rt({ modules: 'commonjs', format: 'stylish' }))
    .pipe(gulp.dest('app/components/'));
});

gulp.task('scripts', function () {
  gulp.src(['app/main.js'])
    .pipe(browserify({
        debug: true,
        transform: [ 'reactify' ]
    }))
    .pipe(gulp.dest('public/'));
});

gulp.task('less', function () {
  gulp.src('app/less/main.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ],
      compress: false
    }))
    .pipe(gulp.dest('public/'));
});

gulp.task('default', ['rt', 'scripts', 'less']);
