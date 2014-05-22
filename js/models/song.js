Jukebox.Song = DS.Model.extend({
    name: DS.attr('string'),
    artist: DS.belongsTo('artist'),
    duration: DS.attr('number')
});

Jukebox.Song.FIXTURES = [
    { id: 1, name: 'Blue Ridge Mountains', duration: 267, artist: 1 },
    { id: 2, name: 'White Winter Hymnal', duration: 149, artist: 1 }
];
