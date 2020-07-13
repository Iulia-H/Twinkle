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
user4= User.create(username: "I_love_desert", password: "password3")
user5= User.create(username: "ProfessionalPhotographer", password: "password4")
user6= User.create(username: "Animals", password: "password5")
user7= User.create(username: "Nature_pics", password: "password6")
user8= User.create(username: "I_like_winter", password: "password7")
user9= User.create(username: "Pics_of_people", password: "password8")
user10= User.create(username: "HelloWorld", password: "password9")


photo1 = Photo.create(title: "Photo by Simon Wilkes on Unsplash", user_id: user1.id)
photo1.link.attach(io: open("https://twinkle-dev.s3-us-west-1.amazonaws.com/AKRcVuAyGfYLSFqH3SM3h6fN"), filename: 'simon-wilkes-py3Uw1QbK6A-unsplash.jpg')

sunrise = Tag.create(body: "sunrise", photo_id: photo1.id )
nature = Tag.create(body: "nature", photo_id: photo1.id )
trees = Tag.create(body: "trees", photo_id: photo1.id )
calm = Tag.create(body: "calm", photo_id: photo1.id )

comment1 = Comment.create(body: "I waited for the perfect moment to take it", photo_id: photo1.id, user_id: user1.id )
comment2 = Comment.create(body: "I love the lighting", photo_id: photo1.id, user_id: user2.id )
comment3 = Comment.create(body: "The morning glow comes through", photo_id: photo1.id, user_id: user3.id )
comment4 = Comment.create(body: "I love this!!", photo_id: photo1.id, user_id: user4.id )
comment5 = Comment.create(body: "This a great photo", photo_id: photo1.id, user_id: user5.id )
comment6 = Comment.create(body: "I would love to see more of the wildlife", photo_id: photo1.id, user_id: user6.id )
comment7 = Comment.create(body: "Nature is amazing", photo_id: photo1.id, user_id: user7.id )
comment8 = Comment.create(body: "This photo had great lighting and I enjoy the natural glow", photo_id: photo1.id, user_id: user8.id )
comment9 = Comment.create(body: "Can you tell me where this was taken? I want to do a photoshoot there as well", photo_id: photo1.id, user_id: user9.id )
comment10 = Comment.create(body: "I'm a big fan of this", photo_id: photo1.id, user_id: user10.id )
comment11 = Comment.create(body: "I am so happy that it turned out so well", photo_id: photo1.id, user_id: user1.id )

photo2 = Photo.create(title: "Photo by Tunafish Mayonnaise on Unsplash", user_id: user1.id)
photo2.link.attach(io: open("https://twinkle-dev.s3-us-west-1.amazonaws.com/HwCFLRSEezBwjSqFyTtnMshJ"), filename: 'tunafish-mayonnaise-pSIt7op-mds-unsplash.jpg')

spring = Tag.create(body: "spring", photo_id: photo2.id )
nature = Tag.create(body: "nature", photo_id: photo2.id )
mountain = Tag.create(body: "mountain", photo_id: photo2.id )

comment1 = Comment.create(body: "I love trees in bloom", photo_id: photo2.id, user_id: user1.id )
comment2 = Comment.create(body: "This picture is amazing", photo_id: photo2.id, user_id: user2.id )
comment3 = Comment.create(body: "I'm going there on holiday. I hope to see it in person", photo_id: photo2.id, user_id: user3.id )
comment4 = Comment.create(body: "I love this!!", photo_id: photo2.id, user_id: user4.id )
comment5 = Comment.create(body: "The snowy top makes the flowers stand out really well", photo_id: photo2.id, user_id: user5.id )
comment6 = Comment.create(body: "This is so serene.", photo_id: photo2.id, user_id: user6.id )
comment7 = Comment.create(body: "Nature is amazing", photo_id: photo2.id, user_id: user7.id )
comment8 = Comment.create(body: "The flowers are awesome", photo_id: photo2.id, user_id: user8.id )
comment9 = Comment.create(body: "Looks so much better in person", photo_id: photo2.id, user_id: user9.id )
comment10 = Comment.create(body: "It's an amazing view", photo_id: photo2.id, user_id: user10.id )
comment11 = Comment.create(body: "I was such a lovely experience", photo_id: photo2.id, user_id: user1.id )


