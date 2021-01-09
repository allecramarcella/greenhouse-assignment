const mongoose = require('mongoose');
const Production = require('../models/Production-model');

mongoose.connect(`mongodb://localhost/greenhouse-back-end`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const productionData = [
    {
        "name": "Sweet cherry tomato",
        "harvest date": 1588317180000,
        "number of plants": 300,
        "weight in ton": 200
    },
    {
        "name": "Big juicy tomato",
        "harvest date": 1588309205000,
        "number of plants": 250,
        "weight in ton": 320
    }
]

Production.create(productionData)
  .then(productionFromDB => {
    console.log(`Created ${productionFromDB.length} production datasets`);
    mongoose.connection.close();
  })
  .catch(err => console.log(`An error occurred while getting production datasets from the DB: ${err}`));
