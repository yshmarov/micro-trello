Rails.application.routes.draw do

  root "lists#index"
  resources :lists do
    put :sort
    resources :tasks do
      put :sort
    end
  end
  resources :tasks
end
