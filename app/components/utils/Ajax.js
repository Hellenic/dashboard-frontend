var request = require('request');

var Ajax = {

  get: function(url, callback) {

    request.get(url, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        callback(JSON.parse(body));
      }
    });

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
