var React = require("react");

var ErrorSumary = React.createClass({
    render: function () {
        var errors = this.props.errors.map(function(error){
            return (
                <p key={error.id}>{error.msg}</p>
            )
        });

        return (
            <div className="ui error form segment">
                <div className="ui error message">
                    <div className="header">Errors: </div>
                    {errors}
                </div>
            </div>
        )
    }
});

module.exports = ErrorSumary;