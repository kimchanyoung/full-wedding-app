class WelcomeController < ApplicationController
  def index
    if cookies[:visited]
      render 'index'
    else
      render 'welcome'
    end
  end

  def get_cookie
    cookies[:visited] = { value: true, expires: 1.hour.from_now }
    redirect_to root_path
  end
end
