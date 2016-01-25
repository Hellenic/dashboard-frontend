'use strict';

var React = require('react');
var moment = require('moment');
var OpeningTimesWidgetTemplate = require('./OpeningTimesWidget.rt.js');

var OpeningTimesWidget = React.createClass({
  getDefaultProps: function() {
    return {
      id: 'OpeningTimesWidget'
    };
  },
  getInitialState: function() {
    return {
      places: [{
        "name": "Leppävaaran uimahalli",
        "openingTimes": [
          {
            "weekday": "Monday",
            "from": "7:00",
            "to": "20:00"
          },
          {
            "weekday": "Tuesday",
            "from": "6:00",
            "to": "20:00"
          },
          {
            "weekday": "Wednesday",
            "from": "10:00",
            "to": "20:00"
          },
          {
            "weekday": "Thursday",
            "from": "6:00",
            "to": "20:00"
          },
          {
            "weekday": "Friday",
            "from": "7:00",
            "to": "20:00"
          },
          {
            "weekday": "Saturday",
            "from": "9:00",
            "to": "19:00"
          },
          {
            "weekday": "Sunday",
            "from": "9:00",
            "to": "19:00"
          }
        ]
      },{
          "name": "Cafe Zoceria",
          "openingTimes": [
            {
              "weekday": "Monday",
              "from": "8:00",
              "to": "19:00"
            },
            {
              "weekday": "Tuesday",
              "from": "8:00",
              "to": "19:00"
            },
            {
              "weekday": "Wednesday",
              "from": "8:00",
              "to": "19:00"
            },
            {
              "weekday": "Thursday",
              "from": "8:00",
              "to": "19:00"
            },
            {
              "weekday": "Friday",
              "from": "8:00",
              "to": "19:00"
            },
            {
              "weekday": "Saturday",
              "from": "10:00",
              "to": "18:00"
            },
            {
              "weekday": "Sunday",
              "from": "11:00",
              "to": "16:00"
            }
          ]
        }
      ]
    };
  },
  isToday: function(openingTime) {
    let day = moment().format('dddd');
    return (day == openingTime.weekday);
  },
  render: OpeningTimesWidgetTemplate
});

module.exports = OpeningTimesWidget;
