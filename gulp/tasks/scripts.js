module.exports = function () {
	var babel = require("gulp-babel"),
		minify = require('gulp-minify');

	$.gulp.task('scripts:lib', function () {
		return $.gulp.src(['node_modules/jquery/dist/jquery.min.js', 'node_modules/svgxuse/svgxuse.js', 'node_modules/object-fit-polyfill/dist/object-fit-polyfill.js', 'node_modules/slick-carousel/slick/slick.min.js', 'node_modules/swiper/js/swiper.js', 'node_modules/lightgallery.js/dist/js/lightgallery.min.js', 'node_modules/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js', 'node_modules/nouislider/distribute/nouislider.min.js'])
			.pipe($.gp.concat('libs.js'))
			.pipe(minify())
			.pipe($.gulp.dest('build/js/'))
			.pipe($.bs.reload({
				stream: true
			}));
	});

	$.gulp.task('scripts', function () {
		return $.gulp.src(['src/dev/js/main.js'])
			.pipe(babel())
			.pipe(minify())
			.pipe($.gulp.dest('build/js/'))
			.pipe($.bs.reload({
				stream: true
			}));
	});
}