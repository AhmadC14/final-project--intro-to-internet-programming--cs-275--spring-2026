const { src, dest, series, parallel, watch } = require('gulp');
const stylelint = require('gulp-stylelint');
const eslint = require('gulp-eslint');
const babel = require('gulp-babel');
const cleanCss = require('gulp-clean-css');
const terser = require('gulp-terser');
const htmlmin = require('gulp-htmlmin');
const browserSync = require('browser-sync').create();

const paths = {
    js: 'scripts/*.js',
    css: 'styles/main.css',
    html: '*.html',
    prod: 'prod/'
};

const lintCss = () => src('styles/main.css')
    .pipe(stylelint({
        configFile: '.stylelintrc.json',
        failAfterError: false,
        reporters: [{ formatter: 'string', console: true }]
    }))
    .pipe(browserSync.stream());

const lintJs = () => src(paths.js)
    .pipe(eslint({
        configFile: '.eslintrc'
    }))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());

const transpileJs = () => src(paths.js)
    .pipe(babel({ presets: ['@babel/preset-env'] }))
    .pipe(dest('scripts'))
    .pipe(browserSync.stream());

const reload = done => {
    browserSync.reload();
    done();
};

const serve = () => {
    browserSync.init({ server: { baseDir: './' } });
    watch(paths.js, series(lintJs, transpileJs, reload));
    watch('styles/main.css', series(lintCss, reload));
};

const minCss = () => src(paths.css)
    .pipe(cleanCss())
    .pipe(dest(paths.prod + 'styles'));

const minJs = () => src(paths.js)
    .pipe(babel({ presets: ['@babel/preset-env'] }))
    .pipe(terser())
    .pipe(dest(paths.prod + 'scripts'));

const minHtml = () => src(paths.html)
    .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
    .pipe(dest(paths.prod));

const copy = () => src([
    './*.*',
    '!./*.html',
    '!./*.css',
    '!./*.js'
],
{ dot: true })
    .pipe(dest(paths.prod));

const clean = () => ([paths.prod]);

exports.default = series(parallel(lintCss, lintJs, transpileJs), serve);
exports.build = series(parallel(minCss, minJs, minHtml, copy));
exports.clean = clean;
