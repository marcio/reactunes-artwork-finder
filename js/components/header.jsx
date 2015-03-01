var React = require("react");

var Header = React.createClass({
    render: function () {
        return (
            <header className="ui one column page grid">
                <div className="column">
                    <h1 className="ui header">React iTunes Artwork</h1>
                </div>
            </header>
        )
    }
});

module.exports = Header;