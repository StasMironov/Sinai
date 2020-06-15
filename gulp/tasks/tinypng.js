module.exports = function() {
    var tingpng = require('gulp-tinypng');
    
    $.gulp.task('tinypng', function () {
        return $.gulp.src('src/dev/img/**/*.{png,jpg,jpeg}')
            .pipe(tingpng('SLFHTGybMKbsPMjTqc13S8jlk1Tn3Pz5'))
            .pipe($.gulp.dest('build/img/'))
            .pipe($.bs.reload({
                stream: true
            }));
    });
}