# GitPets 2.0

<img width="1436" alt="Screen Shot 2020-09-23 at 3 07 48 PM" src="https://user-images.githubusercontent.com/61030867/94058564-31831600-fdaf-11ea-9eda-1995e0cf9ecb.png">

# Overview:

Why make a pet adoption app? With the current epidemic and state of the world we wanted users to be able to expand their family with ease. 
The current apps are slow and make searching difficult. Are app intends to make the process faster and easier to understand. 

<img width="937" alt="Screen Shot 2020-09-23 at 3 08 10 PM" src="https://user-images.githubusercontent.com/61030867/94058612-3fd13200-fdaf-11ea-9c60-2af7abcb469b.png">

We created our application using React.JS and MongoDB, and integrates the use of HTML, CSS, JavaScript, Node and Express. Upon entering the site, the user is prompted to either login to an existing account, sign up as a new user, or continue to the search as a guest. New users are saved to the Mongo Database. Passwords are encrypted and stored using Passport.js and Bcrypt. Once an account is created/logged into, the user is redirected to a unique profile page. 

The profile page has a navigation bar which you can use to direct you to the search area or forum. Below there is a form to update your user information, and a table to hold and display animals that each user has favorited.

When you enter the search area and search for an animal, the results are displayed in cards. A picture (if available) is displayed along with the name and a brief description. Each card links to the adoption page for that animal. Each animal also has a favorite button. If the user is not logged in (hit continue as guest option on home page), then the icon will change, but it will not be saved to the database. Only if the user is logged in will the animal save to the database. Using Express-session, these animals are saved along with a cookie associating it to a user. When the user is on their own profile page, the animals associated with that user will be displayed in a table on that page. 

When you enter the forum area, all previous posts are displayed to the page. There is also a form to create your own post. All posts are saved to the database. 