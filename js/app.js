var React = require('react');

var Header = require('./components/header.jsx');
var SearchForm = require('./components/search.form.jsx');

var mountNode = document.getElementById('app');


var App = React.createClass({
    render: function () {
        return (
            <div>
                <Header />
                <SearchForm />
            </div>
        )
    }
});


React.render(<App />, mountNode);