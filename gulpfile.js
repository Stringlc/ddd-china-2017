var gulp = require('gulp');
var fileinclude = require('gulp-file-include');

gulp.task('watch', function () {
    gulp.watch(['includes/*.html', 'src/*.html', 'src/speakers/*.html'], ['default', 'speakers']);
});

gulp.task('default', function () {
    gulp.src('src/**.html')
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('webContent'));
});

gulp.task('speakers', function () {
    gulp.src('src/speakers/**.html')
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('webContent/speakers/'));
})