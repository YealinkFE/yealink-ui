var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
    return gulp.src('../src/styles/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 3 versions', 'ie > 8', 'ff > 45', 'Chrome > 45', 'Safari > 8']
        }))
        .pipe(rename('yealink-ui.css'))
        .pipe(gulp.dest('../dist/styles'));
});

gulp.task('default', ['sass']);