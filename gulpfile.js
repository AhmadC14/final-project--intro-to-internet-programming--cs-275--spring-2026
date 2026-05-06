const { src, series } = require(`gulp`),
    jsLinter = require(`gulp-eslint`),
    jsValidator = require(`gulp-jsvalidate`);

let lintJS = () => {
    return src(`*.js`)
        .pipe(jsLinter());
};
let validateJS = () => {
    return src(`*.js`)
        .pipe(jsValidator());
};

exports.validateJS = validateJS;
exports.lintJS = lintJS;
exports.serve = series(
    lintJS,
    validateJS
);
