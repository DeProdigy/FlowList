function getSoundsCloudSongs() {
  $.ajax({
    type: "GET",
    url: '/v1/search?query=' + $('#user-input').val(),
    success: function(data) {
      displaySearchResults(data);
    }
  });
}

//Uses a custom template to create a track that can be found in search_template
function displaySearchResults(data) {
  $.each(data.songs, function(index, value) {
    $('body').append(tracksTemplate(value));
  });
}