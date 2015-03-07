var React = require("react");
var ArtWorkStore = require('../stores/artwork.store');
var ItemForArtWork = require('./item-for-artwork.jsx');
var _ = require('lodash');

var Result = React.createClass({
    getInitialState: function () {
        return {data: [], showEmpty: false};
    },

    componentDidMount: function () {
        ArtWorkStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function () {
        ArtWorkStore.removeChangeListener(this._onChange);
    },

    _onChange: function () {
        this.setState({data: ArtWorkStore.getResult(), showEmpty: true});
    },

    render: function () {

        var result;

        if (this.state.data.length > 0) {
            result = this.state.data.map(function (art) {
                return (
                    <ItemForArtWork art={art} key={_.uniqueId()}/>
                )
            });
        } else {
            if (this.state.showEmpty) {
                result = <div className="ui text-center centered internally column">
                    <p className="ui orange label">No results found</p>
                </div>
            }
        }

        return (
            <div className="ui three column grid">
                {result}
            </div>
        )
    }
});

module.exports = Result;
