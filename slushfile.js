var gulp = require('gulp'),
    install = require('gulp-install'),
    conflict = require('gulp-conflict'),
    template = require('gulp-template'),
    rename = require('gulp-rename'),
    inquirer = require('inquirer'),
    _ = require('underscore.string');

gulp.task('default', function (done) {
  inquirer.prompt([
    {type: 'input', name: 'name', message: 'What do you want to name your KaThinka app?', default: getNameProposal()},
  ],
  function (answers) {
    answers.nameDashed = _.slugify(answers.name);
    answers.modulename = _.camelize(answers.nameDashed);
    var files = [__dirname + '/templates/root/**'];
    return gulp.src(files)
      .pipe(template(answers))
      .pipe(rename(function (file) {
        if (file.basename[0] === '_') {
          file.basename = '.' + file.basename.slice(1);
        }
      }))
      .pipe(conflict('./'))
      .pipe(gulp.dest('./'))
      .pipe(install())
      .on('finish', function () {
        done();
      });
  });
});

gulp.task('resource', function (done) {

  inquirer.prompt([
    {type: 'input', name: 'name', message: 'Give your resource a name', default: 'example'}
  ],
  function (answers) {
    answers.nameDashed = _.slugify(answers.name);

    var file = [__dirname + '/templates/resources/**'];
    return gulp.src(file)
      .pipe(rename(function (file) {
        file.basename = answers.nameDashed;
      }))
      .pipe(conflict('./'))
      .pipe(gulp.dest('./'))
      .on('finish', function () {
        done();
      });

  });
});

function getNameProposal () {
  var path = require('path');
  try {
    return require(path.join(process.cwd(), 'package.json')).name;
  } catch (e) {
    return path.basename(process.cwd());
  }
}
