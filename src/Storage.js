var storage = {};

module.exports = {

  /**
   * Retreive a previously persisted value
   *
   * @param {String} key
   */

  get: function(key) {
    return storage[key];
  },

  /**
   * Persists a value by a key
   *
   * @param {String} key
   * @param {Object} value
   */

  set: function(key, value) {
    storage[key] = value;
  },

  /**
   * Removes a key from storage
   *
   * @param {String} key
   * @returns {Boolean} - if property exists
   */

  rm: function(key) {
    if (storage.hasOwnProperty(key)) {
      return delete storage[key];
    }

    return false;
  },

  /**
   * All keys in storage
   */

  keys: function() {
    return Object.keys(storage);
  }
};
