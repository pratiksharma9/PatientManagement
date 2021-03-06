Rails.application.routes.draw do
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

	# You can have the root of your site routed with "root"
  # root 'home#index'

  devise_scope :user do
    root :to => 'devise/sessions#new'
  end

  devise_for :users, controllers: {
      sessions: 'users/sessions',
     :registrations => 'users/registrations' 
  }

  resources :patients, only: [:edit, :show, :update]
  resources :feedbacks, only: [:index, :create, :update, :destroy]
  resources :appointments, only: [:index, :update]
  resources :professions, only: [:create, :update, :destroy]

	# Example of regular route:
  # get '/doctors/profile/:id', to: 'doctors#doctor_profile'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
	resources :doctors, only: [:index, :show, :update] do 
		member do
			get 'profile'
		end
  end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
  
  get '*path' => redirect('/')
end
