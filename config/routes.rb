Rails.application.routes.draw do
  root to: 'welcome#index'

  namespace :v1 do
    get '/search' => 'songs#search'
    post '/songs' => 'songs#create'
  end
end