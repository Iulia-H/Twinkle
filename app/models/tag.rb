class Tag < ApplicationRecord
    validates :body, presence: true
      validates :photo_id, presence: true

    has_many :photo_tags,
        foreign_key: :tag_id,
        class_name: :PhotoTag

    has_many :photos,
        through: :photo_tags

    belongs_to :photo,
        foreign_key: :photo_id,
        class_name: :Photo
        
end
