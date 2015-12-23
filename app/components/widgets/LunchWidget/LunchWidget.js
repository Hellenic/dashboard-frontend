'use strict';

var React = require('react');
var Ajax = require('../../utils/Ajax');
var LunchWidgetTemplate = require('./LunchWidget.rt.js');

var LunchWidget = React.createClass({
  getDefaultProps: function() {
    return {
      id: 'LunchWidget',
      url: 'http://0.0.0.0:3000/api/Restaurants'
    };
  },
  getInitialState: function() {
    return {
      restaurants: [],
      selectedRestaurant: null
    };
  },
  handleResponse: function(data) {
    this.setState({ restaurants: data });
  },
  handleMenusResponse: function(menus) {
    var restaurant = this.state.selectedRestaurant;
    restaurant.menus = menus;
    this.setState({ selectedRestaurant: restaurant });
  },
  onShowDetails: function(restaurant) {
    this.setState({ selectedRestaurant: restaurant });
    Ajax.get(this.props.url +'/'+ restaurant.id +'/menus', this.handleMenusResponse);
  },
  onSelectedReset: function() {
    this.setState({ selectedRestaurant: null });
  },
  componentDidMount: function() {
    Ajax.get(this.props.url, this.handleResponse);
  },
  render: LunchWidgetTemplate
});

module.exports = LunchWidget;
