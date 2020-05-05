class Photo < ApplicationRecord
    validates :title, presence: true
    validates :user_id, presence: true 

    has_one_attached :link

    belongs_to :users,
        foreign_key: :user_id,
        class_name: :User

    has_and_belongs_to_many :tags

    has_many :comments,
        foreign_key: :photo_id,
        class_name: :Comment

end
