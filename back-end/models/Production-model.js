const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const productionSchema = new Schema({
    name: String,
    harvestDate: {
        type: Number,
        alias: 'harvest date',
    },
    numberOfPlants: {
        type: Number,
        alias: 'number of plants',
    },
    weightInTon: {
        type: Number,
        alias: 'weight in ton',
    }
})

module.exports = mongoose.model("Production", productionSchema);