photo3 = Photo.create(title: "Photo by kilarov zaneit on Unsplash", user_id: user2.id)
photo3.link.attach(io: open("https://twinkle-dev.s3-us-west-1.amazonaws.com/xVM2dR6DGrL5VdXrSMDacVkw"), filename: 'kilarov-zaneit-_387q_NwPLg-unsplash.jpg')

desert = Tag.create(body: "desert", photo_id: photo3.id )
nature = Tag.create(body: "nature", photo_id: photo3.id )
mountain = Tag.create(body: "mountain", photo_id: photo3.id )

comment1 = Comment.create(body: "Mountain climbing gives some of the best views", photo_id: photo3.id, user_id: user2.id )
comment2 = Comment.create(body: "Morning in nature is great", photo_id: photo3.id, user_id: user2.id )
comment3 = Comment.create(body: "I love this photo", photo_id: photo3.id, user_id: user3.id )
comment4 = Comment.create(body: "This photo is amazing", photo_id: photo3.id, user_id: user4.id )
comment5 = Comment.create(body: "Awesome picture", photo_id: photo3.id, user_id: user5.id )
comment6 = Comment.create(body: "Nature is amazing", photo_id: photo3.id, user_id: user6.id )
comment7 = Comment.create(body: "I would love to see more of the wildlife", photo_id: photo3.id, user_id: user7.id )
comment8 = Comment.create(body: "This photo has great lighting", photo_id: photo3.id, user_id: user8.id )
comment9 = Comment.create(body: "You did a great job!!", photo_id: photo3.id, user_id: user9.id )
comment10 = Comment.create(body: "I would love to have a walk there", photo_id: photo3.id, user_id: user10.id )
comment11 = Comment.create(body: "I had my dog with me all the way", photo_id: photo3.id, user_id: user2.id )

photo4 = Photo.create(title: "Photo by Mat Reding on Unsplash", user_id: user2.id)
photo4.link.attach(io: open("https://twinkle-dev.s3-us-west-1.amazonaws.com/Vvd9pScvtjs9S5zp82LJwqgw"), filename: 'mat-reding-pFQWfA5rHDc-unsplash.jpg')

flowers = Tag.create(body: "flowers", photo_id: photo4.id )
nature = Tag.create(body: "nature", photo_id: photo4.id )

comment1 = Comment.create(body: "Looks like a vintage photo", photo_id: photo4.id, user_id: user1.id )
comment2 = Comment.create(body: "So many great flowers", photo_id: photo4.id, user_id: user2.id )
comment3 = Comment.create(body: "The photo is great", photo_id: photo4.id, user_id: user3.id )
comment4 = Comment.create(body: "Natural snowballs ", photo_id: photo4.id, user_id: user4.id )
comment5 = Comment.create(body: "Awesome picture", photo_id: photo4.id, user_id: user5.id )
comment6 = Comment.create(body: "Love this", photo_id: photo4.id, user_id: user6.id )
comment7 = Comment.create(body: "Fantastic photo", photo_id: photo4.id, user_id: user7.id )
comment8 = Comment.create(body: "Flowers are great", photo_id: photo4.id, user_id: user8.id )
comment9 = Comment.create(body: "I love spring", photo_id: photo4.id, user_id: user9.id )
comment10 = Comment.create(body: "Awesome photo", photo_id: photo4.id, user_id: user10.id )
comment11 = Comment.create(body: "It turned out so well", photo_id: photo4.id, user_id: user1.id )


photo5 = Photo.create(title: "Photo by Jeremy Thomas on Unsplash", user_id: user3.id)
photo5.link.attach(io: open("https://twinkle-dev.s3-us-west-1.amazonaws.com/qoWV2CCwA2iDoSQ2YhxxSfAz"), filename: 'jeremy-thomas-E0AHdsENmDg-unsplash.jpg')

space = Tag.create(body: "space", photo_id: photo5.id )
stars = Tag.create(body: "stars", photo_id: photo5.id )
galaxy = Tag.create(body: "galaxy", photo_id: photo5.id )

