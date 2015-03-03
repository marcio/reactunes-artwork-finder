var React = require("react");
var ArtWorkStore = require('../stores/artwork.store');

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
        console.log('changed %o', this.state.data);
    },

    render: function () {

        function extractUrl(url) {
            var urlParts = url.replace('.100x100-75', '');
            return urlParts;
        }

        var arts = this.state.data.map(function(art){
            return (
                <div className="card" key={art.trackId}>
                    <div className="image">
                        <img src={extractUrl(art.artworkUrl100)} />
                    </div>
                    <div className="content">
                        <div className="header">{art.trackName}</div>
                        <div className="meta">
                            <a>{art.primaryGenreName}</a>
                        </div>
                        <div className="description">
                        {art.shortDescription}
                        </div>
                    </div>
                    <div className="extra content">
                        <span className="right floated">
                            {art.releaseDate}
                        </span>
                        <span>
                            <i className="user icon"></i>
                            75 Friends
                        </span>
                    </div>
                </div>
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