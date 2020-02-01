# frozen_string_literal: true

class AddDescriptionToTeachers < ActiveRecord::Migration[6.0]
  def change
    add_column :teachers, :description, :text
  end
end
