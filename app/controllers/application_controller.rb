class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_action :configure_permitted_parameters, if: :devise_controller?
  before_action :authenticate_user!
  
	private
  def configure_permitted_parameters
    devise_parameter_sanitizer.for(:sign_up) { |u| u.permit(:email, :password, :password_confirmation, :name, :gender, :dob, :mobile, :alternate_mobile, :address, :city, :state, :country, :pincode, :user_type)}
    devise_parameter_sanitizer.for(:account_update) { |u| u.permit(:email, :password, :password_confirmation, :current_password)}
  end

  def after_sign_in_path_for(resource)
    appointments_path
  end
  
  def after_sign_out_path_for(resource)
    new_user_session_path
  end
  	
end

