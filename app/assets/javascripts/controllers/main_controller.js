$(function() {
  $('.search-songs').on('submit', function(e) {
    e.preventDefault();
    getSoundsCloudSongs();
  });

  $('body').on('click', '.results', function(e) {
    var result_id = getId(this);
            result  = _.findWhere(results, {id: result_id});

    saveSong( result.underscored() );
  });
});
