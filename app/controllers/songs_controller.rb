class SongsController < ApplicationController
  def search
    @songs = Search.new(params[:query]).tracks
  end
end