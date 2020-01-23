# frozen_string_literal: true

class Teacher < ApplicationRecord
  has_many :likes
  has_many :meetings

  def likes_count
    likes.count
  end
end
