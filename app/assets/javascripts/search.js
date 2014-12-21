$(function() {
  $('.search-songs').on('submit', function(e) {
    e.preventDefault();
    getSoundsCloudSongs();
  });
});

function getSoundsCloudSongs() {
  $.ajax({
    type: "POST",
    url: '/search',
    data: {
      'search': {
        'query': $('#user-input').val()
      }
    },
    success: function(data) {
      displaySearchResults(data);
    }
  });
}

function displaySearchResults(data) {

  $.each(data.tracks, function(index, value) {
    debugger;
    balls(value);
    // var playList =
    // $(
    //   '''
    //     <div class="tracks" data-user-name=' value.user_name ' data-title=' value.title ' data-stream-url=' value.stream_url '>
    //       <h4>' value.user_name '</h4>
    //       <h6>' value.title '</h6>
    //       <audio src=' value.stream_url ' controls loop></audio>
    //     </div>
    //   '''
    // );
  });

  // body.append(playList);

  // for(var i = 0; i < data.tracks.length; i++) {
  //   var body = $('body');
  //   var userName = "<h4>" + data.tracks[i].user_name + "</h4>";
  //   var title = "<h6>" + data.tracks[i].title + "</h6>";
  //   var streamUrl = "<audio src=" + data.tracks[i].stream_url + " controls loop></audio>";
  //   var track = $("<div class='tracks' data-name='NAME'></div>");
  //   body.append(track);
  //   track.append(userName, title, streamUrl);
  //   track.on("click", function() {
  //     debugger;
  //     selectTrack(this.data());
  //   });
  // }
}

function balls(huy) {
  debugger
  console.log('HERE')
}

// function selectTrack(track) {
//   console.log(track);
// }
