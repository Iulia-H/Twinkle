class Photo < ApplicationRecord
    validates :title, presence: true
    validates :user_id, presence: true 

    belongs_to :users,
        foreign_key: :user_id,
        class_name: :User
end
