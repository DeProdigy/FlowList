function Result(data) {
  Song.call(this, data);
}

Result.prototype.constructor = Song;

Result.prototype = {
  render: function() {
    $('body').append(tracksTemplate(this));
    return this;
  },

  underscored: function() {
    var mappedSong = {};

    for (var key in this) {
      // do not map functions
      if (!$.isFunction(this[key])) {
        mappedSong[key.toUnderscore()] = this[key];
      }
    }

    return mappedSong;
  },

  save: function() {
    var underscoredAttributes = this.underscored();

    $.ajax({
      type: "POST",
      data: { song:  underscoredAttributes },
      url: '/v1/songs',
      success: function(data) {
        songs.push(new Song(data.saved_song));
      }
    });
  }
};