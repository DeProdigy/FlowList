$(function() {
  $('.search-songs').on('submit', function(e) {
    e.preventDefault();
    getSoundsCloudSongs();
  });
});

function getSoundsCloudSongs() {
  $.ajax({
    type: "POST",
    url: '/search',
    data: {
      'search': {
        'query': $('#user-input').val()
      }
    },
    success: function(data) {
      displaySearchResults(data);
    }
  });
}

//Uses a custom template to create a track that can be found in search_template
function displaySearchResults(data) {
  $.each(data.tracks, function(index, value) {
    $('body').append(tracksTemplate(value));
  });
  selectTrack();
}

function selectTrack() {
  $('.tracks').on('click', function(e) {
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: '/songs',
      data: {
        'track': $(this).data()
      },
      success: function(data) {
        console.log(data);
      }
    });
  });
}
