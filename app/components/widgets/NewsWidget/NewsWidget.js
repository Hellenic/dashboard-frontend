'use strict';

var React = require('react');
var NewsWidgetTemplate = require('./NewsWidget.rt.js');

var NewsWidget = React.createClass({
  getLocalNews: function() {
    return [
      {"title": "Hello world", "content": "Test content for the news."},
      {"title": "Another world", "content": "Test content for the news #2."}
    ];
  },
  getInitialState: function() {
    return {
      news: this.getLocalNews(),
      url: 'http://0.0.0.0:3000/api/News'
    };
  },
  componentDidMount: function() {
    var news = this.getLocalNews();
    this.setState({ news: news });
  },
  render: NewsWidgetTemplate
});

module.exports = NewsWidget;
