var React = require("react");
var ArtworkAction = require('../actions/artwork.actions');
var ItemForSelect = require('./item-for-select.jsx');
var CountryStore = require('../stores/country.store');
var EntityStore = require('../stores/entity.store');
var ErrorSumary = require('./error-sumary.jsx');
var ArtWorkStore = require('../stores/artwork.store');
var _ = require('lodash');

var $spinner;

var SearchForm = React.createClass({
    getInitialState: function () {
        return {errors: []};
    },

    handlerSubmit: function (e) {
        e.preventDefault();

        var entity = this.refs.entity.getDOMNode().value.trim();
        var term = this.refs.term.getDOMNode().value.trim();
        var country = this.refs.country.getDOMNode().value.trim();
        var query = {entity: entity, country: country, term: term};

        var validForm = this._validateForm(query);

        if (validForm.isValid) {
            $spinner.removeClass('hide');
            this.setState({errors: []});
            ArtworkAction.search(query);
        } else {
            this.setState({errors: validForm.errors});
        }
    },

    componentDidMount: function () {
        $(this.refs.entityDropDown.getDOMNode()).dropdown();
        $(this.refs.countryDropDown.getDOMNode()).dropdown();
        $spinner = $(this.refs.spinner.getDOMNode());
        ArtWorkStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        ArtWorkStore.removeChangeListener(this._onChange);
    },

    _onChange: function () {
      $spinner.addClass('hide');
    },

    render: function () {

        var countryItems = _.map(CountryStore.getCountries(), function (v, k) {
            return (
                <ItemForSelect val={k} label={v} key={k} icon={k} itemType='flag' />
            )
        });

        var entityItems = _.map(EntityStore.getEntities(), function (entity) {
            return (
                <ItemForSelect val={entity.id} label={entity.label} icon={entity.icon} key={entity.id} itemType='icon' />
            )
        });

        var errorSumary;
        if (!_.isEmpty(this.state.errors)) {
            errorSumary = <ErrorSumary errors={this.state.errors} />
        } else {
            errorSumary = '';
        }

        return (
            <div className="ui form segment">
              <div>
                <form onSubmit={this.handlerSubmit}>
                    <div className="four fields">
                        <div className="field">
                            <div className="ui fluid search selection dropdown" ref="entityDropDown" >
                                <input type="hidden" ref="entity" />
                                <i className="dropdown icon"></i>
                                <div className="default text">Select an Entity</div>
                                <div className="menu">
                                    {entityItems}
                                </div>
                            </div>
                        </div>

                        <div className="field">
                            <div className="ui fluid search selection dropdown" ref="countryDropDown" >
                                <input type="hidden" ref="country" />
                                <i className="dropdown icon"></i>
                                <div className="default text">Select a Country</div>
                                <div className="menu">
                                    {countryItems}
                                </div>
                            </div>
                        </div>

                        <div className="field input">
                            <input type="text" ref="term" placeholder="Term"/>
                        </div>

                        <div className="field">
                            <button className="fluid ui teal button">Search</button>
                        </div>
                    </div>
                </form>
              </div>
              <div className="hide" ref="spinner">
                <div className="spinner">
                  <div className="rect1"></div>
                  <div className="rect2"></div>
                  <div className="rect3"></div>
                  <div className="rect4"></div>
                  <div className="rect5"></div>
                </div>
              </div>
                {errorSumary}
            </div>

        )
    },

    _validateForm: function (query) {
        var validatorObject = {
            isValid: true,
            errors: []
        };

        if (_.isEmpty(query.entity)) {
            validatorObject.errors.push({id: 'entity', msg: 'Please, select an entity.'});
        }

        if (_.isEmpty(query.country)) {
            validatorObject.errors.push({id: 'country', msg: 'Please, select a country.'});
        }

        if (_.isEmpty(query.term)) {
            validatorObject.errors.push({id: 'term', msg: 'Please, fill with a term.'});
        }

        if (validatorObject.errors.length > 0) {
            validatorObject.isValid = false;
        }
        return validatorObject;
    }
});

module.exports = SearchForm;
