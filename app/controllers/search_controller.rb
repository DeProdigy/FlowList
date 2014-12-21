class SearchController < ApplicationController
  def create
    @tracks = Search.new(search_query).tracks
  end

  private

  def search_params
    params.require(:search).permit(:query)
  end

  def search_query
    search_params[:query]
  end
end
