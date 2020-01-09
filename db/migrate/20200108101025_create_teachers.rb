class CreateTeachers < ActiveRecord::Migration[6.0]
  def change
    create_table :teachers do |t|
      t.string :name
      t.string :language
      t.float :rate

      t.timestamps
    end
  end
end
