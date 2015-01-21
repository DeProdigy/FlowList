function Result(id, data) {
  this.id           = id + 1;
  this.soundcloudId = data.soundcloud_id;
  this.userName     = data.user_name;
  this.title        = data.title;
  this.duration     = data.duration;
  this.streamUrl    = data.stream_url;
}

Result.prototype = {
  init: function(){
    $('body').append(tracksTemplate(this));
    return this;
  },
  underscored: function(){
    var mappedSong = {};
    for (var key in this) {
      mappedSong[key.toUnderscore()] = this[key];
    }
    return mappedSong;
  }
};