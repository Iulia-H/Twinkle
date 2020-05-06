json.array! @tags do |tag|
    json.extract! tag, :id, :body, :photo_id
end