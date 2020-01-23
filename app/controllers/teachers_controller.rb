# frozen_string_literal: true

class TeachersController < ApplicationController
  def index
    teacher = Teacher.includes(:likes).all
    render json: teacher.to_json(methods: [:likes_count])
  end

  def show
    if teacher
      render json: teacher
    else
      render json: teacher.errors
    end
  end

  private

  def teacher_params
    params.permit(:name, :language, :rate)
  end

  def teacher
    @teacher ||= Teacher.find(params[:id])
  end
end
