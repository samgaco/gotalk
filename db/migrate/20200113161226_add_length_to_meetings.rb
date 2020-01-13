class AddLengthToMeetings < ActiveRecord::Migration[6.0]
  def change
    add_column :meetings, :length, :integer
  end
end
