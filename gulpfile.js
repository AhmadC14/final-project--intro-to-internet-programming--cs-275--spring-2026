const { src, series, parallel, watch } = require('gulp');
const eslint = require('gulp-eslint');
const babel = require('gulp-babel');

const paths = {
    matrixJs: 'matrix/*.js',
    arrayJs: 'array-flipper/*.js'
};

const lintMatrix = () => src(paths.matrixJs)
    .pipe(eslint({
        configFile: '.eslintrc'
    }))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());

const lintArray = () => src(paths.arrayJs)
    .pipe(eslint({
        configFile: '.eslintrc'
    }))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());

const transpileMatrix = () => src(paths.matrixJs)
    .pipe(babel({ presets: ['@babel/preset-env'] }))

const transpileArray = () => src(paths.arrayJs)
    .pipe(babel({ presets: ['@babel/preset-env'] }))

exports.default = series(parallel(lintMatrix, lintArray, transpileMatrix, transpileArray));
