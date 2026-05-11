const gulp = require("gulp");
const browserSync = require("browser-sync").create();

function serve() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });

  gulp.watch("./*.html").on("change", browserSync.reload);
  gulp.watch("./*.js").on("change", browserSync.reload);
}

exports.default = serve;
