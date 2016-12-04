Rails.application.routes.draw do
  devise_for :users
  resources :posts
  resources :charges
  root 'apps#index'
  get 'new' => 'posts#new'
  get 'view' => 'apps#view'
  
end
