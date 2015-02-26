var React = require("react");

var SearchForm = React.createClass({
    render: function () {
        return (
            <form>
                <p>
                    <select ref="type">
                        <option>Movie</option>
                    </select>
                    <input type="text" ref="term" />
                    <select ref="country">
                        <option>Brazil</option>
                    </select>
                    <button>Search</button>
                </p>
            </form>
        )
    }
});

module.exports = SearchForm;