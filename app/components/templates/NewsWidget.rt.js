'use strict';
var React = require('react/addons');
var _ = require('lodash');
function repeatNews1(news, newsIndex) {
    return React.createElement('li', {}, React.createElement('h3', {}, newsIndex, '. ', news.title), React.createElement('p', {}, news.content));
}
module.exports = function () {
    return React.createElement('div', {
        'id': 'news-widget',
        'className': 'panel panel-primary'
    }, React.createElement('div', { 'className': 'panel-heading' }, React.createElement('h3', { 'className': 'panel-title' }, 'Local news')), React.createElement('div', { 'className': 'panel-body' }, React.createElement.apply(this, [
        'ul',
        {},
        _.map(this.state.news, repeatNews1.bind(this))
    ])));
};