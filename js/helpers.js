Ember.Handlebars.registerBoundHelper('duration-to-time', function(seconds) {
    var minutes = seconds > 60? parseInt(seconds/60, 10) : 0,
        leftOverSeconds = seconds > 60? seconds % (minutes * 60) : seconds;

    leftOverSeconds = (leftOverSeconds < 10)? '0'+leftOverSeconds : leftOverSeconds;
    return minutes + ':' + leftOverSeconds;
});
