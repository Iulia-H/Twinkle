
  json.extract! @photo, :id, :title, :user_id, :user
  json.photoUrl url_for(@photo.link)


