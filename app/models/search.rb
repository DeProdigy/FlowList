class Search
  LIMIT_PER_REQUEST = 5
  include SoundcloudHelper
  attr_reader :query

  def initialize(query)
    @query = query
  end

  def tracks
    all_tracks = soundcloud_client.get('/tracks', q: query, limit: LIMIT_PER_REQUEST, licence: 'cc-by-sa')
    all_tracks.map do |track_data|
      Track.new(track_data)
    end
  end
end