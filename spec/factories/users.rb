# frozen_string_literal: true

FactoryBot.define do
  factory :user do
    password { '123456' }
    email { 'joe@g.com' }
  end
end
