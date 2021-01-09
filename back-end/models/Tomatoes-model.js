const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const tomatoesSchema = new Schema({
    name: String,
    harvestPerYear: Number,
    numberOfPlants: Number, 
    environmentCondition: {
        lightIntensity: {
            low: Number,
            high: Number,
            unit: String,
        },
        relativeHumidity: {
            low: Number,
            high: Number,
            unit: String,
        },
        temperature: {
            daytime: {
                low: Number,
                high: Number,
                unit: String,
            },
            nighttime: {
                low: Number,
                high: Number,
                unit: String,
            }
        }
    },
    soilCondition: {
        moisture: {
            low: Number,
            high: Number,
            unit: String,
        },
        pH: {
            low: Number,
            high: Number,
            unit: String,
        },
    },
    production: {
        type: Schema.Types.ObjectId,
        "ref": "Production",
    },
})

module.exports = mongoose.model("Tomatoes", tomatoesSchema);