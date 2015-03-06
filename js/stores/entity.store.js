var _entities = [
    { id: 'movie', label: 'Movie', icon: 'film' },
    { id: 'album', label: 'Album', icon: 'music' },
    { id: 'tvSeason', label: 'TV Show', icon: 'record' },
    { id: 'ebook', label: 'iBook', icon: 'book' },
    { id: 'id', label: 'Apple ID (Movies)', icon: 'apple' }
];

var EntityStore = {
    getEntities: function() {
        return _entities;
    }
};

module.exports = EntityStore;