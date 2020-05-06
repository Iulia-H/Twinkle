class AddColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :tags, :photo_id, :integer
    add_index :tags, :photo_id
  end
end
