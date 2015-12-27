var request = require('request');
/*
request = request.defaults({
  headers: {
    'Access-Control-Allow-Origin': 'http://localhost:4444/',
    'Access-Control-Allow-Credentials': false
  }
  // json: true
  // simple: false
  // resolveWithFullResponse: true
});
*/

var Ajax = {

  get: function(url, callback) {

    request.get(url, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        callback(JSON.parse(body));
      }
    });

  },

  getPlain: function(url, callback)
  {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function() {
      callback(xhr.responseText);
    };

    xhr.onerror = function() {
      console.error('Error with getPlain XHR request');
    };

    xhr.send();
  },

  post: function(url, data, callback) {
    /*
    var options = {
      url: url,
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:4444/',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      form: data
    };
    */

    request.post(url, data, function(error, response, body) {
      if (!error && response.statusCode == 200) {
        return JSON.parse(body);
      }
    });
  }

};

module.exports = Ajax;
