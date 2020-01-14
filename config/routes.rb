Rails.application.routes.draw do
  devise_for :users

  get 'users/index'
  get 'meetings/index'
  post 'teachers/meetings/create', to: 'meetings#create'
  get 'teachers/index'
  post 'teachers/create'
  get 'languages/index'
  get '/show/:id', to: 'teachers#show'
  delete '/destroy/:id', to: 'teachers#destroy'

  root 'homepage#index'
  get '/*path' => 'homepage#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
