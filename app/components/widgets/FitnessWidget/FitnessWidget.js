'use strict';

var React = require('react');
var FitnessWidgetTemplate = require('./FitnessWidget.rt.js');

var FitnessWidget = React.createClass({
  getDefaultProps: function() {
    return {
      id: 'FitnessWidget',
      fitnessUrl: 'fitness/v1/users/me/dataSources',
      fitWeightUrl: 'fitness/v1/users/me/dataSources/derived:com.google.weight:com.google.android.gms:merge_weight/datasets/',
      clientId: '448409065099-fu88dgmjeq41ti9lh9lldauprv4ealum.apps.googleusercontent.com',
      scopes: 'https://www.googleapis.com/auth/fitness.activity.read https://www.googleapis.com/auth/fitness.body.read https://www.googleapis.com/auth/fitness.location.read'
    }
  },
  getInitialState: function() {
    return {
      weight: null
    };
  },
  handleAuthResult: function(authResult) {
    var that = this;
    // Load the Fitness API
    gapi.client.load('fitness', 'v1').then(function() {
      // Load the DataSet for weight
      var from = new Date().setMonth(new Date().getMonth()-1).valueOf() + '000000';
      var to = new Date().valueOf() + '000000';
      var url = that.props.fitWeightUrl + from + '-' + to;

      gapi.client.request({ 'path': url }).then(that.handleDataSourceResponse, that.handleErrorResponse);
    });
  },
  handleDataSourceResponse: function(dataset) {
    console.log("Dataset", dataset.result);
    var weight = dataset.result.point[0].value[0].fpVal;
    var roundedWeight = Math.round(weight*100)/100;
    this.setState({
      weight: roundedWeight
    });
  },
  handleErrorResponse: function(reason) {
    console.log('Error: ', reason.result.error.message);
  },
  componentDidMount: function() {
    gapi.auth.authorize({client_id: this.props.clientId, scope: this.props.scopes, immediate: true}, this.handleAuthResult);
  },
  render: FitnessWidgetTemplate
});

module.exports = FitnessWidget;
