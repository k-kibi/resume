const gulp = require('gulp');
const browserSync = require('browser-sync');
const plumber = require('gulp-plumber');
const slim = require('gulp-slim');
const sass = require('gulp-sass');

gulp.task('sass', () => {
  gulp.src('./src/sass/**/*.sass')
    .pipe(plumber())
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(gulp.dest('docs/css/'));
});

gulp.task('slim', () => {
  gulp.src('./src/slim/**/*.slim')
    .pipe(slim({ pretty: true }))
    .pipe(gulp.dest('docs/'));
});

gulp.task('browser-sync', () => {
  browserSync({
    server: {
      baseDir: './docs/'
    }
  });
});

gulp.task('default', ['browser-sync'], () => {
  gulp.watch('./src/slim/**/*.slim', ['slim']);
  gulp.watch('./src/sass/**/*.sass', ['sass']);
});
