# frozen_string_literal: true

class UsersController < ApplicationController
  def index
    render json: current_user.to_json(include: [:meetings])
  end
end
