$(function() {
  $('body').on('submit', '.search-form', function(e) {
    e.preventDefault();
    ResultsColletion.get( $('.search-user-input').val() );
  });

  $('body').on('click', '.result', function(e) {
    var resultId = getId(this),
          result  = _.findWhere(results, {id: resultId});

    result.save();
  });

  $('body').on('click', '.add-song-icon', function(e) {
    showOverlay();
  });

  $('body').on('click', '.search-close', function(e) {
    closeOverlay();
  });
});