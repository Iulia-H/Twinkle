# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require "open-uri"

User.destroy_all
Photo.destroy_all
Comment.destroy_all
Tag.destroy_all


user1= User.create(username: "demoUser", password: "password")
user2= User.create(username: "dogPerson", password: "password1")
user3= User.create(username: "nature_lover", password: "password2")
user4= User.create(username: "I_love_dessert", password: "password3")
user5= User.create(username: "ProfessionalPhotographer", password: "password4")
user6= User.create(username: "Animals", password: "password5")
user7= User.create(username: "Nature_pics", password: "password6")
user8= User.create(username: "I_like_winter", password: "password7")
user9= User.create(username: "Pics_of_people", password: "password8")
user10= User.create(username: "HelloWorld", password: "password9")


photo1 = Photo.create(title: "Photo by Simon Wilkes on Unsplash", user_id: user1.id)
photo1.link.attach(io: open(https://twinkle-dev.s3-us-west-1.amazonaws.com/AKRcVuAyGfYLSFqH3SM3h6fN) ), filename: 'simon-wilkes-py3Uw1QbK6A-unsplash.jpg')

photo2 = Photo.create(title: "Photo by Tunafish Mayonnaise on Unsplash", user_id: user1.id)
photo2.link.attach(io: open("https://twinkle-dev.s3-us-west-1.amazonaws.com/HwCFLRSEezBwjSqFyTtnMshJ"), filename: 'tunafish-mayonnaise-pSIt7op-mds-unsplash.jpg')

photo3 = Photo.create(title: "Photo by kilarov zaneit on Unsplash", user_id: user2.id)
photo3.link.attach(io: open("https://twinkle-dev.s3-us-west-1.amazonaws.com/xVM2dR6DGrL5VdXrSMDacVkw"), filename: 'kilarov-zaneit-_387q_NwPLg-unsplash.jpg')

photo4 = Photo.create(title: "Photo by Mat Reding on Unsplash", user_id: user2.id)
photo4.link.attach(io: open("https://twinkle-dev.s3-us-west-1.amazonaws.com/Vvd9pScvtjs9S5zp82LJwqgw"), filename: 'mat-reding-pFQWfA5rHDc-unsplash.jpg')

photo5 = Photo.create(title: "Photo by Jeremy Thomas on Unsplash", user_id: user3.id)
photo5.link.attach(io: open("https://twinkle-dev.s3-us-west-1.amazonaws.com/qoWV2CCwA2iDoSQ2YhxxSfAz"), filename: 'jeremy-thomas-E0AHdsENmDg-unsplash.jpg')

photo6 = Photo.create(title: "Photo by NASA on Unsplash", user_id: user3.id)
photo6.link.attach(io: open("https://twinkle-dev.s3-us-west-1.amazonaws.com/rFvsMNzzrCSNd9EzwtB5eJ8E"), filename: 'nasa-Q1p7bh3SHj8-unsplash.jpg')

photo7 = Photo.create(title: "Photo by NASA on Unsplash", user_id: user4.id)
photo7.link.attach(io: open("https://twinkle-dev.s3-us-west-1.amazonaws.com/VBSjsQn3UuaLJKRWY2RmytbH"), filename: 'nasa-rTZW4f02zY8-unsplash.jpg')

photo8 = Photo.create(title: "Photo by Juskteez Vu on Unsplash", user_id: user4.id)
photo8.link.attach(io: open("https://twinkle-dev.s3-us-west-1.amazonaws.com/eJHyav3sFJCFPcucaw7b61dm"), filename: 'juskteez-vu-mwhklqGVzck-unsplash.jpg')

# photo9 = Photo.create(title: "Photo by Ricardo Gomez Angel on Unsplash", user_id: user5.id)
# photo9.link.attach(io: open("), filename: 'ricardo-gomez-angel--98jVaVuGv0-unsplash.jpg')

photo11 = Photo.create(title: "Photo by Mari Pa on Unsplash", user_id: user5.id)
photo11.link.attach(io: open("https://twinkle-dev.s3-us-west-1.amazonaws.com/y2K556xQNgscGv4XtCNHxWga"), filename: 'mari-pa-yUqmdFy7P7k-unsplash.jpg')

photo12 = Photo.create(title: "Photo by Mike Labrum on Unsplash", user_id: user6.id)
photo12.link.attach(io: open("https://twinkle-dev.s3-us-west-1.amazonaws.com/kj1jHaY1J81x3cEKYRYyu1f2"), filename: 'mike-labrum-fvl4b1gjpbk-unsplash.jpg')

photo13 = Photo.create(title: "Photo by Jude Beck on Unsplash", user_id: user6.id)
photo13.link.attach(io: open("https://twinkle-dev.s3-us-west-1.amazonaws.com/vziX98jE71oFYSJ1qvp5w1iw"), filename: 'jude-beck-kEh4k5M9Z30-unsplash.jpg')

photo14 = Photo.create(title: "Photo by Dil on Unsplash", user_id: user7.id)
photo14.link.attach(io: open("https://twinkle-dev.s3-us-west-1.amazonaws.com/XtLXGto3Gcdhtz8zUNkr25c5"), filename: 'dil-F35EmcotWPY-unsplash.jpg')

photo15 = Photo.create(title: "Photo by Rohan Makhecha on Unsplash", user_id: user7.id)
photo15.link.attach(io: open("https://twinkle-dev.s3-us-west-1.amazonaws.com/sUqEpE26hZW2FHYDRyUrqhii"), filename: 'rohan-makhecha-jw3GOzxiSkw-unsplash.jpg')

photo16 = Photo.create(title: "Photo by Gian D. on Unsplash", user_id: user8.id)
photo16.link.attach(io: open("https://twinkle-dev.s3-us-west-1.amazonaws.com/xztPYdgXbdpsWPfQ9QbiB1vF"), filename: 'gian-d-jZxairpkhho-unsplash.jpg')

# photo17 = Photo.create(title: "Photo by Ilja Tulit on Unsplash", user_id: user8.id)
# photo17.link.attach(io: open("https://twinkle-dev.s3-us-west-1.amazonaws.com/edWnNKj5LZ8fz5TsJAZFKmno"), filename: 'ilja-tulit-CoREQIuk1qM-unsplash.jpg')

# photo18 = Photo.create(title: "Photo by Felix Mittermeier on Unsplash", user_id: user9.id)
# photo18.link.attach(io: open("https://twinkle-dev.s3-us-west-1.amazonaws.com/oJW4e4D5GzTEwJzzoNgdcrJ1"), filename: 'felix-mittermeier-L4-16dmZ-1c-unsplash.jpg')

# photo19 = Photo.create(title: "Photo by Emil Jarfelt on Unsplash", user_id: user9.id)
# photo19.link.attach(io: open("https://twinkle-dev.s3-us-west-1.amazonaws.com/uctQyMahywbB4PiMp3cgPyKd"), filename: 'emil-jarfelt-NROJUYgpjKE-unsplash.jpg')

# photo20 = Photo.create(title: "Photo by Anton Darius on Unsplash", user_id: user10.id)
# photo20.link.attach(io: open("https://twinkle-dev.s3-us-west-1.amazonaws.com/ehY1JrcpNky1uoteMUusa9mD"), filename: 'anton-darius-ebHCU8n7G38-unsplash.jpg')




