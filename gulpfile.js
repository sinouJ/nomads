'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('autoprefixer');
const rename = require("gulp-rename");
const postcss = require("gulp-postcss");
const cssnano = require("cssnano");
const sourcemaps = require('gulp-sourcemaps');

const css_dir = './css';
const paths = {
    styles: {
        src: css_dir + '/sass/**/*.scss',
        dest: css_dir
    }
};

function css() {
    return gulp
        .src("./css/sass/**/*.scss")
        .pipe(sourcemaps.init())
        .pipe(sass.sync({ outputStyle: 'compressed' }))
        .pipe(gulp.dest("./css/"))
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("./css/"))
}

// WATCH
function watchFiles(cb) {
    gulp.watch(paths.styles.src, css);
    cb();
}

const watchTasks = watchFiles;

exports.watch = watchTasks;
exports.default = watchTasks;
