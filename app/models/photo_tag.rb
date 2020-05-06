class PhotoTag < ApplicationRecord

    belongs_to :photos,
        foreign_key: :photo_id,
        class_name: :Photo

    belongs_to :tags,
        foreign_key: :tag_id,
        class_name: :Tag
end
