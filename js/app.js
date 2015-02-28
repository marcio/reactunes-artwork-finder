var React = require('react');

var Header = require('./components/header.jsx');
var SearchForm = require('./components/search.form.jsx');
var Result = require('./components/result.jsx');

var mountNode = document.getElementById('app');


var App = React.createClass({
    render: function () {
        return (
            <div>
                <Header />
                <SearchForm />
                <Result />
            </div>
        )
    }

});


React.render(<App />, mountNode);