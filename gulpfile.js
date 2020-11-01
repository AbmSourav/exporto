const gulp = require("gulp");
const plumberNotifier = require('gulp-plumber-notifier');
const rename = require("gulp-rename");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify-es").default;
const zip = require('gulp-zip');

const jsFiles = "src/*.js";

// javascripts
function scripts() {
    return gulp.src(jsFiles)
        .pipe(plumberNotifier())
        .pipe(concat('exporto.js'))
        .pipe(gulp.dest("dist/exporto"))
        .pipe(uglify())
		.pipe(rename({suffix: ".min"}))
        .pipe(gulp.dest("dist/exporto"));
}

function gulpZip() {
	return gulp.src('./dist/*/*')
		.pipe(zip('exporto.zip'))
		.pipe(gulp.dest('dist'))
}

function watch() {
    gulp.watch(jsFiles, scripts);
}
gulp.task("default", gulp.series(scripts, gulpZip, watch));
