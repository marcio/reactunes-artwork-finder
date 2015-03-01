var React = require('react');

var Header = require('./components/header.jsx');
var SearchForm = require('./components/search.form.jsx');
var Result = require('./components/result.jsx');

var mountNode = document.getElementById('app');


var App = React.createClass({
    render: function () {
        return (
            <div className="row">
                <div className="column">
                    <SearchForm />
                </div>
            </div>
        )
    }

});


React.render(<App />, mountNode);