class WelcomeController < ApplicationController
  def index
    # render coming soon screen in production
    render :coming if Rails.env.production?
  end
end
