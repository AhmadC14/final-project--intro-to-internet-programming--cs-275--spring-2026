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
