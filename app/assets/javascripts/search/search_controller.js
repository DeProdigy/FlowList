$(function() {
  $('.search-form').on('submit', function(e) {
    e.preventDefault();
    ResultsColletion.get( $('#user-input').val() );
  });

  $('body').on('click', '.results', function(e) {
    var result_id = getId(this);
            result  = _.findWhere(results, {id: result_id});

    result.save();
  });
});