var React = require('react');
var Header = require('./components/header.jsx');

var mountNode = document.getElementById('app');


var App = React.createClass({
    render: function () {
        return (
            <div>
                <Header />
            </div>
        )
    }
});


React.render(<App />, mountNode);