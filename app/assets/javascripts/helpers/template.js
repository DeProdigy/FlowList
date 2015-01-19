function tracksTemplate(song) {
  return "<div id=" + 'song-' + song.id + " data-user-name=" + song.userName + " data-title=" +  song.title + " data-stream-url=" + song.streamUrl + ">" +
            "<h4>" + song.userName + "</h4>" +
            "<h6>" + song.title + "</h6>" +
            "<audio src=" + song.streamUrl + " controls loop></audio>" +
          "</div>";
}