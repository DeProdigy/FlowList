module V1
  class SongsController < ApplicationController
    def search
      @songs = Search.new(query, limit).tracks
    end

    protected
    def query
      params[:query]
    end

    def limit
      params[:limit]
    end
  end
end