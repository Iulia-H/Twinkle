@tags.each do |tag|
    json.set! tag.id  do 
        json.extract! tag, :id, :body, :photo_id
    end
end