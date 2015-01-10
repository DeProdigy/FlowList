Rails.application.routes.draw do
  root to: 'welcome#index'
  get '/search' => 'songs#search'
end