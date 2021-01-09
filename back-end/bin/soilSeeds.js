const mongoose = require('mongoose');
const Soil = require('../models/Soil-model');

mongoose.connect(`mongodb://localhost/greenhouse-back-end`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const soilData = [
    {
        "time": 1586909580000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 6.8
        }
    },
    {
        "time": 1586909940000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 7.2
        }
    },
    {
        "time": 1586910300000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 6.8
        }
    },
    {
        "time": 1586910660000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63
        }
    },
    {
        "time": 1586911020000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 7
        }
    },
    {
        "time": 1586911380000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55,
            "pH": 6.5
        }
    },
    {
        "time": 1586911740000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 58,
            "pH": 6.8
        }
    },
    {
        "time": 1586912100000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55,
            "pH": 7.3
        }
    },
    {
        "time": 1586912460000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 6.8
        }
    },
    {
        "time": 1586912820000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 6.8
        }
    },
    {
        "time": 1586913180000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 6.9
        }
    },
    {
        "time": 1586913540000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 7
        }
    },
    {
        "time": 1586913900000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 7.1
        }
    },
    {
        "time": 1586914260000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 6.7
        }
    },
    {
        "time": 1586914620000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 6.8
        }
    },
    {
        "time": 1586914980000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 6.9
        }
    },
    {
        "time": 1586915340000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 58,
            "pH": 6.9
        }
    },
    {
        "time": 1586915700000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55.4,
            "pH": 7.2
        }
    },
    {
        "time": 1586916060000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 6.9
        }
    },
    {
        "time": 1586916420000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7,
            "pH": 7.3
        }
    },
    {
        "time": 1586916780000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 7.2
        }
    },
    {
        "time": 1586917140000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7,
            "pH": 6.9
        }
    },
    {
        "time": 1586917500000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59,
            "pH": 7.1
        }
    },
    {
        "time": 1586917860000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2
        }
    },
    {
        "time": 1586918220000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 58,
            "pH": 7.2
        }
    },
    {
        "time": 1586918580000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7,
            "pH": 6.9
        }
    },
    {
        "time": 1586918940000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55,
            "pH": 7.1
        }
    },
    {
        "time": 1586919300000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55
        }
    },
    {
        "time": 1586919660000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 7.4
        }
    },
    {
        "time": 1586920020000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 6.5
        }
    },
    {
        "time": 1586920380000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63
        }
    },
    {
        "time": 1586920740000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 6.9
        }
    },
    {
        "time": 1586921100000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 6.8
        }
    },
    {
        "time": 1586921460000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 6.7
        }
    },
    {
        "time": 1586921820000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55.4,
            "pH": 7.2
        }
    },
    {
        "time": 1586922180000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 6.8
        }
    },
    {
        "time": 1586922540000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 58,
            "pH": 6.8
        }
    },
    {
        "time": 1586922900000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7,
            "pH": 6.5
        }
    },
    {
        "time": 1586923260000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 7.2
        }
    },
    {
        "time": 1586923620000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 6.8
        }
    },
    {
        "time": 1586923980000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 6.8
        }
    },
    {
        "time": 1586924340000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 6.8
        }
    },
    {
        "time": 1586924700000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 7.2
        }
    },
    {
        "time": 1586925060000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55,
            "pH": 6.9
        }
    },
    {
        "time": 1586925420000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 6.5
        }
    },
    {
        "time": 1586925780000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55.4,
            "pH": 7.4
        }
    },
    {
        "time": 1586926140000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 6.8
        }
    },
    {
        "time": 1586926500000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 7.2
        }
    },
    {
        "time": 1586926860000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61,
            "pH": 7.4
        }
    },
    {
        "time": 1586927220000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 68,
            "pH": 6.7
        }
    },
    {
        "time": 1586927580000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62.1,
            "pH": 6.5
        }
    },
    {
        "time": 1586927940000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 7.1
        }
    },
    {
        "time": 1586928300000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61,
            "pH": 6.8
        }
    },
    {
        "time": 1586928660000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 64,
            "pH": 7
        }
    },
    {
        "time": 1586929020000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 6.8
        }
    },
    {
        "time": 1586929380000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61,
            "pH": 7.3
        }
    },
    {
        "time": 1586929740000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 6.9
        }
    },
    {
        "time": 1586930100000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 60.8,
            "pH": 6.7
        }
    },
    {
        "time": 1586930460000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61,
            "pH": 6.7
        }
    },
    {
        "time": 1586930820000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 7
        }
    },
    {
        "time": 1586931180000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 64,
            "pH": 6.8
        }
    },
    {
        "time": 1586931540000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62.1,
            "pH": 7.3
        }
    },
    {
        "time": 1586931900000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62.1,
            "pH": 6.8
        }
    },
    {
        "time": 1586932260000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 6.9
        }
    },
    {
        "time": 1586932620000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 64,
            "pH": 6.7
        }
    },
    {
        "time": 1586932980000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 60.8
        }
    },
    {
        "time": 1586933340000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 6.9
        }
    },
    {
        "time": 1586933700000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 64.2,
            "pH": 7.1
        }
    },
    {
        "time": 1586934060000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 66.2,
            "pH": 7
        }
    },
    {
        "time": 1586934420000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 6.5
        }
    },
    {
        "time": 1586934780000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 66,
            "pH": 6.9
        }
    },
    {
        "time": 1586935140000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 60.8,
            "pH": 7.2
        }
    },
    {
        "time": 1586935500000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 68,
            "pH": 6.9
        }
    },
    {
        "time": 1586935860000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61.5,
            "pH": 7.2
        }
    },
    {
        "time": 1586936220000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 66.2
        }
    },
    {
        "time": 1586936580000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 60.8,
            "pH": 7.2
        }
    },
    {
        "time": 1586936940000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61,
            "pH": 7.1
        }
    },
    {
        "time": 1586937300000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 68,
            "pH": 7
        }
    },
    {
        "time": 1586937660000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 66.2,
            "pH": 7.1
        }
    },
    {
        "time": 1586938020000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 60.8,
            "pH": 7.3
        }
    },
    {
        "time": 1586938380000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 6.7
        }
    },
    {
        "time": 1586938740000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 64,
            "pH": 6.9
        }
    },
    {
        "time": 1586939100000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61,
            "pH": 6.8
        }
    },
    {
        "time": 1586939460000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 7.1
        }
    },
    {
        "time": 1586939820000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 66.2,
            "pH": 7.1
        }
    },
    {
        "time": 1586940180000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 68,
            "pH": 7.1
        }
    },
    {
        "time": 1586940540000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61.5,
            "pH": 6.9
        }
    },
    {
        "time": 1586940900000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 6.9
        }
    },
    {
        "time": 1586941260000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62.1
        }
    },
    {
        "time": 1586941620000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62.1,
            "pH": 7.4
        }
    },
    {
        "time": 1586941980000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62.1,
            "pH": 7.2
        }
    },
    {
        "time": 1586942340000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 6.7
        }
    },
    {
        "time": 1586942700000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61,
            "pH": 6.9
        }
    },
    {
        "time": 1586943060000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 7.1
        }
    },
    {
        "time": 1586943420000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 60.8,
            "pH": 6.9
        }
    },
    {
        "time": 1586943780000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62.1,
            "pH": 6.9
        }
    },
    {
        "time": 1586944140000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 6.5
        }
    },
    {
        "time": 1586944500000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 66,
            "pH": 7.1
        }
    },
    {
        "time": 1586944860000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 66.2,
            "pH": 6.8
        }
    },
    {
        "time": 1586945220000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 7
        }
    },
    {
        "time": 1586945580000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 64,
            "pH": 7.2
        }
    },
    {
        "time": 1586945940000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 64.2,
            "pH": 6.8
        }
    },
    {
        "time": 1586946300000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 7.1
        }
    },
    {
        "time": 1586946660000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 60.8,
            "pH": 7.4
        }
    },
    {
        "time": 1586947020000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61.5,
            "pH": 7.1
        }
    },
    {
        "time": 1586947380000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 6.9
        }
    },
    {
        "time": 1586947740000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62.1,
            "pH": 7
        }
    },
    {
        "time": 1586948100000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 6.7
        }
    },
    {
        "time": 1586948460000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59,
            "pH": 6.8
        }
    },
    {
        "time": 1586948820000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 7.1
        }
    },
    {
        "time": 1586949180000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7,
            "pH": 7.4
        }
    },
    {
        "time": 1586949540000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 6.5
        }
    },
    {
        "time": 1586949900000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 7.4
        }
    },
    {
        "time": 1586950260000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56
        }
    },
    {
        "time": 1586950620000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 7.3
        }
    },
    {
        "time": 1586950980000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55,
            "pH": 7.1
        }
    },
    {
        "time": 1586951340000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 7.4
        }
    },
    {
        "time": 1586951700000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 7.1
        }
    },
    {
        "time": 1586952060000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 6.8
        }
    },
    {
        "time": 1586952420000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 6.9
        }
    },
    {
        "time": 1586952780000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55,
            "pH": 6.5
        }
    },
    {
        "time": 1586953140000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55,
            "pH": 7.2
        }
    },
    {
        "time": 1586953500000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59,
            "pH": 7
        }
    },
    {
        "time": 1586953860000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 7.2
        }
    },
    {
        "time": 1586954220000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55.4
        }
    },
    {
        "time": 1586954580000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 6.9
        }
    },
    {
        "time": 1586954940000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7,
            "pH": 7.1
        }
    },
    {
        "time": 1586955300000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59,
            "pH": 7.4
        }
    },
    {
        "time": 1586955660000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59
        }
    },
    {
        "time": 1586956020000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6
        }
    },
    {
        "time": 1586956380000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 7.4
        }
    },
    {
        "time": 1586956740000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55,
            "pH": 6.7
        }
    },
    {
        "time": 1586957100000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 58,
            "pH": 6.7
        }
    },
    {
        "time": 1586957460000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 7.1
        }
    },
    {
        "time": 1586957820000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59,
            "pH": 7.2
        }
    },
    {
        "time": 1586958180000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 7.2
        }
    },
    {
        "time": 1586958540000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 7.1
        }
    },
    {
        "time": 1586958900000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 58,
            "pH": 7
        }
    },
    {
        "time": 1586959260000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 7.1
        }
    },
    {
        "time": 1586959620000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 7.1
        }
    },
    {
        "time": 1586959980000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 58,
            "pH": 7
        }
    },
    {
        "time": 1586960340000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 6.7
        }
    },
    {
        "time": 1586960700000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 7.2
        }
    },
    {
        "time": 1586961060000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55,
            "pH": 6.7
        }
    },
    {
        "time": 1586961420000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 7.4
        }
    },
    {
        "time": 1586961780000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 7.1
        }
    },
    {
        "time": 1586962140000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 7.3
        }
    },
    {
        "time": 1586962500000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 6.8
        }
    },
    {
        "time": 1586962860000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 6.9
        }
    },
    {
        "time": 1586963220000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3
        }
    },
    {
        "time": 1586963580000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 6.7
        }
    },
    {
        "time": 1586963940000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 7
        }
    },
    {
        "time": 1586964300000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 7.1
        }
    },
    {
        "time": 1586964660000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 6.9
        }
    },
    {
        "time": 1586965020000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55.4,
            "pH": 7.1
        }
    },
    {
        "time": 1586965380000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 6.8
        }
    },
    {
        "time": 1586965740000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 6.8
        }
    },
    {
        "time": 1586966100000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7,
            "pH": 6.8
        }
    },
    {
        "time": 1586966460000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 7
        }
    },
    {
        "time": 1586966820000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 6.9
        }
    },
    {
        "time": 1586967180000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 6.5
        }
    },
    {
        "time": 1586967540000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 7.4
        }
    },
    {
        "time": 1586967900000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 7.4
        }
    },
    {
        "time": 1586968260000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 7.1
        }
    },
    {
        "time": 1586968620000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 58,
            "pH": 6.8
        }
    },
    {
        "time": 1586968980000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 58,
            "pH": 7
        }
    },
    {
        "time": 1586969340000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 6.9
        }
    },
    {
        "time": 1586969700000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 6.9
        }
    },
    {
        "time": 1586970060000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59,
            "pH": 7.2
        }
    },
    {
        "time": 1586970420000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 6.8
        }
    },
    {
        "time": 1586970780000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55,
            "pH": 7.4
        }
    },
    {
        "time": 1586971140000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55.4,
            "pH": 6.9
        }
    },
    {
        "time": 1586971500000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55,
            "pH": 6.8
        }
    },
    {
        "time": 1586971860000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 7.4
        }
    },
    {
        "time": 1586972220000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 7
        }
    },
    {
        "time": 1586972580000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59,
            "pH": 6.5
        }
    },
    {
        "time": 1586972940000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 7.1
        }
    },
    {
        "time": 1586973300000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 6.9
        }
    },
    {
        "time": 1586973660000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6
        }
    },
    {
        "time": 1586974020000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 7.1
        }
    },
    {
        "time": 1586974380000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 7.1
        }
    },
    {
        "time": 1586974740000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55,
            "pH": 6.8
        }
    },
    {
        "time": 1586975100000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55.4,
            "pH": 6.8
        }
    },
    {
        "time": 1586975460000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55,
            "pH": 7.3
        }
    },
    {
        "time": 1586975820000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59,
            "pH": 7.2
        }
    },
    {
        "time": 1586976180000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 58,
            "pH": 7.1
        }
    },
    {
        "time": 1586976540000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59,
            "pH": 6.9
        }
    },
    {
        "time": 1586976900000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 6.9
        }
    },
    {
        "time": 1586977260000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 6.9
        }
    },
    {
        "time": 1586977620000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55,
            "pH": 7
        }
    },
    {
        "time": 1586977980000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 6.9
        }
    },
    {
        "time": 1586978340000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55.4,
            "pH": 7.1
        }
    },
    {
        "time": 1586978700000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3
        }
    },
    {
        "time": 1586979060000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 6.9
        }
    },
    {
        "time": 1586979420000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 6.8
        }
    },
    {
        "time": 1586979780000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 6.5
        }
    },
    {
        "time": 1586980140000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 7
        }
    },
    {
        "time": 1586980500000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 58,
            "pH": 7.2
        }
    },
    {
        "time": 1586980860000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7,
            "pH": 7.2
        }
    },
    {
        "time": 1586981220000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 6.9
        }
    },
    {
        "time": 1586981580000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55,
            "pH": 7.3
        }
    },
    {
        "time": 1586981940000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 7.2
        }
    },
    {
        "time": 1586982300000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 6.9
        }
    },
    {
        "time": 1586982660000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 7.1
        }
    },
    {
        "time": 1586983020000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 6.5
        }
    },
    {
        "time": 1586983380000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 6.5
        }
    },
    {
        "time": 1586983740000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 6.5
        }
    },
    {
        "time": 1586984100000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 6.8
        }
    },
    {
        "time": 1586984460000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2
        }
    },
    {
        "time": 1586984820000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62
        }
    },
    {
        "time": 1586985180000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 7.3
        }
    },
    {
        "time": 1586985540000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 6.9
        }
    },
    {
        "time": 1586985900000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 7.3
        }
    },
    {
        "time": 1586986260000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 6.7
        }
    },
    {
        "time": 1586986620000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55,
            "pH": 6.7
        }
    },
    {
        "time": 1586986980000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 6.9
        }
    },
    {
        "time": 1586987340000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 7.1
        }
    },
    {
        "time": 1586987700000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 58,
            "pH": 6.5
        }
    },
    {
        "time": 1586988060000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59,
            "pH": 6.8
        }
    },
    {
        "time": 1586988420000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 6.7
        }
    },
    {
        "time": 1586988780000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 7
        }
    },
    {
        "time": 1586989140000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 7.3
        }
    },
    {
        "time": 1586989500000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 58,
            "pH": 7.2
        }
    },
    {
        "time": 1586989860000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 6.8
        }
    },
    {
        "time": 1586990220000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59,
            "pH": 6.5
        }
    },
    {
        "time": 1586990580000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 7.4
        }
    },
    {
        "time": 1586990940000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 6.9
        }
    },
    {
        "time": 1586991300000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 7.1
        }
    },
    {
        "time": 1586991660000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 7.1
        }
    },
    {
        "time": 1586992020000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 7.1
        }
    },
    {
        "time": 1586992380000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 7.2
        }
    },
    {
        "time": 1586992740000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55,
            "pH": 6.9
        }
    },
    {
        "time": 1586993100000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 7
        }
    },
    {
        "time": 1586993460000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 58,
            "pH": 7.4
        }
    },
    {
        "time": 1586993820000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 7.2
        }
    },
    {
        "time": 1586994180000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 6.9
        }
    },
    {
        "time": 1586994540000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 7.2
        }
    },
    {
        "time": 1586994900000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 7.2
        }
    },
    {
        "time": 1586995260000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 7.2
        }
    },
    {
        "time": 1586995620000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59,
            "pH": 7.1
        }
    },
    {
        "time": 1586995980000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59,
            "pH": 7.3
        }
    },
    {
        "time": 1586996340000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 58,
            "pH": 7.2
        }
    },
    {
        "time": 1586996700000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55.4,
            "pH": 7.1
        }
    },
    {
        "time": 1586997060000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 7.2
        }
    },
    {
        "time": 1586997420000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 7.2
        }
    },
    {
        "time": 1586997780000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55,
            "pH": 7.1
        }
    },
    {
        "time": 1586998140000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 6.5
        }
    },
    {
        "time": 1586998500000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7,
            "pH": 6.8
        }
    },
    {
        "time": 1586998860000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7,
            "pH": 7.1
        }
    },
    {
        "time": 1586999220000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 6.5
        }
    },
    {
        "time": 1586999580000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 7.2
        }
    },
    {
        "time": 1586999940000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 7.2
        }
    },
    {
        "time": 1587000300000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3
        }
    },
    {
        "time": 1587000660000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55.4,
            "pH": 6.7
        }
    },
    {
        "time": 1587001020000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2
        }
    },
    {
        "time": 1587001380000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 58,
            "pH": 7.1
        }
    },
    {
        "time": 1587001740000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 6.7
        }
    },
    {
        "time": 1587002100000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 7.2
        }
    },
    {
        "time": 1587002460000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 7.1
        }
    },
    {
        "time": 1587002820000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 7.2
        }
    },
    {
        "time": 1587003180000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 7
        }
    },
    {
        "time": 1587003540000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 6.9
        }
    },
    {
        "time": 1587003900000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 7.1
        }
    },
    {
        "time": 1587004260000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 7.3
        }
    },
    {
        "time": 1587004620000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 7.2
        }
    },
    {
        "time": 1587004980000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54
        }
    },
    {
        "time": 1587005340000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 6.5
        }
    },
    {
        "time": 1587005700000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 7.1
        }
    },
    {
        "time": 1587006060000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63
        }
    },
    {
        "time": 1587006420000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59,
            "pH": 6.8
        }
    },
    {
        "time": 1587006780000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55
        }
    },
    {
        "time": 1587007140000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 7.3
        }
    },
    {
        "time": 1587007500000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 7.2
        }
    },
    {
        "time": 1587007860000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 7.4
        }
    },
    {
        "time": 1587008220000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 7.1
        }
    },
    {
        "time": 1587008580000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 6.5
        }
    },
    {
        "time": 1587008940000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 7.4
        }
    },
    {
        "time": 1587009300000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 7.3
        }
    },
    {
        "time": 1587009660000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55.4,
            "pH": 6.7
        }
    },
    {
        "time": 1587010020000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55.4
        }
    },
    {
        "time": 1587010380000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7,
            "pH": 7.2
        }
    },
    {
        "time": 1587010740000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 6.8
        }
    },
    {
        "time": 1587011100000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 58,
            "pH": 7.1
        }
    },
    {
        "time": 1587011460000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 7.4
        }
    },
    {
        "time": 1587011820000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6
        }
    },
    {
        "time": 1587012180000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 6.9
        }
    },
    {
        "time": 1587012540000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 7.1
        }
    },
    {
        "time": 1587012900000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59,
            "pH": 7.1
        }
    },
    {
        "time": 1587013260000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 60.8,
            "pH": 6.5
        }
    },
    {
        "time": 1587013620000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 64.2,
            "pH": 7
        }
    },
    {
        "time": 1587013980000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 7
        }
    },
    {
        "time": 1587014340000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62.1,
            "pH": 7.4
        }
    },
    {
        "time": 1587014700000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61,
            "pH": 6.7
        }
    },
    {
        "time": 1587015060000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 68,
            "pH": 7.2
        }
    },
    {
        "time": 1587015420000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 64,
            "pH": 6.8
        }
    },
    {
        "time": 1587015780000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 68,
            "pH": 7.4
        }
    },
    {
        "time": 1587016140000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61.5
        }
    },
    {
        "time": 1587016500000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61,
            "pH": 7
        }
    },
    {
        "time": 1587016860000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 66.2,
            "pH": 7.4
        }
    },
    {
        "time": 1587017220000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61,
            "pH": 6.8
        }
    },
    {
        "time": 1587017580000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62.1,
            "pH": 7.4
        }
    },
    {
        "time": 1587017940000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 66.2,
            "pH": 7
        }
    },
    {
        "time": 1587018300000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61,
            "pH": 7.4
        }
    },
    {
        "time": 1587018660000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 6.8
        }
    },
    {
        "time": 1587019020000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 7.3
        }
    },
    {
        "time": 1587019380000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61.5,
            "pH": 7.1
        }
    },
    {
        "time": 1587019740000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61,
            "pH": 6.5
        }
    },
    {
        "time": 1587020100000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61,
            "pH": 7.1
        }
    },
    {
        "time": 1587020460000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 66,
            "pH": 6.8
        }
    },
    {
        "time": 1587020820000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 64,
            "pH": 6.5
        }
    },
    {
        "time": 1587021180000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 64,
            "pH": 6.8
        }
    },
    {
        "time": 1587021540000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 64,
            "pH": 6.5
        }
    },
    {
        "time": 1587021900000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 60.8
        }
    },
    {
        "time": 1587022260000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 66,
            "pH": 6.9
        }
    },
    {
        "time": 1587022620000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 6.9
        }
    },
    {
        "time": 1587022980000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62.1,
            "pH": 6.5
        }
    },
    {
        "time": 1587023340000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 64.2
        }
    },
    {
        "time": 1587023700000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 64.2,
            "pH": 7.3
        }
    },
    {
        "time": 1587024060000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 7.1
        }
    },
    {
        "time": 1587024420000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61,
            "pH": 7.1
        }
    },
    {
        "time": 1587024780000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 60.8,
            "pH": 6.8
        }
    },
    {
        "time": 1587025140000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 6.9
        }
    },
    {
        "time": 1587025500000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 60.8,
            "pH": 7.3
        }
    },
    {
        "time": 1587025860000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 66,
            "pH": 7.1
        }
    },
    {
        "time": 1587026220000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61,
            "pH": 6.7
        }
    },
    {
        "time": 1587026580000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 6.9
        }
    },
    {
        "time": 1587026940000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 66.2,
            "pH": 7.1
        }
    },
    {
        "time": 1587027300000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 6.7
        }
    },
    {
        "time": 1587027660000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 68,
            "pH": 6.8
        }
    },
    {
        "time": 1587028020000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62.1,
            "pH": 6.8
        }
    },
    {
        "time": 1587028380000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 64,
            "pH": 7.1
        }
    },
    {
        "time": 1587028740000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 7.1
        }
    },
    {
        "time": 1587029100000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61,
            "pH": 6.9
        }
    },
    {
        "time": 1587029460000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 60.8,
            "pH": 7.4
        }
    },
    {
        "time": 1587029820000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 66,
            "pH": 6.9
        }
    },
    {
        "time": 1587030180000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 64,
            "pH": 7.2
        }
    },
    {
        "time": 1587030540000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 64.2,
            "pH": 6.5
        }
    },
    {
        "time": 1587030900000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 68,
            "pH": 7
        }
    },
    {
        "time": 1587031260000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 60.8,
            "pH": 7
        }
    },
    {
        "time": 1587031620000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 7.2
        }
    },
    {
        "time": 1587031980000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 7.2
        }
    },
    {
        "time": 1587032340000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 64
        }
    },
    {
        "time": 1587032700000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 64,
            "pH": 7.2
        }
    },
    {
        "time": 1587033060000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61.5,
            "pH": 7
        }
    },
    {
        "time": 1587033420000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61,
            "pH": 7.3
        }
    },
    {
        "time": 1587033780000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 64.2,
            "pH": 6.9
        }
    },
    {
        "time": 1587034140000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 68,
            "pH": 7.1
        }
    },
    {
        "time": 1587034500000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 68,
            "pH": 7.2
        }
    },
    {
        "time": 1587034860000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59,
            "pH": 7.1
        }
    },
    {
        "time": 1587035220000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55.4,
            "pH": 6.7
        }
    },
    {
        "time": 1587035580000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 6.9
        }
    },
    {
        "time": 1587035940000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 7
        }
    },
    {
        "time": 1587036300000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 6.8
        }
    },
    {
        "time": 1587036660000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 6.5
        }
    },
    {
        "time": 1587037020000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 6.5
        }
    },
    {
        "time": 1587037380000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 6.8
        }
    },
    {
        "time": 1587037740000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 7.4
        }
    },
    {
        "time": 1587038100000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 6.9
        }
    },
    {
        "time": 1587038460000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 7
        }
    },
    {
        "time": 1587038820000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 6.9
        }
    },
    {
        "time": 1587039180000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 7.1
        }
    },
    {
        "time": 1587039540000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55,
            "pH": 7.3
        }
    },
    {
        "time": 1587039900000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55,
            "pH": 6.8
        }
    },
    {
        "time": 1587040260000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 6.8
        }
    },
    {
        "time": 1587040620000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7,
            "pH": 6.5
        }
    },
    {
        "time": 1587040980000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 6.5
        }
    },
    {
        "time": 1587041340000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 6.8
        }
    },
    {
        "time": 1587041700000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 58,
            "pH": 6.9
        }
    },
    {
        "time": 1587042060000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 6.7
        }
    },
    {
        "time": 1587042420000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 6.8
        }
    },
    {
        "time": 1587042780000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 6.7
        }
    },
    {
        "time": 1587043140000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 7.1
        }
    },
    {
        "time": 1587043500000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 7.3
        }
    },
    {
        "time": 1587043860000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 6.9
        }
    },
    {
        "time": 1587044220000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 7.3
        }
    },
    {
        "time": 1587044580000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 7.4
        }
    },
    {
        "time": 1587044940000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7,
            "pH": 6.9
        }
    },
    {
        "time": 1587045300000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 7.4
        }
    },
    {
        "time": 1587045660000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55.4,
            "pH": 6.9
        }
    },
    {
        "time": 1587046020000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 6.9
        }
    },
    {
        "time": 1587046380000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55.4,
            "pH": 7.1
        }
    },
    {
        "time": 1587046740000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 6.5
        }
    },
    {
        "time": 1587047100000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 58,
            "pH": 6.9
        }
    },
    {
        "time": 1587047460000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 6.8
        }
    },
    {
        "time": 1587047820000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 7.3
        }
    },
    {
        "time": 1587048180000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 6.9
        }
    },
    {
        "time": 1587048540000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 7.3
        }
    },
    {
        "time": 1587048900000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 7.1
        }
    },
    {
        "time": 1587049260000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 7.2
        }
    },
    {
        "time": 1587049620000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 6.9
        }
    },
    {
        "time": 1587049980000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 7.1
        }
    },
    {
        "time": 1587050340000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7,
            "pH": 6.8
        }
    },
    {
        "time": 1587050700000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 6.7
        }
    },
    {
        "time": 1587051060000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 7.1
        }
    },
    {
        "time": 1587051420000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 7.2
        }
    },
    {
        "time": 1587051780000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55.4,
            "pH": 6.9
        }
    },
    {
        "time": 1587052140000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59,
            "pH": 7.2
        }
    },
    {
        "time": 1587052500000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 7
        }
    },
    {
        "time": 1587052860000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 6.5
        }
    },
    {
        "time": 1587053220000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 6.9
        }
    },
    {
        "time": 1587053580000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 6.5
        }
    },
    {
        "time": 1587053940000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54
        }
    },
    {
        "time": 1587054300000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7,
            "pH": 7.4
        }
    },
    {
        "time": 1587054660000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 6.7
        }
    },
    {
        "time": 1587055020000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59,
            "pH": 7.2
        }
    },
    {
        "time": 1587055380000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 6.5
        }
    },
    {
        "time": 1587055740000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 7.1
        }
    },
    {
        "time": 1587056100000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59,
            "pH": 6.7
        }
    },
    {
        "time": 1587056460000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 6.5
        }
    },
    {
        "time": 1587056820000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 6.9
        }
    },
    {
        "time": 1587057180000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54
        }
    },
    {
        "time": 1587057540000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 7.1
        }
    },
    {
        "time": 1587057900000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55,
            "pH": 7
        }
    },
    {
        "time": 1587058260000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 7.4
        }
    },
    {
        "time": 1587058620000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 7.1
        }
    },
    {
        "time": 1587058980000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 58,
            "pH": 6.9
        }
    },
    {
        "time": 1587059340000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 7.2
        }
    },
    {
        "time": 1587059700000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 7.1
        }
    },
    {
        "time": 1587060060000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 6.9
        }
    },
    {
        "time": 1587060420000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7,
            "pH": 6.8
        }
    },
    {
        "time": 1587060780000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 6.9
        }
    },
    {
        "time": 1587061140000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 7.4
        }
    },
    {
        "time": 1587061500000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 6.8
        }
    },
    {
        "time": 1587061860000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55.4,
            "pH": 6.5
        }
    },
    {
        "time": 1587062220000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 7
        }
    },
    {
        "time": 1587062580000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 7.2
        }
    },
    {
        "time": 1587062940000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 6.9
        }
    },
    {
        "time": 1587063300000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 7.2
        }
    },
    {
        "time": 1587063660000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 58,
            "pH": 7.4
        }
    },
    {
        "time": 1587064020000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 7.4
        }
    },
    {
        "time": 1587064380000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55.4,
            "pH": 6.7
        }
    },
    {
        "time": 1587064740000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 6.8
        }
    },
    {
        "time": 1587065100000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 6.9
        }
    },
    {
        "time": 1587065460000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 7.3
        }
    },
    {
        "time": 1587065820000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59,
            "pH": 7.1
        }
    },
    {
        "time": 1587066180000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 7.1
        }
    },
    {
        "time": 1587066540000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 7.1
        }
    },
    {
        "time": 1587066900000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 6.8
        }
    },
    {
        "time": 1587067260000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 7.2
        }
    },
    {
        "time": 1587067620000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 7.2
        }
    },
    {
        "time": 1587067980000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 7.2
        }
    },
    {
        "time": 1587068340000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 58,
            "pH": 6.9
        }
    },
    {
        "time": 1587068700000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 6.5
        }
    },
    {
        "time": 1587069060000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 7.2
        }
    },
    {
        "time": 1587069420000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55,
            "pH": 7.2
        }
    },
    {
        "time": 1587069780000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 7.3
        }
    },
    {
        "time": 1587070140000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 6.8
        }
    },
    {
        "time": 1587070500000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 6.8
        }
    },
    {
        "time": 1587070860000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7,
            "pH": 7.2
        }
    },
    {
        "time": 1587071220000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 6.9
        }
    },
    {
        "time": 1587071580000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 7.3
        }
    },
    {
        "time": 1587071940000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7,
            "pH": 6.8
        }
    },
    {
        "time": 1587072300000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59,
            "pH": 6.7
        }
    },
    {
        "time": 1587072660000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 7.2
        }
    },
    {
        "time": 1587073020000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57
        }
    },
    {
        "time": 1587073380000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 6.5
        }
    },
    {
        "time": 1587073740000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 58,
            "pH": 6.5
        }
    },
    {
        "time": 1587074100000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7,
            "pH": 7.2
        }
    },
    {
        "time": 1587074460000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 7
        }
    },
    {
        "time": 1587074820000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55,
            "pH": 7.2
        }
    },
    {
        "time": 1587075180000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 6.8
        }
    },
    {
        "time": 1587075540000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55,
            "pH": 7.2
        }
    },
    {
        "time": 1587075900000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 6.8
        }
    },
    {
        "time": 1587076260000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 6.8
        }
    },
    {
        "time": 1587076620000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7
        }
    },
    {
        "time": 1587076980000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 6.8
        }
    },
    {
        "time": 1587077340000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59
        }
    },
    {
        "time": 1587077700000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 7.1
        }
    },
    {
        "time": 1587078060000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 7.2
        }
    },
    {
        "time": 1587078420000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 6.7
        }
    },
    {
        "time": 1587078780000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 6.5
        }
    },
    {
        "time": 1587079140000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 7.2
        }
    },
    {
        "time": 1587079500000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 6.8
        }
    },
    {
        "time": 1587079860000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 6.9
        }
    },
    {
        "time": 1587080220000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56
        }
    },
    {
        "time": 1587080580000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55
        }
    },
    {
        "time": 1587080940000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7,
            "pH": 7.3
        }
    },
    {
        "time": 1587081300000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 58,
            "pH": 7.2
        }
    },
    {
        "time": 1587081660000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 7.2
        }
    },
    {
        "time": 1587082020000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 6.9
        }
    },
    {
        "time": 1587082380000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55,
            "pH": 7.1
        }
    },
    {
        "time": 1587082740000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55,
            "pH": 6.9
        }
    },
    {
        "time": 1587083100000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 7
        }
    },
    {
        "time": 1587083460000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 7.2
        }
    },
    {
        "time": 1587083820000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 6.5
        }
    },
    {
        "time": 1587084180000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7,
            "pH": 7.2
        }
    },
    {
        "time": 1587084540000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 7.4
        }
    },
    {
        "time": 1587084900000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 7.1
        }
    },
    {
        "time": 1587085260000,
        "sensorId": "uuid0100",
        "data": {}
    },
    {
        "time": 1587085620000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 6.7
        }
    },
    {
        "time": 1587085980000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55.4,
            "pH": 7.3
        }
    },
    {
        "time": 1587086340000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 7
        }
    },
    {
        "time": 1587086700000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 6.8
        }
    },
    {
        "time": 1587087060000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55,
            "pH": 6.5
        }
    },
    {
        "time": 1587087420000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 58,
            "pH": 7.1
        }
    },
    {
        "time": 1587087780000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59,
            "pH": 6.8
        }
    },
    {
        "time": 1587088140000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 7.2
        }
    },
    {
        "time": 1587088500000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 6.5
        }
    },
    {
        "time": 1587088860000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 6.7
        }
    },
    {
        "time": 1587089220000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 7.3
        }
    },
    {
        "time": 1587089580000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7,
            "pH": 6.5
        }
    },
    {
        "time": 1587089940000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 6.5
        }
    },
    {
        "time": 1587090300000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 6.8
        }
    },
    {
        "time": 1587090660000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55,
            "pH": 7.1
        }
    },
    {
        "time": 1587091020000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 6.8
        }
    },
    {
        "time": 1587091380000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55,
            "pH": 6.5
        }
    },
    {
        "time": 1587091740000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7
        }
    },
    {
        "time": 1587092100000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 6.8
        }
    },
    {
        "time": 1587092460000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55,
            "pH": 7.1
        }
    },
    {
        "time": 1587092820000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 7.2
        }
    },
    {
        "time": 1587093180000,
        "sensorId": "uuid0100",
        "data": {}
    },
    {
        "time": 1587093540000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7,
            "pH": 7.1
        }
    },
    {
        "time": 1587093900000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 6.7
        }
    },
    {
        "time": 1587094260000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 7
        }
    },
    {
        "time": 1587094620000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 7.2
        }
    },
    {
        "time": 1587094980000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 6.5
        }
    },
    {
        "time": 1587095340000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 6.9
        }
    },
    {
        "time": 1587095700000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55,
            "pH": 7.1
        }
    },
    {
        "time": 1587096060000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 6.7
        }
    },
    {
        "time": 1587096420000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 7.3
        }
    },
    {
        "time": 1587096780000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7,
            "pH": 7
        }
    },
    {
        "time": 1587097140000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 6.5
        }
    },
    {
        "time": 1587097500000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55,
            "pH": 7.1
        }
    },
    {
        "time": 1587097860000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 7
        }
    },
    {
        "time": 1587098220000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 7
        }
    },
    {
        "time": 1587098580000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 6.8
        }
    },
    {
        "time": 1587098940000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55.4,
            "pH": 6.8
        }
    },
    {
        "time": 1587099300000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7,
            "pH": 6.8
        }
    },
    {
        "time": 1587099660000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 60.8,
            "pH": 7.2
        }
    },
    {
        "time": 1587100020000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 6.5
        }
    },
    {
        "time": 1587100380000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61,
            "pH": 6.7
        }
    },
    {
        "time": 1587100740000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61.5,
            "pH": 6.7
        }
    },
    {
        "time": 1587101100000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 6.8
        }
    },
    {
        "time": 1587101460000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 68,
            "pH": 7.2
        }
    },
    {
        "time": 1587101820000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 7.3
        }
    },
    {
        "time": 1587102180000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61,
            "pH": 6.7
        }
    },
    {
        "time": 1587102540000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61,
            "pH": 7.2
        }
    },
    {
        "time": 1587102900000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 64.2,
            "pH": 6.5
        }
    },
    {
        "time": 1587103260000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 64.2
        }
    },
    {
        "time": 1587103620000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61.5,
            "pH": 6.5
        }
    },
    {
        "time": 1587103980000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 60.8,
            "pH": 6.5
        }
    },
    {
        "time": 1587104340000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 6.8
        }
    },
    {
        "time": 1587104700000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 68,
            "pH": 7.2
        }
    },
    {
        "time": 1587105060000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 7.4
        }
    },
    {
        "time": 1587105420000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 7.1
        }
    },
    {
        "time": 1587105780000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 7.3
        }
    },
    {
        "time": 1587106140000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 64.2,
            "pH": 7.2
        }
    },
    {
        "time": 1587106500000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61,
            "pH": 7.1
        }
    },
    {
        "time": 1587106860000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 66.2,
            "pH": 6.9
        }
    },
    {
        "time": 1587107220000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 64,
            "pH": 7.1
        }
    },
    {
        "time": 1587107580000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61.5,
            "pH": 6.9
        }
    },
    {
        "time": 1587107940000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 64.2,
            "pH": 6.5
        }
    },
    {
        "time": 1587108300000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 60.8,
            "pH": 7
        }
    },
    {
        "time": 1587108660000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61,
            "pH": 6.8
        }
    },
    {
        "time": 1587109020000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 6.8
        }
    },
    {
        "time": 1587109380000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 7.4
        }
    },
    {
        "time": 1587109740000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 6.8
        }
    },
    {
        "time": 1587110100000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 66.2,
            "pH": 6.8
        }
    },
    {
        "time": 1587110460000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 66,
            "pH": 7.3
        }
    },
    {
        "time": 1587110820000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 6.7
        }
    },
    {
        "time": 1587111180000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 68,
            "pH": 7.3
        }
    },
    {
        "time": 1587111540000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 66.2,
            "pH": 7.1
        }
    },
    {
        "time": 1587111900000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 6.7
        }
    },
    {
        "time": 1587112260000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 60.8,
            "pH": 7.3
        }
    },
    {
        "time": 1587112620000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 66.2,
            "pH": 6.9
        }
    },
    {
        "time": 1587112980000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 60.8,
            "pH": 6.8
        }
    },
    {
        "time": 1587113340000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 6.8
        }
    },
    {
        "time": 1587113700000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61,
            "pH": 7.1
        }
    },
    {
        "time": 1587114060000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61
        }
    },
    {
        "time": 1587114420000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 64.2,
            "pH": 7.3
        }
    },
    {
        "time": 1587114780000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 64,
            "pH": 6.8
        }
    },
    {
        "time": 1587115140000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 64,
            "pH": 7.1
        }
    },
    {
        "time": 1587115500000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 64.2
        }
    },
    {
        "time": 1587115860000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61.5,
            "pH": 7.1
        }
    },
    {
        "time": 1587116220000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61,
            "pH": 7
        }
    },
    {
        "time": 1587116580000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 64
        }
    },
    {
        "time": 1587116940000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 68,
            "pH": 6.9
        }
    },
    {
        "time": 1587117300000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 7.3
        }
    },
    {
        "time": 1587117660000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61,
            "pH": 6.8
        }
    },
    {
        "time": 1587118020000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 64.2,
            "pH": 6.5
        }
    },
    {
        "time": 1587118380000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 7.4
        }
    },
    {
        "time": 1587118740000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 64,
            "pH": 6.5
        }
    },
    {
        "time": 1587119100000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 64,
            "pH": 6.9
        }
    },
    {
        "time": 1587119460000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 66,
            "pH": 7.1
        }
    },
    {
        "time": 1587119820000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61,
            "pH": 6.8
        }
    },
    {
        "time": 1587120180000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61
        }
    },
    {
        "time": 1587120540000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 7.3
        }
    },
    {
        "time": 1587120900000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 7.4
        }
    },
    {
        "time": 1587121260000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7,
            "pH": 6.8
        }
    },
    {
        "time": 1587121620000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 7.1
        }
    },
    {
        "time": 1587121980000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7,
            "pH": 6.5
        }
    },
    {
        "time": 1587122340000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7,
            "pH": 7.2
        }
    },
    {
        "time": 1587122700000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 6.7
        }
    },
    {
        "time": 1587123060000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 6.7
        }
    },
    {
        "time": 1587123420000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59,
            "pH": 6.8
        }
    },
    {
        "time": 1587123780000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 7.1
        }
    },
    {
        "time": 1587124140000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 6.7
        }
    },
    {
        "time": 1587124500000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55.4,
            "pH": 6.8
        }
    },
    {
        "time": 1587124860000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59
        }
    },
    {
        "time": 1587125220000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55.4,
            "pH": 7.4
        }
    },
    {
        "time": 1587125580000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 6.8
        }
    },
    {
        "time": 1587125940000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55.4,
            "pH": 6.5
        }
    },
    {
        "time": 1587126300000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 6.9
        }
    },
    {
        "time": 1587126660000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 6.5
        }
    },
    {
        "time": 1587127020000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 7.4
        }
    },
    {
        "time": 1587127380000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 7.2
        }
    },
    {
        "time": 1587127740000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 6.8
        }
    },
    {
        "time": 1587128100000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7,
            "pH": 7
        }
    },
    {
        "time": 1587128460000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6
        }
    },
    {
        "time": 1587128820000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 7.1
        }
    },
    {
        "time": 1587129180000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 6.8
        }
    },
    {
        "time": 1587129540000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 7.3
        }
    },
    {
        "time": 1587129900000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 6.9
        }
    },
    {
        "time": 1587130260000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 7.1
        }
    },
    {
        "time": 1587130620000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 58,
            "pH": 7.3
        }
    },
    {
        "time": 1587130980000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 6.8
        }
    },
    {
        "time": 1587131340000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 58,
            "pH": 7.4
        }
    },
    {
        "time": 1587131700000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55,
        }
    },
    {
        "time": 1587132060000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 6.8
        }
    },
    {
        "time": 1587132420000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7,
            "pH": 7.1
        }
    },
    {
        "time": 1587132780000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 7
        }
    },
    {
        "time": 1587133140000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59,
            "pH": 6.8
        }
    },
    {
        "time": 1587133500000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7,
            "pH": 7
        }
    },
    {
        "time": 1587133860000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59
        }
    },
    {
        "time": 1587134220000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 7.4
        }
    },
    {
        "time": 1587134580000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 7.2
        }
    },
    {
        "time": 1587134940000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 6.5
        }
    },
    {
        "time": 1587135300000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 7.4
        }
    },
    {
        "time": 1587135660000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 6.9
        }
    },
    {
        "time": 1587136020000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63
        }
    },
    {
        "time": 1587136380000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 7.1
        }
    },
    {
        "time": 1587136740000,
        "sensorId": "uuid0100",
        "data": {}
    },
    {
        "time": 1587137100000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55,
            "pH": 7.2
        }
    },
    {
        "time": 1587137460000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 7.2
        }
    },
    {
        "time": 1587137820000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7,
            "pH": 7.2
        }
    },
    {
        "time": 1587138180000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 58,
            "pH": 6.8
        }
    },
    {
        "time": 1587138540000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6
        }
    },
    {
        "time": 1587138900000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55,
            "pH": 6.5
        }
    },
    {
        "time": 1587139260000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 7.1
        }
    },
    {
        "time": 1587139620000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59,
            "pH": 6.8
        }
    },
    {
        "time": 1587139980000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 6.9
        }
    },
    {
        "time": 1587140340000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 6.8
        }
    },
    {
        "time": 1587140700000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 6.9
        }
    },
    {
        "time": 1587141060000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55.4,
            "pH": 7.1
        }
    },
    {
        "time": 1587141420000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 6.7
        }
    },
    {
        "time": 1587141780000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 7.3
        }
    },
    {
        "time": 1587142140000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57
        }
    },
    {
        "time": 1587142500000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 7.3
        }
    },
    {
        "time": 1587142860000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55
        }
    },
    {
        "time": 1587143220000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55,
            "pH": 7.2
        }
    },
    {
        "time": 1587143580000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 7.3
        }
    },
    {
        "time": 1587143940000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 7.3
        }
    },
    {
        "time": 1587144300000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59,
            "pH": 7
        }
    },
    {
        "time": 1587144660000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59
        }
    },
    {
        "time": 1587145020000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 7.2
        }
    },
    {
        "time": 1587145380000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 6.8
        }
    },
    {
        "time": 1587145740000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 7.3
        }
    },
    {
        "time": 1587146100000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55,
            "pH": 7.3
        }
    },
    {
        "time": 1587146460000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55.4,
            "pH": 6.7
        }
    },
    {
        "time": 1587146820000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 6.8
        }
    },
    {
        "time": 1587147180000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 7.2
        }
    },
    {
        "time": 1587147540000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 7.4
        }
    },
    {
        "time": 1587147900000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 58,
            "pH": 7.2
        }
    },
    {
        "time": 1587148260000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7,
            "pH": 6.8
        }
    },
    {
        "time": 1587148620000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 7.3
        }
    },
    {
        "time": 1587148980000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7,
            "pH": 6.8
        }
    },
    {
        "time": 1587149340000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 6.7
        }
    },
    {
        "time": 1587149700000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55,
            "pH": 6.8
        }
    },
    {
        "time": 1587150060000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 7
        }
    },
    {
        "time": 1587150420000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 7.1
        }
    },
    {
        "time": 1587150780000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 7
        }
    },
    {
        "time": 1587151140000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 7
        }
    },
    {
        "time": 1587151500000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55.4,
            "pH": 7.4
        }
    },
    {
        "time": 1587151860000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 6.9
        }
    },
    {
        "time": 1587152220000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62
        }
    },
    {
        "time": 1587152580000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7,
            "pH": 7.4
        }
    },
    {
        "time": 1587152940000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59,
            "pH": 6.8
        }
    },
    {
        "time": 1587153300000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 7.2
        }
    },
    {
        "time": 1587153660000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 7.1
        }
    },
    {
        "time": 1587154020000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 7.1
        }
    },
    {
        "time": 1587154380000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 6.8
        }
    },
    {
        "time": 1587154740000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55.4,
            "pH": 7
        }
    },
    {
        "time": 1587155100000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55.4,
            "pH": 6.9
        }
    },
    {
        "time": 1587155460000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55,
            "pH": 7.1
        }
    },
    {
        "time": 1587155820000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 7.1
        }
    },
    {
        "time": 1587156180000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 7
        }
    },
    {
        "time": 1587156540000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 6.8
        }
    },
    {
        "time": 1587156900000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59
        }
    },
    {
        "time": 1587157260000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55,
            "pH": 6.8
        }
    },
    {
        "time": 1587157620000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 7.1
        }
    },
    {
        "time": 1587157980000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7,
            "pH": 6.5
        }
    },
    {
        "time": 1587158340000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 7.3
        }
    },
    {
        "time": 1587158700000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 6.7
        }
    },
    {
        "time": 1587159060000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 6.9
        }
    },
    {
        "time": 1587159420000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55.4,
            "pH": 7.4
        }
    },
    {
        "time": 1587159780000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 6.8
        }
    },
    {
        "time": 1587160140000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 6.8
        }
    },
    {
        "time": 1587160500000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 7
        }
    },
    {
        "time": 1587160860000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 58,
            "pH": 7.3
        }
    },
    {
        "time": 1587161220000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 6.7
        }
    },
    {
        "time": 1587161580000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59,
            "pH": 7.4
        }
    },
    {
        "time": 1587161940000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 6.8
        }
    },
    {
        "time": 1587162300000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57
        }
    },
    {
        "time": 1587162660000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 6.9
        }
    },
    {
        "time": 1587163020000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 6.8
        }
    },
    {
        "time": 1587163380000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 7.4
        }
    },
    {
        "time": 1587163740000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6
        }
    },
    {
        "time": 1587164100000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 6.8
        }
    },
    {
        "time": 1587164460000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59,
            "pH": 6.5
        }
    },
    {
        "time": 1587164820000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 6.8
        }
    },
    {
        "time": 1587165180000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 7.1
        }
    },
    {
        "time": 1587165540000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 6.7
        }
    },
    {
        "time": 1587165900000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 6.9
        }
    },
    {
        "time": 1587166260000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 7
        }
    },
    {
        "time": 1587166620000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 7.1
        }
    },
    {
        "time": 1587166980000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 7
        }
    },
    {
        "time": 1587167340000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 6.9
        }
    },
    {
        "time": 1587167700000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 6.7
        }
    },
    {
        "time": 1587168060000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 7.1
        }
    },
    {
        "time": 1587168420000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55,
            "pH": 6.9
        }
    },
    {
        "time": 1587168780000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7,
            "pH": 6.9
        }
    },
    {
        "time": 1587169140000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 7.1
        }
    },
    {
        "time": 1587169500000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 6.9
        }
    },
    {
        "time": 1587169860000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7,
            "pH": 6.8
        }
    },
    {
        "time": 1587170220000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 7
        }
    },
    {
        "time": 1587170580000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 6.8
        }
    },
    {
        "time": 1587170940000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55,
            "pH": 6.8
        }
    },
    {
        "time": 1587171300000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 7.2
        }
    },
    {
        "time": 1587171660000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55.4,
            "pH": 7
        }
    },
    {
        "time": 1587172020000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7,
            "pH": 6.8
        }
    },
    {
        "time": 1587172380000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 7
        }
    },
    {
        "time": 1587172740000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 7.2
        }
    },
    {
        "time": 1587173100000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 6.8
        }
    },
    {
        "time": 1587173460000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 58,
            "pH": 6.7
        }
    },
    {
        "time": 1587173820000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 7.1
        }
    },
    {
        "time": 1587174180000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 6.9
        }
    },
    {
        "time": 1587174540000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 7.3
        }
    },
    {
        "time": 1587174900000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 6.5
        }
    },
    {
        "time": 1587175260000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 58,
            "pH": 6.8
        }
    },
    {
        "time": 1587175620000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 7.2
        }
    },
    {
        "time": 1587175980000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 7.1
        }
    },
    {
        "time": 1587176340000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 6.5
        }
    },
    {
        "time": 1587176700000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 7.2
        }
    },
    {
        "time": 1587177060000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59,
            "pH": 6.8
        }
    },
    {
        "time": 1587177420000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 6.9
        }
    },
    {
        "time": 1587177780000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 7.1
        }
    },
    {
        "time": 1587178140000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59,
            "pH": 7.4
        }
    },
    {
        "time": 1587178500000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55.4,
            "pH": 6.7
        }
    },
    {
        "time": 1587178860000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55.4,
            "pH": 6.8
        }
    },
    {
        "time": 1587179220000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 6.9
        }
    },
    {
        "time": 1587179580000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7,
            "pH": 6.7
        }
    },
    {
        "time": 1587179940000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 7.4
        }
    },
    {
        "time": 1587180300000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 58,
            "pH": 7.1
        }
    },
    {
        "time": 1587180660000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 7.2
        }
    },
    {
        "time": 1587181020000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 7
        }
    },
    {
        "time": 1587181380000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59,
            "pH": 6.8
        }
    },
    {
        "time": 1587181740000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 6.8
        }
    },
    {
        "time": 1587182100000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 7.2
        }
    },
    {
        "time": 1587182460000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55.4,
            "pH": 7.2
        }
    },
    {
        "time": 1587182820000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55,
            "pH": 7.4
        }
    },
    {
        "time": 1587183180000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 6.9
        }
    },
    {
        "time": 1587183540000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55.4,
            "pH": 6.8
        }
    },
    {
        "time": 1587183900000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 7.1
        }
    },
    {
        "time": 1587184260000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7,
            "pH": 6.8
        }
    },
    {
        "time": 1587184620000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 7.3
        }
    },
    {
        "time": 1587184980000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 58,
            "pH": 6.8
        }
    },
    {
        "time": 1587185340000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56
        }
    },
    {
        "time": 1587185700000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 7.1
        }
    },
    {
        "time": 1587186060000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61,
            "pH": 7.2
        }
    },
    {
        "time": 1587186420000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 66,
            "pH": 7.1
        }
    },
    {
        "time": 1587186780000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 64,
            "pH": 7.1
        }
    },
    {
        "time": 1587187140000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 66,
            "pH": 6.9
        }
    },
    {
        "time": 1587187500000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 68
        }
    },
    {
        "time": 1587187860000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61,
            "pH": 7.1
        }
    },
    {
        "time": 1587188220000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 68,
            "pH": 6.9
        }
    },
    {
        "time": 1587188580000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62.1,
            "pH": 7.2
        }
    },
    {
        "time": 1587188940000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 60.8,
            "pH": 7.2
        }
    },
    {
        "time": 1587189300000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 7.3
        }
    },
    {
        "time": 1587189660000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 68,
            "pH": 6.8
        }
    },
    {
        "time": 1587190020000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 7.2
        }
    },
    {
        "time": 1587190380000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 60.8,
            "pH": 7
        }
    },
    {
        "time": 1587190740000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 64.2,
            "pH": 6.9
        }
    },
    {
        "time": 1587191100000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62.1,
            "pH": 7.2
        }
    },
    {
        "time": 1587191460000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 6.9
        }
    },
    {
        "time": 1587191820000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 66.2,
            "pH": 7
        }
    },
    {
        "time": 1587192180000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61
        }
    },
    {
        "time": 1587192540000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 6.9
        }
    },
    {
        "time": 1587192900000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 7.2
        }
    },
    {
        "time": 1587193260000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 6.9
        }
    },
    {
        "time": 1587193620000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 7.2
        }
    },
    {
        "time": 1587193980000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61.5,
            "pH": 7.1
        }
    },
    {
        "time": 1587194340000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61,
            "pH": 6.8
        }
    },
    {
        "time": 1587194700000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62.1,
            "pH": 6.5
        }
    },
    {
        "time": 1587195060000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 68,
            "pH": 7.2
        }
    },
    {
        "time": 1587195420000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61.5,
            "pH": 7
        }
    },
    {
        "time": 1587195780000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 66.2,
            "pH": 6.5
        }
    },
    {
        "time": 1587196140000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 7.4
        }
    },
    {
        "time": 1587196500000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 7.4
        }
    },
    {
        "time": 1587196860000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 7.2
        }
    },
    {
        "time": 1587197220000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 64,
            "pH": 7
        }
    },
    {
        "time": 1587197580000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 64.2
        }
    },
    {
        "time": 1587197940000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 7.3
        }
    },
    {
        "time": 1587198300000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 6.9
        }
    },
    {
        "time": 1587198660000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 7
        }
    },
    {
        "time": 1587199020000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 66.2,
            "pH": 7.1
        }
    },
    {
        "time": 1587199380000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 66,
            "pH": 7.4
        }
    },
    {
        "time": 1587199740000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 7.1
        }
    },
    {
        "time": 1587200100000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61,
            "pH": 6.5
        }
    },
    {
        "time": 1587200460000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 66.2,
            "pH": 6.9
        }
    },
    {
        "time": 1587200820000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 66.2,
            "pH": 7
        }
    },
    {
        "time": 1587201180000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61,
            "pH": 7
        }
    },
    {
        "time": 1587201540000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 6.9
        }
    },
    {
        "time": 1587201900000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 64.2,
            "pH": 7
        }
    },
    {
        "time": 1587202260000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61,
            "pH": 7.2
        }
    },
    {
        "time": 1587202620000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 7.4
        }
    },
    {
        "time": 1587202980000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 66,
            "pH": 6.8
        }
    },
    {
        "time": 1587203340000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 64,
            "pH": 6.7
        }
    },
    {
        "time": 1587203700000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 64.2
        }
    },
    {
        "time": 1587204060000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 6.7
        }
    },
    {
        "time": 1587204420000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 66,
            "pH": 7.3
        }
    },
    {
        "time": 1587204780000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 6.9
        }
    },
    {
        "time": 1587205140000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61.5,
            "pH": 7.2
        }
    },
    {
        "time": 1587205500000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 60.8,
            "pH": 6.8
        }
    },
    {
        "time": 1587205860000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 68,
            "pH": 6.9
        }
    },
    {
        "time": 1587206220000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 6.7
        }
    },
    {
        "time": 1587206580000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 6.9
        }
    },
    {
        "time": 1587206940000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 68,
            "pH": 7.4
        }
    },
    {
        "time": 1587207300000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61,
            "pH": 7
        }
    },
    {
        "time": 1587207660000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59,
            "pH": 6.7
        }
    },
    {
        "time": 1587208020000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 6.5
        }
    },
    {
        "time": 1587208380000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 6.7
        }
    },
    {
        "time": 1587208740000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 6.9
        }
    },
    {
        "time": 1587209100000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 6.7
        }
    },
    {
        "time": 1587209460000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59,
            "pH": 7.2
        }
    },
    {
        "time": 1587209820000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 6.9
        }
    },
    {
        "time": 1587210180000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 7.3
        }
    },
    {
        "time": 1587210540000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 7.4
        }
    },
    {
        "time": 1587210900000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55.4,
            "pH": 7.2
        }
    },
    {
        "time": 1587211260000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 6.8
        }
    },
    {
        "time": 1587211620000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 7.3
        }
    },
    {
        "time": 1587211980000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 6.8
        }
    },
    {
        "time": 1587212340000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 6.9
        }
    },
    {
        "time": 1587212700000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55,
            "pH": 7.2
        }
    },
    {
        "time": 1587213060000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 6.9
        }
    },
    {
        "time": 1587213420000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59
        }
    },
    {
        "time": 1587213780000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 7.1
        }
    },
    {
        "time": 1587214140000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59,
            "pH": 7.1
        }
    },
    {
        "time": 1587214500000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 6.9
        }
    },
    {
        "time": 1587214860000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 7.2
        }
    },
    {
        "time": 1587215220000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55.4,
            "pH": 6.7
        }
    },
    {
        "time": 1587215580000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 6.5
        }
    },
    {
        "time": 1587215940000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 6.7
        }
    },
    {
        "time": 1587216300000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 6.9
        }
    },
    {
        "time": 1587216660000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 6.7
        }
    },
    {
        "time": 1587217020000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 7.1
        }
    },
    {
        "time": 1587217380000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 58,
            "pH": 7
        }
    },
    {
        "time": 1587217740000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 7.3
        }
    },
    {
        "time": 1587218100000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 7.4
        }
    },
    {
        "time": 1587218460000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 7.4
        }
    },
    {
        "time": 1587218820000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 6.8
        }
    },
    {
        "time": 1587219180000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55,
            "pH": 7
        }
    },
    {
        "time": 1587219540000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7,
            "pH": 7.2
        }
    },
    {
        "time": 1587219900000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55.4,
            "pH": 7
        }
    },
    {
        "time": 1587220260000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 7.2
        }
    },
    {
        "time": 1587220620000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 7.2
        }
    },
    {
        "time": 1587220980000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6
        }
    },
    {
        "time": 1587221340000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7,
            "pH": 7.2
        }
    },
    {
        "time": 1587221700000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55,
            "pH": 6.5
        }
    },
    {
        "time": 1587222060000,
        "sensorId": "uuid0100",
        "data": {}
    },
    {
        "time": 1587222420000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 7.2
        }
    },
    {
        "time": 1587222780000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 7.1
        }
    },
    {
        "time": 1587223140000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 7.3
        }
    },
    {
        "time": 1587223500000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7,
            "pH": 7.1
        }
    },
    {
        "time": 1587223860000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 6.7
        }
    },
    {
        "time": 1587224220000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 58,
            "pH": 7
        }
    },
    {
        "time": 1587224580000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 6.9
        }
    },
    {
        "time": 1587224940000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7,
            "pH": 7.3
        }
    },
    {
        "time": 1587225300000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55.4,
            "pH": 6.8
        }
    },
    {
        "time": 1587225660000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 7.2
        }
    },
    {
        "time": 1587226020000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 7
        }
    },
    {
        "time": 1587226380000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7,
            "pH": 6.9
        }
    },
    {
        "time": 1587226740000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55.4,
            "pH": 7.2
        }
    },
    {
        "time": 1587227100000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 6.9
        }
    },
    {
        "time": 1587227460000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 7.1
        }
    },
    {
        "time": 1587227820000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 7.2
        }
    },
    {
        "time": 1587228180000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 7.4
        }
    },
    {
        "time": 1587228540000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 7.2
        }
    },
    {
        "time": 1587228900000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 6.7
        }
    },
    {
        "time": 1587229260000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 7.4
        }
    },
    {
        "time": 1587229620000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 6.9
        }
    },
    {
        "time": 1587229980000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 7
        }
    },
    {
        "time": 1587230340000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 6.5
        }
    },
    {
        "time": 1587230700000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 7
        }
    },
    {
        "time": 1587231060000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 7.2
        }
    },
    {
        "time": 1587231420000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 7.4
        }
    },
    {
        "time": 1587231780000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 58,
            "pH": 7.1
        }
    },
    {
        "time": 1587232140000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 7
        }
    },
    {
        "time": 1587232500000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6
        }
    },
    {
        "time": 1587232860000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59,
            "pH": 7.3
        }
    },
    {
        "time": 1587233220000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57
        }
    },
    {
        "time": 1587233580000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 7.3
        }
    },
    {
        "time": 1587233940000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55.4,
            "pH": 7.2
        }
    },
    {
        "time": 1587234300000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7,
            "pH": 7.2
        }
    },
    {
        "time": 1587234660000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 7.4
        }
    },
    {
        "time": 1587235020000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 6.8
        }
    },
    {
        "time": 1587235380000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 7.4
        }
    },
    {
        "time": 1587235740000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 6.5
        }
    },
    {
        "time": 1587236100000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 7.1
        }
    },
    {
        "time": 1587236460000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56
        }
    },
    {
        "time": 1587236820000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 7.1
        }
    },
    {
        "time": 1587237180000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 7.3
        }
    },
    {
        "time": 1587237540000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 7.1
        }
    },
    {
        "time": 1587237900000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7,
            "pH": 6.5
        }
    },
    {
        "time": 1587238260000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 6.9
        }
    },
    {
        "time": 1587238620000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55,
            "pH": 7.2
        }
    },
    {
        "time": 1587238980000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 58,
            "pH": 6.7
        }
    },
    {
        "time": 1587239340000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7
        }
    },
    {
        "time": 1587239700000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55.4,
            "pH": 7.1
        }
    },
    {
        "time": 1587240060000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59,
            "pH": 7.1
        }
    },
    {
        "time": 1587240420000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2
        }
    },
    {
        "time": 1587240780000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 7.1
        }
    },
    {
        "time": 1587241140000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 7.2
        }
    },
    {
        "time": 1587241500000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 7.2
        }
    },
    {
        "time": 1587241860000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6
        }
    },
    {
        "time": 1587242220000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 7.3
        }
    },
    {
        "time": 1587242580000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 7.1
        }
    },
    {
        "time": 1587242940000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 58,
            "pH": 6.7
        }
    },
    {
        "time": 1587243300000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 6.8
        }
    },
    {
        "time": 1587243660000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 6.5
        }
    },
    {
        "time": 1587244020000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 6.8
        }
    },
    {
        "time": 1587244380000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 7.2
        }
    },
    {
        "time": 1587244740000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62
        }
    },
    {
        "time": 1587245100000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55.4,
            "pH": 6.8
        }
    },
    {
        "time": 1587245460000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63
        }
    },
    {
        "time": 1587245820000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55.4,
            "pH": 6.8
        }
    },
    {
        "time": 1587246180000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59,
            "pH": 7.1
        }
    },
    {
        "time": 1587246540000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7,
            "pH": 7.3
        }
    },
    {
        "time": 1587246900000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 6.8
        }
    },
    {
        "time": 1587247260000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 7.1
        }
    },
    {
        "time": 1587247620000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 58
        }
    },
    {
        "time": 1587247980000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 6.9
        }
    },
    {
        "time": 1587248340000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 6.5
        }
    },
    {
        "time": 1587248700000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 7.3
        }
    },
    {
        "time": 1587249060000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 7.2
        }
    },
    {
        "time": 1587249420000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 6.9
        }
    },
    {
        "time": 1587249780000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 7
        }
    },
    {
        "time": 1587250140000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 58,
            "pH": 6.8
        }
    },
    {
        "time": 1587250500000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 7.2
        }
    },
    {
        "time": 1587250860000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7,
            "pH": 7.2
        }
    },
    {
        "time": 1587251220000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 6.9
        }
    },
    {
        "time": 1587251580000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 6.5
        }
    },
    {
        "time": 1587251940000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 7.2
        }
    },
    {
        "time": 1587252300000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7,
            "pH": 6.9
        }
    },
    {
        "time": 1587252660000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 6.9
        }
    },
    {
        "time": 1587253020000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 7.2
        }
    },
    {
        "time": 1587253380000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 6.5
        }
    },
    {
        "time": 1587253740000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55.4,
            "pH": 7.4
        }
    },
    {
        "time": 1587254100000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 6.8
        }
    },
    {
        "time": 1587254460000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 6.7
        }
    },
    {
        "time": 1587254820000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 6.5
        }
    },
    {
        "time": 1587255180000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 7.1
        }
    },
    {
        "time": 1587255540000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 6.9
        }
    },
    {
        "time": 1587255900000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 7
        }
    },
    {
        "time": 1587256260000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 7.2
        }
    },
    {
        "time": 1587256620000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 6.9
        }
    },
    {
        "time": 1587256980000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 6.8
        }
    },
    {
        "time": 1587257340000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55.4,
            "pH": 6.7
        }
    },
    {
        "time": 1587257700000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59,
            "pH": 6.8
        }
    },
    {
        "time": 1587258060000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 7.1
        }
    },
    {
        "time": 1587258420000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 6.8
        }
    },
    {
        "time": 1587258780000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 6.9
        }
    },
    {
        "time": 1587259140000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 6.9
        }
    },
    {
        "time": 1587259500000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7,
            "pH": 6.9
        }
    },
    {
        "time": 1587259860000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 7.2
        }
    },
    {
        "time": 1587260220000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55.4,
            "pH": 6.9
        }
    },
    {
        "time": 1587260580000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 7.2
        }
    },
    {
        "time": 1587260940000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 7.1
        }
    },
    {
        "time": 1587261300000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55.4,
            "pH": 6.8
        }
    },
    {
        "time": 1587261660000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56
        }
    },
    {
        "time": 1587262020000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7,
            "pH": 6.9
        }
    },
    {
        "time": 1587262380000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 7.4
        }
    },
    {
        "time": 1587262740000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55,
            "pH": 6.7
        }
    },
    {
        "time": 1587263100000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55.4,
            "pH": 6.8
        }
    },
    {
        "time": 1587263460000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 7.1
        }
    },
    {
        "time": 1587263820000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6
        }
    },
    {
        "time": 1587264180000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 7.2
        }
    },
    {
        "time": 1587264540000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62
        }
    },
    {
        "time": 1587264900000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 6.7
        }
    },
    {
        "time": 1587265260000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55.4,
            "pH": 7
        }
    },
    {
        "time": 1587265620000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 6.8
        }
    },
    {
        "time": 1587265980000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55,
            "pH": 7
        }
    },
    {
        "time": 1587266340000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 6.8
        }
    },
    {
        "time": 1587266700000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 7.4
        }
    },
    {
        "time": 1587267060000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 6.5
        }
    },
    {
        "time": 1587267420000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 6.8
        }
    },
    {
        "time": 1587267780000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 7.1
        }
    },
    {
        "time": 1587268140000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 58,
            "pH": 7.4
        }
    },
    {
        "time": 1587268500000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 6.9
        }
    },
    {
        "time": 1587268860000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 6.9
        }
    },
    {
        "time": 1587269220000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 7
        }
    },
    {
        "time": 1587269580000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 7.3
        }
    },
    {
        "time": 1587269940000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 58,
            "pH": 6.8
        }
    },
    {
        "time": 1587270300000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 7.1
        }
    },
    {
        "time": 1587270660000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 7
        }
    },
    {
        "time": 1587271020000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 7
        }
    },
    {
        "time": 1587271380000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 7.1
        }
    },
    {
        "time": 1587271740000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 7.1
        }
    },
    {
        "time": 1587272100000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 7.2
        }
    },
    {
        "time": 1587272460000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62.1,
            "pH": 7
        }
    },
    {
        "time": 1587272820000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 66,
            "pH": 6.9
        }
    },
    {
        "time": 1587273180000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 7.2
        }
    },
    {
        "time": 1587273540000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 66,
            "pH": 7.1
        }
    },
    {
        "time": 1587273900000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61,
            "pH": 7.1
        }
    },
    {
        "time": 1587274260000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 6.9
        }
    },
    {
        "time": 1587274620000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 64.2,
            "pH": 6.8
        }
    },
    {
        "time": 1587274980000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 64.2,
            "pH": 7.1
        }
    },
    {
        "time": 1587275340000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 6.5
        }
    },
    {
        "time": 1587275700000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 64.2,
            "pH": 6.8
        }
    },
    {
        "time": 1587276060000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61,
            "pH": 6.7
        }
    },
    {
        "time": 1587276420000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61,
            "pH": 7.2
        }
    },
    {
        "time": 1587276780000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 66.2,
            "pH": 7
        }
    },
    {
        "time": 1587277140000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 60.8,
            "pH": 7.4
        }
    },
    {
        "time": 1587277500000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62.1,
            "pH": 6.8
        }
    },
    {
        "time": 1587277860000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61,
            "pH": 7.1
        }
    },
    {
        "time": 1587278220000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 64.2,
            "pH": 7.3
        }
    },
    {
        "time": 1587278580000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 68,
            "pH": 6.7
        }
    },
    {
        "time": 1587278940000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 7.2
        }
    },
    {
        "time": 1587279300000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 68,
            "pH": 7
        }
    },
    {
        "time": 1587279660000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 60.8,
            "pH": 7.1
        }
    },
    {
        "time": 1587280020000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 7.4
        }
    },
    {
        "time": 1587280380000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 6.8
        }
    },
    {
        "time": 1587280740000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 66.2,
            "pH": 7.1
        }
    },
    {
        "time": 1587281100000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 64,
            "pH": 7.2
        }
    },
    {
        "time": 1587281460000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61,
            "pH": 6.9
        }
    },
    {
        "time": 1587281820000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 64,
            "pH": 6.8
        }
    },
    {
        "time": 1587282180000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 6.8
        }
    },
    {
        "time": 1587282540000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 66.2,
            "pH": 7.2
        }
    },
    {
        "time": 1587282900000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 7.2
        }
    },
    {
        "time": 1587283260000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 60.8,
            "pH": 6.8
        }
    },
    {
        "time": 1587283620000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 64.2,
            "pH": 7.2
        }
    },
    {
        "time": 1587283980000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61.5,
            "pH": 7.2
        }
    },
    {
        "time": 1587284340000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 68,
            "pH": 7.1
        }
    },
    {
        "time": 1587284700000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 64.2,
            "pH": 7.1
        }
    },
    {
        "time": 1587285060000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 64
        }
    },
    {
        "time": 1587285420000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 7.2
        }
    },
    {
        "time": 1587285780000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 60.8,
            "pH": 7.4
        }
    },
    {
        "time": 1587286140000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 64.2,
            "pH": 6.5
        }
    },
    {
        "time": 1587286500000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 7
        }
    },
    {
        "time": 1587286860000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61,
            "pH": 7.1
        }
    },
    {
        "time": 1587287220000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 7.3
        }
    },
    {
        "time": 1587287580000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61,
            "pH": 7.4
        }
    },
    {
        "time": 1587287940000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 7
        }
    },
    {
        "time": 1587288300000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 66.2,
            "pH": 7.4
        }
    },
    {
        "time": 1587288660000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 6.5
        }
    },
    {
        "time": 1587289020000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62.1,
            "pH": 7.1
        }
    },
    {
        "time": 1587289380000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 7.2
        }
    },
    {
        "time": 1587289740000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 7.1
        }
    },
    {
        "time": 1587290100000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 66.2,
            "pH": 7.3
        }
    },
    {
        "time": 1587290460000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 64,
            "pH": 7.4
        }
    },
    {
        "time": 1587290820000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61
        }
    },
    {
        "time": 1587291180000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61.5,
            "pH": 6.9
        }
    },
    {
        "time": 1587291540000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 60.8
        }
    },
    {
        "time": 1587291900000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 64,
            "pH": 6.8
        }
    },
    {
        "time": 1587292260000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 68,
            "pH": 6.9
        }
    },
    {
        "time": 1587292620000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61,
            "pH": 6.7
        }
    },
    {
        "time": 1587292980000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 64,
            "pH": 7.2
        }
    },
    {
        "time": 1587293340000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 64,
            "pH": 6.8
        }
    },
    {
        "time": 1587293700000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61,
            "pH": 7.2
        }
    },
    {
        "time": 1587294060000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 7.2
        }
    },
    {
        "time": 1587294420000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55,
            "pH": 6.5
        }
    },
    {
        "time": 1587294780000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59,
            "pH": 7
        }
    },
    {
        "time": 1587295140000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7,
            "pH": 7.2
        }
    },
    {
        "time": 1587295500000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 7.1
        }
    },
    {
        "time": 1587295860000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59,
            "pH": 7
        }
    },
    {
        "time": 1587296220000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 7.2
        }
    },
    {
        "time": 1587296580000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 6.9
        }
    },
    {
        "time": 1587296940000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 7.2
        }
    },
    {
        "time": 1587297300000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 6.7
        }
    },
    {
        "time": 1587297660000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7
        }
    },
    {
        "time": 1587298020000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7,
            "pH": 7.1
        }
    },
    {
        "time": 1587298380000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59
        }
    },
    {
        "time": 1587298740000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59,
            "pH": 7.3
        }
    },
    {
        "time": 1587299100000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55,
            "pH": 7.3
        }
    },
    {
        "time": 1587299460000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 7.4
        }
    },
    {
        "time": 1587299820000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 6.9
        }
    },
    {
        "time": 1587300180000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7,
            "pH": 6.7
        }
    },
    {
        "time": 1587300540000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 6.9
        }
    },
    {
        "time": 1587300900000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 7.1
        }
    },
    {
        "time": 1587301260000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59,
            "pH": 6.8
        }
    },
    {
        "time": 1587301620000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59,
            "pH": 7.3
        }
    },
    {
        "time": 1587301980000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 6.9
        }
    },
    {
        "time": 1587302340000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 6.8
        }
    },
    {
        "time": 1587302700000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 7.3
        }
    },
    {
        "time": 1587303060000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 6.8
        }
    },
    {
        "time": 1587303420000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 6.8
        }
    },
    {
        "time": 1587303780000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 7
        }
    },
    {
        "time": 1587304140000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59,
            "pH": 7.2
        }
    },
    {
        "time": 1587304500000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 7.2
        }
    },
    {
        "time": 1587304860000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59,
            "pH": 7.1
        }
    },
    {
        "time": 1587305220000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54
        }
    },
    {
        "time": 1587305580000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 6.7
        }
    },
    {
        "time": 1587305940000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55,
            "pH": 7.2
        }
    },
    {
        "time": 1587306300000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 7.1
        }
    },
    {
        "time": 1587306660000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 6.7
        }
    },
    {
        "time": 1587307020000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59,
            "pH": 6.8
        }
    },
    {
        "time": 1587307380000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 7.1
        }
    },
    {
        "time": 1587307740000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 7.1
        }
    },
    {
        "time": 1587308100000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 7
        }
    },
    {
        "time": 1587308460000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 7.1
        }
    },
    {
        "time": 1587308820000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55,
            "pH": 7.3
        }
    },
    {
        "time": 1587309180000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7,
            "pH": 6.9
        }
    },
    {
        "time": 1587309540000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3
        }
    },
    {
        "time": 1587309900000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 7.4
        }
    },
    {
        "time": 1587310260000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 7.2
        }
    },
    {
        "time": 1587310620000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7,
            "pH": 7.2
        }
    },
    {
        "time": 1587310980000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59,
            "pH": 6.8
        }
    },
    {
        "time": 1587311340000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 7.3
        }
    },
    {
        "time": 1587311700000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 6.9
        }
    },
    {
        "time": 1587312060000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 7.2
        }
    },
    {
        "time": 1587312420000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 7.2
        }
    },
    {
        "time": 1587312780000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55.4,
            "pH": 6.8
        }
    },
    {
        "time": 1587313140000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 7.4
        }
    },
    {
        "time": 1587313500000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 7.4
        }
    },
    {
        "time": 1587313860000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55.4,
            "pH": 6.9
        }
    },
    {
        "time": 1587314220000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 7.1
        }
    },
    {
        "time": 1587314580000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 6.8
        }
    },
    {
        "time": 1587314940000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 6.9
        }
    },
    {
        "time": 1587315300000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55,
            "pH": 7
        }
    },
    {
        "time": 1587315660000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 7.2
        }
    },
    {
        "time": 1587316020000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 7.1
        }
    },
    {
        "time": 1587316380000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 7.2
        }
    },
    {
        "time": 1587316740000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 6.9
        }
    },
    {
        "time": 1587317100000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 7.4
        }
    },
    {
        "time": 1587317460000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 6.5
        }
    },
    {
        "time": 1587317820000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 6.8
        }
    },
    {
        "time": 1587318180000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55,
            "pH": 7.1
        }
    },
    {
        "time": 1587318540000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55.4,
            "pH": 6.8
        }
    },
    {
        "time": 1587318900000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 58,
            "pH": 7.1
        }
    },
    {
        "time": 1587319260000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 6.7
        }
    },
    {
        "time": 1587319620000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55,
            "pH": 6.9
        }
    },
    {
        "time": 1587319980000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 6.8
        }
    },
    {
        "time": 1587320340000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 6.5
        }
    },
    {
        "time": 1587320700000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62
        }
    },
    {
        "time": 1587321060000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 6.7
        }
    },
    {
        "time": 1587321420000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 6.8
        }
    },
    {
        "time": 1587321780000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 6.7
        }
    },
    {
        "time": 1587322140000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 6.8
        }
    },
    {
        "time": 1587322500000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 58,
            "pH": 7.2
        }
    },
    {
        "time": 1587322860000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 7
        }
    },
    {
        "time": 1587323220000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 7.4
        }
    },
    {
        "time": 1587323580000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55.4,
            "pH": 7.2
        }
    },
    {
        "time": 1587323940000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 6.9
        }
    },
    {
        "time": 1587324300000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7,
            "pH": 6.5
        }
    },
    {
        "time": 1587324660000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 6.8
        }
    },
    {
        "time": 1587325020000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55,
            "pH": 7.1
        }
    },
    {
        "time": 1587325380000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55.4,
            "pH": 6.5
        }
    },
    {
        "time": 1587325740000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 7.1
        }
    },
    {
        "time": 1587326100000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 6.9
        }
    },
    {
        "time": 1587326460000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 7.4
        }
    },
    {
        "time": 1587326820000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59,
            "pH": 6.8
        }
    },
    {
        "time": 1587327180000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59,
            "pH": 7.2
        }
    },
    {
        "time": 1587327540000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 7.2
        }
    },
    {
        "time": 1587327900000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 7.1
        }
    },
    {
        "time": 1587328260000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 7
        }
    },
    {
        "time": 1587328620000,
        "sensorId": "uuid0100",
        "data": {}
    },
    {
        "time": 1587328980000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 7.1
        }
    },
    {
        "time": 1587329340000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59,
            "pH": 7.1
        }
    },
    {
        "time": 1587329700000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 7.1
        }
    },
    {
        "time": 1587330060000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 7.1
        }
    },
    {
        "time": 1587330420000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 58,
            "pH": 7
        }
    },
    {
        "time": 1587330780000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 6.5
        }
    },
    {
        "time": 1587331140000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 6.9
        }
    },
    {
        "time": 1587331500000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 58,
            "pH": 6.7
        }
    },
    {
        "time": 1587331860000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 6.9
        }
    },
    {
        "time": 1587332220000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 7.2
        }
    },
    {
        "time": 1587332580000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 6.8
        }
    },
    {
        "time": 1587332940000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 58,
            "pH": 7.3
        }
    },
    {
        "time": 1587333300000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 6.9
        }
    },
    {
        "time": 1587333660000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 6.9
        }
    },
    {
        "time": 1587334020000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55,
            "pH": 6.5
        }
    },
    {
        "time": 1587334380000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 6.7
        }
    },
    {
        "time": 1587334740000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 7.1
        }
    },
    {
        "time": 1587335100000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 6.5
        }
    },
    {
        "time": 1587335460000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 7.2
        }
    },
    {
        "time": 1587335820000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 6.7
        }
    },
    {
        "time": 1587336180000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 58,
            "pH": 7.3
        }
    },
    {
        "time": 1587336540000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 7.4
        }
    },
    {
        "time": 1587336900000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55,
            "pH": 7.2
        }
    },
    {
        "time": 1587337260000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 6.9
        }
    },
    {
        "time": 1587337620000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 7.1
        }
    },
    {
        "time": 1587337980000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55.4,
            "pH": 7.4
        }
    },
    {
        "time": 1587338340000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 6.5
        }
    },
    {
        "time": 1587338700000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 7.2
        }
    },
    {
        "time": 1587339060000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6
        }
    },
    {
        "time": 1587339420000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 6.5
        }
    },
    {
        "time": 1587339780000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55,
            "pH": 6.8
        }
    },
    {
        "time": 1587340140000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7,
            "pH": 6.7
        }
    },
    {
        "time": 1587340500000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 6.9
        }
    },
    {
        "time": 1587340860000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 6.5
        }
    },
    {
        "time": 1587341220000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59,
            "pH": 7.4
        }
    },
    {
        "time": 1587341580000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 6.8
        }
    },
    {
        "time": 1587341940000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 7
        }
    },
    {
        "time": 1587342300000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2
        }
    },
    {
        "time": 1587342660000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 6.8
        }
    },
    {
        "time": 1587343020000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 6.8
        }
    },
    {
        "time": 1587343380000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 58,
            "pH": 6.9
        }
    },
    {
        "time": 1587343740000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 7.1
        }
    },
    {
        "time": 1587344100000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 6.7
        }
    },
    {
        "time": 1587344460000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 58,
            "pH": 6.9
        }
    },
    {
        "time": 1587344820000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 7.4
        }
    },
    {
        "time": 1587345180000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 7.2
        }
    },
    {
        "time": 1587345540000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54
        }
    },
    {
        "time": 1587345900000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 7.3
        }
    },
    {
        "time": 1587346260000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7,
            "pH": 7.4
        }
    },
    {
        "time": 1587346620000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 7.4
        }
    },
    {
        "time": 1587346980000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7,
            "pH": 7.2
        }
    },
    {
        "time": 1587347340000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 7.3
        }
    },
    {
        "time": 1587347700000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 7.1
        }
    },
    {
        "time": 1587348060000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 58,
            "pH": 6.8
        }
    },
    {
        "time": 1587348420000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59,
            "pH": 6.9
        }
    },
    {
        "time": 1587348780000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 7.3
        }
    },
    {
        "time": 1587349140000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 7
        }
    },
    {
        "time": 1587349500000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 6.8
        }
    },
    {
        "time": 1587349860000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55,
            "pH": 7.1
        }
    },
    {
        "time": 1587350220000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59,
            "pH": 7.2
        }
    },
    {
        "time": 1587350580000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 7.2
        }
    },
    {
        "time": 1587350940000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 7.2
        }
    },
    {
        "time": 1587351300000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 7
        }
    },
    {
        "time": 1587351660000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 6.7
        }
    },
    {
        "time": 1587352020000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 6.9
        }
    },
    {
        "time": 1587352380000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 6.9
        }
    },
    {
        "time": 1587352740000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 6.8
        }
    },
    {
        "time": 1587353100000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55.4,
            "pH": 7.3
        }
    },
    {
        "time": 1587353460000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 58,
            "pH": 6.9
        }
    },
    {
        "time": 1587353820000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 7.1
        }
    },
    {
        "time": 1587354180000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 6.9
        }
    },
    {
        "time": 1587354540000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 7
        }
    },
    {
        "time": 1587354900000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7,
            "pH": 6.9
        }
    },
    {
        "time": 1587355260000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 7.1
        }
    },
    {
        "time": 1587355620000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59,
            "pH": 6.9
        }
    },
    {
        "time": 1587355980000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 7.4
        }
    },
    {
        "time": 1587356340000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55.4,
            "pH": 6.5
        }
    },
    {
        "time": 1587356700000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 7.4
        }
    },
    {
        "time": 1587357060000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55.4,
            "pH": 6.8
        }
    },
    {
        "time": 1587357420000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 6.9
        }
    },
    {
        "time": 1587357780000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 6.7
        }
    },
    {
        "time": 1587358140000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 7
        }
    },
    {
        "time": 1587358500000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 7.4
        }
    },
    {
        "time": 1587358860000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 7.1
        }
    },
    {
        "time": 1587359220000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61,
            "pH": 6.8
        }
    },
    {
        "time": 1587359580000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 7.2
        }
    },
    {
        "time": 1587359940000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61,
            "pH": 6.8
        }
    },
    {
        "time": 1587360300000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62.1,
            "pH": 6.8
        }
    },
    {
        "time": 1587360660000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 60.8,
            "pH": 6.9
        }
    },
    {
        "time": 1587361020000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 66
        }
    },
    {
        "time": 1587361380000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61.5,
            "pH": 7.2
        }
    },
    {
        "time": 1587361740000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 6.8
        }
    },
    {
        "time": 1587362100000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 6.9
        }
    },
    {
        "time": 1587362460000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 64.2,
            "pH": 7.3
        }
    },
    {
        "time": 1587362820000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61,
            "pH": 7.4
        }
    },
    {
        "time": 1587363180000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62.1,
            "pH": 6.5
        }
    },
    {
        "time": 1587363540000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 64.2,
            "pH": 6.5
        }
    },
    {
        "time": 1587363900000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61,
            "pH": 6.8
        }
    },
    {
        "time": 1587364260000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 7.3
        }
    },
    {
        "time": 1587364620000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62.1,
            "pH": 7.2
        }
    },
    {
        "time": 1587364980000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 64,
            "pH": 7.1
        }
    },
    {
        "time": 1587365340000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61.5,
            "pH": 6.8
        }
    },
    {
        "time": 1587365700000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 68,
            "pH": 7.3
        }
    },
    {
        "time": 1587366060000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61,
            "pH": 7.2
        }
    },
    {
        "time": 1587366420000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 7.2
        }
    },
    {
        "time": 1587366780000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 6.8
        }
    },
    {
        "time": 1587367140000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62.1,
            "pH": 7.4
        }
    },
    {
        "time": 1587367500000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 68,
            "pH": 7.4
        }
    },
    {
        "time": 1587367860000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 64.2,
            "pH": 6.9
        }
    },
    {
        "time": 1587368220000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61,
            "pH": 7.2
        }
    },
    {
        "time": 1587368580000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 60.8,
            "pH": 7.1
        }
    },
    {
        "time": 1587368940000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 64.2,
            "pH": 7.3
        }
    },
    {
        "time": 1587369300000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 7.1
        }
    },
    {
        "time": 1587369660000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61.5,
            "pH": 6.9
        }
    },
    {
        "time": 1587370020000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 7.1
        }
    },
    {
        "time": 1587370380000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 64.2,
            "pH": 7.1
        }
    },
    {
        "time": 1587370740000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 64.2,
            "pH": 6.7
        }
    },
    {
        "time": 1587371100000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 66,
            "pH": 6.9
        }
    },
    {
        "time": 1587371460000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 60.8,
            "pH": 7.3
        }
    },
    {
        "time": 1587371820000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 60.8,
            "pH": 7.2
        }
    },
    {
        "time": 1587372180000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 66,
            "pH": 7.3
        }
    },
    {
        "time": 1587372540000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 6.5
        }
    },
    {
        "time": 1587372900000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 6.9
        }
    },
    {
        "time": 1587373260000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61,
            "pH": 6.9
        }
    },
    {
        "time": 1587373620000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 64,
            "pH": 6.8
        }
    },
    {
        "time": 1587373980000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 7.3
        }
    },
    {
        "time": 1587374340000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61,
            "pH": 7.1
        }
    },
    {
        "time": 1587374700000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 6.9
        }
    },
    {
        "time": 1587375060000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61.5,
            "pH": 6.5
        }
    },
    {
        "time": 1587375420000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61,
            "pH": 7.4
        }
    },
    {
        "time": 1587375780000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 66,
            "pH": 6.9
        }
    },
    {
        "time": 1587376140000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 7.4
        }
    },
    {
        "time": 1587376500000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 66.2,
            "pH": 7.2
        }
    },
    {
        "time": 1587376860000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61,
            "pH": 6.8
        }
    },
    {
        "time": 1587377220000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62.1,
            "pH": 7.2
        }
    },
    {
        "time": 1587377580000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61,
            "pH": 7.2
        }
    },
    {
        "time": 1587377940000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61,
            "pH": 7
        }
    },
    {
        "time": 1587378300000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 7.2
        }
    },
    {
        "time": 1587378660000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 60.8,
            "pH": 7.2
        }
    },
    {
        "time": 1587379020000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 7.1
        }
    },
    {
        "time": 1587379380000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 7.4
        }
    },
    {
        "time": 1587379740000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 60.8,
            "pH": 6.9
        }
    },
    {
        "time": 1587380100000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 6.7
        }
    },
    {
        "time": 1587380460000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7
        }
    },
    {
        "time": 1587380820000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 7.2
        }
    },
    {
        "time": 1587381180000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 6.7
        }
    },
    {
        "time": 1587381540000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55.4,
            "pH": 6.9
        }
    },
    {
        "time": 1587381900000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 7.4
        }
    },
    {
        "time": 1587382260000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 7.2
        }
    },
    {
        "time": 1587382620000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 58,
            "pH": 7.2
        }
    },
    {
        "time": 1587382980000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 6.9
        }
    },
    {
        "time": 1587383340000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 6.9
        }
    },
    {
        "time": 1587383700000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 7.1
        }
    },
    {
        "time": 1587384060000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 6.7
        }
    },
    {
        "time": 1587384420000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 6.7
        }
    },
    {
        "time": 1587384780000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 58,
            "pH": 7.4
        }
    },
    {
        "time": 1587385140000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 58,
            "pH": 6.8
        }
    },
    {
        "time": 1587385500000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7,
            "pH": 7.4
        }
    },
    {
        "time": 1587385860000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7,
            "pH": 7.2
        }
    },
    {
        "time": 1587386220000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 7
        }
    },
    {
        "time": 1587386580000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 6.8
        }
    },
    {
        "time": 1587386940000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 7
        }
    },
    {
        "time": 1587387300000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 7.1
        }
    },
    {
        "time": 1587387660000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 6.8
        }
    },
    {
        "time": 1587388020000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59,
            "pH": 7.1
        }
    },
    {
        "time": 1587388380000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 6.9
        }
    },
    {
        "time": 1587388740000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59,
            "pH": 7.1
        }
    },
    {
        "time": 1587389100000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 6.8
        }
    },
    {
        "time": 1587389460000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55.4,
            "pH": 7
        }
    },
    {
        "time": 1587389820000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62
        }
    },
    {
        "time": 1587390180000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 6.7
        }
    },
    {
        "time": 1587390540000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 6.9
        }
    },
    {
        "time": 1587390900000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 58,
            "pH": 7.2
        }
    },
    {
        "time": 1587391260000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 6.8
        }
    },
    {
        "time": 1587391620000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59,
            "pH": 6.8
        }
    },
    {
        "time": 1587391980000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 7.4
        }
    },
    {
        "time": 1587392340000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55,
            "pH": 6.9
        }
    },
    {
        "time": 1587392700000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 7
        }
    },
    {
        "time": 1587393060000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 6.8
        }
    },
    {
        "time": 1587393420000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 7.2
        }
    },
    {
        "time": 1587393780000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 58,
            "pH": 7.1
        }
    },
    {
        "time": 1587394140000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55.4,
            "pH": 6.9
        }
    },
    {
        "time": 1587394500000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 7.3
        }
    },
    {
        "time": 1587394860000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 6.8
        }
    },
    {
        "time": 1587395220000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 7
        }
    },
    {
        "time": 1587395580000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 6.8
        }
    },
    {
        "time": 1587395940000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7,
            "pH": 7.4
        }
    },
    {
        "time": 1587396300000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 6.5
        }
    },
    {
        "time": 1587396660000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 7.4
        }
    },
    {
        "time": 1587397020000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 6.8
        }
    },
    {
        "time": 1587397380000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 6.8
        }
    },
    {
        "time": 1587397740000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 7.2
        }
    },
    {
        "time": 1587398100000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 7.2
        }
    },
    {
        "time": 1587398460000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 7.3
        }
    },
    {
        "time": 1587398820000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 6.5
        }
    },
    {
        "time": 1587399180000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7,
            "pH": 7.2
        }
    },
    {
        "time": 1587399540000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 7
        }
    },
    {
        "time": 1587399900000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 6.7
        }
    },
    {
        "time": 1587400260000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 7.1
        }
    },
    {
        "time": 1587400620000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 6.9
        }
    },
    {
        "time": 1587400980000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 7.1
        }
    },
    {
        "time": 1587401340000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 6.9
        }
    },
    {
        "time": 1587401700000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 7.1
        }
    },
    {
        "time": 1587402060000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 58,
            "pH": 6.7
        }
    },
    {
        "time": 1587402420000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 6.9
        }
    },
    {
        "time": 1587402780000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59,
            "pH": 7.3
        }
    },
    {
        "time": 1587403140000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 6.8
        }
    },
    {
        "time": 1587403500000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55,
            "pH": 7.4
        }
    },
    {
        "time": 1587403860000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 7.1
        }
    },
    {
        "time": 1587404220000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 7.3
        }
    },
    {
        "time": 1587404580000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 7.1
        }
    },
    {
        "time": 1587404940000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 6.7
        }
    },
    {
        "time": 1587405300000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 6.7
        }
    },
    {
        "time": 1587405660000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 6.5
        }
    },
    {
        "time": 1587406020000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59,
            "pH": 6.9
        }
    },
    {
        "time": 1587406380000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 7.1
        }
    },
    {
        "time": 1587406740000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55,
            "pH": 7.3
        }
    },
    {
        "time": 1587407100000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 6.9
        }
    },
    {
        "time": 1587407460000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 7.2
        }
    },
    {
        "time": 1587407820000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 6.9
        }
    },
    {
        "time": 1587408180000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 7.2
        }
    },
    {
        "time": 1587408540000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 6.9
        }
    },
    {
        "time": 1587408900000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55,
            "pH": 6.8
        }
    },
    {
        "time": 1587409260000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 6.8
        }
    },
    {
        "time": 1587409620000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7,
            "pH": 6.7
        }
    },
    {
        "time": 1587409980000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 7.4
        }
    },
    {
        "time": 1587410340000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59,
            "pH": 7.3
        }
    },
    {
        "time": 1587410700000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59,
            "pH": 6.7
        }
    },
    {
        "time": 1587411060000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55.4,
            "pH": 7.4
        }
    },
    {
        "time": 1587411420000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 7.2
        }
    },
    {
        "time": 1587411780000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7,
            "pH": 6.5
        }
    },
    {
        "time": 1587412140000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7,
            "pH": 6.5
        }
    },
    {
        "time": 1587412500000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 6.9
        }
    },
    {
        "time": 1587412860000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 58,
            "pH": 7.3
        }
    },
    {
        "time": 1587413220000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 7
        }
    },
    {
        "time": 1587413580000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 6.7
        }
    },
    {
        "time": 1587413940000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 6.9
        }
    },
    {
        "time": 1587414300000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59,
            "pH": 6.9
        }
    },
    {
        "time": 1587414660000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 58,
            "pH": 7.4
        }
    },
    {
        "time": 1587415020000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 7.4
        }
    },
    {
        "time": 1587415380000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 7.4
        }
    },
    {
        "time": 1587415740000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59,
            "pH": 6.7
        }
    },
    {
        "time": 1587416100000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59,
            "pH": 7.3
        }
    },
    {
        "time": 1587416460000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55,
            "pH": 7.1
        }
    },
    {
        "time": 1587416820000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 6.8
        }
    },
    {
        "time": 1587417180000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 6.5
        }
    },
    {
        "time": 1587417540000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 6.5
        }
    },
    {
        "time": 1587417900000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 7.4
        }
    },
    {
        "time": 1587418260000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55,
            "pH": 7.2
        }
    },
    {
        "time": 1587418620000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6
        }
    },
    {
        "time": 1587418980000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59,
            "pH": 6.9
        }
    },
    {
        "time": 1587419340000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55,
            "pH": 7.1
        }
    },
    {
        "time": 1587419700000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59,
            "pH": 7
        }
    },
    {
        "time": 1587420060000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 6.5
        }
    },
    {
        "time": 1587420420000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7,
            "pH": 7.1
        }
    },
    {
        "time": 1587420780000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55.4
        }
    },
    {
        "time": 1587421140000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55,
            "pH": 6.9
        }
    },
    {
        "time": 1587421500000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 7.4
        }
    },
    {
        "time": 1587421860000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55,
            "pH": 7.1
        }
    },
    {
        "time": 1587422220000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55,
            "pH": 7.2
        }
    },
    {
        "time": 1587422580000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59,
            "pH": 7.2
        }
    },
    {
        "time": 1587422940000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 6.9
        }
    },
    {
        "time": 1587423300000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55.4,
            "pH": 7.2
        }
    },
    {
        "time": 1587423660000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 6.8
        }
    },
    {
        "time": 1587424020000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 7.2
        }
    },
    {
        "time": 1587424380000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 6.5
        }
    },
    {
        "time": 1587424740000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 6.5
        }
    },
    {
        "time": 1587425100000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55.4,
            "pH": 7.2
        }
    },
    {
        "time": 1587425460000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59,
            "pH": 6.9
        }
    },
    {
        "time": 1587425820000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59,
            "pH": 6.8
        }
    },
    {
        "time": 1587426180000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 58,
            "pH": 7.3
        }
    },
    {
        "time": 1587426540000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 7.3
        }
    },
    {
        "time": 1587426900000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 6.7
        }
    },
    {
        "time": 1587427260000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3
        }
    },
    {
        "time": 1587427620000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 7.1
        }
    },
    {
        "time": 1587427980000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 7.2
        }
    },
    {
        "time": 1587428340000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 6.8
        }
    },
    {
        "time": 1587428700000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7,
            "pH": 7.2
        }
    },
    {
        "time": 1587429060000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 6.5
        }
    },
    {
        "time": 1587429420000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 7.3
        }
    },
    {
        "time": 1587429780000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 6.8
        }
    },
    {
        "time": 1587430140000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 6.5
        }
    },
    {
        "time": 1587430500000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 6.5
        }
    },
    {
        "time": 1587430860000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 7.3
        }
    },
    {
        "time": 1587431220000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7,
            "pH": 6.5
        }
    },
    {
        "time": 1587431580000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 7.1
        }
    },
    {
        "time": 1587431940000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7,
            "pH": 6.8
        }
    },
    {
        "time": 1587432300000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59
        }
    },
    {
        "time": 1587432660000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 7.3
        }
    },
    {
        "time": 1587433020000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 7.3
        }
    },
    {
        "time": 1587433380000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7,
            "pH": 6.9
        }
    },
    {
        "time": 1587433740000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 58,
            "pH": 7.2
        }
    },
    {
        "time": 1587434100000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 7
        }
    },
    {
        "time": 1587434460000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 7.2
        }
    },
    {
        "time": 1587434820000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 6.5
        }
    },
    {
        "time": 1587435180000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7,
            "pH": 7.1
        }
    },
    {
        "time": 1587435540000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 58,
            "pH": 6.8
        }
    },
    {
        "time": 1587435900000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 6.8
        }
    },
    {
        "time": 1587436260000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 7.1
        }
    },
    {
        "time": 1587436620000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 7.3
        }
    },
    {
        "time": 1587436980000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 7.1
        }
    },
    {
        "time": 1587437340000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 7.3
        }
    },
    {
        "time": 1587437700000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 6.7
        }
    },
    {
        "time": 1587438060000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 7.1
        }
    },
    {
        "time": 1587438420000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 6.5
        }
    },
    {
        "time": 1587438780000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 7.1
        }
    },
    {
        "time": 1587439140000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59,
            "pH": 6.8
        }
    },
    {
        "time": 1587439500000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 58,
            "pH": 7.2
        }
    },
    {
        "time": 1587439860000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55,
            "pH": 6.9
        }
    },
    {
        "time": 1587440220000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 58
        }
    },
    {
        "time": 1587440580000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55.4,
            "pH": 7.2
        }
    },
    {
        "time": 1587440940000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 7
        }
    },
    {
        "time": 1587441300000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 6.9
        }
    },
    {
        "time": 1587441660000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55.4,
            "pH": 6.7
        }
    },
    {
        "time": 1587442020000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6
        }
    },
    {
        "time": 1587442380000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 6.9
        }
    },
    {
        "time": 1587442740000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 7.2
        }
    },
    {
        "time": 1587443100000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 58,
            "pH": 6.8
        }
    },
    {
        "time": 1587443460000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 6.9
        }
    },
    {
        "time": 1587443820000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59,
            "pH": 7.1
        }
    },
    {
        "time": 1587444180000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 7.1
        }
    },
    {
        "time": 1587444540000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 6.9
        }
    },
    {
        "time": 1587444900000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 7
        }
    },
    {
        "time": 1587445260000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 7.1
        }
    },
    {
        "time": 1587445620000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 64.2,
            "pH": 6.5
        }
    },
    {
        "time": 1587445980000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 66.2,
            "pH": 7.1
        }
    },
    {
        "time": 1587446340000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 66.2,
            "pH": 7.1
        }
    },
    {
        "time": 1587446700000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62
        }
    },
    {
        "time": 1587447060000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61.5,
            "pH": 6.8
        }
    },
    {
        "time": 1587447420000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 7.4
        }
    },
    {
        "time": 1587447780000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61,
            "pH": 7.2
        }
    },
    {
        "time": 1587448140000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 60.8,
            "pH": 6.8
        }
    },
    {
        "time": 1587448500000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 68,
            "pH": 7
        }
    },
    {
        "time": 1587448860000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 66.2,
            "pH": 7
        }
    },
    {
        "time": 1587449220000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 64.2,
            "pH": 6.5
        }
    },
    {
        "time": 1587449580000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 6.5
        }
    },
    {
        "time": 1587449940000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61.5
        }
    },
    {
        "time": 1587450300000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 6.5
        }
    },
    {
        "time": 1587450660000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 6.8
        }
    },
    {
        "time": 1587451020000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 64,
            "pH": 6.8
        }
    },
    {
        "time": 1587451380000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 66.2,
            "pH": 6.9
        }
    },
    {
        "time": 1587451740000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61,
            "pH": 7.2
        }
    },
    {
        "time": 1587452100000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 6.7
        }
    },
    {
        "time": 1587452460000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61,
            "pH": 7.3
        }
    },
    {
        "time": 1587452820000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 64,
            "pH": 6.5
        }
    },
    {
        "time": 1587453180000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 68,
            "pH": 6.7
        }
    },
    {
        "time": 1587453540000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 7.2
        }
    },
    {
        "time": 1587453900000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 64,
            "pH": 7.3
        }
    },
    {
        "time": 1587454260000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61.5,
            "pH": 6.5
        }
    },
    {
        "time": 1587454620000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 64.2,
            "pH": 7.2
        }
    },
    {
        "time": 1587454980000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61.5
        }
    },
    {
        "time": 1587455340000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 60.8,
            "pH": 7
        }
    },
    {
        "time": 1587455700000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 64.2,
            "pH": 7.1
        }
    },
    {
        "time": 1587456060000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62
        }
    },
    {
        "time": 1587456420000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 7.1
        }
    },
    {
        "time": 1587456780000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 64,
            "pH": 6.7
        }
    },
    {
        "time": 1587457140000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 68,
            "pH": 6.9
        }
    },
    {
        "time": 1587457500000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61
        }
    },
    {
        "time": 1587457860000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61.5,
            "pH": 7.1
        }
    },
    {
        "time": 1587458220000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61,
            "pH": 7.1
        }
    },
    {
        "time": 1587458580000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 66
        }
    },
    {
        "time": 1587458940000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 60.8,
            "pH": 6.8
        }
    },
    {
        "time": 1587459300000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61,
            "pH": 7.1
        }
    },
    {
        "time": 1587459660000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61,
            "pH": 7.4
        }
    },
    {
        "time": 1587460020000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 66.2,
            "pH": 7.1
        }
    },
    {
        "time": 1587460380000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 7.1
        }
    },
    {
        "time": 1587460740000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62
        }
    },
    {
        "time": 1587461100000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 64.2,
            "pH": 6.8
        }
    },
    {
        "time": 1587461460000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 66.2,
            "pH": 7.2
        }
    },
    {
        "time": 1587461820000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 6.9
        }
    },
    {
        "time": 1587462180000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61,
            "pH": 6.9
        }
    },
    {
        "time": 1587462540000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 68,
            "pH": 7.4
        }
    },
    {
        "time": 1587462900000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 66
        }
    },
    {
        "time": 1587463260000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 68,
            "pH": 7.1
        }
    },
    {
        "time": 1587463620000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 66,
            "pH": 6.9
        }
    },
    {
        "time": 1587463980000,
        "sensorId": "uuid0100",
        "data": {}
    },
    {
        "time": 1587464340000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 68,
            "pH": 7.1
        }
    },
    {
        "time": 1587464700000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62.1,
            "pH": 7.4
        }
    },
    {
        "time": 1587465060000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 7.2
        }
    },
    {
        "time": 1587465420000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 6.9
        }
    },
    {
        "time": 1587465780000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61,
            "pH": 6.9
        }
    },
    {
        "time": 1587466140000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 66.2,
            "pH": 6.8
        }
    },
    {
        "time": 1587466500000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 66,
            "pH": 7.1
        }
    },
    {
        "time": 1587466860000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 7.3
        }
    },
    {
        "time": 1587467220000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 6.5
        }
    },
    {
        "time": 1587467580000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 6.9
        }
    },
    {
        "time": 1587467940000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6
        }
    },
    {
        "time": 1587468300000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 6.9
        }
    },
    {
        "time": 1587468660000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 58,
            "pH": 7
        }
    },
    {
        "time": 1587469020000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 6.8
        }
    },
    {
        "time": 1587469380000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 6.8
        }
    },
    {
        "time": 1587469740000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55.4,
            "pH": 6.7
        }
    },
    {
        "time": 1587470100000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55.4,
            "pH": 7
        }
    },
    {
        "time": 1587470460000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 7.3
        }
    },
    {
        "time": 1587470820000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 7.1
        }
    },
    {
        "time": 1587471180000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 6.5
        }
    },
    {
        "time": 1587471540000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 6.9
        }
    },
    {
        "time": 1587471900000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 7.1
        }
    },
    {
        "time": 1587472260000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 7.1
        }
    },
    {
        "time": 1587472620000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 58
        }
    },
    {
        "time": 1587472980000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 6.8
        }
    },
    {
        "time": 1587473340000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59,
            "pH": 6.9
        }
    },
    {
        "time": 1587473700000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 6.5
        }
    },
    {
        "time": 1587474060000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 7.1
        }
    },
    {
        "time": 1587474420000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 7.1
        }
    },
    {
        "time": 1587474780000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 58,
            "pH": 7.4
        }
    },
    {
        "time": 1587475140000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 7.1
        }
    },
    {
        "time": 1587475500000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 7.3
        }
    },
    {
        "time": 1587475860000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 6.8
        }
    },
    {
        "time": 1587476220000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2
        }
    },
    {
        "time": 1587476580000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 7.4
        }
    },
    {
        "time": 1587476940000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 7.4
        }
    },
    {
        "time": 1587477300000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 7.1
        }
    },
    {
        "time": 1587477660000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 6.9
        }
    },
    {
        "time": 1587478020000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 7
        }
    },
    {
        "time": 1587478380000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 58,
            "pH": 6.9
        }
    },
    {
        "time": 1587478740000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55.4,
            "pH": 6.9
        }
    },
    {
        "time": 1587479100000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 7.2
        }
    },
    {
        "time": 1587479460000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 6.7
        }
    },
    {
        "time": 1587479820000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 7.2
        }
    },
    {
        "time": 1587480180000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 6.9
        }
    },
    {
        "time": 1587480540000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55,
            "pH": 7
        }
    },
    {
        "time": 1587480900000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 7.2
        }
    },
    {
        "time": 1587481260000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 6.9
        }
    },
    {
        "time": 1587481620000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 58,
            "pH": 7.4
        }
    },
    {
        "time": 1587481980000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55,
            "pH": 7.3
        }
    },
    {
        "time": 1587482340000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 58,
            "pH": 6.5
        }
    },
    {
        "time": 1587482700000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 7.2
        }
    },
    {
        "time": 1587483060000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55.4,
            "pH": 7
        }
    },
    {
        "time": 1587483420000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 6.9
        }
    },
    {
        "time": 1587483780000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 6.9
        }
    },
    {
        "time": 1587484140000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 7.3
        }
    },
    {
        "time": 1587484500000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 6.9
        }
    },
    {
        "time": 1587484860000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7,
            "pH": 6.8
        }
    },
    {
        "time": 1587485220000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59,
            "pH": 6.5
        }
    },
    {
        "time": 1587485580000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 58,
            "pH": 7
        }
    },
    {
        "time": 1587485940000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 6.8
        }
    },
    {
        "time": 1587486300000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 7.1
        }
    },
    {
        "time": 1587486660000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55,
            "pH": 6.9
        }
    },
    {
        "time": 1587487020000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 7.2
        }
    },
    {
        "time": 1587487380000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 6.8
        }
    },
    {
        "time": 1587487740000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 7.2
        }
    },
    {
        "time": 1587488100000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 6.5
        }
    },
    {
        "time": 1587488460000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 7.2
        }
    },
    {
        "time": 1587488820000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55.4,
            "pH": 7.4
        }
    },
    {
        "time": 1587489180000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 58,
            "pH": 6.8
        }
    },
    {
        "time": 1587489540000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 6.8
        }
    },
    {
        "time": 1587489900000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7,
            "pH": 7.1
        }
    },
    {
        "time": 1587490260000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55,
            "pH": 7
        }
    },
    {
        "time": 1587490620000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 6.8
        }
    },
    {
        "time": 1587490980000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 6.7
        }
    },
    {
        "time": 1587491340000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55.4,
            "pH": 6.8
        }
    },
    {
        "time": 1587491700000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59,
            "pH": 7.4
        }
    },
    {
        "time": 1587492060000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 7
        }
    },
    {
        "time": 1587492420000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62
        }
    },
    {
        "time": 1587492780000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55
        }
    },
    {
        "time": 1587493140000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 7.2
        }
    },
    {
        "time": 1587493500000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 6.9
        }
    },
    {
        "time": 1587493860000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55,
            "pH": 7.1
        }
    },
    {
        "time": 1587494220000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 7.2
        }
    },
    {
        "time": 1587494580000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55.4,
            "pH": 7.2
        }
    },
    {
        "time": 1587494940000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 7.4
        }
    },
    {
        "time": 1587495300000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 7.1
        }
    },
    {
        "time": 1587495660000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 6.9
        }
    },
    {
        "time": 1587496020000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59,
            "pH": 7.3
        }
    },
    {
        "time": 1587496380000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 7.2
        }
    },
    {
        "time": 1587496740000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 7.4
        }
    },
    {
        "time": 1587497100000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 7.3
        }
    },
    {
        "time": 1587497460000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55
        }
    },
    {
        "time": 1587497820000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55.4,
            "pH": 6.8
        }
    },
    {
        "time": 1587498180000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59
        }
    },
    {
        "time": 1587498540000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55,
            "pH": 7.1
        }
    },
    {
        "time": 1587498900000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 7
        }
    },
    {
        "time": 1587499260000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55,
            "pH": 6.9
        }
    },
    {
        "time": 1587499620000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 6.8
        }
    },
    {
        "time": 1587499980000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 6.5
        }
    },
    {
        "time": 1587500340000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 7.1
        }
    },
    {
        "time": 1587500700000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 7.2
        }
    },
    {
        "time": 1587501060000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 7.3
        }
    },
    {
        "time": 1587501420000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 7.3
        }
    },
    {
        "time": 1587501780000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55,
            "pH": 6.7
        }
    },
    {
        "time": 1587502140000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 7.3
        }
    },
    {
        "time": 1587502500000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 6.9
        }
    },
    {
        "time": 1587502860000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7,
            "pH": 6.5
        }
    },
    {
        "time": 1587503220000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55,
            "pH": 6.8
        }
    },
    {
        "time": 1587503580000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55.4,
            "pH": 6.9
        }
    },
    {
        "time": 1587503940000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 7.1
        }
    },
    {
        "time": 1587504300000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 6.8
        }
    },
    {
        "time": 1587504660000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 58,
            "pH": 7.4
        }
    },
    {
        "time": 1587505020000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 6.8
        }
    },
    {
        "time": 1587505380000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 7.3
        }
    },
    {
        "time": 1587505740000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 6.8
        }
    },
    {
        "time": 1587506100000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55,
            "pH": 6.9
        }
    },
    {
        "time": 1587506460000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3
        }
    },
    {
        "time": 1587506820000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6
        }
    },
    {
        "time": 1587507180000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59,
            "pH": 7.2
        }
    },
    {
        "time": 1587507540000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 6.9
        }
    },
    {
        "time": 1587507900000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 6.8
        }
    },
    {
        "time": 1587508260000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 6.7
        }
    },
    {
        "time": 1587508620000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 6.7
        }
    },
    {
        "time": 1587508980000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 6.9
        }
    },
    {
        "time": 1587509340000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 6.7
        }
    },
    {
        "time": 1587509700000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 7.1
        }
    },
    {
        "time": 1587510060000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 7.1
        }
    },
    {
        "time": 1587510420000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 6.9
        }
    },
    {
        "time": 1587510780000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 7.2
        }
    },
    {
        "time": 1587511140000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59,
            "pH": 6.8
        }
    },
    {
        "time": 1587511500000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55,
            "pH": 7.2
        }
    },
    {
        "time": 1587511860000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 6.8
        }
    },
    {
        "time": 1587512220000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 7.2
        }
    },
    {
        "time": 1587512580000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 7.4
        }
    },
    {
        "time": 1587512940000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 6.8
        }
    },
    {
        "time": 1587513300000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 7.1
        }
    },
    {
        "time": 1587513660000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2
        }
    },
    {
        "time": 1587514020000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 6.7
        }
    },
    {
        "time": 1587514380000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7,
            "pH": 7.2
        }
    },
    {
        "time": 1587514740000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55.4
        }
    },
    {
        "time": 1587515100000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 7.1
        }
    },
    {
        "time": 1587515460000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 7.3
        }
    },
    {
        "time": 1587515820000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 58,
            "pH": 7.2
        }
    },
    {
        "time": 1587516180000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 7.1
        }
    },
    {
        "time": 1587516540000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 7
        }
    },
    {
        "time": 1587516900000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 7.2
        }
    },
    {
        "time": 1587517260000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 7.1
        }
    },
    {
        "time": 1587517620000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 58,
            "pH": 6.8
        }
    },
    {
        "time": 1587517980000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7,
            "pH": 7
        }
    },
    {
        "time": 1587518340000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 7.1
        }
    },
    {
        "time": 1587518700000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 6.7
        }
    },
    {
        "time": 1587519060000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2
        }
    },
    {
        "time": 1587519420000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 6.9
        }
    },
    {
        "time": 1587519780000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7,
            "pH": 7.2
        }
    },
    {
        "time": 1587520140000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 7.1
        }
    },
    {
        "time": 1587520500000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 6.7
        }
    },
    {
        "time": 1587520860000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 6.9
        }
    },
    {
        "time": 1587521220000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 7
        }
    },
    {
        "time": 1587521580000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 6.5
        }
    },
    {
        "time": 1587521940000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55,
            "pH": 7.4
        }
    },
    {
        "time": 1587522300000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55.4,
            "pH": 6.9
        }
    },
    {
        "time": 1587522660000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 7.1
        }
    },
    {
        "time": 1587523020000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 7.2
        }
    },
    {
        "time": 1587523380000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 6.8
        }
    },
    {
        "time": 1587523740000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 7.3
        }
    },
    {
        "time": 1587524100000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 7.3
        }
    },
    {
        "time": 1587524460000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 7.4
        }
    },
    {
        "time": 1587524820000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 7.2
        }
    },
    {
        "time": 1587525180000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 6.9
        }
    },
    {
        "time": 1587525540000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 7.1
        }
    },
    {
        "time": 1587525900000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 7.1
        }
    },
    {
        "time": 1587526260000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59,
            "pH": 7
        }
    },
    {
        "time": 1587526620000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 7.1
        }
    },
    {
        "time": 1587526980000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55.4,
            "pH": 6.8
        }
    },
    {
        "time": 1587527340000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7,
            "pH": 7.4
        }
    },
    {
        "time": 1587527700000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 6.9
        }
    },
    {
        "time": 1587528060000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 6.5
        }
    },
    {
        "time": 1587528420000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 6.8
        }
    },
    {
        "time": 1587528780000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 7
        }
    },
    {
        "time": 1587529140000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7,
            "pH": 7.3
        }
    },
    {
        "time": 1587529500000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 7.1
        }
    },
    {
        "time": 1587529860000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 6.7
        }
    },
    {
        "time": 1587530220000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59,
            "pH": 7
        }
    },
    {
        "time": 1587530580000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 58,
            "pH": 7.1
        }
    },
    {
        "time": 1587530940000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59,
            "pH": 6.9
        }
    },
    {
        "time": 1587531300000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 6.5
        }
    },
    {
        "time": 1587531660000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 66.2,
            "pH": 6.8
        }
    },
    {
        "time": 1587532020000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 68,
            "pH": 6.5
        }
    },
    {
        "time": 1587532380000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 7.2
        }
    },
    {
        "time": 1587532740000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 60.8
        }
    },
    {
        "time": 1587533100000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 66.2,
            "pH": 6.9
        }
    },
    {
        "time": 1587533460000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62.1,
            "pH": 7.4
        }
    },
    {
        "time": 1587533820000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 66.2,
            "pH": 7.1
        }
    },
    {
        "time": 1587534180000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 7.2
        }
    },
    {
        "time": 1587534540000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 66,
            "pH": 7.4
        }
    },
    {
        "time": 1587534900000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 66.2,
            "pH": 7.1
        }
    },
    {
        "time": 1587535260000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61,
            "pH": 6.8
        }
    },
    {
        "time": 1587535620000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 6.8
        }
    },
    {
        "time": 1587535980000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61,
            "pH": 6.9
        }
    },
    {
        "time": 1587536340000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 66.2,
            "pH": 6.5
        }
    },
    {
        "time": 1587536700000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 6.5
        }
    },
    {
        "time": 1587537060000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 7.1
        }
    },
    {
        "time": 1587537420000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 66.2,
            "pH": 6.9
        }
    },
    {
        "time": 1587537780000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 7
        }
    },
    {
        "time": 1587538140000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 64.2,
            "pH": 7.2
        }
    },
    {
        "time": 1587538500000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 6.5
        }
    },
    {
        "time": 1587538860000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61,
            "pH": 7.1
        }
    },
    {
        "time": 1587539220000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 66.2,
            "pH": 6.8
        }
    },
    {
        "time": 1587539580000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61,
            "pH": 7.3
        }
    },
    {
        "time": 1587539940000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 64,
            "pH": 6.9
        }
    },
    {
        "time": 1587540300000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 6.9
        }
    },
    {
        "time": 1587540660000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 64.2,
            "pH": 6.9
        }
    },
    {
        "time": 1587541020000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 7.1
        }
    },
    {
        "time": 1587541380000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 66,
            "pH": 6.5
        }
    },
    {
        "time": 1587541740000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 68,
            "pH": 7.1
        }
    },
    {
        "time": 1587542100000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 6.7
        }
    },
    {
        "time": 1587542460000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 66,
            "pH": 6.9
        }
    },
    {
        "time": 1587542820000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 7
        }
    },
    {
        "time": 1587543180000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 64,
            "pH": 7.2
        }
    },
    {
        "time": 1587543540000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 7.3
        }
    },
    {
        "time": 1587543900000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 68,
            "pH": 6.9
        }
    },
    {
        "time": 1587544260000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61.5,
            "pH": 6.5
        }
    },
    {
        "time": 1587544620000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 7.3
        }
    },
    {
        "time": 1587544980000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 7.1
        }
    },
    {
        "time": 1587545340000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 66.2,
            "pH": 6.5
        }
    },
    {
        "time": 1587545700000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 7.1
        }
    },
    {
        "time": 1587546060000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61.5,
            "pH": 7
        }
    },
    {
        "time": 1587546420000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62.1,
            "pH": 7
        }
    },
    {
        "time": 1587546780000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 64,
            "pH": 6.9
        }
    },
    {
        "time": 1587547140000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 60.8,
            "pH": 6.7
        }
    },
    {
        "time": 1587547500000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 6.7
        }
    },
    {
        "time": 1587547860000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 66.2,
            "pH": 6.8
        }
    },
    {
        "time": 1587548220000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 66.2,
            "pH": 7
        }
    },
    {
        "time": 1587548580000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 68,
            "pH": 6.9
        }
    },
    {
        "time": 1587548940000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 64.2,
            "pH": 7.4
        }
    },
    {
        "time": 1587549300000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62.1,
            "pH": 7.2
        }
    },
    {
        "time": 1587549660000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 64.2,
            "pH": 7.2
        }
    },
    {
        "time": 1587550020000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 7.1
        }
    },
    {
        "time": 1587550380000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 66,
            "pH": 7.4
        }
    },
    {
        "time": 1587550740000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62
        }
    },
    {
        "time": 1587551100000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 60.8,
            "pH": 7
        }
    },
    {
        "time": 1587551460000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61,
            "pH": 7.3
        }
    },
    {
        "time": 1587551820000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 61,
            "pH": 7.2
        }
    },
    {
        "time": 1587552180000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 66.2,
            "pH": 7.2
        }
    },
    {
        "time": 1587552540000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 64,
            "pH": 6.8
        }
    },
    {
        "time": 1587552900000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62
        }
    },
    {
        "time": 1587553260000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55.4,
            "pH": 6.5
        }
    },
    {
        "time": 1587553620000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 7
        }
    },
    {
        "time": 1587553980000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 7
        }
    },
    {
        "time": 1587554340000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55.4,
            "pH": 6.5
        }
    },
    {
        "time": 1587554700000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55,
            "pH": 7.4
        }
    },
    {
        "time": 1587555060000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 7
        }
    },
    {
        "time": 1587555420000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7,
            "pH": 7.2
        }
    },
    {
        "time": 1587555780000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 7.2
        }
    },
    {
        "time": 1587556140000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55,
            "pH": 7.4
        }
    },
    {
        "time": 1587556500000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 58,
            "pH": 6.7
        }
    },
    {
        "time": 1587556860000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 6.7
        }
    },
    {
        "time": 1587557220000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59,
            "pH": 7
        }
    },
    {
        "time": 1587557580000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 6.8
        }
    },
    {
        "time": 1587557940000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 7
        }
    },
    {
        "time": 1587558300000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7,
            "pH": 6.9
        }
    },
    {
        "time": 1587558660000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 7.4
        }
    },
    {
        "time": 1587559020000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 58,
            "pH": 6.8
        }
    },
    {
        "time": 1587559380000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59,
            "pH": 6.9
        }
    },
    {
        "time": 1587559740000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 6.8
        }
    },
    {
        "time": 1587560100000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 7.3
        }
    },
    {
        "time": 1587560460000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 7.1
        }
    },
    {
        "time": 1587560820000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 6.7
        }
    },
    {
        "time": 1587561180000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 6.9
        }
    },
    {
        "time": 1587561540000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 7.4
        }
    },
    {
        "time": 1587561900000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 7.1
        }
    },
    {
        "time": 1587562260000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 58,
            "pH": 6.9
        }
    },
    {
        "time": 1587562620000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 7
        }
    },
    {
        "time": 1587562980000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 7.1
        }
    },
    {
        "time": 1587563340000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 7.4
        }
    },
    {
        "time": 1587563700000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 58,
            "pH": 7.3
        }
    },
    {
        "time": 1587564060000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 6.8
        }
    },
    {
        "time": 1587564420000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 7
        }
    },
    {
        "time": 1587564780000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 7.4
        }
    },
    {
        "time": 1587565140000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 6.8
        }
    },
    {
        "time": 1587565500000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 7.1
        }
    },
    {
        "time": 1587565860000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 7.3
        }
    },
    {
        "time": 1587566220000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 6.8
        }
    },
    {
        "time": 1587566580000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59,
            "pH": 7.2
        }
    },
    {
        "time": 1587566940000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63
        }
    },
    {
        "time": 1587567300000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 7.1
        }
    },
    {
        "time": 1587567660000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 6.5
        }
    },
    {
        "time": 1587568020000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 6.9
        }
    },
    {
        "time": 1587568380000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 7.1
        }
    },
    {
        "time": 1587568740000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 58,
            "pH": 6.8
        }
    },
    {
        "time": 1587569100000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 6.8
        }
    },
    {
        "time": 1587569460000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 6.8
        }
    },
    {
        "time": 1587569820000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 6.9
        }
    },
    {
        "time": 1587570180000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 58,
            "pH": 6.8
        }
    },
    {
        "time": 1587570540000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55,
            "pH": 6.8
        }
    },
    {
        "time": 1587570900000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55,
            "pH": 7.3
        }
    },
    {
        "time": 1587571260000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 7.4
        }
    },
    {
        "time": 1587571620000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 6.8
        }
    },
    {
        "time": 1587571980000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 6.5
        }
    },
    {
        "time": 1587572340000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 58,
            "pH": 6.8
        }
    },
    {
        "time": 1587572700000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 6.5
        }
    },
    {
        "time": 1587573060000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59,
            "pH": 7.2
        }
    },
    {
        "time": 1587573420000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 6.9
        }
    },
    {
        "time": 1587573780000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55.4,
            "pH": 6.8
        }
    },
    {
        "time": 1587574140000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59,
            "pH": 7.2
        }
    },
    {
        "time": 1587574500000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 58,
            "pH": 6.8
        }
    },
    {
        "time": 1587574860000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 7.3
        }
    },
    {
        "time": 1587575220000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 58
        }
    },
    {
        "time": 1587575580000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 6.9
        }
    },
    {
        "time": 1587575940000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 6.7
        }
    },
    {
        "time": 1587576300000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 6.9
        }
    },
    {
        "time": 1587576660000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 6.9
        }
    },
    {
        "time": 1587577020000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 6.8
        }
    },
    {
        "time": 1587577380000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 58
        }
    },
    {
        "time": 1587577740000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 7.2
        }
    },
    {
        "time": 1587578100000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 6.9
        }
    },
    {
        "time": 1587578460000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 58,
            "pH": 7.1
        }
    },
    {
        "time": 1587578820000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 6.7
        }
    },
    {
        "time": 1587579180000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 6.7
        }
    },
    {
        "time": 1587579540000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7,
            "pH": 6.8
        }
    },
    {
        "time": 1587579900000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 6.7
        }
    },
    {
        "time": 1587580260000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 6.9
        }
    },
    {
        "time": 1587580620000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 7.2
        }
    },
    {
        "time": 1587580980000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55.4,
            "pH": 6.5
        }
    },
    {
        "time": 1587581340000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 7.1
        }
    },
    {
        "time": 1587581700000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 6.8
        }
    },
    {
        "time": 1587582060000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 7
        }
    },
    {
        "time": 1587582420000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 6.5
        }
    },
    {
        "time": 1587582780000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62
        }
    },
    {
        "time": 1587583140000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59,
            "pH": 6.9
        }
    },
    {
        "time": 1587583500000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7,
            "pH": 6.9
        }
    },
    {
        "time": 1587583860000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 58,
            "pH": 6.8
        }
    },
    {
        "time": 1587584220000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 7.1
        }
    },
    {
        "time": 1587584580000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54
        }
    },
    {
        "time": 1587584940000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 6.9
        }
    },
    {
        "time": 1587585300000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 7.2
        }
    },
    {
        "time": 1587585660000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 7
        }
    },
    {
        "time": 1587586020000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 7.1
        }
    },
    {
        "time": 1587586380000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 7.4
        }
    },
    {
        "time": 1587586740000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55.4,
            "pH": 7.3
        }
    },
    {
        "time": 1587587100000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 7.1
        }
    },
    {
        "time": 1587587460000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 6.7
        }
    },
    {
        "time": 1587587820000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 7.2
        }
    },
    {
        "time": 1587588180000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 58,
            "pH": 7.2
        }
    },
    {
        "time": 1587588540000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 6.9
        }
    },
    {
        "time": 1587588900000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 6.5
        }
    },
    {
        "time": 1587589260000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55,
            "pH": 7.1
        }
    },
    {
        "time": 1587589620000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57
        }
    },
    {
        "time": 1587589980000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 6.9
        }
    },
    {
        "time": 1587590340000,
        "sensorId": "uuid0100",
        "data": {}
    },
    {
        "time": 1587590700000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55,
            "pH": 6.9
        }
    },
    {
        "time": 1587591060000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56.2,
            "pH": 7
        }
    },
    {
        "time": 1587591420000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 6.7
        }
    },
    {
        "time": 1587591780000,
        "sensorId": "uuid0100",
        "data": {
            "pH": 7.3
        }
    },
    {
        "time": 1587592140000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55,
            "pH": 6.7
        }
    },
    {
        "time": 1587592500000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 6.5
        }
    },
    {
        "time": 1587592860000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 7.4
        }
    },
    {
        "time": 1587593220000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 7.2
        }
    },
    {
        "time": 1587593580000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 7.1
        }
    },
    {
        "time": 1587593940000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7,
            "pH": 6.8
        }
    },
    {
        "time": 1587594300000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 6.9
        }
    },
    {
        "time": 1587594660000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 7.1
        }
    },
    {
        "time": 1587595020000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 56,
            "pH": 6.7
        }
    },
    {
        "time": 1587595380000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59,
            "pH": 6.9
        }
    },
    {
        "time": 1587595740000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 7.4
        }
    },
    {
        "time": 1587596100000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 6.5
        }
    },
    {
        "time": 1587596460000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 7.2
        }
    },
    {
        "time": 1587596820000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55.4,
            "pH": 6.5
        }
    },
    {
        "time": 1587597180000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 62,
            "pH": 6.8
        }
    },
    {
        "time": 1587597540000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 55.4,
            "pH": 6.8
        }
    },
    {
        "time": 1587597900000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 63,
            "pH": 7.2
        }
    },
    {
        "time": 1587598260000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 7
        }
    },
    {
        "time": 1587598620000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59.6,
            "pH": 6.5
        }
    },
    {
        "time": 1587598980000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57.7,
            "pH": 7.2
        }
    },
    {
        "time": 1587599340000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59,
            "pH": 6.9
        }
    },
    {
        "time": 1587599700000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 57,
            "pH": 7.4
        }
    },
    {
        "time": 1587600060000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 54,
            "pH": 6.8
        }
    },
    {
        "time": 1587600420000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 59,
            "pH": 6.8
        }
    },
    {
        "time": 1587600780000,
        "sensorId": "uuid0100",
        "data": {
            "moisture": 53.3,
            "pH": 6.8
        }
    }
];

Soil.create(soilData)
.then(soilFromDB => {
console.log(`Created ${soilFromDB.length} soil datasets`);
mongoose.connection.close();
})
.catch(err => console.log(`An error occurred while getting soil datasets from the DB: ${err}`));