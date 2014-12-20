class Search
  attr_reader :query
  LIMIT_PER_REQUEST = 5

  def initialize(query)
    @query = query
  end

  def tracks
    soundcloud_client.get('/tracks', q: query, limit: LIMIT_PER_REQUEST, licence: 'cc-by-sa')
  end

  private

  def soundcloud_client
    Soundcloud.new(client_id: ENV['FLOWLIST_SOUNDCLOUD_CLIENT_ID'])
  end
end
