var React = require("react");

var SearchForm = React.createClass({
    handlerSubmit: function(e) {
        e.preventDefault();
        var type = this.refs.type.getDOMNode().value.trim();
        var term = this.refs.term.getDOMNode().value.trim();
        var country = this.refs.country.getDOMNode().value.trim();

        console.log('Type: %s, Term: %s, Country: %s', type, term, country);
    },
    render: function () {
        return (
            <form onSubmit={this.handlerSubmit}>
                <p>
                    <label>Type: <br />
                        <select ref="type">
                            <option>Album</option>
                            <option>Movie</option>
                        </select>
                    </label>

                    <label>Term: <br />
                        <input type="text" ref="term" />
                    </label>

                    <label>Country: <br />
                        <select ref="country">
                            <option>Brazil</option>
                        </select>
                    </label>
                    <button type="submit">Search</button>
                </p>
            </form>
        )
    }
});

module.exports = SearchForm;