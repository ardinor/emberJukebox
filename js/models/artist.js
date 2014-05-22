Jukebox.Artist = DS.Model.extend({
  name: DS.attr('string'),
  genre: DS.attr('string'),
  songs: DS.hasMany('song')
});

Jukebox.Artist.FIXTURES = [
    { id: 1, name: 'Fleet Foxes', genre: 'Folk', songs: [1, 2] }
];
