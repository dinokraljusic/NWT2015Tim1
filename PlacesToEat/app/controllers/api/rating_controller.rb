class Api::RatingController < ApplicationController
  respond_to :json
  def show
    respond_with Rating.find(params[:id])
  end

  def create
    rating = Rating.new(rating_params)
    if rating.save
      render json: rating, status: 201, location: [:api, rating]
    else
      render json: { errors: rating.errors }, status: 422
    end
  end

  def destroy
    #User.delete(params[:id])
    rating = Rating.find(params[:id])
    if rating.destroy
      render json: rating, status: 201, location: [:api, rating]
    else
      render json: { errors: rating.errors }, status: 422
    end
    #respond_with user, :location => all_users_index_url
  end

  def update
    #User.delete(params[:id])
    rating = Rating.find(params[:id])
    rating.update(rating_params)
    if rating.save
      render json: rating, status: 201, location: [:api, rating]
    else
      render json: { errors: rating.errors }, status: 422
    end
  end

  private

  def rating_params
    params.require(:rating).permit(:rate, :restaurant_id, :user_id)
  end
end
