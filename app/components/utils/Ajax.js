require('es6-promise').polyfill();
require('isomorphic-fetch');

var Ajax = {

  get: function(url, callback) {

    fetch(url).then(function(response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    })
    .then(function(data) {
      if (typeof(callback) === "function")
      {
        callback(data);
      }
    });

  }

};

module.exports = Ajax;
