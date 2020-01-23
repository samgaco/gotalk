# frozen_string_literal: true

# Model for likes

class Like < ApplicationRecord
  belongs_to :teacher
  belongs_to :user
end
