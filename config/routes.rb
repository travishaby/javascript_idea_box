Rails.application.routes.draw do

  root "static_pages#index"

  namespace :api do
    namespace :v1 do
      resources :ideas, only: [:index, :create]
    end
  end

end
