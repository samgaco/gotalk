require 'rails_helper'

RSpec.describe Meeting, type: :model do
  it 'Adds a meeting' do
    meeting = FactoryBot.build(:meeting)
    expect{meeting.save}.to change(Meeting, :count).by(1)
  end
end
