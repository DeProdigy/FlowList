class SearchController < ApplicationController
  protect_from_forgery with: :null_session, if: Proc.new { |c| c.request.format == 'application/json' }

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
