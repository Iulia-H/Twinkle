# Twinkle 
[Visit Page](https://tw1nkle.herokuapp.com/#/)

* ## Overview

Twinkle is a single-page website where users can share pictures and images.

* ## Technologies used
Twinkle is a rails app, that uses Postgress for it's database managing and AWS S3 for hosting files. The app is hosted on heroku.

* ## Main features

  - ### User authentication
    In order to upload a photo an individul needs to make an account and be signed in. The photo will be tied to the user's account can only be modiffied by the user. 
  
     User authentication is done by comparing the user's username and their password hash to what exists in the database. Once a user is signed in they no longer see the `login`/`signup` buttons as they are replaced by the `logout` button. 

     One of the biggest challenges when it came to user auth was getting the current user to be available after refreshing the page as well as changing the buttons when the user was already signed in. This was solved by strapping the user to the window and having conditionals that rendered certain buttons depending on the existance of a user. 

     Another challenge was erasing the errors once the correct information was passed in the `login`/`signup` form and redirecting to the appropriate route. Creating a `deleteErrors` action and calling it when a component rerenders got rid of the error messages. The rederecting problem was solved by routing to the `/photos` page when a user is signed in. 
    
  
  - ### Photo Uploading
    Photo uploading can only be done by a user when they are signed in. File hosting uses AWS in order to offer a larger ammount of photos and uploading capacity. 
    
    One of the challenges was making sure that the uploaded pictures were showing up on the page as well as styling the photos so that it will not go out of bounds. This was accomplished by setting the image source to the link attached to the photo entity.


* ## Futher directions

    While the backend for the comments and the tags is done, the frontend will need revisiting along with the styling and making sure the style fits with every browser.
