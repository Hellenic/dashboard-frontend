/** @jsx React.DOM */

var React = require('react');
var ReactRouter = require('react-router');
var routes = require('./routes/routes.js');

var Router = ReactRouter.Router;

React.render(<Router routes={routes}/>, document.getElementById("app"));

$(document).ready(function() {

  $(".gridster").gridster({
    widget_selector: "figure",
    widget_margins: [10, 10],
    widget_base_dimensions: [200, 200],
    min_cols: 2,
    max_cols: 16,
    min_rows: 2,
    resize: {
      enabled: true
    }
  });

});
