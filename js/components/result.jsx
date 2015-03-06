var React = require("react");
var ArtWorkStore = require('../stores/artwork.store');
var ItemForArtWork = require('./item-for-artwork.jsx');
var _ = require('lodash');

var Result = React.createClass({
    getInitialState: function(){
        return {data: []};
    },

    componentDidMount: function() {
        ArtWorkStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        ArtWorkStore.removeChangeListener(this._onChange);
    },

    _onChange: function() {
        this.setState({data: ArtWorkStore.getResult()});
    },

    render: function () {

        var arts = this.state.data.map(function(art){
            return (
                <ItemForArtWork art={art} key={_.uniqueId()}/>
            )
        });

        return (
            <div className="ui link cards">
                {arts}
            </div>

        )
    }
});

module.exports = Result;