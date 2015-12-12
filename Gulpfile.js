var gulp       = require('gulp');
var browserify = require('gulp-browserify');
var rt = require('gulp-react-templates');

gulp.task('scripts', function () {
    gulp.src(['app/main.js'])
        .pipe(browserify({
            debug: true,
            transform: [ 'reactify' ]
        }))
        .pipe(gulp.dest('./public/'));
});

gulp.task('rt', function() {
    gulp.src('app/components/**/*.rt')
        .pipe(rt({ modules: 'commonjs', format: 'stylish' }))
        .pipe(gulp.dest('app/components/'));
});

gulp.task('default', ['scripts', 'rt']);
