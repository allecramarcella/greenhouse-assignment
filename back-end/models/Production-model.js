const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const productionSchema = new Schema({
    production: {
        name: String,
        harvestDate: Number,
        numberOfPlants: Number, 
        weightInTon: Number
    },
    tomatoes: {
        type: Schema.Types.ObjectId,
        "ref": "Tomatoes",
    },
})

module.exports = mongoose.model("Production", productionSchema);