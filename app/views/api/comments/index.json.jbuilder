
json.array! @comments do |comment|

    json.extract! comment, :id, :body, :photo_id, :user_id, :user
end