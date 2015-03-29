class Api::UsersController < ApplicationController
  respond_to :json, :html

  def show
    #respond_with User.find(params[:id])
    user = User.find(params[:id])
    respond_to do |format|
      format.html
      format.json { render json: user }
    end
    #respond_with user
  end

  def create
    user = User.new(user_params)
      if user.save
        respond_to do |format|
          format.html { redirect_to root_path}
          format.json { render json: user, status: 201, location: [:api, user]}
        end
      else
       render json: { errors: user.errors }, status: 422
      end
  end

  def destroy
    #User.delete(params[:id])
    user = User.find(params[:id])
    if user.destroy
      render json: user, status: 201, location: [:api, user]
    else
      render json: { errors: user.errors }, status: 422
    end
    #respond_with user, :location => all_users_index_url
  end

  def update
    #User.delete(params[:id])
    user = User.find(params[:id])
    user.update(user_params)
    if user.save
      render json: user, status: 201, location: [:api, user]
    else
      render json: { errors: user.errors }, status: 422
    end
  end

  def new
    @user = User.new
    respond_to do |format|
      format.html
      format.json {render :json => @user}
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation, :name, :lastname, :username, :role_id)
  end

end
