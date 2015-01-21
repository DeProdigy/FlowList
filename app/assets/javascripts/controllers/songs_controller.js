function saveSong(songData) {
  $.ajax({
    type: "POST",
    data: {song: songData},
    url: '/v1/songs',
    success: function(data) {
      songs.push(new Song(data.saved_song));
    }
  });
}