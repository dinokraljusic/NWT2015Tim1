class Api::RatingController < ApplicationController
  respond_to :json
  def show
    respond_with Rating.find(params[:id])
  end

  def index
    user = User.find(params[:user_id])
    respond_with user.rating
  end

  def rating_history
    ratings = Rating.find_by_sql("SELECT avg(ra.rate) rate, date(ra.updated_at) updated_at, ra.id, ra.user_id, ra.restaurant_id, ra.created_at from restaurants rest join ratings ra on ra.restaurant_id=rest.id where restaurant_id=" +params[:restaurant_id] +  " group by date(ra.updated_at)")#.find(params[:id])
    #respond_with ratings.select { |rating| rating.restaurant_id == params[:restaurant_id]}
    respond_with ratings
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
