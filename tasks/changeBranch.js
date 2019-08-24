/*

Changes submodule repos to the site branch.
The site branch is the main repo that powers the landing page.
The master branch should only be switched for updating a project,
but a npm script handles that already.

*/

var shell = require("shelljs");

module.exports = function(grunt) {

  grunt.registerTask("change-branch", "Change submodule branch to site branch", function() {
    
    shell.exec("cd src/dirty-business && git checkout site");
    shell.exec("cd src/new-path && git checkout site");
    shell.exec("cd src/on-the-line && git checkout site");
    shell.exec("cd src/pennies-per-hour && git checkout site");
    shell.exec("cd src/second-class && git checkout site");
    shell.exec("cd src/smoke-and-mirrors && git checkout site");
    shell.exec("cd src/stolen && git checkout site");
    shell.exec("cd src/uneven-ground && git checkout site");

  });

}
