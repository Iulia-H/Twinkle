class Photo < ApplicationRecord
    validates :title, presence: true
    validates :user_id, presence: true 

    has_one_attached :link

    has_many :photo_tags,
        foreign_key: :photo_id,
        class_name: :PhotoTag

    has_many :tags,
        foreign_key: :photo_id,
        class_name: :Tag

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    has_many :comments,
        foreign_key: :photo_id,
        class_name: :Comment
end
