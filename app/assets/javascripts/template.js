function tracksTemplate(song) {
  var playList =
    "<div class='tracks' data-user-name=" + song.user_name + " data-title=" +  song.title + " data-stream-url=" + song.stream_url + ">" +
      "<h4>" + song.user_name + "</h4>" +
      "<h6>" + song.title + "</h6>" +
      "<audio src=" + song.stream_url + " controls loop></audio>" +
    "</div>";
  return playList;
}