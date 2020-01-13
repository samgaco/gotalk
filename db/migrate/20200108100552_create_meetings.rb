class CreateMeetings < ActiveRecord::Migration[6.0]
  def change
    create_table :meetings do |t|
      t.time :scheduled
      t.references :user, index: true
      t.references :teacher, index: true
      t.timestamps
    end
  end
end
