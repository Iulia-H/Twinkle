
@comments.each do |comment|
    json.set! comment.id  do 
        json.extract! comment, :id, :body, :photo_id, :user_id
    end
end