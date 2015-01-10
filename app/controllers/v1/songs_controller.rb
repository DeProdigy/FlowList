module V1
  class SongsController < ApplicationController
    def search
      @songs = Search.new( params[:query], params[:limit] ).tracks
    end
  end
end