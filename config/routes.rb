Rails.application.routes.draw do
  match '*all', to: 'application#preflight', via: [:options]
  resources :foods, only: [:index]
  resources :exercises, only: [:index]
  resources :meals, except: [:edit]
  resources :workouts, except: [:edit]
end
