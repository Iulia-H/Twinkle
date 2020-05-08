Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
    root "static_pages#root"

    namespace :api, defaults: {format: :json} do
        resource :user, only: [:create, :destroy]
        resource :session, only: [:create, :destroy, :show]
        resources :photos, only: [:create, :destroy, :show, :index] do
            resources :comments, only: [:index]
            resources :tags, only: [:index]
        end
        resources :tags, only: [:create, :destroy, :update, :show, :index]
        resources :comments, only: [:create, :update, :show, :destroy]
    end
end
