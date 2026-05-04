const {src, watch, dest, series} = require(`gulp`),
    htmlValidator = require(`gulp-html`),
    CSSLinter = require(`gulp-stylelint`),
    jsLinter = require(`gulp-eslint`);

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

exports.validateHTML = validateHTML;
exports.lintCSS = lintCSS;
exports.lintJS = lintJS;
