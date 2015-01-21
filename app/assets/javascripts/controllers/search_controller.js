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
  $.each(data.results, function(index, value) {
    results.push(new Result(index, value).init());
  });
}