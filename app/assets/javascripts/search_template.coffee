@tracksTemplate = (track) ->
  playList =
  "
    <div class='tracks' data-user-name=" + track.user_name + " data-title=" +  track.title + " data-stream-url=" + track.stream_url + ">
      <h4>" + track.user_name + "</h4>
      <h6>" + track.title + "</h6>
      <audio src=" + track.stream_url + " controls loop></audio>
    </div>
  "