comment1 = Comment.create(body: "I like this a lot", photo_id: photo5.id, user_id: user1.id )
comment2 = Comment.create(body: "Stars are awesome", photo_id: photo5.id, user_id: user2.id )
comment3 = Comment.create(body: "Space pictures are great", photo_id: photo5.id, user_id: user3.id )
comment4 = Comment.create(body: "This is really calming", photo_id: photo5.id, user_id: user4.id )
comment5 = Comment.create(body: "I enjoy this picture", photo_id: photo5.id, user_id: user5.id )
comment6 = Comment.create(body: "The stars are so bright", photo_id: photo5.id, user_id: user6.id )
mment11 = Comment.create(body: "I love staring at the stars", photo_id: photo5.id, user_id: user8.id )

photo6 = Photo.create(title: "Photo by NASA on Unsplash", user_id: user3.id)
photo6.link.attach(io: open("https://twinkle-dev.s3-us-west-1.amazonaws.com/rFvsMNzzrCSNd9EzwtB5eJ8E"), filename: 'nasa-Q1p7bh3SHj8-unsplash.jpg')

space = Tag.create(body: "space", photo_id: photo6.id )
night = Tag.create(body: "night", photo_id: photo6.id )
earth = Tag.create(body: "earth", photo_id: photo6.id )

comment1 = Comment.create(body: "I love seeing the earth from space", photo_id: photo6.id, user_id: user1.id )
comment2 = Comment.create(body: "I love the perspective", photo_id: photo6.id, user_id: user2.id )
comment3 = Comment.create(body: "This is a great photo", photo_id: photo6.id, user_id: user3.id )
comment4 = Comment.create(body: "This puts things in perspective", photo_id: photo6.id, user_id: user4.id )
comment5 = Comment.create(body: "This is awesome", photo_id: photo6.id, user_id: user5.id )
comment6 = Comment.create(body: "This is a great photo", photo_id: photo6.id, user_id: user6.id )
comment7 = Comment.create(body: "I love space pictures", photo_id: photo6.id, user_id: user7.id )
comment8 = Comment.create(body: "Earth pictures are great", photo_id: photo6.id, user_id: user8.id )

photo7 = Photo.create(title: "Photo by NASA on Unsplash", user_id: user4.id)
photo7.link.attach(io: open("https://twinkle-dev.s3-us-west-1.amazonaws.com/VBSjsQn3UuaLJKRWY2RmytbH"), filename: 'nasa-rTZW4f02zY8-unsplash.jpg')

space = Tag.create(body: "space", photo_id: photo7.id )
galaxy = Tag.create(body: "galaxy", photo_id: photo7.id )
stars = Tag.create(body: "stars", photo_id: photo7.id )

comment1 = Comment.create(body: "Galaxy pictures are great", photo_id: photo7.id, user_id: user1.id )
comment2 = Comment.create(body: "I feel like I'm in space", photo_id: photo7.id, user_id: user2.id )
comment3 = Comment.create(body: "Such a wonderful picture", photo_id: photo7.id, user_id: user3.id )
comment4 = Comment.create(body: "I love this!!", photo_id: photo7.id, user_id: user4.id )
comment5 = Comment.create(body: "This a great photo", photo_id: photo7.id, user_id: user5.id )
comment6 = Comment.create(body: "Awesome picture", photo_id: photo7.id, user_id: user6.id )
comment7 = Comment.create(body: "Nature is amazing", photo_id: photo7.id, user_id: user7.id )

photo8 = Photo.create(title: "Photo by Juskteez Vu on Unsplash", user_id: user4.id)
photo8.link.attach(io: open("https://twinkle-dev.s3-us-west-1.amazonaws.com/eJHyav3sFJCFPcucaw7b61dm"), filename: 'juskteez-vu-mwhklqGVzck-unsplash.jpg')

space = Tag.create(body: "space", photo_id: photo8.id )
galaxy = Tag.create(body: "galaxy", photo_id: photo8.id )
stars = Tag.create(body: "stars", photo_id: photo8.id )
earth = Tag.create(body: "earth", photo_id: photo8.id )

