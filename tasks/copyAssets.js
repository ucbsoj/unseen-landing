/*

Copies the assets directory over to /build

*/

var shell = require("shelljs");

module.exports = function(grunt) {

  grunt.registerTask("copy", "Copy assets directory", function() {
    if (grunt.file.exists("src/assets")) {
      if (!grunt.file.exists("build/assets")) shell.mkdir("-p", "build/assets");
      shell.cp("-r", "src/assets", "build");
      shell.cp("-r", "src/new-path", "build");
      shell.cp("-r", "src/uneven-ground", "build");
      shell.cp("-r", "src/on-the-line", "build");
      shell.cp("-r", "src/pennies-per-hour", "build");
      shell.cp("-r", "src/smoke-and-mirrors", "build");
      shell.cp("-r", "src/dirty-business", "build");
      shell.cp("-r", "src/second-class", "build");
      shell.cp("-r", "src/stolen", "build");
      shell.cp("-r", "src/CNAME", "build");
    }
  });

}
