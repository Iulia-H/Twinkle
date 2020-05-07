json.array! @photos do |photo|
    json.extract! photo, :id,:title 
    json.photoURL url_for(photo.link)
end
