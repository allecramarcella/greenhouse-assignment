const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const soilSchema = new Schema({
    time: Number,
    sensorId: String,
    data: {
        moisture: Number,
        pH: Number,
    },
})

module.exports = mongoose.model("Environment", soilSchema);