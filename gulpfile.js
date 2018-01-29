var gulp = require('gulp')
/*以http模式*/
var browserSync = require('browser-sync')

gulp.task('default', function() {
    browserSync.init(null, {
        files: [
            './*.html',
            {
                match: ['./css/*.css'],
                fn: function () {
                    return gulp.src('./css/*.css')
                        .pipe(browserSync.stream())
                }
            }
        ],
        open: false,
        server: {
            baseDir: './',
        },
    })
})