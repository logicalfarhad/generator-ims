'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the groovy ' + chalk.red('generator-ims') + ' generator!'
    ));

    var prompts = [{
      name: 'appName',
      message: 'What is your app\'s name ?',
      default: true
    }];

    this.prompt(prompts, function (props) {
      this.appname = props.appName;
      // To access props later use this.props.someOption;
      //  console.log(this.props.appName);
      done();
    }.bind(this));
  },

  writing: function () {
    this.fs.copy(
      this.templatePath('_package.json'),
      this.destinationPath('package.json')
    );

    this.fs.copy(
      this.templatePath('_tsconfig.json'),
      this.destinationPath('tsconfig.json')
    );

    this.fs.copy(
      this.templatePath('_webpack.config.js'),
      this.destinationPath('webpack.config.js')
    );
    this.fs.copy(
      this.templatePath('index.html'),
      this.destinationPath('src/Index.html')
    );
    this.fs.copy(
      this.templatePath('Site.css'),
      this.destinationPath('src/app/Site.css')
    );
    this.fs.copy(
      this.templatePath('app.txt'),
      this.destinationPath('src/app.ts')
    );
    this.fs.copy(
      this.templatePath('lib.txt'),
      this.destinationPath('src/lib.ts')
    );
    this.fs.copy(
      this.templatePath('seed-app.txt'),
      this.destinationPath('src/app/seed-app.ts')
    );
  },

  install: function () {
    this.installDependencies({
      bower: false
    });
  }
});
