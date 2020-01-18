require 'rails_helper'

RSpec.describe Teacher, type: :model do
  it 'Adds a meeting' do
    teacher = FactoryBot.build(:teacher)
    expect{teacher.save}.to change(Teacher, :count).by(1)
  end
end
