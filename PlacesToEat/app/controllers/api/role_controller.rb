class Api::RoleController < ApplicationController
  respond_to :json
  def show
    respond_with Role.find(params[:id])
  end

  def create
    role = Role.new(role_params)
    if role.save
      render json: role, status: 201, location: [:api, role]
    else
      render json: { errors: role.errors }, status: 422
    end
  end

  private

  def role_params
    params.require(:role).permit(:name)
  end
end
