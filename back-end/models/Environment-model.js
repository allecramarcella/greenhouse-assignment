const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const environmentSchema = new Schema({
    time: Number,
    sensorId: String,
    data: {
        lightIntensity: Number,
        relativeHumidity: Number,
        temperature: Number,
    },
})

module.exports = mongoose.model("Environment", environmentSchema);