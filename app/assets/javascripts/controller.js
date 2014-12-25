$(function() {
  $('.search-songs').on('submit', function(e) {
    e.preventDefault();
    getSoundsCloudSongs();
  });

  $('.tracks').on('click', function(e) {
    e.preventDefault();
    selectTrack();
  });
});
