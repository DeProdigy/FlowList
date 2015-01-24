Rails.application.routes.draw do
  root to: 'welcome#index'

  namespace :v1 do
    get '/search' => 'songs#search'
  end
end