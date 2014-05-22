Jukebox.Store = DS.Store.extend({
    revision: 12,
    adapter: "Jukebox.LSAdapter"
});

Jukebox.LSAdapter = DS.LSAdapter.extend({
    namespace: "jukebox-emberjs"
});
