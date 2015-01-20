class Result
  include SoundcloudHelper
  attr_reader :soundcloud_id, :user_name, :title, :duration, :stream_url

  def initialize(track_data)
    @soundcloud_id = track_data.fetch(:id, 0)
    @user_name = track_data[:user].fetch(:username, 'username')
    @title = track_data.fetch(:title, 'title')
    @duration = track_data.fetch(:duration, 0)
    @stream_url = track_data.fetch(:stream_url, '/') + "?client_id=#{ENV['FLOWLIST_SOUNDCLOUD_CLIENT_ID']}"
  end
end