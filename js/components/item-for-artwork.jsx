var React = require("react");


var ItemForArtWork = React.createClass({
    render: function () {

        function extractUrl(url, kind) {
            var resolution = '.300x300-75';
            if(kind === 'feature-movie') {
                resolution = '.500x500-75';
            }
            return url.replace('.100x100-75', resolution);
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
            <div className="column" key={this.props.art.trackId}>
                <div className="ui fluid card">
                    <div className="image">
                        <img src={extractUrl(this.props.art.artworkUrl100, this.props.art.kind)} />
                    </div>
                    <div className="content">
                        <div className="header">{this.props.art.trackName || this.props.art.artistName}</div>
                        <div className="meta">
                            <a>{this.props.art.releaseDate.split('-')[0]} | {this.props.art.primaryGenreName}</a>
                        </div>
                        <div className="description">
                            {this.props.art.shortDescription || truncate(this.props.art.longDescription, 100) }
                        </div>
                    </div>
                    <div className="extra content">
                        <div className="ui bottom attached button" onClick={this.download}>
                            <i className="download icon"></i> Download
                        </div>
                    </div>
                </div>
             </div>
        )
    },

    download: function() {

        var imageParts = this.props.art.artworkUrl100.split('/');
        var imageFilename = imageParts[imageParts.length - 1];

        imageParts.pop();
        var baseUrl = imageParts.join('/');

        var re = /\.\d*[x]\d*[-]?\d*/;
        var newImage = imageFilename.replace(re, "");
        var imagePath = baseUrl + '/' + newImage;


        var link = document.createElement("a");
        link.download = imageFilename;
        link.href = imagePath;
        link.click();

    }
});

module.exports = ItemForArtWork;