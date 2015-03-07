var React = require('react');
var SearchForm = require('./components/search.form.jsx');
var Result = require('./components/result.jsx');

var mountNode = document.getElementById('app');

var App = React.createClass({
    render: function () {
        return (
                <div className="row">
                    <div className="column">
                        <SearchForm />
                        <Result />
                    </div>
                </div>
        )
    }
});

React.render(<App />, mountNode);
