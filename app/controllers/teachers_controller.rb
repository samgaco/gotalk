class TeachersController < ApplicationController
  def index
    teacher = Teacher.includes(:likes).all
    render json: teacher.to_json(methods: [:likes_count])
  end

  def create
    teacher = Teacher.create!(recipe_params)
    if teacher
      render json: teacher
    else
      render json: teacher.errors
    end
  end

  def show
    if teacher
      render json: teacher
    else
      render json: teacher.errors
    end
  end

  def destroy
    teacher&.destroy
    render json: { message: 'Teacher deleted!' }
  end

  private

  def teacher_params
    params.permit(:name, :language, :rate)
  end

  def teacher
    @teacher ||= Teacher.find(params[:id])
  end
end
