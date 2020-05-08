
  json.extract! @photo, :id, :title, :user_id
  json.photoUrl url_for(@photo.link)


