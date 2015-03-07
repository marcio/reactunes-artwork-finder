var React = require("react");

var ItemForSelect = React.createClass({
    render: function () {
        return (
            <div className="item" data-value={this.props.val}>
              <i className={this.props.icon + ' ' + this.props.itemType}></i>{this.props.label}
            </div>
        )
    }
});

module.exports = ItemForSelect;
