/**
 * BowerDirectory
 * @module
 */
'use strict';

var fs     = require('fs');
var path   = require('path');
var exists = require('path-exists').sync;

/**
 * BowerDirectory
 *
 * @return {Object}
 */
module.exports = function() {
  var config;
  var cwd = process.cwd();
  var bowerrc = path.resolve(cwd, '.bowerrc');
  console.log(bowerrc);
  if (exists(bowerrc) && (config = JSON.parse(fs.readFileSync(bowerrc)))) {
    return {
      paths: {
        bowerDirectory: config.directory
      }
    };
  } else {
    return {};
  }
};
