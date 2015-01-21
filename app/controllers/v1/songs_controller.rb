module V1
  class SongsController < ApplicationController
    def search
      @results = Search.new(query, limit).tracks
    end

    def create
      @saved_song = Song.create(song_params)
    end

    protected
    def query
      params[:query]
    end

    def limit
      params[:limit]
    end

    def song_params
      params.require(:song).permit(:soundcloud_id, :user_name, :title, :duration, :stream_url)
    end
  end
end