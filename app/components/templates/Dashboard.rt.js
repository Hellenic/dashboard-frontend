'use strict';
var React = require('react/addons');
var _ = require('lodash');
function repeatWidget1(Widget, WidgetIndex) {
    return React.createElement('figure', { 'className': 'widget col-md-4' }, React.createElement(Widget, {}));
}
module.exports = function () {
    return React.createElement('div', {
        'id': 'dashboard',
        'className': 'container-fluid'
    }, React.createElement('h1', {}, 'Dashboard'), React.createElement.apply(this, [
        'section',
        { 'className': 'components row' },
        _.map(this.state.widgets, repeatWidget1.bind(this))
    ]));
};