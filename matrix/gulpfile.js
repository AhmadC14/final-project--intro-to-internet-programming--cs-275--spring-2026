const gulp = require("gulp");
const browserify = require("browserify");
const source = require("vinyl-source-stream");
const babelify = require("babelify");
const browserSync = require("browser-sync").create();
const streamify = require("gulp-streamify");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");

const paths = {
    html: "./index.html",
    scripts: "./src/js/main.js",
    dist: "./dist"
};

const copyHTML = () => {
    return gulp
        .src(paths.html)
        .pipe(gulp.dest(paths.dist))
        .pipe(browserSync.stream());
};

const bundleJS = () => {
    return browserify({
        entries: [paths.scripts],
        debug: true
    })
        .transform(
            babelify.configure({
                presets: ["@babel/preset-env"]
            })
        )
        .bundle()
        .pipe(source("bundle.js"))
        .pipe(gulp.dest(paths.dist))
        .pipe(rename("bundle.min.js"))
        .pipe(streamify(uglify()))
        .pipe(gulp.dest(paths.dist))
        .pipe(browserSync.stream());
};

const serve = () => {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });

    gulp.watch("./index.html", copyHTML);
    gulp.watch("./src/js/**/*.js", bundleJS);
};

const build = gulp.series(copyHTML, bundleJS);

exports.build = build;
exports.watch = gulp.series(build, serve);
exports.default = build;
