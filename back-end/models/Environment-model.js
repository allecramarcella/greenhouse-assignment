const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const environmentSchema = new Schema({
    time: Number,
    sensorId: String,
    data: {
        type: {
            lightIntensity: {
                type: Number,
                alias: 'light intensity',
            },
            relativeHumidity: {
                type: Number,
                alias: 'relative humidity',
            },
            temperature: Number,
        },
    },
})

module.exports = mongoose.model("Environment", environmentSchema);