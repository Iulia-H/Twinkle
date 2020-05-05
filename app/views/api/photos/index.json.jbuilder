json.array! @photos do |photo|
    json.extract! photo, :title
    json.photoURL url_for(photo.link)
end
