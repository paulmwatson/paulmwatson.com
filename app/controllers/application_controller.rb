class ApplicationController < ActionController::Base
  protect_from_forgery
  
  before_filter :set_locale
  #before_filter :set_user

  def set_locale
    I18n.locale = params[:locale]
  end
  
  def set_user
    if !session[:user]
      user = User.create
      user.email = "user_#{user.id}@paulmwatson.com"
      user.save
      session[:user] = user
      @new_user = true
    else
      @new_user = false
    end
    @current_user = session[:user]
  end
  
end
