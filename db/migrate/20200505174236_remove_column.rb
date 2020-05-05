class RemoveColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :photos, :tag_id
    remove_column :tags, :photo_id
  end
end
