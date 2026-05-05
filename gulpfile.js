const { src, dest, series, watch } = require('gulp');
const CSSLinter = require('gulp-stylelint');
const del = require('del'); // Adjusted for v6 compatibility
const babel = require('gulp-babel');
const htmlCompressor = require('gulp-htmlmin');
const htmlValidator = require('gulp-html');
const jsCompressor = require('gulp-uglify');
const jsLinter = require('gulp-eslint');
const browserSync = require('browser-sync');
const reload = browserSync.reload;

let browserChoice = 'default';

const paths = {
    html: ['array-flipper/**/*.html', 'matrix/**/*.html'],
    js: ['array-flipper/**/*.js', 'matrix/**/*.js'],
    css: ['array-flipper/**/*.css', 'matrix/**/*.css']
};

let validateHTML = () => {
    return src(paths.html)
        .pipe(htmlValidator(undefined));
};

let compressHTML = () => {
    return src(paths.html, { base: './' })
        .pipe(htmlCompressor({collapseWhitespace: true}))
        .pipe(dest('prod'));
};

let lintJS = () => {
    return src(paths.js)
        .pipe(jsLinter())
        .pipe(jsLinter.formatEach('compact'));
};

let transpileJSForDev = () => {
    return src(paths.js, { base: './' })
        .pipe(babel())
        .pipe(dest('temp'));
};

let transpileJSForProd = () => {
    return src(paths.js, { base: './' })
        .pipe(babel())
        .pipe(jsCompressor())
        .pipe(dest('prod'));
};
let lintCSS = () => {
    return src(paths.css, { base: './' })
        .pipe(CSSLinter({
            failAfterError: false,
            reporters: [{formatter: 'string', console: true}]
        }))
        .pipe(dest('temp'));
};

exports.validateHTML = validateHTML;
exports.compressHTML = compressHTML;
exports.lintJS = lintJS;
exports.transpileJSForDev = transpileJSForDev;
exports.transpileJSForProd = transpileJSForProd;
exports.lintCSS = lintCSS;
