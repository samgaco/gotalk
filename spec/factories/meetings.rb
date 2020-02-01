# frozen_string_literal: true

FactoryBot.define do
  factory :meeting do
    user
    teacher
    scheduled { '2022-02-08 11:00:00' }
  end
end
