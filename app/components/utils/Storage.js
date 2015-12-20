var Storage = {

  save: function(key, value)
  {
    if (typeof(localStorage) === "undefined")
    {
      return;
    }

    var stringValue = JSON.stringify(value);
    localStorage.setItem(key, stringValue);
  },

  load: function(key)
  {
    if (typeof(localStorage) === "undefined")
    {
      return;
    }

    var value = localStorage.getItem(key);
    return JSON.parse(value);
  }
};

module.exports = Storage;
