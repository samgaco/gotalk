class CreateMeetings < ActiveRecord::Migration[6.0]
  def change
    create_table :meetings do |t|
      t.date :day
      t.time :scheduled

      t.timestamps
    end
  end
end
