# frozen_string_literal: true

require 'rails_helper'

RSpec.describe User, type: :model do
  it 'Adds a meeting' do
    user = FactoryBot.build(:user)
    expect { user.save }.to change(User, :count).by(1)
  end
end
