/** @jsx React.DOM */
'use strict';

var React = require('react');

var ReactApp = React.createClass({
    render: function() {
        return (
            <div className="wrapper">
                {this.props.children}
            </div>
        );
    }
});

/* Module.exports instead of normal DOM mounting */
module.exports = ReactApp;
