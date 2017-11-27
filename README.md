I am using LUSCA for security, if you need any URL to work add an exception for it inside app.js file where I have commented out a line that uses LUSCA
</br>
All keys used in the .env files are fake and need to be replaced with original keys.
Start 'mongod' and 'nodemon app.js' or 'node app' to run this repo
controllers/api has all the API integrations including PayPal Stripe
controllers/user has all the login logout stuff
I am using PUG templates for views
models/User => database schema for the backend