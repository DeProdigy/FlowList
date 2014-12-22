class SongsController < ApplicationController
  def create
    @song = Song.create(
      title: secure_params[:title],
      user_name: secure_params[:userName],
      stream_url: secure_params[:streamUrl]
    )
  end

  private

  def secure_params
    return params.require(:track).permit(:streamUrl, :title, :userName)
  end
end

