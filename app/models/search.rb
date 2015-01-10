class Search
  include SoundcloudHelper
  attr_reader :query, :limit

  def initialize(query, limit)
    @query = query
    @limit = limit ? limit.to_i : 5
  end

  def per_request
    # never more than 20
    limit > 20 ? 20 : limit
  end

  def tracks
    all_tracks = soundcloud_client.get('/tracks', q: query, limit: per_request, licence: 'cc-by-sa')
    all_tracks.map do |track_data|
      Track.new(track_data)
    end
  end
end