const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
  // shinobi/**/*.scss - this means any folder or any subfolder with sass file inside shinobi and it will get compiled
  return src('shinobi/**/*.scss')  // take any file name having .scss extension
    .pipe(sass())
    .pipe(dest('css'))
}

function watchTask() {
  watch(['shinobi/**/*.scss'], buildStyles)  // partials won't get compiled
}

exports.default = series(buildStyles, watchTask)