comment1 = Comment.create(body: "This is fantastic", photo_id: photo8.id, user_id: user1.id )
comment2 = Comment.create(body: "I love the picture", photo_id: photo8.id, user_id: user2.id )
comment3 = Comment.create(body: "It's fantastic", photo_id: photo8.id, user_id: user3.id )
comment4 = Comment.create(body: "Great photo", photo_id: photo8.id, user_id: user4.id )
comment5 = Comment.create(body: "Awesome picture", photo_id: photo8.id, user_id: user5.id )
comment6 = Comment.create(body: "Fantastic", photo_id: photo8.id, user_id: user6.id )
comment7 = Comment.create(body: "Looks awesome", photo_id: photo8.id, user_id: user7.id )

# photo9 = Photo.create(title: "Photo by Ricardo Gomez Angel on Unsplash", user_id: user5.id)
# photo9.link.attach(io: open("), filename: 'ricardo-gomez-angel--98jVaVuGv0-unsplash.jpg')

photo11 = Photo.create(title: "Photo by Mari Pa on Unsplash", user_id: user5.id)
photo11.link.attach(io: open("https://twinkle-dev.s3-us-west-1.amazonaws.com/y2K556xQNgscGv4XtCNHxWga"), filename: 'mari-pa-yUqmdFy7P7k-unsplash.jpg')

fire = Tag.create(body: "fire", photo_id: photo11.id )
night = Tag.create(body: "night", photo_id: photo11.id )
flames = Tag.create(body: "flames", photo_id: photo11.id )
spark = Tag.create(body: "spark", photo_id: photo11.id )

comment1 = Comment.create(body: "This feels really cozy", photo_id: photo11.id, user_id: user1.id )
comment2 = Comment.create(body: "I love the details", photo_id: photo11.id, user_id: user2.id )
comment3 = Comment.create(body: "The photo is lovely", photo_id: photo11.id, user_id: user3.id )
comment4 = Comment.create(body: "I love this!!", photo_id: photo11.id, user_id: user4.id )
comment5 = Comment.create(body: "This a great photo", photo_id: photo11.id, user_id: user5.id )
comment6 = Comment.create(body: "Reminds me of camp", photo_id: photo11.id, user_id: user6.id )
comment7 = Comment.create(body: "The sparks a beutifully showcased", photo_id: photo11.id, user_id: user7.id )
comment8 = Comment.create(body: "This photo had great lighting and I enjoy the natural glow", photo_id: photo11.id, user_id: user8.id )
comment9 = Comment.create(body: "I love the picture", photo_id: photo11.id, user_id: user9.id )
comment10 = Comment.create(body: "I'm a big fan of this", photo_id: photo11.id, user_id: user10.id )
comment11 = Comment.create(body: "I am so happy that it turned put so well", photo_id: photo11.id, user_id: user1.id )


photo12 = Photo.create(title: "Photo by Mike Labrum on Unsplash", user_id: user6.id)
photo12.link.attach(io: open("https://twinkle-dev.s3-us-west-1.amazonaws.com/kj1jHaY1J81x3cEKYRYyu1f2"), filename: 'mike-labrum-fvl4b1gjpbk-unsplash.jpg')

candles = Tag.create(body: "candles", photo_id: photo12.id )
tealights = Tag.create(body: "tealights", photo_id: photo12.id )
night = Tag.create(body: "night", photo_id: photo12.id )

comment1 = Comment.create(body: "I really love this picture", photo_id: photo12.id, user_id: user1.id )
comment2 = Comment.create(body: "I love the lighting", photo_id: photo12.id, user_id: user2.id )
comment3 = Comment.create(body: "This is a great photo idea", photo_id: photo12.id, user_id: user3.id )
comment4 = Comment.create(body: "I love this!!", photo_id: photo12.id, user_id: user4.id )
comment5 = Comment.create(body: "This a great photo", photo_id: photo12.id, user_id: user5.id )
comment6 = Comment.create(body: "Awesome photo", photo_id: photo12.id, user_id: user6.id )
comment7 = Comment.create(body: "This is amazing", photo_id: photo12.id, user_id: user7.id )
comment8 = Comment.create(body: "Love the colors", photo_id: photo12.id, user_id: user8.id )
comment9 = Comment.create(body: "You did a great job", photo_id: photo12.id, user_id: user9.id )
comment10 = Comment.create(body: "I'm a big fan of your work", photo_id: photo12.id, user_id: user10.id )
comment11 = Comment.create(body: "I am so happy that it turned put so well", photo_id: photo12.id, user_id: user1.id )


