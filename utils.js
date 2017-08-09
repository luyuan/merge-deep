'use strict';

/**
 * Module dependencies
 */

var union = require('arr-union');
var clone = require('clone-deep');
var typeOf = require('kind-of');

utils.isObject = function(val) {
  return utils.typeOf(val) === 'object' || utils.typeOf(val) === 'function';
};

/**
 * Expose `utils` modules
 */

module.exports = utils;

