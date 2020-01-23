# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Like, type: :model do
  it 'Adds a meeting' do
    like = FactoryBot.build(:like)
    expect { like.save }.to change(Like, :count).by(1)
  end
end
