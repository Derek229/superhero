Rails.application.routes.draw do
  root "supers#index"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # resources :supers
  get  '/supers', to: 'supers#index'
  get '/supers/new', to: "supers#new"
  get '/supers/:id', to: "supers#show"
  get '/supers/:id/edit', to: "supers#edit"
  post 'supers', to: "supers#create"

  delete  '/supers/:id', to: "supers#destroy"
end

