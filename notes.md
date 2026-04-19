# start create the backend

cd backend
npm init -y
npm install express dotenv jsonwebtoken cookie-parser bcryptjs



# steps:
1. create src folder
2. in src folder create app.js file
3. create server.js file in the root folder
4. in src folder create a folder named db
5. in db folder create a file named db.js
6. create a .env file in the root folder
7. in .env file create a variable named MONGO_URI
8. in src folder create a folder named models
9. in models folder create a file named user.model.js
10. in src folder create a folder named routes
11. in routes folder create a file named auth.routes.js
12. in src folder create a folder named controller
13. in controller folder create a file named auth.controller.js




## Folder for which use

1. src - It is the main folder that will contain all the code
2. db - It is for database connection
3. models - It is for database models (Schema)
4. routes - we create the routes
5. controller - we write the logic of the routes(APIs)
6. app.js file - write all the middlewares and we also create server in this
7. auth.routes.js file - sabhi APIs auth se related hogi 


## $or operator in mongodb
$or is a logical operator in MongoDB used to match documents where at least one condition is true.

## for creating a jwt token we need secret key
this eye is obtained through the visiting webstite jwtsecrets.com

## Jab token create karte hai toh usme 
2 properties honi chahiye 
1 toh user ka data , 2 unique data

## What is Password Hashing?

Password hashing means converting a normal password into a random-looking, unreadable string before saving it in the database.

## hashing have 2 properties
1. we give plaintext and we get always hash (hamesha same input denge same output milega)
2. we can't conver hast into plaintext

## hum hamesha password ko database me hash me convert karke store karke rakhte hai

## for applying HASHING we install package
npm i bcryptjs