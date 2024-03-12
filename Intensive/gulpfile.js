const gulp        = require('gulp');
const browserSync = require('browser-sync');
const sass        = require('gulp-sass')(require('sass'));
const pug = require('gulp-pug');

gulp.task('server', function() {

    browserSync({
        server: {
            baseDir: "dist"
        }
    });

    gulp.watch("dist/*.html").on('change', browserSync.reload);
});

gulp.task('styles', function() {
    return gulp.src("src/sass/**/*.+(scss|sass)")
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest("dist/css"))
        .pipe(browserSync.stream());
});

gulp.task('pug', function () {
    return gulp.src('src/pug/*.pug')
        .pipe(pug({pretty: true}))
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
    gulp.watch("src/sass/**/*.+(scss|sass)", gulp.parallel('styles'));
})

gulp.task('watch-pug', function () {
    return gulp.watch('src/pug/**/*.pug', gulp.parallel('pug'))
});

gulp.task('default', gulp.parallel('watch', 'server', 'styles', 'watch-pug', 'pug'));
