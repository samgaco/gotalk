# frozen_string_literal: true

class LanguagesController < ApplicationController
  def index
    teacher = Teacher.all
    render json: teacher.distinct.pluck(:language)
  end
end
