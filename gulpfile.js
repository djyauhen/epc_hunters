const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();

// Другие задачи
gulp.task('styles', function () {
    return gulp.src('src/styles/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS())
        .pipe(concat('styles.min.css'))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream());
});

gulp.task('scripts', function () {
    return gulp.src('src/scripts/**/*.js')
        .pipe(uglify())
        .pipe(concat('scripts.min.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.stream());
});

gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: './',
        },
    });

    gulp.watch('src/styles/**/*.scss', gulp.series('styles'));
    gulp.watch('src/scripts/**/*.js', gulp.series('scripts'));
    gulp.watch('*.html').on('change', browserSync.reload);
});

gulp.task('default', gulp.series('styles', 'scripts', 'serve'));
