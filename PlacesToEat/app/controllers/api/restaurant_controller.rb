class Api::RestaurantController < ApplicationController
  respond_to :json
  def show
    respond_with Restaurant.find(params[:id])
  end

  def create
    restaurant = Restaurant.new(restaurant_params)
    if restaurant.save
      render json: restaurant, status: 201, location: [:api, restaurant]
    else
      render json: { errors: restaurant.errors }, status: 422
    end
  end

  def destroy
    #User.delete(params[:id])
    restaurant = Restaurant.find(params[:id])
    if restaurant.destroy
      render json: restaurant, status: 201, location: [:api, restaurant]
    else
      render json: { errors: restaurant.errors }, status: 422
    end
    #respond_with user, :location => all_users_index_url
  end

  def update
    #User.delete(params[:id])
    restaurant = Restaurant.find(params[:id])
    restaurant.update(restaurant_params)
    if restaurant.save
      render json: restaurant, status: 201, location: [:api, restaurant]
    else
      render json: { errors: restaurant.errors }, status: 422
    end
  end

  private

  def restaurant_params
    params.require(:restaurant).permit(:name, :address, :user_id)
  end
end
