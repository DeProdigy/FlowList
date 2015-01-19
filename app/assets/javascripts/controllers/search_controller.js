function getSoundsCloudSongs() {
  $.ajax({
    type: "GET",
    url: '/v1/search?query=' + $('#user-input').val(),
    success: function(data) {
      displaySearchResults(data);
    }
  });
}

function displaySearchResults(data) {
  $.each(data.songs, function(index, value) {
    songs.push(new Song(index, value).init());
  });
}