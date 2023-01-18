const gulp = require('gulp'),
      pug  = require('gulp-pug'),
      autoprefixer = require('gulp-autoprefixer'),
      minify = require('gulp-minify'),
      concat = require('gulp-concat'),
      sass = require('gulp-sass') (require('sass')),
      sourcemap = require('gulp-sourcemaps'),
      notify = require('gulp-notify'),
      liverload = require('gulp-livereload'),
      newer = require('gulp-newer');


gulp.task('html', () => {
 return gulp.src('stage/html/*.pug')
 .pipe(pug({
  pretty: true
 }))
 .pipe(gulp.dest('dist'))
 .pipe(liverload())
 .pipe(notify('HTML task is Done'))
})

gulp.task('css', () => {
 return gulp.src(["stage/css/**/*.css","stage/css/**/*.scss"])
        .pipe(sourcemap.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(concat('main.css'))
        .pipe(sourcemap.write('.'))
        .pipe(gulp.dest("dist/css"))
        .pipe(liverload())
        .pipe(notify('css Task is Done'))
})

gulp.task('js', () => {
 return gulp.src('stage/js/*.js')
        .pipe(concat('main.js'))
        .pipe(minify())
        .pipe(gulp.dest('dist/js'))
        .pipe(liverload())
        .pipe(notify("Js Task is Done"))
})

gulp.task('watch', () => {
 require('./server')
 liverload.listen()
 gulp.watch('stage/html/**/*.pug', gulp.series('html'))
 gulp.watch(["stage/css/**/*.css","stage/css/**/*.scss"], gulp.series('css'))
 gulp.watch('stage/js/*.js', gulp.series('js'))
})