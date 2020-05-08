@photos.each do |photo|
    json.set! photo.id do
        json.extract! photo, :id, :title, :user_id
        json.photoURL url_for(photo.link)
    end
end
