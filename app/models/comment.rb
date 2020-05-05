class Comment < ApplicationRecord

    belongs_to :photo,
        foreign_key: :photo_id,
        class_name: :Photo

    belongs to :user,
        foreign_key: :user_id,
        class_name: :User
end