photo13 = Photo.create(title: "Photo by Jude Beck on Unsplash", user_id: user6.id)
photo13.link.attach(io: open("https://twinkle-dev.s3-us-west-1.amazonaws.com/vziX98jE71oFYSJ1qvp5w1iw"), filename: 'jude-beck-kEh4k5M9Z30-unsplash.jpg')

candles = Tag.create(body: "candles", photo_id: photo13.id )
lights = Tag.create(body: "lights", photo_id: photo13.id )
night = Tag.create(body: "night", photo_id: photo13.id )

comment1 = Comment.create(body: "I really love this picture", photo_id: photo1.id, user_id: user1.id )
comment2 = Comment.create(body: "I love the lighting", photo_id: photo1.id, user_id: user2.id )
comment3 = Comment.create(body: "This is a great photo idea", photo_id: photo1.id, user_id: user3.id )
comment4 = Comment.create(body: "I love this!!", photo_id: photo1.id, user_id: user4.id )
comment5 = Comment.create(body: "This a great photo", photo_id: photo1.id, user_id: user5.id )
comment6 = Comment.create(body: "Awesome photo", photo_id: photo1.id, user_id: user6.id )
comment7 = Comment.create(body: "This is amazing", photo_id: photo1.id, user_id: user7.id )
comment8 = Comment.create(body: "Love the colors", photo_id: photo1.id, user_id: user8.id )
comment9 = Comment.create(body: "You did a great job", photo_id: photo1.id, user_id: user9.id )
comment10 = Comment.create(body: "I'm a big fan of your work", photo_id: photo1.id, user_id: user10.id )
comment11 = Comment.create(body: "I am so happy that it turned put so well", photo_id: photo1.id, user_id: user1.id )


photo14 = Photo.create(title: "Photo by Dil on Unsplash", user_id: user7.id)
photo14.link.attach(io: open("https://twinkle-dev.s3-us-west-1.amazonaws.com/XtLXGto3Gcdhtz8zUNkr25c5"), filename: 'dil-F35EmcotWPY-unsplash.jpg')

lights = Tag.create(body: "lights", photo_id: photo14.id )
night = Tag.create(body: "night", photo_id: photo14.id )

comment1 = Comment.create(body: "I really love this picture", photo_id: photo1.id, user_id: user1.id )
comment2 = Comment.create(body: "I love the lighting", photo_id: photo1.id, user_id: user2.id )
comment3 = Comment.create(body: "This is a great photo idea", photo_id: photo1.id, user_id: user3.id )
comment4 = Comment.create(body: "I love this!!", photo_id: photo1.id, user_id: user4.id )
comment5 = Comment.create(body: "This a great photo", photo_id: photo1.id, user_id: user5.id )
comment6 = Comment.create(body: "Awesome photo", photo_id: photo1.id, user_id: user6.id )
comment7 = Comment.create(body: "This is amazing", photo_id: photo1.id, user_id: user7.id )
comment8 = Comment.create(body: "Love the colors", photo_id: photo1.id, user_id: user8.id )
comment9 = Comment.create(body: "You did a great job", photo_id: photo1.id, user_id: user9.id )
comment10 = Comment.create(body: "I'm a big fan of your work", photo_id: photo1.id, user_id: user10.id )
comment11 = Comment.create(body: "I am so happy that it turned put so well", photo_id: photo1.id, user_id: user1.id )


photo15 = Photo.create(title: "Photo by Rohan Makhecha on Unsplash", user_id: user7.id)
photo15.link.attach(io: open("https://twinkle-dev.s3-us-west-1.amazonaws.com/sUqEpE26hZW2FHYDRyUrqhii"), filename: 'rohan-makhecha-jw3GOzxiSkw-unsplash.jpg')

light = Tag.create(body: "light", photo_id: photo15.id )
hand = Tag.create(body: "hand", photo_id: photo15.id )
lighbulb = Tag.create(body: "lighbulb", photo_id: photo15.id )

