'use strict';
var React = require('react/addons');
var _ = require('lodash');
function repeatPlace1(place, placeIndex) {
    return React.createElement('li', {}, React.createElement('h3', {}, placeIndex, '. ', place.name), React.createElement('p', {}, place.menu));
}
module.exports = function () {
    return React.createElement('div', {
        'id': 'lunch-widget',
        'className': 'panel panel-primary'
    }, React.createElement('div', { 'className': 'panel-heading' }, React.createElement('h3', { 'className': 'panel-title' }, 'Lunches nearby')), React.createElement('div', { 'className': 'panel-body' }, React.createElement.apply(this, [
        'ul',
        {},
        _.map(this.state.nearbyPlaces, repeatPlace1.bind(this))
    ])));
};