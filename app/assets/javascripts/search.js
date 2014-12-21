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
      console.log(data);
    }
  });
}
