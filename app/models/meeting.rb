# frozen_string_literal: true

class Meeting < ApplicationRecord
  belongs_to :teacher
  belongs_to :user

  def likes_count
    likes.count
  end
end
