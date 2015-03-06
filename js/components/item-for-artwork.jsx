var React = require("react");



var ItemForArtWork = React.createClass({
    render: function () {

        function extractUrl(url) {
            return url.replace('.100x100-75', '.600x600-75');
        }

        function truncate(str, limit) {
            var bits, i;
            if ('string' !== typeof str) {
                return '';
            }
            bits = str.split('');
            if (bits.length > limit) {
                for (i = bits.length - 1; i > -1; --i) {
                    if (i > limit) {
                        bits.length = i;
                    }
                    else if (' ' === bits[i]) {
                        bits.length = i;
                        break;
                    }
                }
                bits.push('...');
            }
            return bits.join('');
        }

        return (
            <div className="card" key={this.props.art.trackId}>
                <div className="image">
                    <img src={extractUrl(this.props.art.artworkUrl100)} />
                </div>
                <div className="content">
                    <div className="header">{this.props.art.trackName}</div>
                    <div className="meta">
                        <a>{this.props.art.primaryGenreName}</a>
                    </div>
                    <div className="description">
                        {this.props.art.shortDescription || truncate(this.props.art.longDescription, 100) }
                    </div>
                </div>
                <div className="extra content">
                    <span className="right floated">
                            {this.props.art.releaseDate}
                    </span>
                    <span>
                        <i className="user icon"></i>
                        75 Friends
                    </span>
                </div>
            </div>
        )
    }
});

module.exports = ItemForArtWork;