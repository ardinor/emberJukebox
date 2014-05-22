var attr

Jukebox.Song = DS.Model.extend({
  name: DS.attr('string'),
  artist: DS.belongsTo('artist'),
  duration: DS.attr('number')
});

Jukebox.Artist = DS.Model.extend({
  name: DS.attr('string'),
  genre: DS.attr('string'),
  songs: DS.hasMany('song')
});

Jukebox.Song.FIXTURES = [
  { id: 1, name: 'Blue Ridge Mountains', duration: 267, artist: 1 },
  { id: 2, name: 'White Winter Hymnal', duration: 149, artist: 1 }
];

Jukebox.Artist.FIXTURES = [
  { id: 1, name: 'Fleet Foxes', genre: 'Folk', songs: [1, 2] }
];
