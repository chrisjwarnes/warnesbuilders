const { series, parallel, watch,  src, dest } = require('gulp')
const sass = require('gulp-dart-sass')
const autoprefixer = require('gulp-autoprefixer')
const cleanCSS = require('gulp-clean-css')
const rename = require('gulp-rename')

const scss = function () {
    return src(['stylesheets/**/*.scss'])
      .pipe(sass().on('error', sass.logError))
      .pipe(dest('./stylesheets'))
      .pipe(cleanCSS())
      .pipe(rename({ suffix: '.min' }))
      .pipe(dest('./stylesheets'))
  }

  function watcher () {
    watch('stylesheets/**/*.scss', scss)
  }

  exports.scss = scss
  exports.default = scss