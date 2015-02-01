var ResultsColletion = {
  get: function(userInput) {
    var that = this;

    $.ajax({
      type: "GET",
      url: '/v1/search?query=' + userInput,
      success: function(data) {
        that.storeAndRenderResults(data);
      }
    });
  },

  storeAndRenderResults: function(data) {
    $.each(data.results, function(index, value) {
      value['id'] = index + 1;
      results.push(new Result(value).render());
    });
  }
};