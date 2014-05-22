
Jukebox.IndexRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('song');
    }
});

Jukebox.IndexController = Ember.ArrayController.extend({
    nowPlaying: null,
    actions: {
        playSong: function(song) {
            this.set('nowPlaying', song);
        }
    }
});
