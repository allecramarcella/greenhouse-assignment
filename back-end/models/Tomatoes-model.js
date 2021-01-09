const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const tomatoesSchema = new Schema({
    name: String,
    harvestPerYear: {
        type: Number,
        alias: 'harvest per year',
    },
    numberOfPlants: {
        type: Number,
        alias: 'number of plants',
    },
    environmentCondition: {
        type: {
            lightIntensity: {
                type: {
                    low: Number,
                    high: Number,
                    unit: String,
                },
                alias: 'light intensity',
            },
            relativeHumidity: {
                type: {
                    low: Number,
                    high: Number,
                    unit: String,
                },
                alias: 'relative humidity',
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
        alias: 'environment condition',
    },
    soilCondition: {
        type: {
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
        alias: 'soil condition',
    },
    production: [{
        type: Schema.Types.ObjectId,
        "ref": "Production",
    }],
})


module.exports = mongoose.model("Tomatoes", tomatoesSchema);