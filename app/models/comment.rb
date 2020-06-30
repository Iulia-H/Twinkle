class Comment < ApplicationRecord
    validates :body, presence: true
    validates :user_id, presence: true 
    validates :photo_id, presence: true

    belongs_to :photo,
        foreign_key: :photo_id,
        class_name: :Photo

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User
end