comment1 = Comment.create(body: "I really love this picture", photo_id: photo1.id, user_id: user1.id )
comment2 = Comment.create(body: "I love the lighting", photo_id: photo1.id, user_id: user2.id )
comment3 = Comment.create(body: "This is a great photo idea", photo_id: photo1.id, user_id: user3.id )
comment4 = Comment.create(body: "I love this!!", photo_id: photo1.id, user_id: user4.id )
comment5 = Comment.create(body: "This a great photo", photo_id: photo1.id, user_id: user5.id )
comment6 = Comment.create(body: "Awesome photo", photo_id: photo1.id, user_id: user6.id )
comment7 = Comment.create(body: "This is amazing", photo_id: photo1.id, user_id: user7.id )
comment8 = Comment.create(body: "Love the colors", photo_id: photo1.id, user_id: user8.id )
comment9 = Comment.create(body: "You did a great job", photo_id: photo1.id, user_id: user9.id )
comment10 = Comment.create(body: "I'm a big fan of your work", photo_id: photo1.id, user_id: user10.id )
comment11 = Comment.create(body: "I am so happy that it turned put so well", photo_id: photo1.id, user_id: user1.id )


photo16 = Photo.create(title: "Photo by Gian D. on Unsplash", user_id: user8.id)
photo16.link.attach(io: open("https://twinkle-dev.s3-us-west-1.amazonaws.com/xztPYdgXbdpsWPfQ9QbiB1vF"), filename: 'gian-d-jZxairpkhho-unsplash.jpg')


mirrors = Tag.create(body: "mirrors", photo_id: photo16.id )
illusions = Tag.create(body: "illusions", photo_id: photo16.id )
lights = Tag.create(body: "lights", photo_id: photo16.id )

comment1 = Comment.create(body: "I really love this picture", photo_id: photo1.id, user_id: user1.id )
comment2 = Comment.create(body: "I love the lighting", photo_id: photo1.id, user_id: user2.id )
comment3 = Comment.create(body: "This is a great photo idea", photo_id: photo1.id, user_id: user3.id )
comment4 = Comment.create(body: "I love this!!", photo_id: photo1.id, user_id: user4.id )
comment5 = Comment.create(body: "This a great photo", photo_id: photo1.id, user_id: user5.id )
comment6 = Comment.create(body: "Awesome photo", photo_id: photo1.id, user_id: user6.id )
comment7 = Comment.create(body: "This is amazing", photo_id: photo1.id, user_id: user7.id )
comment8 = Comment.create(body: "Love the colors", photo_id: photo1.id, user_id: user8.id )
comment9 = Comment.create(body: "You did a great job", photo_id: photo1.id, user_id: user9.id )
comment10 = Comment.create(body: "I'm a big fan of your work", photo_id: photo1.id, user_id: user10.id )
comment11 = Comment.create(body: "I am so happy that it turned put so well", photo_id: photo1.id, user_id: user1.id )


# photo17 = Photo.create(title: "Photo by Ilja Tulit on Unsplash", user_id: user8.id)
# photo17.link.attach(io: open("https://twinkle-dev.s3-us-west-1.amazonaws.com/edWnNKj5LZ8fz5TsJAZFKmno"), filename: 'ilja-tulit-CoREQIuk1qM-unsplash.jpg')

# photo18 = Photo.create(title: "Photo by Felix Mittermeier on Unsplash", user_id: user9.id)
# photo18.link.attach(io: open("https://twinkle-dev.s3-us-west-1.amazonaws.com/oJW4e4D5GzTEwJzzoNgdcrJ1"), filename: 'felix-mittermeier-L4-16dmZ-1c-unsplash.jpg')

# photo19 = Photo.create(title: "Photo by Emil Jarfelt on Unsplash", user_id: user9.id)
# photo19.link.attach(io: open("https://twinkle-dev.s3-us-west-1.amazonaws.com/uctQyMahywbB4PiMp3cgPyKd"), filename: 'emil-jarfelt-NROJUYgpjKE-unsplash.jpg')

# photo20 = Photo.create(title: "Photo by Anton Darius on Unsplash", user_id: user10.id)
# photo20.link.attach(io: open("https://twinkle-dev.s3-us-west-1.amazonaws.com/ehY1JrcpNky1uoteMUusa9mD"), filename: 'anton-darius-ebHCU8n7G38-unsplash.jpg')




