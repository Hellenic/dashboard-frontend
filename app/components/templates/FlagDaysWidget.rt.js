'use strict';
var React = require('react/addons');
var _ = require('lodash');
function repeatFlagday1(flagday, flagdayIndex) {
    return React.createElement('li', {}, React.createElement('b', {}, flagday.name), React.createElement('small', {}, flagday.date), '\n          ', flagday.description, '\n        ');
}
module.exports = function () {
    return React.createElement('div', {
        'id': 'news-widget',
        'className': 'panel panel-primary'
    }, React.createElement('div', { 'className': 'panel-heading' }, React.createElement('h3', { 'className': 'panel-title' }, 'Finnish Flag Days')), React.createElement('div', { 'className': 'panel-body' }, React.createElement.apply(this, [
        'ul',
        {},
        _.map(this.state.flagDays, repeatFlagday1.bind(this))
    ])));
};