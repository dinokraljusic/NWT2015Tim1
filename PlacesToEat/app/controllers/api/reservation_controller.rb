class Api::ReservationController < ApplicationController
  respond_to :json
  def show
    respond_with Reservation.find(params[:id])
  end

  def create
    reservation = Reservation.new(reservation_params)
    if reservation.save
      render json: reservation, status: 201, location: [:api, reservation]
    else
      render json: { errors: reservation.errors }, status: 422
    end
  end

  private

  def reservation_params
    params.require(:reservation).permit(:time_from, :time_to, :num, :restaurant_id, :user_id)
  end
end
