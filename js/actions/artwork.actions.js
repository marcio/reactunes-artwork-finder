var AppDispatcher = require('../dispatchers/app.dispatcher');
var ArtworkConstants = require('../constants/artwork.constants');

// Define actions object
var ArtWorkActions = {

    search: function (query) {
        AppDispatcher.handleViewAction({
            actionType: ArtworkConstants.SEARCH_ART,
            query: query
        });
    },

    clearResult: function () {
        AppDispatcher.handleViewAction({
            actionType: ArtworkConstants.CLEAR_RESULT
        });
    }


};

module.exports = ArtWorkActions;