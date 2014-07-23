/* jshint node:true */
/* global require, it, before, beforeEach, describe */
'use strict';
var chai = require('chai'),
    inquirer = require('inquirer'),
    gulp = require('gulp'),
    mockGulpDest = require('mock-gulp-dest')(gulp);

chai.should();

require('../slushfile');

describe('slush-kathinka', function() {

  before(function () {
    process.chdir(__dirname);
  });

  describe('default generator', function () {
    beforeEach(function () {
      mockPrompt({name: 'module'});
    });

    it('should put all project files in current working directory', function (done) {
      gulp.start('default').once('stop', function () {
        mockGulpDest.cwd().should.equal(__dirname);
        mockGulpDest.basePath().should.equal(__dirname);
        done();
      });
    });

    it('should add dot files to project root', function(done) {
      gulp.start('default').once('stop', function () {
        mockGulpDest.assertDestContains([
          '.editorconfig',
          '.gitignore',
          '.nvmrc',
        ]);

        done();
      });
    });

    it('should add bower.json and package.json to project root', function (done) {
      gulp.start('default').once('stop', function () {
        mockGulpDest.assertDestContains([
          'package.json'
        ]);

        done();
      });
    });

    it('should add a Gulpfile to project root', function (done) {
      gulp.start('default').once('stop', function () {
        mockGulpDest.assertDestContains('Gulpfile.js');
        done();
      });
    });

    it('should add a readme file to project root', function (done) {
      gulp.start('default').once('stop', function () {
        mockGulpDest.assertDestContains('README.md');
        done();
      });
    });

    it('should add a JavaScript app module definition file by default', function (done) {
      mockPrompt({name: 'module'});

      gulp.start('default').once('stop', function () {
        mockGulpDest.assertDestContains('index.js');
        done();
      });
    });

    it('should add a config definition file by default', function (done) {
      mockPrompt({name: 'module'});

      gulp.start('default').once('stop', function () {
        mockGulpDest.assertDestContains('config.json');
        done();
      });
    });

    it('should create a gitkeep file in the app assets dir', function (done) {
      gulp.start('default').once('stop', function () {
        mockGulpDest.assertDestContains('app/resources/.gitkeep');
        done();
      });
    });



  });

  describe('resource generator', function () {

    beforeEach(function () {
      mockPrompt({name: 'users'});
    });

    it('should put resource file in current working directory', function (done) {

        gulp.start('resource').once('stop', function () {
          mockGulpDest.assertDestContains('app/resources/users.js');
          done();
        });

    });

  });

});

/**
 * Mock inquirer prompt
 */
function mockPrompt (answers) {
  inquirer.prompt = function (prompts, done) {

    [].concat(prompts).forEach(function (prompt) {
      if (!(prompt.name in answers)) {
        answers[prompt.name] = prompt.default;
      }
    });

    done(answers);
  };
}
