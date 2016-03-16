class WelcomeController < ApplicationController
  def index
    if params[:password] == 'farts'
      cookies[:logged_in] = true
    end

    if cookies[:logged_in] == true
      render 'index'
    else
      render 'under_construction'
    end
  end

  def under_construction

  end
end