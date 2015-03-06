var AppDispatcher = require('../dispatchers/app.dispatcher');
var EventEmitter = require('events').EventEmitter;
var ArtworkConstants = require('../constants/artwork.constants');
var Urls = require('../constants/urls.constants');
var assign = require('object-assign');


var _results = [];

var ArtWorkStore = assign({}, EventEmitter.prototype, {

    getResult: function() {
        return _results;
    },

    emitChange: function() {
        this.emit('change');
    },


    addChangeListener: function(callback) {
        this.on('change', callback);
    },


    removeChangeListener: function(callback) {
        this.removeListener('change', callback);
    }

});

function search(query) {

    var apiURL = Urls.api + '?term=' + query.term + '&country=' + query.country + '&entity=' + query.entity + '&callback=?';

    var request = $.getJSON(apiURL, function () {
    //do nothing
    });

    request.done(function(data) {
        _results = data.results;
        ArtWorkStore.emitChange();
    });
}


function clearResult() {
    _results = [];
    ArtWorkStore.emitChange();
}



AppDispatcher.register(function(payload) {
    var action = payload.action;

    switch(action.actionType) {

        case ArtworkConstants.SEARCH_ART:
            search(action.query);
            break;

        case ArtworkConstants.CLEAR_RESULT:
            clearResult();
            break;

        default:
            return true;
    }

    return true;

});

module.exports = ArtWorkStore;
