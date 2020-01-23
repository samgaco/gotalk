# frozen_string_literal: true

class Like < ApplicationRecord
  belongs_to :teacher
  belongs_to :user
end
