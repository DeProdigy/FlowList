module SoundcloudHelper
  def soundcloud_client
    @soundcloud_client ||= Soundcloud.new(client_id: ENV['FLOWLIST_SOUNDCLOUD_CLIENT_ID'])
  end
end