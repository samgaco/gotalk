class AddLessonsToTeacher < ActiveRecord::Migration[6.0]
  def change
    add_column :teachers, :lessons, :integer
  end
end
