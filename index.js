/**
 * Module dependencies.
 */

var load = require('loadscript');

/**
 * Expose `requireGlobal`
 */

module.exports = requireGlobal;

/**
 * Load global `source` with optional
 * check for a global `namespace` or many
 *
 * @param {String} source
 * @param {String|Array} namespace
 * @param {Function} callback
 * @public
 */

function globalRequire(source, namespace, callback) {
  if ('function' === typeof namespace) {
    callback = namespace;
    namespace = null;
  };

  if (loaded(namespace)) return callback(null);

  load(source, callback);
}

/**
 * Check for an already loaded namespace
 * to avoid overriding or double fetching
 *
 * @param {String|Array} namespace
 * @return {Boolean}
 * @private
 */

function loaded(namespace) {
  if ('string' === typeof namespace) namespace = [namespace];

  for (var i = 0; i < namespace.length; i++) {
    var test = new Function('_', 'return _.' + namespace[i] + ' != null');

    try {
      if (!test(window)) return false;
    } catch (err) {
      return false;
    }
  };

  return true;
}
