const mongoose = require('mongoose');
const Soil = require('../models/Soil-model');
const Production = require('../models/Production-model');
const Tomatoes = require('../models/Tomatoes-model');
const Environment = require('../models/Environment-model');

const soilJSON = require('../data/soil.json');
const tomatoesJSON = require('../data/tomatoes.json');
const productionJSON = require('../data/production.json');
const environmentJSON = require('../data/environment.json');

mongoose.connect(`mongodb://localhost/greenhouse-back-end`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const tomatoesData = tomatoesJSON.tomatoes;
const productionData = productionJSON.production;
const soilData = soilJSON.soil;
const environmentData = environmentJSON.environment;


Promise.all([
    Tomatoes.create(tomatoesData),
    Soil.create(soilData),
    Production.create(productionData),
    Environment.create(environmentData)
])
.then(result => {
  mongoose.connection.close();
})
.catch(err => console.log(`An error occurred while getting datasets from the DB: ${err}`));