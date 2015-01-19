$(function() {
  $('.search-songs').on('submit', function(e) {
    e.preventDefault();
    // console.time('To get, create and display songs');
    getSoundsCloudSongs();
    // console.timeEnd('To get, create and display songs');
  });
});
