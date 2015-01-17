class Search
  include SoundcloudHelper
  attr_reader :query, :limit

  def initialize(query, limit)
    @query = query
    @limit = default_limit(limit)
  end

  def tracks
    soundcloud_client.get('/tracks',
      q: query,
      limit: limit,
      licence: 'cc-by-sa'
    ).map do |track_data|
      Track.new(track_data)
    end
  end

  private
  def default_limit(limit)
    # if nil default to 5 but cap at 20
    limit = limit.try(:to_i) || 5
    limit < 20 ? limit : 20
  end
end