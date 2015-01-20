function tracksTemplate(song) {
  return "<div class='results' id=" + 'result-' + song.id + ">" +
            "<h4>" + song.userName + "</h4>" +
            "<h6>" + song.title + "</h6>" +
            "<audio src=" + song.streamUrl + " controls loop></audio>" +
          "</div>";
}