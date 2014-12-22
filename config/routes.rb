Rails.application.routes.draw do
  root to: 'welcome#index'
  post '/search' => 'search#create'
  post '/songs' => 'songs#create'
end
