const {src, watch, dest, series} = require(`gulp`),
    htmlValidator = require(`gulp-html`);

let validateHTML = () => {
    return src(`index.html`)
        .pipe(htmlValidator(undefined));
};

exports.validateHTML = validateHTML;
