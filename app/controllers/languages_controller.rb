# frozen_string_literal: true

# Return all the languages available in the index
class LanguagesController < ApplicationController
  def index
    teacher = Teacher.all
    render json: teacher.distinct.pluck(:language)
  end
end
