class PhotoTag < ApplicationRecord
    validates :body, presence: true
    validates :user_id, presence: true 
    validates :photo_id, presence: true


    belongs_to :photos,
        foreign_key: :photo_id,
        class_name: :Photo

    belongs_to :tags,
        foreign_key: :tag_id,
        class_name: :Tag
end
