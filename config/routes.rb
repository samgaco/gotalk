Rails.application.routes.draw do
  devise_for :users

  #Routes to request data
  get 'teachers/index'
  get 'meetings/index'
  get 'languages/index'
  get 'users/index'
  get '/show/:id', to: 'teachers#show'

  post '/teachers/meetings/create', to: 'meetings#create'

  #Routes to access the react front end
  root 'homepage#index'
  get '/*path' => 'homepage#index'
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
