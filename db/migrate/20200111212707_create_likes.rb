class CreateLikes < ActiveRecord::Migration[6.0]
  def change
    create_table :likes do |t|

      t.timestamps
      t.references :user, index: true
      t.references :teacher, index: true

    end
  end
end
