const {src, watch, dest, series} = require(`gulp`),
    htmlValidator = require(`gulp-html`),
    CSSLinter = require(`gulp-stylelint`),
    jsLinter = require(`gulp-eslint`),
    htmlCompressor = require(`gulp-htmlmin`),
    cssCompressor = require(`gulp-clean-css`),
    jsCompressor = require(`gulp-uglify`),
    browserSync = require(`browser-sync`),
    reload = browserSync.reload;

let validateHTML = () => {
    return src(`index.html`)
        .pipe(htmlValidator(undefined));
};

let lintCSS = () => {
    return src(`styles/*.css`)
        .pipe(CSSLinter({
            failAfterError: false,
            reporters: [
                {formatter: `string`, console: true}
            ]
        }));
};

let lintJS = () => {
    return src([`array-flipper/*.js`, `matrix/*.js`])
        .pipe(jsLinter())
        .pipe(jsLinter.formatEach(`compact`));
};

let compressHTML = () => {
    return src(`*.html`)
        .pipe(htmlCompressor({collapseWhitespace: true}))
        .pipe(dest(`prod`));
};

let compressCSS = () => {
    return src(`styles/*.css`)
    .pipe(cssCompressor())
    .pipe(dest(`prod/styles`));
};

let compressJSArray = () => {
    return src(`array-flipper/*.js`)
        .pipe(jsCompressor())
        .pipe(dest(`prod/array-flipper`));
};

let compressJSMatrix = () => {
    return src(`matrix/*.js`)
        .pipe(jsCompressor())
        .pipe(dest(`prod/matrix`));
};

let serve = () => {
    browserSync({
        notify: true,
        reloadDelay: 50,
        server: {
            baseDir: [
                `./`
            ]
        }
    });
    watch(`index.html`, series(validateHTML))
        .on(`change`, reload);

    watch(`matrix/*.js`, series(lintJS))
        .on(`change`, reload);

    watch(`array-flipper/*.js`, series(lintJS))
        .on(`change`, reload);

    watch(`styles/*.css`, lintCSS)
        .on(`change`, reload);
};

exports.validateHTML = validateHTML;
exports.lintCSS = lintCSS;
exports.lintJS = lintJS;
exports.compressHTML = compressHTML;
exports.compressCSS = compressCSS;
exports.compressJSArray = compressJSArray;
exports.compressJSMatrix =compressJSMatrix;
exports.serve = series(
    validateHTML,
    lintCSS,
    lintJS,
    serve
);
exports.build = series(
    compressHTML,
    compressCSS,
    compressJSArray,
    compressJSMatrix
);
