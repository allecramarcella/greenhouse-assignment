# Greenhouse assignment

### Technologies
- Tech stack: MERN 
I choose the MERN stack to cover the entire devlopment cycle from Front-end to Back-end using JavaScript and because it works well to store, manipulate and represent JSON data at every tier of the application.

### Tools 
- create-react app | to set-up React application
- ironhack_generator | ironhack's NPM package to create express projects

Get dependencies:
```
npm i install
```

### Steps 
- set-up folder structure
- created models (tomatoes, production, environment, soil) to give the database structure;
- imported data in database (MongoDB) with seeds.js file
- created the API by setting up a route (see data.route.js in back-end folder) in which CRUD (Create, Read, Update, Delete) operations can be enabled. Examples CRUD operations:
  1. router.get('/tomatoes', (req, res) => {
        Tomatoes.find()}
  2. router.post('/tomatoes', (rep, res) => {
        const { name, harvestPerYear } = req.body
        Tomatoes.create({name, harvestPerYear}) etc..
  3. router.put('tomatoes/:id', (req, res) => {
        Tomatoes.findByIdAndUpdate(req.params.id, req.body)}
  4. router.delete('tomatoes/:id', (req, res) => {
        Tomatoes.findByIdAndDelete(req.params.id)}
- centralized axios calls into one file (Data.services.js) to create a 'bridge' between back-end and front-end
-
