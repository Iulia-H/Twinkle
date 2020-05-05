json.extract! @photo, :id, :title
json.photoUrl url_for(@photo.link)