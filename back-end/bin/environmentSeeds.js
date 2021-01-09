const mongoose = require('mongoose');
const Environment = require('../models/Environment-model');

mongoose.connect(`mongodb://localhost/greenhouse-back-end`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const environmentData = [
            {
                "time": 1586908800000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 49,
                    "temperature": 6.8
                }
            },
            {
                "time": 1586909160000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 44,
                    "temperature": 8.9
                }
            },
            {
                "time": 1586909520000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 63.4,
                    "temperature": 5.7
                }
            },
            {
                "time": 1586909880000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 56.3,
                    "temperature": 2.3
                }
            },
            {
                "time": 1586910240000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 44.4,
                    "temperature": 5.5
                }
            },
            {
                "time": 1586910600000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 63.4,
                    "temperature": 8.9
                }
            },
            {
                "time": 1586910960000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 38
                }
            },
            {
                "time": 1586911320000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 35,
                    "temperature": 6.2
                }
            },
            {
                "time": 1586911680000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 60,
                    "temperature": 7.1
                }
            },
            {
                "time": 1586912040000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 55,
                    "temperature": 3.4
                }
            },
            {
                "time": 1586912400000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 63.4,
                    "temperature": 6.2
                }
            },
            {
                "time": 1586912760000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 53,
                    "temperature": 4
                }
            },
            {
                "time": 1586913120000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 51,
                    "temperature": 6.8
                }
            },
            {
                "time": 1586913480000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 36.7,
                    "temperature": 8.9
                }
            },
            {
                "time": 1586913840000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 44,
                    "temperature": 3
                }
            },
            {
                "time": 1586914200000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 53.8,
                    "temperature": 5.7
                }
            },
            {
                "time": 1586914560000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 44,
                    "temperature": 5.5
                }
            },
            {
                "time": 1586914920000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 71,
                    "temperature": 4.2
                }
            },
            {
                "time": 1586915280000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 34.6,
                    "temperature": 3.4
                }
            },
            {
                "time": 1586915640000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 48,
                    "temperature": 2.3
                }
            },
            {
                "time": 1586916000000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 48.5,
                    "temperature": 5.7
                }
            },
            {
                "time": 1586916360000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 59,
                    "temperature": 5.5
                }
            },
            {
                "time": 1586916720000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 56.3,
                    "temperature": 4
                }
            },
            {
                "time": 1586917080000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 62,
                    "temperature": 6.8
                }
            },
            {
                "time": 1586917440000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 38,
                    "temperature": 4.2
                }
            },
            {
                "time": 1586917800000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 53.8,
                    "temperature": 8.9
                }
            },
            {
                "time": 1586918160000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 46,
                    "temperature": 5.7
                }
            },
            {
                "time": 1586918520000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 34.6,
                    "temperature": 6.2
                }
            },
            {
                "time": 1586918880000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 46,
                    "temperature": 8.9
                }
            },
            {
                "time": 1586919240000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 44.4,
                    "temperature": 3
                }
            },
            {
                "time": 1586919600000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 1222,
                    "relative humidity": 53.8,
                    "temperature": 6.3
                }
            },
            {
                "time": 1586919960000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4502,
                    "relative humidity": 55
                }
            },
            {
                "time": 1586920320000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 3334,
                    "temperature": 9.2
                }
            },
            {
                "time": 1586920680000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 890,
                    "relative humidity": 35,
                    "temperature": 8.1
                }
            },
            {
                "time": 1586921040000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 569,
                    "relative humidity": 36.7,
                    "temperature": 9.9
                }
            },
            {
                "time": 1586921400000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 1020,
                    "relative humidity": 44.4,
                    "temperature": 6.4
                }
            },
            {
                "time": 1586921760000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 1020,
                    "relative humidity": 50,
                    "temperature": 7.2
                }
            },
            {
                "time": 1586922120000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4432,
                    "relative humidity": 44.4,
                    "temperature": 7.5
                }
            },
            {
                "time": 1586922480000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 2227,
                    "relative humidity": 49,
                    "temperature": 7.2
                }
            },
            {
                "time": 1586922840000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5413,
                    "relative humidity": 59,
                    "temperature": 3.6
                }
            },
            {
                "time": 1586923200000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 1113,
                    "relative humidity": 48,
                    "temperature": 9.2
                }
            },
            {
                "time": 1586923560000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 3821,
                    "relative humidity": 59,
                    "temperature": 9.9
                }
            },
            {
                "time": 1586923920000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4216,
                    "relative humidity": 44,
                    "temperature": 3.6
                }
            },
            {
                "time": 1586924280000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 890,
                    "relative humidity": 56.3
                }
            },
            {
                "time": 1586924640000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 672,
                    "relative humidity": 34.6
                }
            },
            {
                "time": 1586925000000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 1030,
                    "relative humidity": 51,
                    "temperature": 9.1
                }
            },
            {
                "time": 1586925360000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 2227,
                    "relative humidity": 36.7,
                    "temperature": 7.5
                }
            },
            {
                "time": 1586925720000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4216,
                    "relative humidity": 55,
                    "temperature": 9.9
                }
            },
            {
                "time": 1586926080000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4432,
                    "relative humidity": 48.5,
                    "temperature": 3.6
                }
            },
            {
                "time": 1586926440000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 569,
                    "relative humidity": 56.3,
                    "temperature": 6.4
                }
            },
            {
                "time": 1586926800000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 3821,
                    "relative humidity": 48.5
                }
            },
            {
                "time": 1586927160000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 3821,
                    "relative humidity": 35,
                    "temperature": 8.1
                }
            },
            {
                "time": 1586927520000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4432,
                    "relative humidity": 34.6,
                    "temperature": 8.5
                }
            },
            {
                "time": 1586927880000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5090,
                    "relative humidity": 55,
                    "temperature": 7.5
                }
            },
            {
                "time": 1586928240000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 890,
                    "relative humidity": 49,
                    "temperature": 7.5
                }
            },
            {
                "time": 1586928600000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4239,
                    "relative humidity": 35,
                    "temperature": 3.6
                }
            },
            {
                "time": 1586928960000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 2878,
                    "relative humidity": 53,
                    "temperature": 7.2
                }
            },
            {
                "time": 1586929320000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 1020,
                    "relative humidity": 49,
                    "temperature": 6.3
                }
            },
            {
                "time": 1586929680000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 890,
                    "relative humidity": 62,
                    "temperature": 9.1
                }
            },
            {
                "time": 1586930040000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 672,
                    "relative humidity": 59,
                    "temperature": 8.1
                }
            },
            {
                "time": 1586930400000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5698,
                    "relative humidity": 63.4,
                    "temperature": 14.6
                }
            },
            {
                "time": 1586930760000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5698,
                    "relative humidity": 50,
                    "temperature": 14
                }
            },
            {
                "time": 1586931120000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 6012,
                    "relative humidity": 53,
                    "temperature": 17.4
                }
            },
            {
                "time": 1586931480000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9902,
                    "relative humidity": 38,
                    "temperature": 10.2
                }
            },
            {
                "time": 1586931840000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9023,
                    "relative humidity": 71,
                    "temperature": 10.5
                }
            },
            {
                "time": 1586932200000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 3560,
                    "relative humidity": 53,
                    "temperature": 18.9
                }
            },
            {
                "time": 1586932560000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13003,
                    "relative humidity": 48,
                    "temperature": 16.3
                }
            },
            {
                "time": 1586932920000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8111,
                    "relative humidity": 49,
                    "temperature": 23
                }
            },
            {
                "time": 1586933280000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5562,
                    "relative humidity": 71,
                    "temperature": 11
                }
            },
            {
                "time": 1586933640000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13562,
                    "relative humidity": 71,
                    "temperature": 15
                }
            },
            {
                "time": 1586934000000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13003,
                    "relative humidity": 50,
                    "temperature": 10.3
                }
            },
            {
                "time": 1586934360000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9902,
                    "relative humidity": 71,
                    "temperature": 19.2
                }
            },
            {
                "time": 1586934720000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10553,
                    "relative humidity": 60,
                    "temperature": 23
                }
            },
            {
                "time": 1586935080000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 3560,
                    "relative humidity": 50,
                    "temperature": 18.9
                }
            },
            {
                "time": 1586935440000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7713,
                    "relative humidity": 59,
                    "temperature": 12.2
                }
            },
            {
                "time": 1586935800000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13562,
                    "relative humidity": 53,
                    "temperature": 11
                }
            },
            {
                "time": 1586936160000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 3560,
                    "temperature": 10.5
                }
            },
            {
                "time": 1586936520000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10553,
                    "relative humidity": 53,
                    "temperature": 11
                }
            },
            {
                "time": 1586936880000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10003,
                    "relative humidity": 44,
                    "temperature": 12.2
                }
            },
            {
                "time": 1586937240000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10553,
                    "relative humidity": 46,
                    "temperature": 10.5
                }
            },
            {
                "time": 1586937600000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8766,
                    "relative humidity": 46,
                    "temperature": 10.3
                }
            },
            {
                "time": 1586937960000,
                "sensorId": "uuid0129",
                "data": {
                    "relative humidity": 44,
                    "temperature": 23
                }
            },
            {
                "time": 1586938320000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 6012,
                    "relative humidity": 53,
                    "temperature": 10.2
                }
            },
            {
                "time": 1586938680000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 3560,
                    "relative humidity": 71,
                    "temperature": 10.2
                }
            },
            {
                "time": 1586939040000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8111,
                    "relative humidity": 63.4,
                    "temperature": 10.5
                }
            },
            {
                "time": 1586939400000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8111,
                    "relative humidity": 36.7,
                    "temperature": 14.6
                }
            },
            {
                "time": 1586939760000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13003,
                    "relative humidity": 38,
                    "temperature": 14
                }
            },
            {
                "time": 1586940120000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12003,
                    "relative humidity": 51,
                    "temperature": 18.4
                }
            },
            {
                "time": 1586940480000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7321,
                    "relative humidity": 46,
                    "temperature": 21
                }
            },
            {
                "time": 1586940840000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9801,
                    "relative humidity": 63.4,
                    "temperature": 18.4
                }
            },
            {
                "time": 1586941200000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12003,
                    "relative humidity": 59,
                    "temperature": 15
                }
            },
            {
                "time": 1586941560000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12310,
                    "relative humidity": 59,
                    "temperature": 22
                }
            },
            {
                "time": 1586941920000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10003,
                    "relative humidity": 38,
                    "temperature": 18.4
                }
            },
            {
                "time": 1586942280000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8892,
                    "relative humidity": 48,
                    "temperature": 19.2
                }
            },
            {
                "time": 1586942640000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8990,
                    "relative humidity": 56.3,
                    "temperature": 15
                }
            },
            {
                "time": 1586943000000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9801,
                    "relative humidity": 63.4,
                    "temperature": 22
                }
            },
            {
                "time": 1586943360000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9021,
                    "relative humidity": 56.3,
                    "temperature": 17.4
                }
            },
            {
                "time": 1586943720000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13562,
                    "relative humidity": 62,
                    "temperature": 18.9
                }
            },
            {
                "time": 1586944080000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8766,
                    "relative humidity": 35,
                    "temperature": 14
                }
            },
            {
                "time": 1586944440000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 6602,
                    "relative humidity": 34.6,
                    "temperature": 10.3
                }
            },
            {
                "time": 1586944800000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10003,
                    "relative humidity": 59,
                    "temperature": 14.6
                }
            },
            {
                "time": 1586945160000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13562,
                    "relative humidity": 59,
                    "temperature": 22
                }
            },
            {
                "time": 1586945520000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8766,
                    "temperature": 17.4
                }
            },
            {
                "time": 1586945880000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7788,
                    "relative humidity": 53,
                    "temperature": 10.2
                }
            },
            {
                "time": 1586946240000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4231,
                    "relative humidity": 56.3,
                    "temperature": 18.4
                }
            },
            {
                "time": 1586946600000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9801,
                    "relative humidity": 50,
                    "temperature": 14
                }
            },
            {
                "time": 1586946960000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9023,
                    "relative humidity": 48.5,
                    "temperature": 22
                }
            },
            {
                "time": 1586947320000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7788,
                    "relative humidity": 44.4,
                    "temperature": 19.2
                }
            },
            {
                "time": 1586947680000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 3560,
                    "relative humidity": 34.6,
                    "temperature": 17.4
                }
            },
            {
                "time": 1586948040000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8111,
                    "relative humidity": 63.4,
                    "temperature": 16.3
                }
            },
            {
                "time": 1586948400000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10003,
                    "relative humidity": 62,
                    "temperature": 14
                }
            },
            {
                "time": 1586948760000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7713,
                    "relative humidity": 55,
                    "temperature": 10.3
                }
            },
            {
                "time": 1586949120000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12556,
                    "relative humidity": 62,
                    "temperature": 23
                }
            },
            {
                "time": 1586949480000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8892,
                    "relative humidity": 63.4,
                    "temperature": 11
                }
            },
            {
                "time": 1586949840000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7321,
                    "relative humidity": 35,
                    "temperature": 17.9
                }
            },
            {
                "time": 1586950200000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13562,
                    "relative humidity": 55,
                    "temperature": 22
                }
            },
            {
                "time": 1586950560000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12003,
                    "relative humidity": 59,
                    "temperature": 10.2
                }
            },
            {
                "time": 1586950920000,
                "sensorId": "uuid0129",
                "data": {
                    "relative humidity": 62,
                    "temperature": 14
                }
            },
            {
                "time": 1586951280000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 6012,
                    "relative humidity": 44.4,
                    "temperature": 18.4
                }
            },
            {
                "time": 1586951640000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13045,
                    "relative humidity": 64,
                    "temperature": 12.2
                }
            },
            {
                "time": 1586952000000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8111,
                    "relative humidity": 35,
                    "temperature": 17.5
                }
            },
            {
                "time": 1586952360000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12003,
                    "relative humidity": 44.4,
                    "temperature": 19.4
                }
            },
            {
                "time": 1586952720000,
                "sensorId": "uuid0129",
                "data": {
                    "relative humidity": 53.8,
                    "temperature": 17.5
                }
            },
            {
                "time": 1586953080000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8766,
                    "temperature": 15
                }
            },
            {
                "time": 1586953440000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10003,
                    "relative humidity": 56.3,
                    "temperature": 22
                }
            },
            {
                "time": 1586953800000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10899,
                    "relative humidity": 71,
                    "temperature": 14
                }
            },
            {
                "time": 1586954160000,
                "sensorId": "uuid0129",
                "data": {
                    "relative humidity": 48.5,
                    "temperature": 22
                }
            },
            {
                "time": 1586954520000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10899,
                    "relative humidity": 60
                }
            },
            {
                "time": 1586954880000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8766,
                    "relative humidity": 50,
                    "temperature": 12
                }
            },
            {
                "time": 1586955240000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5698,
                    "relative humidity": 51,
                    "temperature": 17.4
                }
            },
            {
                "time": 1586955600000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9023,
                    "relative humidity": 36.7,
                    "temperature": 15
                }
            },
            {
                "time": 1586955960000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 6012,
                    "relative humidity": 49,
                    "temperature": 10.2
                }
            },
            {
                "time": 1586956320000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12310,
                    "relative humidity": 59
                }
            },
            {
                "time": 1586956680000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12310,
                    "relative humidity": 35,
                    "temperature": 12
                }
            },
            {
                "time": 1586957040000,
                "sensorId": "uuid0129",
                "data": {
                    "relative humidity": 60,
                    "temperature": 22
                }
            },
            {
                "time": 1586957400000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10553,
                    "relative humidity": 62,
                    "temperature": 19.4
                }
            },
            {
                "time": 1586957760000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12003,
                    "relative humidity": 35,
                    "temperature": 21
                }
            },
            {
                "time": 1586958120000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5562,
                    "relative humidity": 35
                }
            },
            {
                "time": 1586958480000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9801,
                    "relative humidity": 49,
                    "temperature": 18.4
                }
            },
            {
                "time": 1586958840000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7788,
                    "relative humidity": 46,
                    "temperature": 19.4
                }
            },
            {
                "time": 1586959200000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 3560,
                    "relative humidity": 53,
                    "temperature": 21
                }
            },
            {
                "time": 1586959560000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7321,
                    "relative humidity": 59,
                    "temperature": 12.2
                }
            },
            {
                "time": 1586959920000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5698,
                    "relative humidity": 51
                }
            },
            {
                "time": 1586960280000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10003,
                    "relative humidity": 60,
                    "temperature": 17.9
                }
            },
            {
                "time": 1586960640000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7321,
                    "relative humidity": 34.6,
                    "temperature": 14.6
                }
            },
            {
                "time": 1586961000000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 6602,
                    "relative humidity": 62
                }
            },
            {
                "time": 1586961360000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10003,
                    "relative humidity": 62,
                    "temperature": 17.5
                }
            },
            {
                "time": 1586961720000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12003,
                    "relative humidity": 44.4,
                    "temperature": 17.4
                }
            },
            {
                "time": 1586962080000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9801,
                    "relative humidity": 51,
                    "temperature": 19.4
                }
            },
            {
                "time": 1586962440000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13045,
                    "relative humidity": 60,
                    "temperature": 11
                }
            },
            {
                "time": 1586962800000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 6602,
                    "relative humidity": 48.5,
                    "temperature": 14.6
                }
            },
            {
                "time": 1586963160000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10553,
                    "relative humidity": 49
                }
            },
            {
                "time": 1586963520000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 6602,
                    "relative humidity": 35,
                    "temperature": 12.2
                }
            },
            {
                "time": 1586963880000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8766,
                    "relative humidity": 48,
                    "temperature": 22
                }
            },
            {
                "time": 1586964240000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8892,
                    "relative humidity": 63.4,
                    "temperature": 12
                }
            },
            {
                "time": 1586964600000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4231,
                    "relative humidity": 35,
                    "temperature": 11
                }
            },
            {
                "time": 1586964960000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12556,
                    "relative humidity": 49,
                    "temperature": 15
                }
            },
            {
                "time": 1586965320000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10553,
                    "relative humidity": 35,
                    "temperature": 14
                }
            },
            {
                "time": 1586965680000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7321,
                    "relative humidity": 62,
                    "temperature": 19.4
                }
            },
            {
                "time": 1586966040000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7321,
                    "relative humidity": 55,
                    "temperature": 17.5
                }
            },
            {
                "time": 1586966400000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9021,
                    "relative humidity": 63.4,
                    "temperature": 14
                }
            },
            {
                "time": 1586966760000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9902,
                    "relative humidity": 55,
                    "temperature": 14
                }
            },
            {
                "time": 1586967120000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10003,
                    "relative humidity": 53,
                    "temperature": 21
                }
            },
            {
                "time": 1586967480000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8111,
                    "relative humidity": 44,
                    "temperature": 10.2
                }
            },
            {
                "time": 1586967840000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9801,
                    "relative humidity": 49,
                    "temperature": 17.4
                }
            },
            {
                "time": 1586968200000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9902,
                    "relative humidity": 71
                }
            },
            {
                "time": 1586968560000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8111,
                    "relative humidity": 59,
                    "temperature": 17.4
                }
            },
            {
                "time": 1586968920000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12003,
                    "relative humidity": 59,
                    "temperature": 12
                }
            },
            {
                "time": 1586969280000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12003,
                    "relative humidity": 59,
                    "temperature": 21
                }
            },
            {
                "time": 1586969640000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7788,
                    "relative humidity": 49,
                    "temperature": 18.4
                }
            },
            {
                "time": 1586970000000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4432,
                    "relative humidity": 35,
                    "temperature": 8.5
                }
            },
            {
                "time": 1586970360000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 3123,
                    "relative humidity": 63.4,
                    "temperature": 7.2
                }
            },
            {
                "time": 1586970720000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5542,
                    "relative humidity": 44,
                    "temperature": 8.3
                }
            },
            {
                "time": 1586971080000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 3334,
                    "relative humidity": 49,
                    "temperature": 8.5
                }
            },
            {
                "time": 1586971440000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 890,
                    "relative humidity": 50,
                    "temperature": 8.1
                }
            },
            {
                "time": 1586971800000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 3123,
                    "relative humidity": 34.6,
                    "temperature": 6.4
                }
            },
            {
                "time": 1586972160000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 3334,
                    "relative humidity": 46,
                    "temperature": 8.5
                }
            },
            {
                "time": 1586972520000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 1113,
                    "relative humidity": 64,
                    "temperature": 7.2
                }
            },
            {
                "time": 1586972880000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4239,
                    "relative humidity": 59,
                    "temperature": 7.5
                }
            },
            {
                "time": 1586973240000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 569,
                    "relative humidity": 44.4,
                    "temperature": 6.4
                }
            },
            {
                "time": 1586973600000,
                "sensorId": "uuid0129",
                "data": {
                    "relative humidity": 53.8,
                    "temperature": 9.9
                }
            },
            {
                "time": 1586973960000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 1030,
                    "relative humidity": 36.7,
                    "temperature": 8.1
                }
            },
            {
                "time": 1586974320000,
                "sensorId": "uuid0129",
                "data": {
                    "relative humidity": 49,
                    "temperature": 6.3
                }
            },
            {
                "time": 1586974680000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 569,
                    "relative humidity": 62,
                    "temperature": 8.3
                }
            },
            {
                "time": 1586975040000,
                "sensorId": "uuid0129",
                "data": {
                    "relative humidity": 48,
                    "temperature": 8.1
                }
            },
            {
                "time": 1586975400000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 3334,
                    "relative humidity": 62,
                    "temperature": 9.9
                }
            },
            {
                "time": 1586975760000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 890,
                    "relative humidity": 56.3,
                    "temperature": 8.1
                }
            },
            {
                "time": 1586976120000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 1004,
                    "relative humidity": 59,
                    "temperature": 7.2
                }
            },
            {
                "time": 1586976480000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 3123,
                    "relative humidity": 62,
                    "temperature": 9.1
                }
            },
            {
                "time": 1586976840000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 3123,
                    "relative humidity": 50,
                    "temperature": 8.1
                }
            },
            {
                "time": 1586977200000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 51
                }
            },
            {
                "time": 1586977560000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 63.4,
                    "temperature": 3
                }
            },
            {
                "time": 1586977920000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 53,
                    "temperature": 4
                }
            },
            {
                "time": 1586978280000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 71,
                    "temperature": 8.5
                }
            },
            {
                "time": 1586978640000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 38,
                    "temperature": 8.5
                }
            },
            {
                "time": 1586979000000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 35,
                    "temperature": 4
                }
            },
            {
                "time": 1586979360000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 44,
                    "temperature": 8.9
                }
            },
            {
                "time": 1586979720000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 36.7,
                    "temperature": 5.5
                }
            },
            {
                "time": 1586980080000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 56.3,
                    "temperature": 6.2
                }
            },
            {
                "time": 1586980440000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 63.4,
                    "temperature": 5.7
                }
            },
            {
                "time": 1586980800000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 62,
                    "temperature": 5.5
                }
            },
            {
                "time": 1586981160000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 62,
                    "temperature": 3
                }
            },
            {
                "time": 1586981520000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 62,
                    "temperature": 4.2
                }
            },
            {
                "time": 1586981880000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 35
                }
            },
            {
                "time": 1586982240000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 60,
                    "temperature": 3
                }
            },
            {
                "time": 1586982600000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 60,
                    "temperature": 6.2
                }
            },
            {
                "time": 1586982960000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 48,
                    "temperature": 5.7
                }
            },
            {
                "time": 1586983320000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 48,
                    "temperature": 4.2
                }
            },
            {
                "time": 1586983680000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "temperature": 8.5
                }
            },
            {
                "time": 1586984040000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 51,
                    "temperature": 8.5
                }
            },
            {
                "time": 1586984400000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 44,
                    "temperature": 6
                }
            },
            {
                "time": 1586984760000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 59,
                    "temperature": 5.7
                }
            },
            {
                "time": 1586985120000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 59,
                    "temperature": 3.4
                }
            },
            {
                "time": 1586985480000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 53,
                    "temperature": 4.2
                }
            },
            {
                "time": 1586985840000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 48.5
                }
            },
            {
                "time": 1586986200000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 60,
                    "temperature": 5.5
                }
            },
            {
                "time": 1586986560000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 60
                }
            },
            {
                "time": 1586986920000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 63.4,
                    "temperature": 3
                }
            },
            {
                "time": 1586987280000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 64,
                    "temperature": 6.2
                }
            },
            {
                "time": 1586987640000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 59,
                    "temperature": 4.2
                }
            },
            {
                "time": 1586988000000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 38,
                    "temperature": 6
                }
            },
            {
                "time": 1586988360000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 56.3,
                    "temperature": 6.2
                }
            },
            {
                "time": 1586988720000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "temperature": 8.5
                }
            },
            {
                "time": 1586989080000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 46,
                    "temperature": 8.5
                }
            },
            {
                "time": 1586989440000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 36.7,
                    "temperature": 5.5
                }
            },
            {
                "time": 1586989800000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 48.5,
                    "temperature": 8.5
                }
            },
            {
                "time": 1586990160000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 55,
                    "temperature": 4
                }
            },
            {
                "time": 1586990520000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 44,
                    "temperature": 6.2
                }
            },
            {
                "time": 1586990880000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 60,
                    "temperature": 2.3
                }
            },
            {
                "time": 1586991240000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 55
                }
            },
            {
                "time": 1586991600000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 62,
                    "temperature": 5.7
                }
            },
            {
                "time": 1586991960000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 34.6,
                    "temperature": 5.7
                }
            },
            {
                "time": 1586992320000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 46,
                    "temperature": 4
                }
            },
            {
                "time": 1586992680000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 62,
                    "temperature": 4.2
                }
            },
            {
                "time": 1586993040000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 44,
                    "temperature": 5.7
                }
            },
            {
                "time": 1586993400000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 35,
                    "temperature": 8.9
                }
            },
            {
                "time": 1586993760000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 44.4,
                    "temperature": 6.2
                }
            },
            {
                "time": 1586994120000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 59
                }
            },
            {
                "time": 1586994480000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 53,
                    "temperature": 6
                }
            },
            {
                "time": 1586994840000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "temperature": 8.5
                }
            },
            {
                "time": 1586995200000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 34.6,
                    "temperature": 8.5
                }
            },
            {
                "time": 1586995560000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 59,
                    "temperature": 4.2
                }
            },
            {
                "time": 1586995920000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 63.4,
                    "temperature": 5.7
                }
            },
            {
                "time": 1586996280000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 53.8,
                    "temperature": 4
                }
            },
            {
                "time": 1586996640000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 46,
                    "temperature": 2.3
                }
            },
            {
                "time": 1586997000000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 34.6,
                    "temperature": 4.2
                }
            },
            {
                "time": 1586997360000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 35,
                    "temperature": 6
                }
            },
            {
                "time": 1586997720000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 60,
                    "temperature": 4.2
                }
            },
            {
                "time": 1586998080000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 44.4,
                    "temperature": 5.5
                }
            },
            {
                "time": 1586998440000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 34.6,
                    "temperature": 8.9
                }
            },
            {
                "time": 1586998800000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 48,
                    "temperature": 6.8
                }
            },
            {
                "time": 1586999160000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 50,
                    "temperature": 4
                }
            },
            {
                "time": 1586999520000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 63.4,
                    "temperature": 4.2
                }
            },
            {
                "time": 1586999880000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 59,
                    "temperature": 3
                }
            },
            {
                "time": 1587000240000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 44,
                    "temperature": 5.5
                }
            },
            {
                "time": 1587000600000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 51,
                    "temperature": 6.2
                }
            },
            {
                "time": 1587000960000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 49,
                    "temperature": 3.4
                }
            },
            {
                "time": 1587001320000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 62,
                    "temperature": 6.8
                }
            },
            {
                "time": 1587001680000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "temperature": 6
                }
            },
            {
                "time": 1587002040000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 53.8,
                    "temperature": 4.2
                }
            },
            {
                "time": 1587002400000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "temperature": 5.5
                }
            },
            {
                "time": 1587002760000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "temperature": 3
                }
            },
            {
                "time": 1587003120000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 38,
                    "temperature": 7.1
                }
            },
            {
                "time": 1587003480000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 62
                }
            },
            {
                "time": 1587003840000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 55,
                    "temperature": 4.2
                }
            },
            {
                "time": 1587004200000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 56.3,
                    "temperature": 4.2
                }
            },
            {
                "time": 1587004560000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 59,
                    "temperature": 3.4
                }
            },
            {
                "time": 1587004920000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 71,
                    "temperature": 5.5
                }
            },
            {
                "time": 1587005280000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 46,
                    "temperature": 8.9
                }
            },
            {
                "time": 1587005640000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 63.4,
                    "temperature": 3.4
                }
            },
            {
                "time": 1587006000000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 3122,
                    "relative humidity": 59,
                    "temperature": 7.2
                }
            },
            {
                "time": 1587006360000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 280,
                    "relative humidity": 44
                }
            },
            {
                "time": 1587006720000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5542,
                    "relative humidity": 35,
                    "temperature": 8.5
                }
            },
            {
                "time": 1587007080000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 1004,
                    "relative humidity": 53.8,
                    "temperature": 8.1
                }
            },
            {
                "time": 1587007440000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 1992,
                    "temperature": 7.5
                }
            },
            {
                "time": 1587007800000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 1222,
                    "relative humidity": 34.6,
                    "temperature": 9.2
                }
            },
            {
                "time": 1587008160000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4239,
                    "relative humidity": 34.6,
                    "temperature": 8.5
                }
            },
            {
                "time": 1587008520000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 1222,
                    "relative humidity": 56.3,
                    "temperature": 6.3
                }
            },
            {
                "time": 1587008880000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 2799,
                    "relative humidity": 63.4,
                    "temperature": 6.3
                }
            },
            {
                "time": 1587009240000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 3821,
                    "relative humidity": 55,
                    "temperature": 7.2
                }
            },
            {
                "time": 1587009600000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 3334,
                    "relative humidity": 49,
                    "temperature": 9.9
                }
            },
            {
                "time": 1587009960000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 2266,
                    "relative humidity": 64,
                    "temperature": 6.3
                }
            },
            {
                "time": 1587010320000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 1030,
                    "relative humidity": 62,
                    "temperature": 7.2
                }
            },
            {
                "time": 1587010680000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 1987,
                    "relative humidity": 35
                }
            },
            {
                "time": 1587011040000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 1992,
                    "relative humidity": 55,
                    "temperature": 9.9
                }
            },
            {
                "time": 1587011400000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 890,
                    "relative humidity": 71,
                    "temperature": 8.1
                }
            },
            {
                "time": 1587011760000,
                "sensorId": "uuid0129",
                "data": {
                    "relative humidity": 63.4,
                    "temperature": 7.2
                }
            },
            {
                "time": 1587012120000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4432,
                    "relative humidity": 60,
                    "temperature": 8.3
                }
            },
            {
                "time": 1587012480000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 569,
                    "relative humidity": 48,
                    "temperature": 7.2
                }
            },
            {
                "time": 1587012840000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 2878,
                    "relative humidity": 48.5,
                    "temperature": 9.9
                }
            },
            {
                "time": 1587013200000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4432,
                    "relative humidity": 53.8
                }
            },
            {
                "time": 1587013560000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 1113,
                    "relative humidity": 59,
                    "temperature": 3.6
                }
            },
            {
                "time": 1587013920000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4432,
                    "relative humidity": 59
                }
            },
            {
                "time": 1587014280000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4239,
                    "relative humidity": 60,
                    "temperature": 8.5
                }
            },
            {
                "time": 1587014640000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 3123,
                    "relative humidity": 59,
                    "temperature": 6.3
                }
            },
            {
                "time": 1587015000000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 1992,
                    "relative humidity": 53.8,
                    "temperature": 3.6
                }
            },
            {
                "time": 1587015360000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5413,
                    "temperature": 7.2
                }
            },
            {
                "time": 1587015720000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 1113,
                    "relative humidity": 50
                }
            },
            {
                "time": 1587016080000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 1113,
                    "relative humidity": 44.4,
                    "temperature": 8.5
                }
            },
            {
                "time": 1587016440000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 2227,
                    "relative humidity": 51,
                    "temperature": 8.1
                }
            },
            {
                "time": 1587016800000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10553,
                    "relative humidity": 35,
                    "temperature": 17.4
                }
            },
            {
                "time": 1587017160000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9902,
                    "relative humidity": 59,
                    "temperature": 12.2
                }
            },
            {
                "time": 1587017520000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9023,
                    "relative humidity": 46,
                    "temperature": 19.4
                }
            },
            {
                "time": 1587017880000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10899,
                    "relative humidity": 44.4,
                    "temperature": 15
                }
            },
            {
                "time": 1587018240000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10899,
                    "relative humidity": 46,
                    "temperature": 18.9
                }
            },
            {
                "time": 1587018600000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12310,
                    "relative humidity": 53,
                    "temperature": 21
                }
            },
            {
                "time": 1587018960000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8111,
                    "relative humidity": 59,
                    "temperature": 15
                }
            },
            {
                "time": 1587019320000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10003,
                    "relative humidity": 55,
                    "temperature": 10.5
                }
            },
            {
                "time": 1587019680000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13562,
                    "relative humidity": 71,
                    "temperature": 23
                }
            },
            {
                "time": 1587020040000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10553,
                    "relative humidity": 34.6,
                    "temperature": 10.2
                }
            },
            {
                "time": 1587020400000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13003,
                    "relative humidity": 44,
                    "temperature": 11
                }
            },
            {
                "time": 1587020760000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12556,
                    "relative humidity": 59,
                    "temperature": 21
                }
            },
            {
                "time": 1587021120000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9801,
                    "temperature": 15
                }
            },
            {
                "time": 1587021480000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10899,
                    "relative humidity": 53,
                    "temperature": 16.3
                }
            },
            {
                "time": 1587021840000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8766,
                    "relative humidity": 50,
                    "temperature": 19.4
                }
            },
            {
                "time": 1587022200000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 6012,
                    "relative humidity": 71,
                    "temperature": 17.5
                }
            },
            {
                "time": 1587022560000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5698,
                    "relative humidity": 56.3,
                    "temperature": 22
                }
            },
            {
                "time": 1587022920000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7788,
                    "relative humidity": 44,
                    "temperature": 17.5
                }
            },
            {
                "time": 1587023280000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8766,
                    "relative humidity": 46,
                    "temperature": 18.4
                }
            },
            {
                "time": 1587023640000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7713,
                    "relative humidity": 49,
                    "temperature": 22
                }
            },
            {
                "time": 1587024000000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9902,
                    "relative humidity": 60,
                    "temperature": 19.4
                }
            },
            {
                "time": 1587024360000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9902,
                    "relative humidity": 55,
                    "temperature": 17.4
                }
            },
            {
                "time": 1587024720000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7713,
                    "relative humidity": 38,
                    "temperature": 19.4
                }
            },
            {
                "time": 1587025080000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9021,
                    "relative humidity": 56.3,
                    "temperature": 16.3
                }
            },
            {
                "time": 1587025440000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10003,
                    "relative humidity": 49,
                    "temperature": 18.4
                }
            },
            {
                "time": 1587025800000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9021,
                    "relative humidity": 55,
                    "temperature": 18.9
                }
            },
            {
                "time": 1587026160000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7713,
                    "relative humidity": 36.7,
                    "temperature": 19.2
                }
            },
            {
                "time": 1587026520000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10553,
                    "relative humidity": 53,
                    "temperature": 18.4
                }
            },
            {
                "time": 1587026880000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7788,
                    "relative humidity": 56.3,
                    "temperature": 11
                }
            },
            {
                "time": 1587027240000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13562,
                    "relative humidity": 64,
                    "temperature": 18.9
                }
            },
            {
                "time": 1587027600000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7901,
                    "relative humidity": 62,
                    "temperature": 10.2
                }
            },
            {
                "time": 1587027960000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8111,
                    "relative humidity": 59,
                    "temperature": 18.9
                }
            },
            {
                "time": 1587028320000,
                "sensorId": "uuid0129",
                "data": {
                    "relative humidity": 64,
                    "temperature": 19.4
                }
            },
            {
                "time": 1587028680000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5562,
                    "relative humidity": 38,
                    "temperature": 14.6
                }
            },
            {
                "time": 1587029040000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12556,
                    "relative humidity": 36.7,
                    "temperature": 17.9
                }
            },
            {
                "time": 1587029400000,
                "sensorId": "uuid0129",
                "data": {
                    "relative humidity": 56.3,
                    "temperature": 14
                }
            },
            {
                "time": 1587029760000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9021,
                    "relative humidity": 71,
                    "temperature": 12.2
                }
            },
            {
                "time": 1587030120000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12310,
                    "relative humidity": 34.6,
                    "temperature": 12
                }
            },
            {
                "time": 1587030480000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 6602,
                    "relative humidity": 56.3,
                    "temperature": 22
                }
            },
            {
                "time": 1587030840000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7901,
                    "relative humidity": 60,
                    "temperature": 10.5
                }
            },
            {
                "time": 1587031200000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7901,
                    "relative humidity": 51,
                    "temperature": 14
                }
            },
            {
                "time": 1587031560000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4231,
                    "relative humidity": 46,
                    "temperature": 14
                }
            },
            {
                "time": 1587031920000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10003,
                    "temperature": 14
                }
            },
            {
                "time": 1587032280000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7788,
                    "temperature": 12.2
                }
            },
            {
                "time": 1587032640000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12556,
                    "relative humidity": 55,
                    "temperature": 15
                }
            },
            {
                "time": 1587033000000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 3560,
                    "relative humidity": 60,
                    "temperature": 23
                }
            },
            {
                "time": 1587033360000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7901,
                    "relative humidity": 49,
                    "temperature": 14.6
                }
            },
            {
                "time": 1587033720000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5562,
                    "relative humidity": 51,
                    "temperature": 22
                }
            },
            {
                "time": 1587034080000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9801,
                    "relative humidity": 55,
                    "temperature": 10.3
                }
            },
            {
                "time": 1587034440000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13562,
                    "relative humidity": 49,
                    "temperature": 21
                }
            },
            {
                "time": 1587034800000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9023,
                    "relative humidity": 56.3,
                    "temperature": 10.5
                }
            },
            {
                "time": 1587035160000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8892,
                    "relative humidity": 49,
                    "temperature": 14.6
                }
            },
            {
                "time": 1587035520000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9902,
                    "temperature": 19.4
                }
            },
            {
                "time": 1587035880000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9902,
                    "relative humidity": 62,
                    "temperature": 12
                }
            },
            {
                "time": 1587036240000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5562,
                    "relative humidity": 71,
                    "temperature": 10.3
                }
            },
            {
                "time": 1587036600000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9801,
                    "relative humidity": 62,
                    "temperature": 17.5
                }
            },
            {
                "time": 1587036960000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8892,
                    "temperature": 17.9
                }
            },
            {
                "time": 1587037320000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12310,
                    "relative humidity": 38,
                    "temperature": 15
                }
            },
            {
                "time": 1587037680000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10553,
                    "relative humidity": 59,
                    "temperature": 14
                }
            },
            {
                "time": 1587038040000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5562,
                    "relative humidity": 60,
                    "temperature": 16.3
                }
            },
            {
                "time": 1587038400000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13562,
                    "relative humidity": 50,
                    "temperature": 16.3
                }
            },
            {
                "time": 1587038760000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9902,
                    "relative humidity": 63.4,
                    "temperature": 17.4
                }
            },
            {
                "time": 1587039120000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7713,
                    "relative humidity": 44,
                    "temperature": 14
                }
            },
            {
                "time": 1587039480000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9902,
                    "relative humidity": 44.4,
                    "temperature": 10.5
                }
            },
            {
                "time": 1587039840000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 3560,
                    "relative humidity": 55,
                    "temperature": 18.4
                }
            },
            {
                "time": 1587040200000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5698,
                    "relative humidity": 36.7,
                    "temperature": 10.2
                }
            },
            {
                "time": 1587040560000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5562,
                    "relative humidity": 35,
                    "temperature": 23
                }
            },
            {
                "time": 1587040920000,
                "sensorId": "uuid0129",
                "data": {
                    "relative humidity": 55
                }
            },
            {
                "time": 1587041280000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12556,
                    "relative humidity": 56.3,
                    "temperature": 15
                }
            },
            {
                "time": 1587041640000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8111,
                    "relative humidity": 64,
                    "temperature": 11
                }
            },
            {
                "time": 1587042000000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13003,
                    "relative humidity": 49,
                    "temperature": 18.9
                }
            },
            {
                "time": 1587042360000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 3560,
                    "relative humidity": 60,
                    "temperature": 17.5
                }
            },
            {
                "time": 1587042720000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 6602,
                    "temperature": 12
                }
            },
            {
                "time": 1587043080000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5562,
                    "relative humidity": 59,
                    "temperature": 17.9
                }
            },
            {
                "time": 1587043440000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8111,
                    "relative humidity": 48.5,
                    "temperature": 11
                }
            },
            {
                "time": 1587043800000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8111,
                    "relative humidity": 59,
                    "temperature": 15
                }
            },
            {
                "time": 1587044160000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12003,
                    "relative humidity": 50,
                    "temperature": 19.2
                }
            },
            {
                "time": 1587044520000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8111,
                    "relative humidity": 71,
                    "temperature": 11
                }
            },
            {
                "time": 1587044880000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 3560,
                    "relative humidity": 63.4,
                    "temperature": 23
                }
            },
            {
                "time": 1587045240000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8111,
                    "relative humidity": 56.3,
                    "temperature": 17.5
                }
            },
            {
                "time": 1587045600000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13045,
                    "relative humidity": 53.8,
                    "temperature": 17.5
                }
            },
            {
                "time": 1587045960000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7901,
                    "relative humidity": 59,
                    "temperature": 10.3
                }
            },
            {
                "time": 1587046320000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10553,
                    "relative humidity": 35,
                    "temperature": 14
                }
            },
            {
                "time": 1587046680000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10899,
                    "relative humidity": 35,
                    "temperature": 19.2
                }
            },
            {
                "time": 1587047040000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9801,
                    "relative humidity": 48,
                    "temperature": 12
                }
            },
            {
                "time": 1587047400000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7901,
                    "relative humidity": 62,
                    "temperature": 12
                }
            },
            {
                "time": 1587047760000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7321,
                    "relative humidity": 53.8,
                    "temperature": 12
                }
            },
            {
                "time": 1587048120000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 6012,
                    "relative humidity": 63.4,
                    "temperature": 19.2
                }
            },
            {
                "time": 1587048480000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4231,
                    "relative humidity": 44.4,
                    "temperature": 15
                }
            },
            {
                "time": 1587048840000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8766,
                    "relative humidity": 34.6
                }
            },
            {
                "time": 1587049200000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9902,
                    "relative humidity": 35,
                    "temperature": 18.4
                }
            },
            {
                "time": 1587049560000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8766,
                    "relative humidity": 62,
                    "temperature": 17.4
                }
            },
            {
                "time": 1587049920000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7713,
                    "relative humidity": 63.4,
                    "temperature": 14
                }
            },
            {
                "time": 1587050280000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8766,
                    "relative humidity": 48.5,
                    "temperature": 17.5
                }
            },
            {
                "time": 1587050640000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7901,
                    "relative humidity": 44,
                    "temperature": 17.9
                }
            },
            {
                "time": 1587051000000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9021,
                    "temperature": 18.9
                }
            },
            {
                "time": 1587051360000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5698,
                    "relative humidity": 71,
                    "temperature": 19.2
                }
            },
            {
                "time": 1587051720000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9023,
                    "relative humidity": 44,
                    "temperature": 18.9
                }
            },
            {
                "time": 1587052080000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10553,
                    "relative humidity": 48,
                    "temperature": 19.2
                }
            },
            {
                "time": 1587052440000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7788,
                    "relative humidity": 56.3,
                    "temperature": 18.4
                }
            },
            {
                "time": 1587052800000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9801,
                    "relative humidity": 44,
                    "temperature": 12
                }
            },
            {
                "time": 1587053160000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13045,
                    "relative humidity": 44.4,
                    "temperature": 10.5
                }
            },
            {
                "time": 1587053520000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12556,
                    "relative humidity": 60,
                    "temperature": 16.3
                }
            },
            {
                "time": 1587053880000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7901,
                    "relative humidity": 62,
                    "temperature": 10.3
                }
            },
            {
                "time": 1587054240000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12310,
                    "relative humidity": 55,
                    "temperature": 23
                }
            },
            {
                "time": 1587054600000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8990,
                    "relative humidity": 44,
                    "temperature": 11
                }
            },
            {
                "time": 1587054960000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 3560,
                    "relative humidity": 50,
                    "temperature": 14
                }
            },
            {
                "time": 1587055320000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5698,
                    "relative humidity": 48.5,
                    "temperature": 11
                }
            },
            {
                "time": 1587055680000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12310,
                    "relative humidity": 64,
                    "temperature": 14
                }
            },
            {
                "time": 1587056040000,
                "sensorId": "uuid0129",
                "data": {
                    "relative humidity": 55,
                    "temperature": 17.9
                }
            },
            {
                "time": 1587056400000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 280,
                    "relative humidity": 50,
                    "temperature": 7.2
                }
            },
            {
                "time": 1587056760000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 2094,
                    "relative humidity": 55,
                    "temperature": 8.3
                }
            },
            {
                "time": 1587057120000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 2799,
                    "relative humidity": 60,
                    "temperature": 8.5
                }
            },
            {
                "time": 1587057480000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 890,
                    "relative humidity": 63.4
                }
            },
            {
                "time": 1587057840000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4216,
                    "relative humidity": 62,
                    "temperature": 8.3
                }
            },
            {
                "time": 1587058200000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 3821,
                    "relative humidity": 34.6,
                    "temperature": 9.9
                }
            },
            {
                "time": 1587058560000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 2878,
                    "relative humidity": 71,
                    "temperature": 6.4
                }
            },
            {
                "time": 1587058920000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4502,
                    "relative humidity": 53,
                    "temperature": 8.3
                }
            },
            {
                "time": 1587059280000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 280,
                    "temperature": 9.1
                }
            },
            {
                "time": 1587059640000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5502,
                    "relative humidity": 35,
                    "temperature": 8.5
                }
            },
            {
                "time": 1587060000000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5542,
                    "relative humidity": 64,
                    "temperature": 6.4
                }
            },
            {
                "time": 1587060360000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4502,
                    "relative humidity": 56.3,
                    "temperature": 7.2
                }
            },
            {
                "time": 1587060720000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 1222,
                    "relative humidity": 56.3,
                    "temperature": 6.3
                }
            },
            {
                "time": 1587061080000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 2227,
                    "relative humidity": 51,
                    "temperature": 7.2
                }
            },
            {
                "time": 1587061440000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 3123,
                    "relative humidity": 59,
                    "temperature": 3.6
                }
            },
            {
                "time": 1587061800000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 280,
                    "relative humidity": 63.4,
                    "temperature": 9.9
                }
            },
            {
                "time": 1587062160000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 3334,
                    "relative humidity": 55,
                    "temperature": 8.1
                }
            },
            {
                "time": 1587062520000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4502,
                    "relative humidity": 36.7,
                    "temperature": 6.4
                }
            },
            {
                "time": 1587062880000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4432,
                    "relative humidity": 38,
                    "temperature": 9.9
                }
            },
            {
                "time": 1587063240000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 2799,
                    "relative humidity": 50,
                    "temperature": 9.1
                }
            },
            {
                "time": 1587063600000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 48,
                    "temperature": 3.4
                }
            },
            {
                "time": 1587063960000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 38,
                    "temperature": 5.5
                }
            },
            {
                "time": 1587064320000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 59,
                    "temperature": 4.2
                }
            },
            {
                "time": 1587064680000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 38,
                    "temperature": 4
                }
            },
            {
                "time": 1587065040000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 55,
                    "temperature": 3.4
                }
            },
            {
                "time": 1587065400000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 62,
                    "temperature": 4.2
                }
            },
            {
                "time": 1587065760000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 53,
                    "temperature": 6.8
                }
            },
            {
                "time": 1587066120000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 71,
                    "temperature": 7.1
                }
            },
            {
                "time": 1587066480000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 38,
                    "temperature": 8.9
                }
            },
            {
                "time": 1587066840000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 55,
                    "temperature": 6.2
                }
            },
            {
                "time": 1587067200000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 44,
                    "temperature": 3
                }
            },
            {
                "time": 1587067560000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 46,
                    "temperature": 5.5
                }
            },
            {
                "time": 1587067920000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 46,
                    "temperature": 8.5
                }
            },
            {
                "time": 1587068280000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 63.4,
                    "temperature": 6.8
                }
            },
            {
                "time": 1587068640000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 48,
                    "temperature": 6
                }
            },
            {
                "time": 1587069000000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 62,
                    "temperature": 6
                }
            },
            {
                "time": 1587069360000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "temperature": 8.9
                }
            },
            {
                "time": 1587069720000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 48
                }
            },
            {
                "time": 1587070080000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 35,
                    "temperature": 3.4
                }
            },
            {
                "time": 1587070440000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 63.4,
                    "temperature": 3.4
                }
            },
            {
                "time": 1587070800000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 55,
                    "temperature": 3
                }
            },
            {
                "time": 1587071160000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 34.6,
                    "temperature": 5.5
                }
            },
            {
                "time": 1587071520000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 55,
                    "temperature": 3.4
                }
            },
            {
                "time": 1587071880000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 50,
                    "temperature": 8.5
                }
            },
            {
                "time": 1587072240000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 56.3,
                    "temperature": 8.5
                }
            },
            {
                "time": 1587072600000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 44,
                    "temperature": 4.2
                }
            },
            {
                "time": 1587072960000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 63.4,
                    "temperature": 4.2
                }
            },
            {
                "time": 1587073320000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 55,
                    "temperature": 8.9
                }
            },
            {
                "time": 1587073680000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 56.3,
                    "temperature": 3.4
                }
            },
            {
                "time": 1587074040000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 55,
                    "temperature": 6.8
                }
            },
            {
                "time": 1587074400000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 36.7,
                    "temperature": 7.1
                }
            },
            {
                "time": 1587074760000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 59,
                    "temperature": 4.2
                }
            },
            {
                "time": 1587075120000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 51,
                    "temperature": 5.7
                }
            },
            {
                "time": 1587075480000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 71,
                    "temperature": 5.5
                }
            },
            {
                "time": 1587075840000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 34.6,
                    "temperature": 6.2
                }
            },
            {
                "time": 1587076200000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 36.7,
                    "temperature": 6.8
                }
            },
            {
                "time": 1587076560000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 34.6,
                    "temperature": 4
                }
            },
            {
                "time": 1587076920000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 35,
                    "temperature": 4.2
                }
            },
            {
                "time": 1587077280000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 62
                }
            },
            {
                "time": 1587077640000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 55,
                    "temperature": 4.2
                }
            },
            {
                "time": 1587078000000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 59,
                    "temperature": 6.8
                }
            },
            {
                "time": 1587078360000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "temperature": 5.5
                }
            },
            {
                "time": 1587078720000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 59,
                    "temperature": 6
                }
            },
            {
                "time": 1587079080000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 55,
                    "temperature": 7.1
                }
            },
            {
                "time": 1587079440000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 56.3,
                    "temperature": 6
                }
            },
            {
                "time": 1587079800000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 36.7,
                    "temperature": 6.8
                }
            },
            {
                "time": 1587080160000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 48.5,
                    "temperature": 4
                }
            },
            {
                "time": 1587080520000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 55,
                    "temperature": 5.5
                }
            },
            {
                "time": 1587080880000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 48.5,
                    "temperature": 2.3
                }
            },
            {
                "time": 1587081240000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 46,
                    "temperature": 6.8
                }
            },
            {
                "time": 1587081600000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 59,
                    "temperature": 5.5
                }
            },
            {
                "time": 1587081960000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 44.4,
                    "temperature": 6.2
                }
            },
            {
                "time": 1587082320000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 55,
                    "temperature": 5.7
                }
            },
            {
                "time": 1587082680000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 56.3,
                    "temperature": 6.8
                }
            },
            {
                "time": 1587083040000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 63.4,
                    "temperature": 6
                }
            },
            {
                "time": 1587083400000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 55,
                    "temperature": 4.2
                }
            },
            {
                "time": 1587083760000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 59,
                    "temperature": 3.4
                }
            },
            {
                "time": 1587084120000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 49,
                    "temperature": 6.2
                }
            },
            {
                "time": 1587084480000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 49,
                    "temperature": 8.5
                }
            },
            {
                "time": 1587084840000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 59,
                    "temperature": 5.5
                }
            },
            {
                "time": 1587085200000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 53,
                    "temperature": 4.2
                }
            },
            {
                "time": 1587085560000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 53.8,
                    "temperature": 6
                }
            },
            {
                "time": 1587085920000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 59,
                    "temperature": 8.9
                }
            },
            {
                "time": 1587086280000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 62,
                    "temperature": 7.1
                }
            },
            {
                "time": 1587086640000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 53,
                    "temperature": 4.2
                }
            },
            {
                "time": 1587087000000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 49,
                    "temperature": 8.5
                }
            },
            {
                "time": 1587087360000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 46,
                    "temperature": 4.2
                }
            },
            {
                "time": 1587087720000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 35,
                    "temperature": 6
                }
            },
            {
                "time": 1587088080000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 71,
                    "temperature": 4.2
                }
            },
            {
                "time": 1587088440000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 71,
                    "temperature": 3.4
                }
            },
            {
                "time": 1587088800000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 48,
                    "temperature": 3.4
                }
            },
            {
                "time": 1587089160000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 71,
                    "temperature": 6.2
                }
            },
            {
                "time": 1587089520000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 48,
                    "temperature": 6.8
                }
            },
            {
                "time": 1587089880000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 62,
                    "temperature": 5.7
                }
            },
            {
                "time": 1587090240000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 50,
                    "temperature": 2.3
                }
            },
            {
                "time": 1587090600000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 50
                }
            },
            {
                "time": 1587090960000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 36.7,
                    "temperature": 7.1
                }
            },
            {
                "time": 1587091320000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 50,
                    "temperature": 2.3
                }
            },
            {
                "time": 1587091680000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 44.4,
                    "temperature": 5.7
                }
            },
            {
                "time": 1587092040000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 56.3,
                    "temperature": 3
                }
            },
            {
                "time": 1587092400000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 1004,
                    "relative humidity": 62,
                    "temperature": 6.4
                }
            },
            {
                "time": 1587092760000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4432,
                    "relative humidity": 35,
                    "temperature": 6.4
                }
            },
            {
                "time": 1587093120000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 2878,
                    "relative humidity": 55,
                    "temperature": 9.2
                }
            },
            {
                "time": 1587093480000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 1992,
                    "relative humidity": 51,
                    "temperature": 8.1
                }
            },
            {
                "time": 1587093840000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 2094,
                    "relative humidity": 36.7,
                    "temperature": 8.1
                }
            },
            {
                "time": 1587094200000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4432,
                    "relative humidity": 38,
                    "temperature": 8.3
                }
            },
            {
                "time": 1587094560000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 3334,
                    "relative humidity": 53.8,
                    "temperature": 8.5
                }
            },
            {
                "time": 1587094920000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 1030,
                    "relative humidity": 49,
                    "temperature": 6.3
                }
            },
            {
                "time": 1587095280000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 890,
                    "relative humidity": 71
                }
            },
            {
                "time": 1587095640000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 672,
                    "relative humidity": 56.3,
                    "temperature": 9.1
                }
            },
            {
                "time": 1587096000000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5413,
                    "relative humidity": 59,
                    "temperature": 7.5
                }
            },
            {
                "time": 1587096360000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4502,
                    "relative humidity": 34.6,
                    "temperature": 7.2
                }
            },
            {
                "time": 1587096720000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4239,
                    "relative humidity": 44,
                    "temperature": 8.5
                }
            },
            {
                "time": 1587097080000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 3821,
                    "relative humidity": 36.7,
                    "temperature": 8.1
                }
            },
            {
                "time": 1587097440000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 1987,
                    "relative humidity": 35,
                    "temperature": 7.5
                }
            },
            {
                "time": 1587097800000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 1030,
                    "relative humidity": 53.8,
                    "temperature": 3.6
                }
            },
            {
                "time": 1587098160000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 280,
                    "relative humidity": 34.6,
                    "temperature": 7.5
                }
            },
            {
                "time": 1587098520000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 1992,
                    "relative humidity": 60
                }
            },
            {
                "time": 1587098880000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 890,
                    "relative humidity": 53,
                    "temperature": 7.5
                }
            },
            {
                "time": 1587099240000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 3123,
                    "relative humidity": 49
                }
            },
            {
                "time": 1587099600000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5090,
                    "relative humidity": 36.7,
                    "temperature": 8.1
                }
            },
            {
                "time": 1587099960000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 1004,
                    "relative humidity": 48,
                    "temperature": 8.5
                }
            },
            {
                "time": 1587100320000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 280,
                    "relative humidity": 53.8,
                    "temperature": 8.1
                }
            },
            {
                "time": 1587100680000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5413,
                    "relative humidity": 35,
                    "temperature": 7.5
                }
            },
            {
                "time": 1587101040000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 890,
                    "relative humidity": 62,
                    "temperature": 6.3
                }
            },
            {
                "time": 1587101400000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 1222,
                    "relative humidity": 64,
                    "temperature": 9.1
                }
            },
            {
                "time": 1587101760000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5413,
                    "relative humidity": 63.4,
                    "temperature": 9.2
                }
            },
            {
                "time": 1587102120000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4502,
                    "relative humidity": 53.8,
                    "temperature": 6.3
                }
            },
            {
                "time": 1587102480000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4502,
                    "relative humidity": 63.4,
                    "temperature": 8.1
                }
            },
            {
                "time": 1587102840000,
                "sensorId": "uuid0129",
                "data": {
                    "relative humidity": 53.8,
                    "temperature": 7.2
                }
            },
            {
                "time": 1587103200000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10003,
                    "relative humidity": 35,
                    "temperature": 10.2
                }
            },
            {
                "time": 1587103560000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13045,
                    "relative humidity": 44,
                    "temperature": 18.4
                }
            },
            {
                "time": 1587103920000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9902,
                    "relative humidity": 36.7,
                    "temperature": 14
                }
            },
            {
                "time": 1587104280000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8111,
                    "relative humidity": 46,
                    "temperature": 12.2
                }
            },
            {
                "time": 1587104640000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 3560,
                    "relative humidity": 62,
                    "temperature": 12.2
                }
            },
            {
                "time": 1587105000000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 6012,
                    "relative humidity": 44.4,
                    "temperature": 10.5
                }
            },
            {
                "time": 1587105360000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13562,
                    "relative humidity": 44.4,
                    "temperature": 17.5
                }
            },
            {
                "time": 1587105720000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13045,
                    "relative humidity": 35,
                    "temperature": 14
                }
            },
            {
                "time": 1587106080000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12310,
                    "relative humidity": 63.4,
                    "temperature": 18.9
                }
            },
            {
                "time": 1587106440000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8766,
                    "relative humidity": 63.4,
                    "temperature": 19.2
                }
            },
            {
                "time": 1587106800000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7321,
                    "relative humidity": 53,
                    "temperature": 21
                }
            },
            {
                "time": 1587107160000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9021,
                    "relative humidity": 55,
                    "temperature": 15
                }
            },
            {
                "time": 1587107520000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7901,
                    "relative humidity": 59,
                    "temperature": 17.4
                }
            },
            {
                "time": 1587107880000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13562,
                    "relative humidity": 60,
                    "temperature": 14
                }
            },
            {
                "time": 1587108240000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9023,
                    "relative humidity": 64,
                    "temperature": 17.9
                }
            },
            {
                "time": 1587108600000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9902,
                    "relative humidity": 46,
                    "temperature": 18.4
                }
            },
            {
                "time": 1587108960000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13003,
                    "relative humidity": 51,
                    "temperature": 10.2
                }
            },
            {
                "time": 1587109320000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 6602,
                    "relative humidity": 44,
                    "temperature": 12.2
                }
            },
            {
                "time": 1587109680000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10553,
                    "relative humidity": 55,
                    "temperature": 16.3
                }
            },
            {
                "time": 1587110040000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4231,
                    "relative humidity": 71
                }
            },
            {
                "time": 1587110400000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9902,
                    "relative humidity": 53.8
                }
            },
            {
                "time": 1587110760000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10553,
                    "relative humidity": 48,
                    "temperature": 17.9
                }
            },
            {
                "time": 1587111120000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12003,
                    "relative humidity": 44,
                    "temperature": 23
                }
            },
            {
                "time": 1587111480000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4231,
                    "relative humidity": 34.6,
                    "temperature": 10.3
                }
            },
            {
                "time": 1587111840000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9023,
                    "relative humidity": 62,
                    "temperature": 19.2
                }
            },
            {
                "time": 1587112200000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5562,
                    "relative humidity": 62,
                    "temperature": 10.2
                }
            },
            {
                "time": 1587112560000,
                "sensorId": "uuid0129",
                "data": {
                    "relative humidity": 55
                }
            },
            {
                "time": 1587112920000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7713,
                    "temperature": 19.4
                }
            },
            {
                "time": 1587113280000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 6012,
                    "relative humidity": 44,
                    "temperature": 12
                }
            },
            {
                "time": 1587113640000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9023,
                    "relative humidity": 48.5,
                    "temperature": 12
                }
            },
            {
                "time": 1587114000000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13562,
                    "relative humidity": 63.4,
                    "temperature": 10.2
                }
            },
            {
                "time": 1587114360000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9902,
                    "relative humidity": 53,
                    "temperature": 10.3
                }
            },
            {
                "time": 1587114720000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12556,
                    "relative humidity": 59,
                    "temperature": 15
                }
            },
            {
                "time": 1587115080000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12556,
                    "temperature": 23
                }
            },
            {
                "time": 1587115440000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12003,
                    "relative humidity": 59
                }
            },
            {
                "time": 1587115800000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13562,
                    "relative humidity": 59,
                    "temperature": 18.4
                }
            },
            {
                "time": 1587116160000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4231,
                    "relative humidity": 48,
                    "temperature": 18.4
                }
            },
            {
                "time": 1587116520000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9902,
                    "relative humidity": 53.8,
                    "temperature": 19.2
                }
            },
            {
                "time": 1587116880000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5698,
                    "relative humidity": 60,
                    "temperature": 16.3
                }
            },
            {
                "time": 1587117240000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13045,
                    "relative humidity": 71,
                    "temperature": 10.3
                }
            },
            {
                "time": 1587117600000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 6012,
                    "relative humidity": 60,
                    "temperature": 15
                }
            },
            {
                "time": 1587117960000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9023,
                    "relative humidity": 48.5,
                    "temperature": 16.3
                }
            },
            {
                "time": 1587118320000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8990,
                    "relative humidity": 59,
                    "temperature": 17.5
                }
            },
            {
                "time": 1587118680000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5698,
                    "relative humidity": 51,
                    "temperature": 14
                }
            },
            {
                "time": 1587119040000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10553,
                    "relative humidity": 46,
                    "temperature": 14
                }
            },
            {
                "time": 1587119400000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9021,
                    "relative humidity": 55,
                    "temperature": 14.6
                }
            },
            {
                "time": 1587119760000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7713,
                    "relative humidity": 63.4,
                    "temperature": 12
                }
            },
            {
                "time": 1587120120000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12556,
                    "temperature": 17.4
                }
            },
            {
                "time": 1587120480000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9023,
                    "relative humidity": 53.8,
                    "temperature": 10.3
                }
            },
            {
                "time": 1587120840000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8892,
                    "relative humidity": 59,
                    "temperature": 11
                }
            },
            {
                "time": 1587121200000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8766,
                    "relative humidity": 71,
                    "temperature": 22
                }
            },
            {
                "time": 1587121560000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8766,
                    "relative humidity": 51,
                    "temperature": 18.9
                }
            },
            {
                "time": 1587121920000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8766,
                    "relative humidity": 51,
                    "temperature": 10.3
                }
            },
            {
                "time": 1587122280000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13562,
                    "relative humidity": 34.6,
                    "temperature": 10.2
                }
            },
            {
                "time": 1587122640000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9023,
                    "relative humidity": 63.4
                }
            },
            {
                "time": 1587123000000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5562,
                    "relative humidity": 36.7,
                    "temperature": 21
                }
            },
            {
                "time": 1587123360000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4231,
                    "relative humidity": 36.7,
                    "temperature": 18.9
                }
            },
            {
                "time": 1587123720000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8990,
                    "relative humidity": 63.4,
                    "temperature": 19.2
                }
            },
            {
                "time": 1587124080000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4231,
                    "relative humidity": 44.4,
                    "temperature": 14
                }
            },
            {
                "time": 1587124440000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12310,
                    "relative humidity": 55,
                    "temperature": 11
                }
            },
            {
                "time": 1587124800000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12003,
                    "relative humidity": 46,
                    "temperature": 10.5
                }
            },
            {
                "time": 1587125160000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7901,
                    "relative humidity": 34.6,
                    "temperature": 12.2
                }
            },
            {
                "time": 1587125520000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4231,
                    "relative humidity": 44,
                    "temperature": 21
                }
            },
            {
                "time": 1587125880000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12310,
                    "relative humidity": 46,
                    "temperature": 17.9
                }
            },
            {
                "time": 1587126240000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13003,
                    "relative humidity": 60,
                    "temperature": 11
                }
            },
            {
                "time": 1587126600000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9023,
                    "relative humidity": 36.7,
                    "temperature": 17.5
                }
            },
            {
                "time": 1587126960000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7713,
                    "relative humidity": 48.5,
                    "temperature": 17.5
                }
            },
            {
                "time": 1587127320000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9801,
                    "relative humidity": 63.4,
                    "temperature": 10.3
                }
            },
            {
                "time": 1587127680000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7713,
                    "relative humidity": 35,
                    "temperature": 10.2
                }
            },
            {
                "time": 1587128040000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5562,
                    "relative humidity": 60,
                    "temperature": 15
                }
            },
            {
                "time": 1587128400000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13045,
                    "relative humidity": 44,
                    "temperature": 15
                }
            },
            {
                "time": 1587128760000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8892,
                    "relative humidity": 48.5,
                    "temperature": 10.3
                }
            },
            {
                "time": 1587129120000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13562,
                    "relative humidity": 63.4,
                    "temperature": 12.2
                }
            },
            {
                "time": 1587129480000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12310,
                    "relative humidity": 62,
                    "temperature": 19.2
                }
            },
            {
                "time": 1587129840000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9801,
                    "relative humidity": 35,
                    "temperature": 11
                }
            },
            {
                "time": 1587130200000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12556,
                    "relative humidity": 36.7,
                    "temperature": 14
                }
            },
            {
                "time": 1587130560000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8990,
                    "relative humidity": 59,
                    "temperature": 12
                }
            },
            {
                "time": 1587130920000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8990,
                    "relative humidity": 50,
                    "temperature": 14.6
                }
            },
            {
                "time": 1587131280000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9023,
                    "relative humidity": 35,
                    "temperature": 19.2
                }
            },
            {
                "time": 1587131640000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13562,
                    "relative humidity": 62,
                    "temperature": 22
                }
            },
            {
                "time": 1587132000000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12310,
                    "relative humidity": 46
                }
            },
            {
                "time": 1587132360000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9023,
                    "relative humidity": 59
                }
            },
            {
                "time": 1587132720000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4231,
                    "relative humidity": 59,
                    "temperature": 21
                }
            },
            {
                "time": 1587133080000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7321,
                    "relative humidity": 46,
                    "temperature": 11
                }
            },
            {
                "time": 1587133440000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7788,
                    "relative humidity": 56.3,
                    "temperature": 17.9
                }
            },
            {
                "time": 1587133800000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13045,
                    "relative humidity": 71,
                    "temperature": 18.9
                }
            },
            {
                "time": 1587134160000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8892,
                    "relative humidity": 55,
                    "temperature": 12.2
                }
            },
            {
                "time": 1587134520000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 6602,
                    "relative humidity": 56.3,
                    "temperature": 12
                }
            },
            {
                "time": 1587134880000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 6012,
                    "relative humidity": 59,
                    "temperature": 12
                }
            },
            {
                "time": 1587135240000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5698,
                    "relative humidity": 71,
                    "temperature": 16.3
                }
            },
            {
                "time": 1587135600000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9021,
                    "relative humidity": 46,
                    "temperature": 21
                }
            },
            {
                "time": 1587135960000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12556,
                    "relative humidity": 60,
                    "temperature": 12
                }
            },
            {
                "time": 1587136320000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7788,
                    "relative humidity": 53,
                    "temperature": 17.5
                }
            },
            {
                "time": 1587136680000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12556,
                    "relative humidity": 64,
                    "temperature": 23
                }
            },
            {
                "time": 1587137040000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12310,
                    "relative humidity": 44.4,
                    "temperature": 10.5
                }
            },
            {
                "time": 1587137400000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 6012,
                    "relative humidity": 36.7,
                    "temperature": 10.5
                }
            },
            {
                "time": 1587137760000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7321,
                    "relative humidity": 55,
                    "temperature": 23
                }
            },
            {
                "time": 1587138120000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4231,
                    "relative humidity": 36.7,
                    "temperature": 23
                }
            },
            {
                "time": 1587138480000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12003,
                    "relative humidity": 34.6,
                    "temperature": 23
                }
            },
            {
                "time": 1587138840000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5698,
                    "relative humidity": 56.3,
                    "temperature": 10.3
                }
            },
            {
                "time": 1587139200000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8892,
                    "relative humidity": 62,
                    "temperature": 15
                }
            },
            {
                "time": 1587139560000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13562,
                    "relative humidity": 38,
                    "temperature": 22
                }
            },
            {
                "time": 1587139920000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12310,
                    "relative humidity": 48.5
                }
            },
            {
                "time": 1587140280000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 3560,
                    "relative humidity": 48,
                    "temperature": 10.2
                }
            },
            {
                "time": 1587140640000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9023,
                    "relative humidity": 62,
                    "temperature": 14
                }
            },
            {
                "time": 1587141000000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10553,
                    "relative humidity": 59,
                    "temperature": 18.4
                }
            },
            {
                "time": 1587141360000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10553,
                    "relative humidity": 56.3,
                    "temperature": 10.2
                }
            },
            {
                "time": 1587141720000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7901,
                    "relative humidity": 56.3,
                    "temperature": 12
                }
            },
            {
                "time": 1587142080000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7713,
                    "relative humidity": 35,
                    "temperature": 14.6
                }
            },
            {
                "time": 1587142440000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13003,
                    "relative humidity": 51,
                    "temperature": 16.3
                }
            },
            {
                "time": 1587142800000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 1004,
                    "relative humidity": 59,
                    "temperature": 3.6
                }
            },
            {
                "time": 1587143160000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 1113,
                    "relative humidity": 51
                }
            },
            {
                "time": 1587143520000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4502,
                    "relative humidity": 64,
                    "temperature": 8.3
                }
            },
            {
                "time": 1587143880000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5542,
                    "relative humidity": 49,
                    "temperature": 6.3
                }
            },
            {
                "time": 1587144240000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 2094,
                    "relative humidity": 53.8,
                    "temperature": 3.6
                }
            },
            {
                "time": 1587144600000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 569,
                    "relative humidity": 48.5,
                    "temperature": 9.9
                }
            },
            {
                "time": 1587144960000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 2094,
                    "relative humidity": 34.6,
                    "temperature": 8.5
                }
            },
            {
                "time": 1587145320000,
                "sensorId": "uuid0129",
                "data": {
                    "temperature": 8.1
                }
            },
            {
                "time": 1587145680000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5090,
                    "relative humidity": 36.7,
                    "temperature": 9.9
                }
            },
            {
                "time": 1587146040000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 1222,
                    "relative humidity": 38,
                    "temperature": 7.5
                }
            },
            {
                "time": 1587146400000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 2227,
                    "relative humidity": 36.7
                }
            },
            {
                "time": 1587146760000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4216,
                    "relative humidity": 60,
                    "temperature": 9.9
                }
            },
            {
                "time": 1587147120000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 1020,
                    "relative humidity": 48.5,
                    "temperature": 7.5
                }
            },
            {
                "time": 1587147480000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5542
                }
            },
            {
                "time": 1587147840000,
                "sensorId": "uuid0129",
                "data": {
                    "relative humidity": 60,
                    "temperature": 8.3
                }
            },
            {
                "time": 1587148200000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5502,
                    "relative humidity": 38,
                    "temperature": 7.5
                }
            },
            {
                "time": 1587148560000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 1004,
                    "relative humidity": 49,
                    "temperature": 9.1
                }
            },
            {
                "time": 1587148920000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 2094,
                    "relative humidity": 64,
                    "temperature": 7.2
                }
            },
            {
                "time": 1587149280000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5413,
                    "relative humidity": 62,
                    "temperature": 9.2
                }
            },
            {
                "time": 1587149640000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 2266,
                    "relative humidity": 59,
                    "temperature": 9.1
                }
            },
            {
                "time": 1587150000000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 59
                }
            },
            {
                "time": 1587150360000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 48.5,
                    "temperature": 6.2
                }
            },
            {
                "time": 1587150720000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 48.5,
                    "temperature": 4.2
                }
            },
            {
                "time": 1587151080000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 38
                }
            },
            {
                "time": 1587151440000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 60,
                    "temperature": 6.8
                }
            },
            {
                "time": 1587151800000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 38,
                    "temperature": 6.8
                }
            },
            {
                "time": 1587152160000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 53,
                    "temperature": 4.2
                }
            },
            {
                "time": 1587152520000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 62,
                    "temperature": 8.9
                }
            },
            {
                "time": 1587152880000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 53.8,
                    "temperature": 6
                }
            },
            {
                "time": 1587153240000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 49,
                    "temperature": 8.5
                }
            },
            {
                "time": 1587153600000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 38,
                    "temperature": 5.5
                }
            },
            {
                "time": 1587153960000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 38
                }
            },
            {
                "time": 1587154320000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 38,
                    "temperature": 5.5
                }
            },
            {
                "time": 1587154680000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 71,
                    "temperature": 3.4
                }
            },
            {
                "time": 1587155040000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 64,
                    "temperature": 6.2
                }
            },
            {
                "time": 1587155400000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 50,
                    "temperature": 3.4
                }
            },
            {
                "time": 1587155760000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 60,
                    "temperature": 4.2
                }
            },
            {
                "time": 1587156120000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 48.5
                }
            },
            {
                "time": 1587156480000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 60,
                    "temperature": 6.8
                }
            },
            {
                "time": 1587156840000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 44,
                    "temperature": 8.9
                }
            },
            {
                "time": 1587157200000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 62,
                    "temperature": 5.5
                }
            },
            {
                "time": 1587157560000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 53.8,
                    "temperature": 7.1
                }
            },
            {
                "time": 1587157920000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 50,
                    "temperature": 4.2
                }
            },
            {
                "time": 1587158280000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 56.3,
                    "temperature": 4
                }
            },
            {
                "time": 1587158640000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 60,
                    "temperature": 5.5
                }
            },
            {
                "time": 1587159000000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 50,
                    "temperature": 4
                }
            },
            {
                "time": 1587159360000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 35,
                    "temperature": 5.7
                }
            },
            {
                "time": 1587159720000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 56.3,
                    "temperature": 4.2
                }
            },
            {
                "time": 1587160080000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 51
                }
            },
            {
                "time": 1587160440000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 71,
                    "temperature": 4.2
                }
            },
            {
                "time": 1587160800000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 49,
                    "temperature": 6.8
                }
            },
            {
                "time": 1587161160000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 44.4,
                    "temperature": 8.9
                }
            },
            {
                "time": 1587161520000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 48,
                    "temperature": 6.8
                }
            },
            {
                "time": 1587161880000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 44,
                    "temperature": 4.2
                }
            },
            {
                "time": 1587162240000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 55,
                    "temperature": 7.1
                }
            },
            {
                "time": 1587162600000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 64,
                    "temperature": 4
                }
            },
            {
                "time": 1587162960000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 53,
                    "temperature": 6.8
                }
            },
            {
                "time": 1587163320000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 63.4,
                    "temperature": 3
                }
            },
            {
                "time": 1587163680000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 44,
                    "temperature": 8.9
                }
            },
            {
                "time": 1587164040000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 44.4,
                    "temperature": 4.2
                }
            },
            {
                "time": 1587164400000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 55,
                    "temperature": 6
                }
            },
            {
                "time": 1587164760000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 46,
                    "temperature": 8.9
                }
            },
            {
                "time": 1587165120000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 56.3,
                    "temperature": 8.5
                }
            },
            {
                "time": 1587165480000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 62,
                    "temperature": 6.8
                }
            },
            {
                "time": 1587165840000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 55,
                    "temperature": 4
                }
            },
            {
                "time": 1587166200000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 53.8,
                    "temperature": 6.2
                }
            },
            {
                "time": 1587166560000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 44.4,
                    "temperature": 4.2
                }
            },
            {
                "time": 1587166920000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 62,
                    "temperature": 7.1
                }
            },
            {
                "time": 1587167280000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 56.3,
                    "temperature": 3
                }
            },
            {
                "time": 1587167640000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 44.4,
                    "temperature": 4
                }
            },
            {
                "time": 1587168000000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 55,
                    "temperature": 8.5
                }
            },
            {
                "time": 1587168360000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 59,
                    "temperature": 3
                }
            },
            {
                "time": 1587168720000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 63.4,
                    "temperature": 6
                }
            },
            {
                "time": 1587169080000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 59,
                    "temperature": 6
                }
            },
            {
                "time": 1587169440000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 48,
                    "temperature": 6
                }
            },
            {
                "time": 1587169800000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 34.6,
                    "temperature": 6.2
                }
            },
            {
                "time": 1587170160000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 35,
                    "temperature": 4.2
                }
            },
            {
                "time": 1587170520000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 59,
                    "temperature": 6.8
                }
            },
            {
                "time": 1587170880000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 56.3,
                    "temperature": 4
                }
            },
            {
                "time": 1587171240000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 60,
                    "temperature": 3.4
                }
            },
            {
                "time": 1587171600000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 64,
                    "temperature": 8.9
                }
            },
            {
                "time": 1587171960000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 62,
                    "temperature": 3
                }
            },
            {
                "time": 1587172320000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 35,
                    "temperature": 5.7
                }
            },
            {
                "time": 1587172680000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 48.5,
                    "temperature": 6.2
                }
            },
            {
                "time": 1587173040000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 62,
                    "temperature": 6.2
                }
            },
            {
                "time": 1587173400000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 62,
                    "temperature": 3.4
                }
            },
            {
                "time": 1587173760000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 59,
                    "temperature": 8.9
                }
            },
            {
                "time": 1587174120000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 49,
                    "temperature": 3.4
                }
            },
            {
                "time": 1587174480000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 36.7,
                    "temperature": 5.7
                }
            },
            {
                "time": 1587174840000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 53,
                    "temperature": 4
                }
            },
            {
                "time": 1587175200000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 59,
                    "temperature": 8.9
                }
            },
            {
                "time": 1587175560000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 62,
                    "temperature": 2.3
                }
            },
            {
                "time": 1587175920000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 44.4,
                    "temperature": 4
                }
            },
            {
                "time": 1587176280000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 64
                }
            },
            {
                "time": 1587176640000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 71,
                    "temperature": 4.2
                }
            },
            {
                "time": 1587177000000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 62,
                    "temperature": 8.9
                }
            },
            {
                "time": 1587177360000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 59,
                    "temperature": 4
                }
            },
            {
                "time": 1587177720000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 63.4,
                    "temperature": 4.2
                }
            },
            {
                "time": 1587178080000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 71,
                    "temperature": 6.8
                }
            },
            {
                "time": 1587178440000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 50,
                    "temperature": 8.5
                }
            },
            {
                "time": 1587178800000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 2094,
                    "relative humidity": 59,
                    "temperature": 8.3
                }
            },
            {
                "time": 1587179160000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 672,
                    "relative humidity": 48.5,
                    "temperature": 6.3
                }
            },
            {
                "time": 1587179520000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5542,
                    "relative humidity": 63.4,
                    "temperature": 9.2
                }
            },
            {
                "time": 1587179880000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4239,
                    "relative humidity": 35
                }
            },
            {
                "time": 1587180240000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 1020,
                    "relative humidity": 62
                }
            },
            {
                "time": 1587180600000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4216,
                    "relative humidity": 36.7,
                    "temperature": 6.4
                }
            },
            {
                "time": 1587180960000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 2878,
                    "relative humidity": 56.3
                }
            },
            {
                "time": 1587181320000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 1222,
                    "relative humidity": 34.6,
                    "temperature": 8.5
                }
            },
            {
                "time": 1587181680000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5090,
                    "relative humidity": 38,
                    "temperature": 9.2
                }
            },
            {
                "time": 1587182040000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5502,
                    "relative humidity": 63.4,
                    "temperature": 8.1
                }
            },
            {
                "time": 1587182400000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 2799,
                    "relative humidity": 56.3,
                    "temperature": 7.2
                }
            },
            {
                "time": 1587182760000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 2094,
                    "relative humidity": 64,
                    "temperature": 8.3
                }
            },
            {
                "time": 1587183120000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 280,
                    "relative humidity": 48.5,
                    "temperature": 8.3
                }
            },
            {
                "time": 1587183480000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5502,
                    "relative humidity": 48,
                    "temperature": 9.1
                }
            },
            {
                "time": 1587183840000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 3122,
                    "relative humidity": 53.8,
                    "temperature": 9.9
                }
            },
            {
                "time": 1587184200000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 3123,
                    "relative humidity": 36.7
                }
            },
            {
                "time": 1587184560000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 2266,
                    "relative humidity": 36.7
                }
            },
            {
                "time": 1587184920000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 3821,
                    "relative humidity": 44.4,
                    "temperature": 6.4
                }
            },
            {
                "time": 1587185280000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 569,
                    "relative humidity": 55,
                    "temperature": 9.1
                }
            },
            {
                "time": 1587185640000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 2094,
                    "relative humidity": 62,
                    "temperature": 7.2
                }
            },
            {
                "time": 1587186000000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 1020,
                    "relative humidity": 56.3,
                    "temperature": 3.6
                }
            },
            {
                "time": 1587186360000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4432,
                    "relative humidity": 44.4,
                    "temperature": 8.3
                }
            },
            {
                "time": 1587186720000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 1020,
                    "relative humidity": 59,
                    "temperature": 3.6
                }
            },
            {
                "time": 1587187080000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4432,
                    "relative humidity": 63.4,
                    "temperature": 9.9
                }
            },
            {
                "time": 1587187440000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4502,
                    "relative humidity": 60,
                    "temperature": 8.1
                }
            },
            {
                "time": 1587187800000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5502,
                    "relative humidity": 53.8,
                    "temperature": 3.6
                }
            },
            {
                "time": 1587188160000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 3122,
                    "relative humidity": 62,
                    "temperature": 9.9
                }
            },
            {
                "time": 1587188520000,
                "sensorId": "uuid0129",
                "data": {
                    "relative humidity": 51,
                    "temperature": 9.9
                }
            },
            {
                "time": 1587188880000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 1987,
                    "relative humidity": 36.7
                }
            },
            {
                "time": 1587189240000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4432,
                    "relative humidity": 49,
                    "temperature": 7.2
                }
            },
            {
                "time": 1587189600000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9021,
                    "relative humidity": 55,
                    "temperature": 10.3
                }
            },
            {
                "time": 1587189960000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4231,
                    "relative humidity": 46,
                    "temperature": 14.6
                }
            },
            {
                "time": 1587190320000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9023,
                    "relative humidity": 53.8,
                    "temperature": 14.6
                }
            },
            {
                "time": 1587190680000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13562,
                    "relative humidity": 62
                }
            },
            {
                "time": 1587191040000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13003,
                    "relative humidity": 62,
                    "temperature": 17.4
                }
            },
            {
                "time": 1587191400000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 6012,
                    "relative humidity": 44.4,
                    "temperature": 16.3
                }
            },
            {
                "time": 1587191760000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13045,
                    "relative humidity": 38,
                    "temperature": 22
                }
            },
            {
                "time": 1587192120000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12003,
                    "relative humidity": 64,
                    "temperature": 11
                }
            },
            {
                "time": 1587192480000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12003,
                    "relative humidity": 48,
                    "temperature": 19.2
                }
            },
            {
                "time": 1587192840000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5698,
                    "relative humidity": 62,
                    "temperature": 19.4
                }
            },
            {
                "time": 1587193200000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9023,
                    "relative humidity": 64,
                    "temperature": 18.9
                }
            },
            {
                "time": 1587193560000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8990,
                    "relative humidity": 59,
                    "temperature": 11
                }
            },
            {
                "time": 1587193920000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7788,
                    "relative humidity": 36.7,
                    "temperature": 21
                }
            },
            {
                "time": 1587194280000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8766,
                    "temperature": 22
                }
            },
            {
                "time": 1587194640000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4231,
                    "relative humidity": 56.3,
                    "temperature": 17.9
                }
            },
            {
                "time": 1587195000000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8990,
                    "relative humidity": 63.4,
                    "temperature": 11
                }
            },
            {
                "time": 1587195360000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13045,
                    "relative humidity": 50,
                    "temperature": 21
                }
            },
            {
                "time": 1587195720000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8990,
                    "relative humidity": 48.5,
                    "temperature": 11
                }
            },
            {
                "time": 1587196080000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10003,
                    "relative humidity": 35,
                    "temperature": 14
                }
            },
            {
                "time": 1587196440000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4231,
                    "relative humidity": 62,
                    "temperature": 15
                }
            },
            {
                "time": 1587196800000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13562,
                    "relative humidity": 34.6,
                    "temperature": 15
                }
            },
            {
                "time": 1587197160000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5698,
                    "relative humidity": 35,
                    "temperature": 12
                }
            },
            {
                "time": 1587197520000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9801,
                    "relative humidity": 49,
                    "temperature": 17.4
                }
            },
            {
                "time": 1587197880000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9021,
                    "relative humidity": 59,
                    "temperature": 17.5
                }
            },
            {
                "time": 1587198240000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 3560,
                    "relative humidity": 55,
                    "temperature": 12.2
                }
            },
            {
                "time": 1587198600000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8111,
                    "relative humidity": 62
                }
            },
            {
                "time": 1587198960000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7713,
                    "relative humidity": 48,
                    "temperature": 22
                }
            },
            {
                "time": 1587199320000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12003,
                    "relative humidity": 36.7,
                    "temperature": 14
                }
            },
            {
                "time": 1587199680000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9902,
                    "relative humidity": 51,
                    "temperature": 14.6
                }
            },
            {
                "time": 1587200040000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7788,
                    "relative humidity": 62,
                    "temperature": 21
                }
            },
            {
                "time": 1587200400000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7713,
                    "relative humidity": 55,
                    "temperature": 10.5
                }
            },
            {
                "time": 1587200760000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10899,
                    "relative humidity": 53,
                    "temperature": 17.4
                }
            },
            {
                "time": 1587201120000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9801,
                    "relative humidity": 35,
                    "temperature": 22
                }
            },
            {
                "time": 1587201480000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7788,
                    "relative humidity": 63.4,
                    "temperature": 17.5
                }
            },
            {
                "time": 1587201840000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12003,
                    "relative humidity": 53,
                    "temperature": 10.3
                }
            },
            {
                "time": 1587202200000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8990,
                    "relative humidity": 63.4,
                    "temperature": 16.3
                }
            },
            {
                "time": 1587202560000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10003,
                    "relative humidity": 64,
                    "temperature": 17.5
                }
            },
            {
                "time": 1587202920000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 3560,
                    "relative humidity": 38,
                    "temperature": 17.9
                }
            },
            {
                "time": 1587203280000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8892,
                    "relative humidity": 62,
                    "temperature": 14.6
                }
            },
            {
                "time": 1587203640000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9021,
                    "relative humidity": 56.3,
                    "temperature": 21
                }
            },
            {
                "time": 1587204000000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7713,
                    "relative humidity": 46,
                    "temperature": 10.2
                }
            },
            {
                "time": 1587204360000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12003,
                    "relative humidity": 60,
                    "temperature": 18.4
                }
            },
            {
                "time": 1587204720000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8766,
                    "relative humidity": 50,
                    "temperature": 18.4
                }
            },
            {
                "time": 1587205080000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10899,
                    "relative humidity": 34.6,
                    "temperature": 19.2
                }
            },
            {
                "time": 1587205440000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7713,
                    "relative humidity": 62,
                    "temperature": 10.2
                }
            },
            {
                "time": 1587205800000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9023,
                    "relative humidity": 35,
                    "temperature": 14.6
                }
            },
            {
                "time": 1587206160000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7788,
                    "relative humidity": 51,
                    "temperature": 22
                }
            },
            {
                "time": 1587206520000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8990,
                    "relative humidity": 59,
                    "temperature": 17.5
                }
            },
            {
                "time": 1587206880000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10553,
                    "relative humidity": 48.5,
                    "temperature": 18.4
                }
            },
            {
                "time": 1587207240000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7713,
                    "relative humidity": 56.3,
                    "temperature": 19.2
                }
            },
            {
                "time": 1587207600000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12556,
                    "relative humidity": 55,
                    "temperature": 17.9
                }
            },
            {
                "time": 1587207960000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10553,
                    "relative humidity": 35,
                    "temperature": 19.2
                }
            },
            {
                "time": 1587208320000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 6012,
                    "relative humidity": 49,
                    "temperature": 12.2
                }
            },
            {
                "time": 1587208680000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13003,
                    "relative humidity": 44,
                    "temperature": 10.5
                }
            },
            {
                "time": 1587209040000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13045,
                    "relative humidity": 55,
                    "temperature": 12.2
                }
            },
            {
                "time": 1587209400000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8892,
                    "relative humidity": 59,
                    "temperature": 18.9
                }
            },
            {
                "time": 1587209760000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13562,
                    "relative humidity": 36.7,
                    "temperature": 19.2
                }
            },
            {
                "time": 1587210120000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12003,
                    "relative humidity": 48.5,
                    "temperature": 12
                }
            },
            {
                "time": 1587210480000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7321,
                    "relative humidity": 48,
                    "temperature": 10.3
                }
            },
            {
                "time": 1587210840000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9023,
                    "relative humidity": 62,
                    "temperature": 19.2
                }
            },
            {
                "time": 1587211200000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8990,
                    "relative humidity": 48.5,
                    "temperature": 10.2
                }
            },
            {
                "time": 1587211560000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9902,
                    "relative humidity": 44.4,
                    "temperature": 23
                }
            },
            {
                "time": 1587211920000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13562,
                    "relative humidity": 36.7,
                    "temperature": 19.4
                }
            },
            {
                "time": 1587212280000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10553,
                    "relative humidity": 50,
                    "temperature": 16.3
                }
            },
            {
                "time": 1587212640000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10899,
                    "relative humidity": 53,
                    "temperature": 19.4
                }
            },
            {
                "time": 1587213000000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9023,
                    "relative humidity": 48,
                    "temperature": 17.4
                }
            },
            {
                "time": 1587213360000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7788,
                    "relative humidity": 34.6,
                    "temperature": 15
                }
            },
            {
                "time": 1587213720000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10003,
                    "relative humidity": 55,
                    "temperature": 11
                }
            },
            {
                "time": 1587214080000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9021,
                    "relative humidity": 71,
                    "temperature": 21
                }
            },
            {
                "time": 1587214440000,
                "sensorId": "uuid0129",
                "data": {
                    "relative humidity": 53,
                    "temperature": 17.4
                }
            },
            {
                "time": 1587214800000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5698,
                    "relative humidity": 44,
                    "temperature": 10.3
                }
            },
            {
                "time": 1587215160000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13045,
                    "relative humidity": 63.4,
                    "temperature": 17.5
                }
            },
            {
                "time": 1587215520000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10553,
                    "relative humidity": 55,
                    "temperature": 18.9
                }
            },
            {
                "time": 1587215880000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4231,
                    "relative humidity": 38,
                    "temperature": 18.9
                }
            },
            {
                "time": 1587216240000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7713,
                    "relative humidity": 50,
                    "temperature": 19.4
                }
            },
            {
                "time": 1587216600000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5562,
                    "temperature": 22
                }
            },
            {
                "time": 1587216960000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10553,
                    "relative humidity": 36.7
                }
            },
            {
                "time": 1587217320000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8766,
                    "relative humidity": 62,
                    "temperature": 15
                }
            },
            {
                "time": 1587217680000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 6012,
                    "relative humidity": 48,
                    "temperature": 12
                }
            },
            {
                "time": 1587218040000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9902,
                    "relative humidity": 59,
                    "temperature": 12.2
                }
            },
            {
                "time": 1587218400000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10003,
                    "relative humidity": 55,
                    "temperature": 12
                }
            },
            {
                "time": 1587218760000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5698,
                    "relative humidity": 44.4,
                    "temperature": 16.3
                }
            },
            {
                "time": 1587219120000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 6602,
                    "temperature": 18.9
                }
            },
            {
                "time": 1587219480000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7713,
                    "relative humidity": 50,
                    "temperature": 10.5
                }
            },
            {
                "time": 1587219840000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 6602,
                    "relative humidity": 38,
                    "temperature": 11
                }
            },
            {
                "time": 1587220200000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7901,
                    "relative humidity": 44.4,
                    "temperature": 12
                }
            },
            {
                "time": 1587220560000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13562,
                    "relative humidity": 36.7,
                    "temperature": 21
                }
            },
            {
                "time": 1587220920000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 6012,
                    "relative humidity": 34.6,
                    "temperature": 15
                }
            },
            {
                "time": 1587221280000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 6012,
                    "relative humidity": 53,
                    "temperature": 18.4
                }
            },
            {
                "time": 1587221640000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8990,
                    "relative humidity": 44.4,
                    "temperature": 18.9
                }
            },
            {
                "time": 1587222000000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10553,
                    "relative humidity": 35,
                    "temperature": 12.2
                }
            },
            {
                "time": 1587222360000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5562,
                    "relative humidity": 56.3,
                    "temperature": 17.4
                }
            },
            {
                "time": 1587222720000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7901,
                    "relative humidity": 49,
                    "temperature": 23
                }
            },
            {
                "time": 1587223080000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9902,
                    "relative humidity": 53.8,
                    "temperature": 11
                }
            },
            {
                "time": 1587223440000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4231,
                    "relative humidity": 63.4,
                    "temperature": 21
                }
            },
            {
                "time": 1587223800000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9902,
                    "relative humidity": 71
                }
            },
            {
                "time": 1587224160000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 3560,
                    "relative humidity": 53,
                    "temperature": 10.5
                }
            },
            {
                "time": 1587224520000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8111,
                    "relative humidity": 44,
                    "temperature": 18.9
                }
            },
            {
                "time": 1587224880000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8892,
                    "relative humidity": 71,
                    "temperature": 17.9
                }
            },
            {
                "time": 1587225240000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 3560,
                    "relative humidity": 71,
                    "temperature": 18.4
                }
            },
            {
                "time": 1587225600000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10899,
                    "relative humidity": 62,
                    "temperature": 21
                }
            },
            {
                "time": 1587225960000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13045,
                    "relative humidity": 59,
                    "temperature": 11
                }
            },
            {
                "time": 1587226320000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12556,
                    "relative humidity": 60,
                    "temperature": 10.2
                }
            },
            {
                "time": 1587226680000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5562,
                    "relative humidity": 48,
                    "temperature": 16.3
                }
            },
            {
                "time": 1587227040000,
                "sensorId": "uuid0129",
                "data": {
                    "relative humidity": 34.6,
                    "temperature": 21
                }
            },
            {
                "time": 1587227400000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7713,
                    "relative humidity": 50,
                    "temperature": 10.5
                }
            },
            {
                "time": 1587227760000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9021,
                    "relative humidity": 35,
                    "temperature": 10.2
                }
            },
            {
                "time": 1587228120000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12556,
                    "relative humidity": 62,
                    "temperature": 17.9
                }
            },
            {
                "time": 1587228480000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4231,
                    "relative humidity": 49,
                    "temperature": 21
                }
            },
            {
                "time": 1587228840000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7788,
                    "relative humidity": 63.4,
                    "temperature": 17.5
                }
            },
            {
                "time": 1587229200000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 2266,
                    "relative humidity": 71,
                    "temperature": 6.4
                }
            },
            {
                "time": 1587229560000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 672,
                    "relative humidity": 38,
                    "temperature": 7.2
                }
            },
            {
                "time": 1587229920000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 1113,
                    "relative humidity": 36.7,
                    "temperature": 3.6
                }
            },
            {
                "time": 1587230280000,
                "sensorId": "uuid0129",
                "data": {
                    "relative humidity": 59,
                    "temperature": 6.4
                }
            },
            {
                "time": 1587230640000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 890,
                    "relative humidity": 62,
                    "temperature": 9.2
                }
            },
            {
                "time": 1587231000000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4239,
                    "relative humidity": 60,
                    "temperature": 8.5
                }
            },
            {
                "time": 1587231360000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5502,
                    "relative humidity": 46,
                    "temperature": 6.3
                }
            },
            {
                "time": 1587231720000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 3123,
                    "relative humidity": 59,
                    "temperature": 9.9
                }
            },
            {
                "time": 1587232080000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 3122,
                    "relative humidity": 34.6,
                    "temperature": 6.4
                }
            },
            {
                "time": 1587232440000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5542,
                    "relative humidity": 49,
                    "temperature": 8.1
                }
            },
            {
                "time": 1587232800000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 1020,
                    "relative humidity": 44.4
                }
            },
            {
                "time": 1587233160000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5542,
                    "relative humidity": 64,
                    "temperature": 3.6
                }
            },
            {
                "time": 1587233520000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 2878,
                    "relative humidity": 51,
                    "temperature": 9.2
                }
            },
            {
                "time": 1587233880000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 672,
                    "relative humidity": 53.8,
                    "temperature": 8.3
                }
            },
            {
                "time": 1587234240000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 1113,
                    "relative humidity": 64,
                    "temperature": 7.5
                }
            },
            {
                "time": 1587234600000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5502,
                    "relative humidity": 38,
                    "temperature": 6.4
                }
            },
            {
                "time": 1587234960000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 3123,
                    "relative humidity": 60,
                    "temperature": 7.2
                }
            },
            {
                "time": 1587235320000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 3821,
                    "relative humidity": 51,
                    "temperature": 3.6
                }
            },
            {
                "time": 1587235680000,
                "sensorId": "uuid0129",
                "data": {
                    "relative humidity": 49,
                    "temperature": 7.2
                }
            },
            {
                "time": 1587236040000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 2227,
                    "temperature": 9.1
                }
            },
            {
                "time": 1587236400000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 36.7,
                    "temperature": 6.8
                }
            },
            {
                "time": 1587236760000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 63.4,
                    "temperature": 3
                }
            },
            {
                "time": 1587237120000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 53.8,
                    "temperature": 5.5
                }
            },
            {
                "time": 1587237480000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 36.7,
                    "temperature": 5.7
                }
            },
            {
                "time": 1587237840000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 44,
                    "temperature": 3.4
                }
            },
            {
                "time": 1587238200000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 56.3,
                    "temperature": 7.1
                }
            },
            {
                "time": 1587238560000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 63.4,
                    "temperature": 4.2
                }
            },
            {
                "time": 1587238920000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 38,
                    "temperature": 4
                }
            },
            {
                "time": 1587239280000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 44.4
                }
            },
            {
                "time": 1587239640000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 51,
                    "temperature": 2.3
                }
            },
            {
                "time": 1587240000000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 34.6,
                    "temperature": 2.3
                }
            },
            {
                "time": 1587240360000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 35,
                    "temperature": 4
                }
            },
            {
                "time": 1587240720000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 62,
                    "temperature": 4.2
                }
            },
            {
                "time": 1587241080000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 56.3,
                    "temperature": 3.4
                }
            },
            {
                "time": 1587241440000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 55,
                    "temperature": 5.7
                }
            },
            {
                "time": 1587241800000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 64,
                    "temperature": 4
                }
            },
            {
                "time": 1587242160000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 48.5,
                    "temperature": 6.2
                }
            },
            {
                "time": 1587242520000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 44.4,
                    "temperature": 3.4
                }
            },
            {
                "time": 1587242880000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 35,
                    "temperature": 3.4
                }
            },
            {
                "time": 1587243240000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 34.6,
                    "temperature": 6.2
                }
            },
            {
                "time": 1587243600000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 34.6,
                    "temperature": 2.3
                }
            },
            {
                "time": 1587243960000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 60,
                    "temperature": 6.8
                }
            },
            {
                "time": 1587244320000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 53.8,
                    "temperature": 8.9
                }
            },
            {
                "time": 1587244680000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 34.6,
                    "temperature": 4.2
                }
            },
            {
                "time": 1587245040000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 44,
                    "temperature": 3
                }
            },
            {
                "time": 1587245400000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 51,
                    "temperature": 6
                }
            },
            {
                "time": 1587245760000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 46,
                    "temperature": 3
                }
            },
            {
                "time": 1587246120000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 46,
                    "temperature": 4.2
                }
            },
            {
                "time": 1587246480000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 49,
                    "temperature": 5.7
                }
            },
            {
                "time": 1587246840000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 62,
                    "temperature": 7.1
                }
            },
            {
                "time": 1587247200000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "temperature": 5.5
                }
            },
            {
                "time": 1587247560000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 59,
                    "temperature": 6
                }
            },
            {
                "time": 1587247920000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 59,
                    "temperature": 2.3
                }
            },
            {
                "time": 1587248280000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 53,
                    "temperature": 6.2
                }
            },
            {
                "time": 1587248640000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 36.7,
                    "temperature": 7.1
                }
            },
            {
                "time": 1587249000000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 38,
                    "temperature": 4.2
                }
            },
            {
                "time": 1587249360000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 53.8,
                    "temperature": 4
                }
            },
            {
                "time": 1587249720000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 55,
                    "temperature": 7.1
                }
            },
            {
                "time": 1587250080000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 50,
                    "temperature": 4
                }
            },
            {
                "time": 1587250440000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 53.8,
                    "temperature": 5.5
                }
            },
            {
                "time": 1587250800000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 64,
                    "temperature": 6.8
                }
            },
            {
                "time": 1587251160000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 50,
                    "temperature": 4.2
                }
            },
            {
                "time": 1587251520000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 34.6,
                    "temperature": 2.3
                }
            },
            {
                "time": 1587251880000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 53.8,
                    "temperature": 6
                }
            },
            {
                "time": 1587252240000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 63.4,
                    "temperature": 4.2
                }
            },
            {
                "time": 1587252600000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 48,
                    "temperature": 8.9
                }
            },
            {
                "time": 1587252960000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 38,
                    "temperature": 2.3
                }
            },
            {
                "time": 1587253320000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 59,
                    "temperature": 3
                }
            },
            {
                "time": 1587253680000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 49,
                    "temperature": 6
                }
            },
            {
                "time": 1587254040000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 55,
                    "temperature": 4
                }
            },
            {
                "time": 1587254400000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 34.6,
                    "temperature": 6.2
                }
            },
            {
                "time": 1587254760000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 53,
                    "temperature": 3.4
                }
            },
            {
                "time": 1587255120000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 62,
                    "temperature": 4.2
                }
            },
            {
                "time": 1587255480000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 71,
                    "temperature": 3.4
                }
            },
            {
                "time": 1587255840000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 62,
                    "temperature": 8.9
                }
            },
            {
                "time": 1587256200000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 59
                }
            },
            {
                "time": 1587256560000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 55,
                    "temperature": 5.5
                }
            },
            {
                "time": 1587256920000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 49,
                    "temperature": 4
                }
            },
            {
                "time": 1587257280000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 51,
                    "temperature": 6.8
                }
            },
            {
                "time": 1587257640000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 48.5,
                    "temperature": 6.8
                }
            },
            {
                "time": 1587258000000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 36.7,
                    "temperature": 4.2
                }
            },
            {
                "time": 1587258360000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 34.6,
                    "temperature": 6.2
                }
            },
            {
                "time": 1587258720000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 60,
                    "temperature": 6
                }
            },
            {
                "time": 1587259080000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 53.8,
                    "temperature": 6
                }
            },
            {
                "time": 1587259440000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 55,
                    "temperature": 7.1
                }
            },
            {
                "time": 1587259800000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 48.5,
                    "temperature": 6.8
                }
            },
            {
                "time": 1587260160000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 44.4,
                    "temperature": 5.7
                }
            },
            {
                "time": 1587260520000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 44.4,
                    "temperature": 5.5
                }
            },
            {
                "time": 1587260880000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 53,
                    "temperature": 4.2
                }
            },
            {
                "time": 1587261240000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 38
                }
            },
            {
                "time": 1587261600000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 60
                }
            },
            {
                "time": 1587261960000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 35,
                    "temperature": 6.2
                }
            },
            {
                "time": 1587262320000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 53.8,
                    "temperature": 5.7
                }
            },
            {
                "time": 1587262680000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 59,
                    "temperature": 6.8
                }
            },
            {
                "time": 1587263040000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 59,
                    "temperature": 4.2
                }
            },
            {
                "time": 1587263400000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 49,
                    "temperature": 8.5
                }
            },
            {
                "time": 1587263760000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 35,
                    "temperature": 7.1
                }
            },
            {
                "time": 1587264120000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 71
                }
            },
            {
                "time": 1587264480000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 36.7,
                    "temperature": 5.5
                }
            },
            {
                "time": 1587264840000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 53.8,
                    "temperature": 3
                }
            },
            {
                "time": 1587265200000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 280,
                    "relative humidity": 44,
                    "temperature": 6.4
                }
            },
            {
                "time": 1587265560000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4432,
                    "relative humidity": 35,
                    "temperature": 9.2
                }
            },
            {
                "time": 1587265920000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 3123,
                    "relative humidity": 38,
                    "temperature": 8.3
                }
            },
            {
                "time": 1587266280000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5542,
                    "relative humidity": 56.3,
                    "temperature": 9.9
                }
            },
            {
                "time": 1587266640000,
                "sensorId": "uuid0129",
                "data": {
                    "relative humidity": 53.8,
                    "temperature": 8.5
                }
            },
            {
                "time": 1587267000000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 280,
                    "relative humidity": 55,
                    "temperature": 6.3
                }
            },
            {
                "time": 1587267360000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 672,
                    "relative humidity": 34.6
                }
            },
            {
                "time": 1587267720000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5413,
                    "relative humidity": 60,
                    "temperature": 9.2
                }
            },
            {
                "time": 1587268080000,
                "sensorId": "uuid0129",
                "data": {
                    "relative humidity": 35,
                    "temperature": 9.2
                }
            },
            {
                "time": 1587268440000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 1987,
                    "relative humidity": 34.6,
                    "temperature": 9.9
                }
            },
            {
                "time": 1587268800000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 3821,
                    "relative humidity": 34.6,
                    "temperature": 6.4
                }
            },
            {
                "time": 1587269160000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5090,
                    "relative humidity": 46,
                    "temperature": 8.1
                }
            },
            {
                "time": 1587269520000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 890,
                    "relative humidity": 51,
                    "temperature": 3.6
                }
            },
            {
                "time": 1587269880000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 569,
                    "relative humidity": 38,
                    "temperature": 7.2
                }
            },
            {
                "time": 1587270240000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4502,
                    "relative humidity": 44,
                    "temperature": 6.4
                }
            },
            {
                "time": 1587270600000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4239,
                    "relative humidity": 51,
                    "temperature": 9.9
                }
            },
            {
                "time": 1587270960000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 280,
                    "relative humidity": 53,
                    "temperature": 9.1
                }
            },
            {
                "time": 1587271320000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4432,
                    "relative humidity": 59,
                    "temperature": 8.3
                }
            },
            {
                "time": 1587271680000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4216,
                    "relative humidity": 62,
                    "temperature": 8.1
                }
            },
            {
                "time": 1587272040000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4432,
                    "relative humidity": 35,
                    "temperature": 3.6
                }
            },
            {
                "time": 1587272400000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5090,
                    "relative humidity": 35,
                    "temperature": 7.5
                }
            },
            {
                "time": 1587272760000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 2266,
                    "relative humidity": 53,
                    "temperature": 8.3
                }
            },
            {
                "time": 1587273120000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 569,
                    "relative humidity": 53.8,
                    "temperature": 7.2
                }
            },
            {
                "time": 1587273480000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 3821,
                    "relative humidity": 44,
                    "temperature": 6.4
                }
            },
            {
                "time": 1587273840000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 1004,
                    "relative humidity": 53.8,
                    "temperature": 9.1
                }
            },
            {
                "time": 1587274200000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4502,
                    "relative humidity": 53,
                    "temperature": 6.4
                }
            },
            {
                "time": 1587274560000,
                "sensorId": "uuid0129",
                "data": {
                    "relative humidity": 48.5,
                    "temperature": 9.9
                }
            },
            {
                "time": 1587274920000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5542,
                    "relative humidity": 36.7,
                    "temperature": 8.1
                }
            },
            {
                "time": 1587275280000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 2227,
                    "relative humidity": 34.6,
                    "temperature": 8.1
                }
            },
            {
                "time": 1587275640000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 2227,
                    "relative humidity": 36.7,
                    "temperature": 9.1
                }
            },
            {
                "time": 1587276000000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13045,
                    "relative humidity": 64
                }
            },
            {
                "time": 1587276360000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10899,
                    "relative humidity": 48.5,
                    "temperature": 23
                }
            },
            {
                "time": 1587276720000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10553,
                    "relative humidity": 48.5,
                    "temperature": 18.9
                }
            },
            {
                "time": 1587277080000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 6012,
                    "relative humidity": 59,
                    "temperature": 16.3
                }
            },
            {
                "time": 1587277440000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13562,
                    "relative humidity": 56.3,
                    "temperature": 12
                }
            },
            {
                "time": 1587277800000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10553,
                    "relative humidity": 35,
                    "temperature": 11
                }
            },
            {
                "time": 1587278160000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7901,
                    "relative humidity": 44.4,
                    "temperature": 11
                }
            },
            {
                "time": 1587278520000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 3560,
                    "relative humidity": 53.8,
                    "temperature": 10.5
                }
            },
            {
                "time": 1587278880000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13003,
                    "relative humidity": 53.8,
                    "temperature": 18.4
                }
            },
            {
                "time": 1587279240000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12310,
                    "relative humidity": 71,
                    "temperature": 17.9
                }
            },
            {
                "time": 1587279600000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4231,
                    "relative humidity": 63.4,
                    "temperature": 22
                }
            },
            {
                "time": 1587279960000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8766,
                    "relative humidity": 62,
                    "temperature": 17.5
                }
            },
            {
                "time": 1587280320000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5562,
                    "relative humidity": 51,
                    "temperature": 21
                }
            },
            {
                "time": 1587280680000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10553,
                    "relative humidity": 44.4,
                    "temperature": 19.2
                }
            },
            {
                "time": 1587281040000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10003,
                    "relative humidity": 50,
                    "temperature": 14
                }
            },
            {
                "time": 1587281400000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7788,
                    "relative humidity": 71
                }
            },
            {
                "time": 1587281760000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13045,
                    "relative humidity": 55,
                    "temperature": 19.4
                }
            },
            {
                "time": 1587282120000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7713,
                    "relative humidity": 59,
                    "temperature": 16.3
                }
            },
            {
                "time": 1587282480000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13045,
                    "relative humidity": 34.6,
                    "temperature": 23
                }
            },
            {
                "time": 1587282840000,
                "sensorId": "uuid0129",
                "data": {
                    "relative humidity": 50,
                    "temperature": 17.9
                }
            },
            {
                "time": 1587283200000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9021,
                    "relative humidity": 55,
                    "temperature": 17.4
                }
            },
            {
                "time": 1587283560000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 6012,
                    "relative humidity": 53.8,
                    "temperature": 14.6
                }
            },
            {
                "time": 1587283920000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7321,
                    "relative humidity": 53.8,
                    "temperature": 14
                }
            },
            {
                "time": 1587284280000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5562,
                    "relative humidity": 55,
                    "temperature": 16.3
                }
            },
            {
                "time": 1587284640000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13562,
                    "relative humidity": 55,
                    "temperature": 23
                }
            },
            {
                "time": 1587285000000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10899,
                    "relative humidity": 64,
                    "temperature": 17.9
                }
            },
            {
                "time": 1587285360000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5562,
                    "relative humidity": 62,
                    "temperature": 10.5
                }
            },
            {
                "time": 1587285720000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13562,
                    "relative humidity": 63.4
                }
            },
            {
                "time": 1587286080000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5562,
                    "relative humidity": 59,
                    "temperature": 17.9
                }
            },
            {
                "time": 1587286440000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13003,
                    "relative humidity": 62,
                    "temperature": 21
                }
            },
            {
                "time": 1587286800000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 6602,
                    "relative humidity": 38,
                    "temperature": 12.2
                }
            },
            {
                "time": 1587287160000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 3560,
                    "temperature": 14.6
                }
            },
            {
                "time": 1587287520000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9902,
                    "relative humidity": 64,
                    "temperature": 12.2
                }
            },
            {
                "time": 1587287880000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9801,
                    "relative humidity": 38,
                    "temperature": 10.3
                }
            },
            {
                "time": 1587288240000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8990,
                    "temperature": 10.3
                }
            },
            {
                "time": 1587288600000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10899,
                    "relative humidity": 48,
                    "temperature": 14
                }
            },
            {
                "time": 1587288960000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13045,
                    "relative humidity": 59,
                    "temperature": 17.9
                }
            },
            {
                "time": 1587289320000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7713,
                    "relative humidity": 53.8,
                    "temperature": 11
                }
            },
            {
                "time": 1587289680000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7901,
                    "relative humidity": 48.5,
                    "temperature": 17.9
                }
            },
            {
                "time": 1587290040000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13562,
                    "relative humidity": 59,
                    "temperature": 17.9
                }
            },
            {
                "time": 1587290400000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5562,
                    "relative humidity": 38,
                    "temperature": 12.2
                }
            },
            {
                "time": 1587290760000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12310,
                    "relative humidity": 50,
                    "temperature": 19.2
                }
            },
            {
                "time": 1587291120000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12003,
                    "relative humidity": 34.6,
                    "temperature": 10.3
                }
            },
            {
                "time": 1587291480000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5562,
                    "relative humidity": 53.8,
                    "temperature": 14.6
                }
            },
            {
                "time": 1587291840000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10899,
                    "relative humidity": 36.7,
                    "temperature": 16.3
                }
            },
            {
                "time": 1587292200000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7901,
                    "relative humidity": 44,
                    "temperature": 10.3
                }
            },
            {
                "time": 1587292560000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9021,
                    "relative humidity": 62,
                    "temperature": 22
                }
            },
            {
                "time": 1587292920000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9023,
                    "relative humidity": 44.4,
                    "temperature": 17.4
                }
            },
            {
                "time": 1587293280000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13562,
                    "relative humidity": 44.4,
                    "temperature": 21
                }
            },
            {
                "time": 1587293640000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13045,
                    "relative humidity": 59,
                    "temperature": 18.9
                }
            },
            {
                "time": 1587294000000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13003,
                    "relative humidity": 35,
                    "temperature": 19.4
                }
            },
            {
                "time": 1587294360000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 6012,
                    "relative humidity": 48.5,
                    "temperature": 21
                }
            },
            {
                "time": 1587294720000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8892,
                    "relative humidity": 60,
                    "temperature": 18.4
                }
            },
            {
                "time": 1587295080000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12003,
                    "temperature": 14
                }
            },
            {
                "time": 1587295440000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5698,
                    "relative humidity": 53,
                    "temperature": 12.2
                }
            },
            {
                "time": 1587295800000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12310,
                    "relative humidity": 44.4,
                    "temperature": 12
                }
            },
            {
                "time": 1587296160000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7901,
                    "relative humidity": 48,
                    "temperature": 19.2
                }
            },
            {
                "time": 1587296520000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13562,
                    "relative humidity": 53.8,
                    "temperature": 10.5
                }
            },
            {
                "time": 1587296880000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10003,
                    "relative humidity": 55,
                    "temperature": 12.2
                }
            },
            {
                "time": 1587297240000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7713,
                    "relative humidity": 56.3,
                    "temperature": 12
                }
            },
            {
                "time": 1587297600000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8892,
                    "relative humidity": 36.7,
                    "temperature": 14.6
                }
            },
            {
                "time": 1587297960000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8111,
                    "relative humidity": 64,
                    "temperature": 12
                }
            },
            {
                "time": 1587298320000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 6012,
                    "relative humidity": 36.7,
                    "temperature": 10.3
                }
            },
            {
                "time": 1587298680000,
                "sensorId": "uuid0129",
                "data": {
                    "relative humidity": 48.5,
                    "temperature": 12.2
                }
            },
            {
                "time": 1587299040000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12310,
                    "temperature": 12
                }
            },
            {
                "time": 1587299400000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9801,
                    "relative humidity": 35,
                    "temperature": 18.4
                }
            },
            {
                "time": 1587299760000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5562,
                    "relative humidity": 51,
                    "temperature": 15
                }
            },
            {
                "time": 1587300120000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13003,
                    "relative humidity": 36.7
                }
            },
            {
                "time": 1587300480000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10553,
                    "relative humidity": 59,
                    "temperature": 11
                }
            },
            {
                "time": 1587300840000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10003,
                    "relative humidity": 64,
                    "temperature": 18.9
                }
            },
            {
                "time": 1587301200000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10553,
                    "relative humidity": 71,
                    "temperature": 14
                }
            },
            {
                "time": 1587301560000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9801,
                    "relative humidity": 44.4,
                    "temperature": 18.9
                }
            },
            {
                "time": 1587301920000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9021,
                    "relative humidity": 53,
                    "temperature": 14.6
                }
            },
            {
                "time": 1587302280000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 6602,
                    "relative humidity": 55,
                    "temperature": 11
                }
            },
            {
                "time": 1587302640000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 6602,
                    "temperature": 22
                }
            },
            {
                "time": 1587303000000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10553,
                    "relative humidity": 59,
                    "temperature": 18.9
                }
            },
            {
                "time": 1587303360000,
                "sensorId": "uuid0129",
                "data": {
                    "relative humidity": 49,
                    "temperature": 17.5
                }
            },
            {
                "time": 1587303720000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12310,
                    "relative humidity": 53,
                    "temperature": 10.5
                }
            },
            {
                "time": 1587304080000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12310,
                    "relative humidity": 34.6,
                    "temperature": 14.6
                }
            },
            {
                "time": 1587304440000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12310,
                    "relative humidity": 51,
                    "temperature": 23
                }
            },
            {
                "time": 1587304800000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 6602,
                    "relative humidity": 50,
                    "temperature": 22
                }
            },
            {
                "time": 1587305160000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9801,
                    "temperature": 17.9
                }
            },
            {
                "time": 1587305520000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9902,
                    "temperature": 14.6
                }
            },
            {
                "time": 1587305880000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5698,
                    "relative humidity": 62
                }
            },
            {
                "time": 1587306240000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5562,
                    "relative humidity": 59,
                    "temperature": 12
                }
            },
            {
                "time": 1587306600000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7788,
                    "relative humidity": 51,
                    "temperature": 12
                }
            },
            {
                "time": 1587306960000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13562,
                    "relative humidity": 59,
                    "temperature": 18.4
                }
            },
            {
                "time": 1587307320000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9023,
                    "relative humidity": 34.6,
                    "temperature": 18.4
                }
            },
            {
                "time": 1587307680000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9801,
                    "relative humidity": 50,
                    "temperature": 16.3
                }
            },
            {
                "time": 1587308040000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12310,
                    "relative humidity": 59,
                    "temperature": 17.9
                }
            },
            {
                "time": 1587308400000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8990,
                    "relative humidity": 55,
                    "temperature": 10.3
                }
            },
            {
                "time": 1587308760000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 6602,
                    "relative humidity": 35,
                    "temperature": 18.9
                }
            },
            {
                "time": 1587309120000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5698,
                    "relative humidity": 56.3,
                    "temperature": 23
                }
            },
            {
                "time": 1587309480000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5698,
                    "relative humidity": 56.3
                }
            },
            {
                "time": 1587309840000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13562,
                    "relative humidity": 59,
                    "temperature": 10.5
                }
            },
            {
                "time": 1587310200000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10899,
                    "relative humidity": 49,
                    "temperature": 18.9
                }
            },
            {
                "time": 1587310560000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13562,
                    "relative humidity": 59,
                    "temperature": 21
                }
            },
            {
                "time": 1587310920000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4231,
                    "relative humidity": 49,
                    "temperature": 11
                }
            },
            {
                "time": 1587311280000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8892,
                    "relative humidity": 53.8,
                    "temperature": 18.4
                }
            },
            {
                "time": 1587311640000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13003,
                    "relative humidity": 46
                }
            },
            {
                "time": 1587312000000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5698,
                    "relative humidity": 62,
                    "temperature": 21
                }
            },
            {
                "time": 1587312360000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7788,
                    "relative humidity": 53.8,
                    "temperature": 17.5
                }
            },
            {
                "time": 1587312720000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10899,
                    "relative humidity": 59,
                    "temperature": 17.5
                }
            },
            {
                "time": 1587313080000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 3560,
                    "relative humidity": 53,
                    "temperature": 19.4
                }
            },
            {
                "time": 1587313440000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10003,
                    "relative humidity": 48,
                    "temperature": 10.5
                }
            },
            {
                "time": 1587313800000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5562,
                    "relative humidity": 59,
                    "temperature": 17.4
                }
            },
            {
                "time": 1587314160000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12556,
                    "relative humidity": 63.4,
                    "temperature": 15
                }
            },
            {
                "time": 1587314520000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4231,
                    "relative humidity": 53.8,
                    "temperature": 22
                }
            },
            {
                "time": 1587314880000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5562,
                    "relative humidity": 46,
                    "temperature": 12
                }
            },
            {
                "time": 1587315240000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7321,
                    "relative humidity": 60,
                    "temperature": 10.3
                }
            },
            {
                "time": 1587315600000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 280,
                    "relative humidity": 60,
                    "temperature": 8.1
                }
            },
            {
                "time": 1587315960000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 569,
                    "relative humidity": 48,
                    "temperature": 3.6
                }
            },
            {
                "time": 1587316320000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5090,
                    "relative humidity": 59,
                    "temperature": 7.5
                }
            },
            {
                "time": 1587316680000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 2094,
                    "relative humidity": 71,
                    "temperature": 8.3
                }
            },
            {
                "time": 1587317040000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 1222,
                    "relative humidity": 59,
                    "temperature": 7.2
                }
            },
            {
                "time": 1587317400000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 672,
                    "relative humidity": 46,
                    "temperature": 7.5
                }
            },
            {
                "time": 1587317760000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 1987,
                    "relative humidity": 59,
                    "temperature": 7.2
                }
            },
            {
                "time": 1587318120000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 280,
                    "temperature": 9.2
                }
            },
            {
                "time": 1587318480000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4502,
                    "relative humidity": 48,
                    "temperature": 9.2
                }
            },
            {
                "time": 1587318840000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5542,
                    "relative humidity": 59,
                    "temperature": 9.2
                }
            },
            {
                "time": 1587319200000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4432,
                    "relative humidity": 71,
                    "temperature": 8.1
                }
            },
            {
                "time": 1587319560000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5090,
                    "relative humidity": 36.7
                }
            },
            {
                "time": 1587319920000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 1992,
                    "relative humidity": 34.6,
                    "temperature": 8.3
                }
            },
            {
                "time": 1587320280000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 2266,
                    "relative humidity": 55,
                    "temperature": 9.2
                }
            },
            {
                "time": 1587320640000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 1987,
                    "relative humidity": 50,
                    "temperature": 7.2
                }
            },
            {
                "time": 1587321000000,
                "sensorId": "uuid0129",
                "data": {
                    "relative humidity": 55,
                    "temperature": 6.4
                }
            },
            {
                "time": 1587321360000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 1222,
                    "relative humidity": 71,
                    "temperature": 8.5
                }
            },
            {
                "time": 1587321720000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 569,
                    "relative humidity": 51,
                    "temperature": 8.5
                }
            },
            {
                "time": 1587322080000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 2094,
                    "relative humidity": 56.3,
                    "temperature": 8.3
                }
            },
            {
                "time": 1587322440000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 1992,
                    "relative humidity": 62,
                    "temperature": 9.9
                }
            },
            {
                "time": 1587322800000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 50,
                    "temperature": 6.2
                }
            },
            {
                "time": 1587323160000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 35,
                    "temperature": 4.2
                }
            },
            {
                "time": 1587323520000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 44.4,
                    "temperature": 6
                }
            },
            {
                "time": 1587323880000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "temperature": 2.3
                }
            },
            {
                "time": 1587324240000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 48.5,
                    "temperature": 6.2
                }
            },
            {
                "time": 1587324600000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 62,
                    "temperature": 2.3
                }
            },
            {
                "time": 1587324960000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 34.6,
                    "temperature": 6.2
                }
            },
            {
                "time": 1587325320000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 64,
                    "temperature": 8.9
                }
            },
            {
                "time": 1587325680000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 36.7,
                    "temperature": 7.1
                }
            },
            {
                "time": 1587326040000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 64,
                    "temperature": 5.5
                }
            },
            {
                "time": 1587326400000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 59,
                    "temperature": 6
                }
            },
            {
                "time": 1587326760000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 44,
                    "temperature": 3
                }
            },
            {
                "time": 1587327120000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 62,
                    "temperature": 4
                }
            },
            {
                "time": 1587327480000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 44.4,
                    "temperature": 8.5
                }
            },
            {
                "time": 1587327840000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 63.4,
                    "temperature": 8.9
                }
            },
            {
                "time": 1587328200000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 44,
                    "temperature": 6.8
                }
            },
            {
                "time": 1587328560000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 63.4,
                    "temperature": 8.9
                }
            },
            {
                "time": 1587328920000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 38,
                    "temperature": 3.4
                }
            },
            {
                "time": 1587329280000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 71,
                    "temperature": 6.8
                }
            },
            {
                "time": 1587329640000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "temperature": 5.7
                }
            },
            {
                "time": 1587330000000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 35,
                    "temperature": 6.2
                }
            },
            {
                "time": 1587330360000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 38,
                    "temperature": 4
                }
            },
            {
                "time": 1587330720000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 55
                }
            },
            {
                "time": 1587331080000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 34.6,
                    "temperature": 5.7
                }
            },
            {
                "time": 1587331440000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 38,
                    "temperature": 2.3
                }
            },
            {
                "time": 1587331800000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 53.8,
                    "temperature": 3.4
                }
            },
            {
                "time": 1587332160000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 71,
                    "temperature": 7.1
                }
            },
            {
                "time": 1587332520000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 44,
                    "temperature": 3.4
                }
            },
            {
                "time": 1587332880000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 55,
                    "temperature": 2.3
                }
            },
            {
                "time": 1587333240000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 38,
                    "temperature": 7.1
                }
            },
            {
                "time": 1587333600000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 56.3,
                    "temperature": 2.3
                }
            },
            {
                "time": 1587333960000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 62,
                    "temperature": 5.7
                }
            },
            {
                "time": 1587334320000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 56.3
                }
            },
            {
                "time": 1587334680000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 56.3,
                    "temperature": 4
                }
            },
            {
                "time": 1587335040000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 59,
                    "temperature": 5.7
                }
            },
            {
                "time": 1587335400000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 36.7,
                    "temperature": 3.4
                }
            },
            {
                "time": 1587335760000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 53.8,
                    "temperature": 6
                }
            },
            {
                "time": 1587336120000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 56.3,
                    "temperature": 5.5
                }
            },
            {
                "time": 1587336480000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 71
                }
            },
            {
                "time": 1587336840000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 63.4,
                    "temperature": 5.7
                }
            },
            {
                "time": 1587337200000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 55
                }
            },
            {
                "time": 1587337560000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 62,
                    "temperature": 3.4
                }
            },
            {
                "time": 1587337920000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 60,
                    "temperature": 2.3
                }
            },
            {
                "time": 1587338280000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 48.5,
                    "temperature": 4
                }
            },
            {
                "time": 1587338640000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 35,
                    "temperature": 4
                }
            },
            {
                "time": 1587339000000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 59,
                    "temperature": 2.3
                }
            },
            {
                "time": 1587339360000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 59,
                    "temperature": 4.2
                }
            },
            {
                "time": 1587339720000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 36.7,
                    "temperature": 5.5
                }
            },
            {
                "time": 1587340080000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 53.8,
                    "temperature": 6.2
                }
            },
            {
                "time": 1587340440000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 62,
                    "temperature": 6.2
                }
            },
            {
                "time": 1587340800000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 64,
                    "temperature": 4.2
                }
            },
            {
                "time": 1587341160000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 53,
                    "temperature": 4.2
                }
            },
            {
                "time": 1587341520000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 38,
                    "temperature": 7.1
                }
            },
            {
                "time": 1587341880000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 62,
                    "temperature": 4
                }
            },
            {
                "time": 1587342240000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 60,
                    "temperature": 4.2
                }
            },
            {
                "time": 1587342600000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 55,
                    "temperature": 6.8
                }
            },
            {
                "time": 1587342960000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 48,
                    "temperature": 6
                }
            },
            {
                "time": 1587343320000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 64,
                    "temperature": 3
                }
            },
            {
                "time": 1587343680000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 60,
                    "temperature": 8.5
                }
            },
            {
                "time": 1587344040000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 55,
                    "temperature": 5.5
                }
            },
            {
                "time": 1587344400000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 62,
                    "temperature": 4
                }
            },
            {
                "time": 1587344760000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 50,
                    "temperature": 4.2
                }
            },
            {
                "time": 1587345120000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 48.5,
                    "temperature": 7.1
                }
            },
            {
                "time": 1587345480000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 51,
                    "temperature": 8.9
                }
            },
            {
                "time": 1587345840000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 56.3,
                    "temperature": 6
                }
            },
            {
                "time": 1587346200000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 51,
                    "temperature": 5.7
                }
            },
            {
                "time": 1587346560000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 46,
                    "temperature": 7.1
                }
            },
            {
                "time": 1587346920000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 56.3,
                    "temperature": 4
                }
            },
            {
                "time": 1587347280000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 56.3,
                    "temperature": 4
                }
            },
            {
                "time": 1587347640000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "temperature": 4.2
                }
            },
            {
                "time": 1587348000000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 71,
                    "temperature": 5.5
                }
            },
            {
                "time": 1587348360000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 38,
                    "temperature": 5.7
                }
            },
            {
                "time": 1587348720000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 44.4,
                    "temperature": 5.7
                }
            },
            {
                "time": 1587349080000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 55,
                    "temperature": 4.2
                }
            },
            {
                "time": 1587349440000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 62,
                    "temperature": 3
                }
            },
            {
                "time": 1587349800000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 55
                }
            },
            {
                "time": 1587350160000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 55,
                    "temperature": 4
                }
            },
            {
                "time": 1587350520000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 48,
                    "temperature": 8.5
                }
            },
            {
                "time": 1587350880000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 55,
                    "temperature": 6.2
                }
            },
            {
                "time": 1587351240000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 46,
                    "temperature": 5.5
                }
            },
            {
                "time": 1587351600000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 1030,
                    "relative humidity": 48.5,
                    "temperature": 9.2
                }
            },
            {
                "time": 1587351960000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5413,
                    "relative humidity": 48.5,
                    "temperature": 7.5
                }
            },
            {
                "time": 1587352320000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4239,
                    "relative humidity": 34.6,
                    "temperature": 8.5
                }
            },
            {
                "time": 1587352680000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 3122,
                    "relative humidity": 56.3,
                    "temperature": 9.9
                }
            },
            {
                "time": 1587353040000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 3334,
                    "relative humidity": 56.3,
                    "temperature": 6.3
                }
            },
            {
                "time": 1587353400000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 3123,
                    "relative humidity": 38,
                    "temperature": 8.3
                }
            },
            {
                "time": 1587353760000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4216,
                    "relative humidity": 63.4,
                    "temperature": 6.4
                }
            },
            {
                "time": 1587354120000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5502,
                    "relative humidity": 55,
                    "temperature": 7.5
                }
            },
            {
                "time": 1587354480000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5090,
                    "relative humidity": 49,
                    "temperature": 9.9
                }
            },
            {
                "time": 1587354840000,
                "sensorId": "uuid0129",
                "data": {
                    "relative humidity": 44,
                    "temperature": 3.6
                }
            },
            {
                "time": 1587355200000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 569,
                    "relative humidity": 35,
                    "temperature": 6.4
                }
            },
            {
                "time": 1587355560000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 2094,
                    "relative humidity": 35,
                    "temperature": 6.4
                }
            },
            {
                "time": 1587355920000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5502,
                    "relative humidity": 59,
                    "temperature": 6.4
                }
            },
            {
                "time": 1587356280000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 569,
                    "relative humidity": 53.8,
                    "temperature": 9.9
                }
            },
            {
                "time": 1587356640000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 1222,
                    "relative humidity": 56.3,
                    "temperature": 9.2
                }
            },
            {
                "time": 1587357000000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 2878,
                    "relative humidity": 34.6,
                    "temperature": 7.5
                }
            },
            {
                "time": 1587357360000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5542,
                    "relative humidity": 44.4,
                    "temperature": 7.2
                }
            },
            {
                "time": 1587357720000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 1222,
                    "relative humidity": 50,
                    "temperature": 9.9
                }
            },
            {
                "time": 1587358080000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 2227,
                    "relative humidity": 53,
                    "temperature": 8.1
                }
            },
            {
                "time": 1587358440000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 1004,
                    "relative humidity": 48,
                    "temperature": 8.3
                }
            },
            {
                "time": 1587358800000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 1987,
                    "relative humidity": 53,
                    "temperature": 8.3
                }
            },
            {
                "time": 1587359160000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 1020,
                    "relative humidity": 59,
                    "temperature": 9.9
                }
            },
            {
                "time": 1587359520000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 2266,
                    "relative humidity": 63.4
                }
            },
            {
                "time": 1587359880000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 2227,
                    "relative humidity": 56.3,
                    "temperature": 8.3
                }
            },
            {
                "time": 1587360240000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 569,
                    "relative humidity": 60,
                    "temperature": 8.1
                }
            },
            {
                "time": 1587360600000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4239,
                    "relative humidity": 62,
                    "temperature": 7.5
                }
            },
            {
                "time": 1587360960000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 280,
                    "relative humidity": 46,
                    "temperature": 9.2
                }
            },
            {
                "time": 1587361320000,
                "sensorId": "uuid0129",
                "data": {
                    "relative humidity": 59,
                    "temperature": 9.9
                }
            },
            {
                "time": 1587361680000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 2094,
                    "relative humidity": 46,
                    "temperature": 9.1
                }
            },
            {
                "time": 1587362040000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 3334,
                    "relative humidity": 63.4,
                    "temperature": 3.6
                }
            },
            {
                "time": 1587362400000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8766,
                    "relative humidity": 51,
                    "temperature": 21
                }
            },
            {
                "time": 1587362760000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8892,
                    "relative humidity": 62,
                    "temperature": 15
                }
            },
            {
                "time": 1587363120000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7321,
                    "relative humidity": 48,
                    "temperature": 18.9
                }
            },
            {
                "time": 1587363480000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4231,
                    "relative humidity": 46,
                    "temperature": 17.9
                }
            },
            {
                "time": 1587363840000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10003,
                    "relative humidity": 62,
                    "temperature": 22
                }
            },
            {
                "time": 1587364200000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9021,
                    "relative humidity": 36.7,
                    "temperature": 10.5
                }
            },
            {
                "time": 1587364560000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10003,
                    "relative humidity": 62,
                    "temperature": 10.3
                }
            },
            {
                "time": 1587364920000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13045,
                    "relative humidity": 63.4,
                    "temperature": 14.6
                }
            },
            {
                "time": 1587365280000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9023,
                    "relative humidity": 35,
                    "temperature": 11
                }
            },
            {
                "time": 1587365640000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9023,
                    "relative humidity": 55,
                    "temperature": 15
                }
            },
            {
                "time": 1587366000000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7713,
                    "temperature": 18.4
                }
            },
            {
                "time": 1587366360000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 6602,
                    "temperature": 19.4
                }
            },
            {
                "time": 1587366720000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9021,
                    "relative humidity": 44.4,
                    "temperature": 17.4
                }
            },
            {
                "time": 1587367080000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12003,
                    "temperature": 16.3
                }
            },
            {
                "time": 1587367440000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9021,
                    "relative humidity": 59,
                    "temperature": 12
                }
            },
            {
                "time": 1587367800000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8766,
                    "relative humidity": 62,
                    "temperature": 18.9
                }
            },
            {
                "time": 1587368160000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8990,
                    "relative humidity": 50,
                    "temperature": 17.5
                }
            },
            {
                "time": 1587368520000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12556,
                    "relative humidity": 38,
                    "temperature": 10.3
                }
            },
            {
                "time": 1587368880000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4231,
                    "relative humidity": 35,
                    "temperature": 17.9
                }
            },
            {
                "time": 1587369240000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5562,
                    "relative humidity": 62,
                    "temperature": 23
                }
            },
            {
                "time": 1587369600000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7788,
                    "relative humidity": 53.8,
                    "temperature": 10.5
                }
            },
            {
                "time": 1587369960000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9021,
                    "relative humidity": 63.4,
                    "temperature": 17.9
                }
            },
            {
                "time": 1587370320000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7713,
                    "relative humidity": 44,
                    "temperature": 14.6
                }
            },
            {
                "time": 1587370680000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8766,
                    "relative humidity": 53,
                    "temperature": 23
                }
            },
            {
                "time": 1587371040000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13045,
                    "relative humidity": 55,
                    "temperature": 18.4
                }
            },
            {
                "time": 1587371400000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12556,
                    "relative humidity": 60,
                    "temperature": 19.2
                }
            },
            {
                "time": 1587371760000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8990,
                    "relative humidity": 55,
                    "temperature": 19.4
                }
            },
            {
                "time": 1587372120000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13562,
                    "relative humidity": 38,
                    "temperature": 11
                }
            },
            {
                "time": 1587372480000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9801,
                    "relative humidity": 44,
                    "temperature": 12.2
                }
            },
            {
                "time": 1587372840000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9023,
                    "relative humidity": 38,
                    "temperature": 12
                }
            },
            {
                "time": 1587373200000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 3560,
                    "relative humidity": 55,
                    "temperature": 14.6
                }
            },
            {
                "time": 1587373560000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5698,
                    "relative humidity": 71,
                    "temperature": 21
                }
            },
            {
                "time": 1587373920000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12310,
                    "relative humidity": 35,
                    "temperature": 10.5
                }
            },
            {
                "time": 1587374280000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 3560,
                    "relative humidity": 50,
                    "temperature": 19.2
                }
            },
            {
                "time": 1587374640000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10899,
                    "relative humidity": 62,
                    "temperature": 18.9
                }
            },
            {
                "time": 1587375000000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8766,
                    "relative humidity": 59,
                    "temperature": 19.4
                }
            },
            {
                "time": 1587375360000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9801,
                    "relative humidity": 49,
                    "temperature": 17.9
                }
            },
            {
                "time": 1587375720000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 6012,
                    "relative humidity": 44,
                    "temperature": 19.2
                }
            },
            {
                "time": 1587376080000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13045,
                    "relative humidity": 60,
                    "temperature": 22
                }
            },
            {
                "time": 1587376440000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12003,
                    "relative humidity": 48.5,
                    "temperature": 17.9
                }
            },
            {
                "time": 1587376800000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 3560,
                    "relative humidity": 55,
                    "temperature": 11
                }
            },
            {
                "time": 1587377160000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13562,
                    "relative humidity": 38,
                    "temperature": 12.2
                }
            },
            {
                "time": 1587377520000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5562,
                    "relative humidity": 59,
                    "temperature": 11
                }
            },
            {
                "time": 1587377880000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 6012,
                    "relative humidity": 53.8,
                    "temperature": 19.2
                }
            },
            {
                "time": 1587378240000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4231,
                    "relative humidity": 55,
                    "temperature": 14.6
                }
            },
            {
                "time": 1587378600000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 3560,
                    "relative humidity": 63.4,
                    "temperature": 19.4
                }
            },
            {
                "time": 1587378960000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10899,
                    "relative humidity": 44,
                    "temperature": 10.2
                }
            },
            {
                "time": 1587379320000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13562,
                    "temperature": 14
                }
            },
            {
                "time": 1587379680000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10553,
                    "relative humidity": 35,
                    "temperature": 10.5
                }
            },
            {
                "time": 1587380040000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12310,
                    "relative humidity": 59,
                    "temperature": 17.9
                }
            },
            {
                "time": 1587380400000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13003,
                    "relative humidity": 46,
                    "temperature": 16.3
                }
            },
            {
                "time": 1587380760000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12003,
                    "relative humidity": 34.6,
                    "temperature": 10.2
                }
            },
            {
                "time": 1587381120000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8892,
                    "relative humidity": 48.5
                }
            },
            {
                "time": 1587381480000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13562,
                    "relative humidity": 60,
                    "temperature": 14
                }
            },
            {
                "time": 1587381840000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5562,
                    "relative humidity": 44,
                    "temperature": 12
                }
            },
            {
                "time": 1587382200000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13045,
                    "relative humidity": 71,
                    "temperature": 10.3
                }
            },
            {
                "time": 1587382560000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8990,
                    "relative humidity": 55,
                    "temperature": 18.9
                }
            },
            {
                "time": 1587382920000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12556,
                    "relative humidity": 35,
                    "temperature": 17.5
                }
            },
            {
                "time": 1587383280000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7321,
                    "temperature": 14.6
                }
            },
            {
                "time": 1587383640000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13562,
                    "relative humidity": 64,
                    "temperature": 15
                }
            },
            {
                "time": 1587384000000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7713,
                    "relative humidity": 53.8,
                    "temperature": 17.5
                }
            },
            {
                "time": 1587384360000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 3560,
                    "relative humidity": 64,
                    "temperature": 22
                }
            },
            {
                "time": 1587384720000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12003,
                    "relative humidity": 38,
                    "temperature": 23
                }
            },
            {
                "time": 1587385080000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9023,
                    "relative humidity": 49,
                    "temperature": 12
                }
            },
            {
                "time": 1587385440000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12310,
                    "relative humidity": 63.4,
                    "temperature": 10.2
                }
            },
            {
                "time": 1587385800000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12310,
                    "relative humidity": 59,
                    "temperature": 17.9
                }
            },
            {
                "time": 1587386160000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9902,
                    "relative humidity": 62,
                    "temperature": 17.9
                }
            },
            {
                "time": 1587386520000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10899,
                    "relative humidity": 64,
                    "temperature": 15
                }
            },
            {
                "time": 1587386880000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12556,
                    "relative humidity": 48,
                    "temperature": 18.4
                }
            },
            {
                "time": 1587387240000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9801,
                    "relative humidity": 55,
                    "temperature": 17.9
                }
            },
            {
                "time": 1587387600000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13003,
                    "relative humidity": 53,
                    "temperature": 23
                }
            },
            {
                "time": 1587387960000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9021,
                    "relative humidity": 46,
                    "temperature": 21
                }
            },
            {
                "time": 1587388320000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7713,
                    "relative humidity": 38,
                    "temperature": 17.5
                }
            },
            {
                "time": 1587388680000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7788,
                    "relative humidity": 51,
                    "temperature": 12.2
                }
            },
            {
                "time": 1587389040000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7788,
                    "relative humidity": 34.6,
                    "temperature": 17.9
                }
            },
            {
                "time": 1587389400000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12556,
                    "relative humidity": 64,
                    "temperature": 10.2
                }
            },
            {
                "time": 1587389760000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9023,
                    "relative humidity": 48.5,
                    "temperature": 19.4
                }
            },
            {
                "time": 1587390120000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8111,
                    "relative humidity": 49,
                    "temperature": 11
                }
            },
            {
                "time": 1587390480000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9801,
                    "relative humidity": 46,
                    "temperature": 18.4
                }
            },
            {
                "time": 1587390840000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10553,
                    "relative humidity": 48,
                    "temperature": 16.3
                }
            },
            {
                "time": 1587391200000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13003,
                    "relative humidity": 53,
                    "temperature": 17.5
                }
            },
            {
                "time": 1587391560000,
                "sensorId": "uuid0129",
                "data": {
                    "relative humidity": 55,
                    "temperature": 19.4
                }
            },
            {
                "time": 1587391920000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8990,
                    "relative humidity": 60,
                    "temperature": 12
                }
            },
            {
                "time": 1587392280000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10553,
                    "relative humidity": 49,
                    "temperature": 17.5
                }
            },
            {
                "time": 1587392640000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7788,
                    "relative humidity": 35,
                    "temperature": 19.4
                }
            },
            {
                "time": 1587393000000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13045,
                    "relative humidity": 38,
                    "temperature": 14
                }
            },
            {
                "time": 1587393360000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8111,
                    "relative humidity": 50,
                    "temperature": 22
                }
            },
            {
                "time": 1587393720000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10899,
                    "relative humidity": 50
                }
            },
            {
                "time": 1587394080000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5562,
                    "relative humidity": 55,
                    "temperature": 10.5
                }
            },
            {
                "time": 1587394440000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9021,
                    "relative humidity": 55,
                    "temperature": 19.4
                }
            },
            {
                "time": 1587394800000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 6602,
                    "relative humidity": 62,
                    "temperature": 17.5
                }
            },
            {
                "time": 1587395160000,
                "sensorId": "uuid0129",
                "data": {
                    "relative humidity": 63.4,
                    "temperature": 17.5
                }
            },
            {
                "time": 1587395520000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9801,
                    "relative humidity": 44,
                    "temperature": 16.3
                }
            },
            {
                "time": 1587395880000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8111,
                    "relative humidity": 35,
                    "temperature": 17.4
                }
            },
            {
                "time": 1587396240000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10899,
                    "relative humidity": 49,
                    "temperature": 17.9
                }
            },
            {
                "time": 1587396600000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8990,
                    "relative humidity": 50,
                    "temperature": 12.2
                }
            },
            {
                "time": 1587396960000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12003,
                    "relative humidity": 53,
                    "temperature": 11
                }
            },
            {
                "time": 1587397320000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7713,
                    "relative humidity": 64,
                    "temperature": 10.3
                }
            },
            {
                "time": 1587397680000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13045,
                    "relative humidity": 59,
                    "temperature": 18.4
                }
            },
            {
                "time": 1587398040000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9801,
                    "relative humidity": 60,
                    "temperature": 15
                }
            },
            {
                "time": 1587398400000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5698,
                    "relative humidity": 44.4,
                    "temperature": 18.9
                }
            },
            {
                "time": 1587398760000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8990,
                    "relative humidity": 53,
                    "temperature": 19.2
                }
            },
            {
                "time": 1587399120000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9023,
                    "relative humidity": 60
                }
            },
            {
                "time": 1587399480000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8111,
                    "relative humidity": 55,
                    "temperature": 19.2
                }
            },
            {
                "time": 1587399840000,
                "sensorId": "uuid0129",
                "data": {
                    "relative humidity": 46,
                    "temperature": 18.9
                }
            },
            {
                "time": 1587400200000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9902,
                    "relative humidity": 53,
                    "temperature": 17.4
                }
            },
            {
                "time": 1587400560000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9801,
                    "relative humidity": 55,
                    "temperature": 12
                }
            },
            {
                "time": 1587400920000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12556,
                    "relative humidity": 46,
                    "temperature": 12
                }
            },
            {
                "time": 1587401280000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 6602,
                    "relative humidity": 38,
                    "temperature": 17.4
                }
            },
            {
                "time": 1587401640000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8892,
                    "relative humidity": 48.5,
                    "temperature": 10.2
                }
            },
            {
                "time": 1587402000000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 1987,
                    "relative humidity": 51,
                    "temperature": 7.5
                }
            },
            {
                "time": 1587402360000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 672,
                    "relative humidity": 51,
                    "temperature": 6.4
                }
            },
            {
                "time": 1587402720000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4239,
                    "relative humidity": 53
                }
            },
            {
                "time": 1587403080000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4216,
                    "relative humidity": 53,
                    "temperature": 7.5
                }
            },
            {
                "time": 1587403440000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 1992,
                    "relative humidity": 64,
                    "temperature": 9.9
                }
            },
            {
                "time": 1587403800000,
                "sensorId": "uuid0129",
                "data": {
                    "relative humidity": 48,
                    "temperature": 9.1
                }
            },
            {
                "time": 1587404160000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 1222,
                    "relative humidity": 36.7,
                    "temperature": 8.1
                }
            },
            {
                "time": 1587404520000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 890,
                    "relative humidity": 53.8,
                    "temperature": 7.2
                }
            },
            {
                "time": 1587404880000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 3334,
                    "relative humidity": 46,
                    "temperature": 9.2
                }
            },
            {
                "time": 1587405240000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 569,
                    "relative humidity": 62,
                    "temperature": 8.1
                }
            },
            {
                "time": 1587405600000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 2094,
                    "relative humidity": 44,
                    "temperature": 8.1
                }
            },
            {
                "time": 1587405960000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 890,
                    "relative humidity": 62,
                    "temperature": 6.4
                }
            },
            {
                "time": 1587406320000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 3821,
                    "relative humidity": 60,
                    "temperature": 9.2
                }
            },
            {
                "time": 1587406680000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 1030,
                    "relative humidity": 60
                }
            },
            {
                "time": 1587407040000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 3123,
                    "relative humidity": 56.3,
                    "temperature": 8.1
                }
            },
            {
                "time": 1587407400000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4216,
                    "relative humidity": 44,
                    "temperature": 9.2
                }
            },
            {
                "time": 1587407760000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 1987,
                    "relative humidity": 38,
                    "temperature": 7.2
                }
            },
            {
                "time": 1587408120000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 1113,
                    "relative humidity": 48.5,
                    "temperature": 8.3
                }
            },
            {
                "time": 1587408480000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4239,
                    "relative humidity": 62,
                    "temperature": 6.4
                }
            },
            {
                "time": 1587408840000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5542,
                    "relative humidity": 46,
                    "temperature": 7.5
                }
            },
            {
                "time": 1587409200000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 44.4,
                    "temperature": 3.4
                }
            },
            {
                "time": 1587409560000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 71,
                    "temperature": 5.7
                }
            },
            {
                "time": 1587409920000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 55,
                    "temperature": 5.5
                }
            },
            {
                "time": 1587410280000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 35,
                    "temperature": 5.7
                }
            },
            {
                "time": 1587410640000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 35,
                    "temperature": 3.4
                }
            },
            {
                "time": 1587411000000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 50,
                    "temperature": 6
                }
            },
            {
                "time": 1587411360000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "temperature": 5.7
                }
            },
            {
                "time": 1587411720000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 49,
                    "temperature": 5.5
                }
            },
            {
                "time": 1587412080000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 34.6,
                    "temperature": 3.4
                }
            },
            {
                "time": 1587412440000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 62,
                    "temperature": 6.2
                }
            },
            {
                "time": 1587412800000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 60,
                    "temperature": 8.5
                }
            },
            {
                "time": 1587413160000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 46,
                    "temperature": 5.7
                }
            },
            {
                "time": 1587413520000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 55,
                    "temperature": 6.2
                }
            },
            {
                "time": 1587413880000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 46,
                    "temperature": 5.7
                }
            },
            {
                "time": 1587414240000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "temperature": 8.9
                }
            },
            {
                "time": 1587414600000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 64,
                    "temperature": 7.1
                }
            },
            {
                "time": 1587414960000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 56.3,
                    "temperature": 7.1
                }
            },
            {
                "time": 1587415320000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 53
                }
            },
            {
                "time": 1587415680000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 62,
                    "temperature": 6
                }
            },
            {
                "time": 1587416040000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 60,
                    "temperature": 7.1
                }
            },
            {
                "time": 1587416400000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 44.4,
                    "temperature": 5.5
                }
            },
            {
                "time": 1587416760000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 59
                }
            },
            {
                "time": 1587417120000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 48,
                    "temperature": 7.1
                }
            },
            {
                "time": 1587417480000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 62,
                    "temperature": 5.7
                }
            },
            {
                "time": 1587417840000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 50,
                    "temperature": 3
                }
            },
            {
                "time": 1587418200000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 44.4,
                    "temperature": 5.7
                }
            },
            {
                "time": 1587418560000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 44,
                    "temperature": 8.9
                }
            },
            {
                "time": 1587418920000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 60,
                    "temperature": 6
                }
            },
            {
                "time": 1587419280000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 59,
                    "temperature": 8.5
                }
            },
            {
                "time": 1587419640000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 36.7,
                    "temperature": 8.9
                }
            },
            {
                "time": 1587420000000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 63.4,
                    "temperature": 8.9
                }
            },
            {
                "time": 1587420360000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 53
                }
            },
            {
                "time": 1587420720000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 55,
                    "temperature": 2.3
                }
            },
            {
                "time": 1587421080000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 56.3,
                    "temperature": 4.2
                }
            },
            {
                "time": 1587421440000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 59,
                    "temperature": 8.5
                }
            },
            {
                "time": 1587421800000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 71,
                    "temperature": 8.5
                }
            },
            {
                "time": 1587422160000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 60,
                    "temperature": 6.8
                }
            },
            {
                "time": 1587422520000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 48.5,
                    "temperature": 4.2
                }
            },
            {
                "time": 1587422880000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 35,
                    "temperature": 5.7
                }
            },
            {
                "time": 1587423240000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 49,
                    "temperature": 3
                }
            },
            {
                "time": 1587423600000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 53,
                    "temperature": 6
                }
            },
            {
                "time": 1587423960000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 48.5,
                    "temperature": 6
                }
            },
            {
                "time": 1587424320000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 55,
                    "temperature": 4.2
                }
            },
            {
                "time": 1587424680000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 56.3,
                    "temperature": 6
                }
            },
            {
                "time": 1587425040000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 48,
                    "temperature": 4
                }
            },
            {
                "time": 1587425400000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 44
                }
            },
            {
                "time": 1587425760000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 36.7,
                    "temperature": 4
                }
            },
            {
                "time": 1587426120000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 60,
                    "temperature": 2.3
                }
            },
            {
                "time": 1587426480000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 59,
                    "temperature": 4
                }
            },
            {
                "time": 1587426840000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 71,
                    "temperature": 6.2
                }
            },
            {
                "time": 1587427200000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 62,
                    "temperature": 5.5
                }
            },
            {
                "time": 1587427560000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "temperature": 4
                }
            },
            {
                "time": 1587427920000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "temperature": 4.2
                }
            },
            {
                "time": 1587428280000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 53.8,
                    "temperature": 7.1
                }
            },
            {
                "time": 1587428640000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 64,
                    "temperature": 4
                }
            },
            {
                "time": 1587429000000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 50,
                    "temperature": 4
                }
            },
            {
                "time": 1587429360000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 56.3,
                    "temperature": 4.2
                }
            },
            {
                "time": 1587429720000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 48,
                    "temperature": 4.2
                }
            },
            {
                "time": 1587430080000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 36.7,
                    "temperature": 2.3
                }
            },
            {
                "time": 1587430440000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 59,
                    "temperature": 6.8
                }
            },
            {
                "time": 1587430800000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 59,
                    "temperature": 8.9
                }
            },
            {
                "time": 1587431160000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 53.8,
                    "temperature": 4
                }
            },
            {
                "time": 1587431520000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 53.8,
                    "temperature": 3
                }
            },
            {
                "time": 1587431880000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 63.4,
                    "temperature": 2.3
                }
            },
            {
                "time": 1587432240000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 62,
                    "temperature": 8.5
                }
            },
            {
                "time": 1587432600000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 59,
                    "temperature": 8.5
                }
            },
            {
                "time": 1587432960000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 44.4,
                    "temperature": 4.2
                }
            },
            {
                "time": 1587433320000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 48,
                    "temperature": 8.9
                }
            },
            {
                "time": 1587433680000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 34.6,
                    "temperature": 8.5
                }
            },
            {
                "time": 1587434040000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 36.7,
                    "temperature": 4.2
                }
            },
            {
                "time": 1587434400000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 63.4,
                    "temperature": 4.2
                }
            },
            {
                "time": 1587434760000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 71,
                    "temperature": 4.2
                }
            },
            {
                "time": 1587435120000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 56.3,
                    "temperature": 4.2
                }
            },
            {
                "time": 1587435480000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 49,
                    "temperature": 6
                }
            },
            {
                "time": 1587435840000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 38,
                    "temperature": 4.2
                }
            },
            {
                "time": 1587436200000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 62,
                    "temperature": 2.3
                }
            },
            {
                "time": 1587436560000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 59,
                    "temperature": 6.2
                }
            },
            {
                "time": 1587436920000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 53.8
                }
            },
            {
                "time": 1587437280000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 34.6,
                    "temperature": 6.2
                }
            },
            {
                "time": 1587437640000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 48.5
                }
            },
            {
                "time": 1587438000000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 3334,
                    "relative humidity": 44,
                    "temperature": 3.6
                }
            },
            {
                "time": 1587438360000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 280,
                    "relative humidity": 44,
                    "temperature": 6.3
                }
            },
            {
                "time": 1587438720000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 3122,
                    "temperature": 3.6
                }
            },
            {
                "time": 1587439080000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 1030,
                    "relative humidity": 64
                }
            },
            {
                "time": 1587439440000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 569,
                    "relative humidity": 63.4,
                    "temperature": 6.4
                }
            },
            {
                "time": 1587439800000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 1004,
                    "relative humidity": 36.7,
                    "temperature": 8.3
                }
            },
            {
                "time": 1587440160000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 890,
                    "relative humidity": 35,
                    "temperature": 8.5
                }
            },
            {
                "time": 1587440520000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 3334,
                    "relative humidity": 48.5
                }
            },
            {
                "time": 1587440880000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 1222,
                    "relative humidity": 51,
                    "temperature": 6.4
                }
            },
            {
                "time": 1587441240000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 1004,
                    "relative humidity": 62
                }
            },
            {
                "time": 1587441600000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5090,
                    "relative humidity": 53.8
                }
            },
            {
                "time": 1587441960000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 2094,
                    "relative humidity": 38,
                    "temperature": 9.2
                }
            },
            {
                "time": 1587442320000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4432,
                    "relative humidity": 53,
                    "temperature": 6.4
                }
            },
            {
                "time": 1587442680000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 3821,
                    "relative humidity": 62,
                    "temperature": 6.3
                }
            },
            {
                "time": 1587443040000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5413,
                    "relative humidity": 63.4,
                    "temperature": 7.2
                }
            },
            {
                "time": 1587443400000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4239,
                    "relative humidity": 62,
                    "temperature": 6.4
                }
            },
            {
                "time": 1587443760000,
                "sensorId": "uuid0129",
                "data": {
                    "relative humidity": 62,
                    "temperature": 8.5
                }
            },
            {
                "time": 1587444120000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 3122,
                    "relative humidity": 48
                }
            },
            {
                "time": 1587444480000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 1222,
                    "relative humidity": 35
                }
            },
            {
                "time": 1587444840000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 1030,
                    "relative humidity": 53,
                    "temperature": 9.9
                }
            },
            {
                "time": 1587445200000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5090,
                    "relative humidity": 62,
                    "temperature": 7.2
                }
            },
            {
                "time": 1587445560000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4432,
                    "relative humidity": 34.6,
                    "temperature": 6.4
                }
            },
            {
                "time": 1587445920000,
                "sensorId": "uuid0129",
                "data": {
                    "relative humidity": 62,
                    "temperature": 9.9
                }
            },
            {
                "time": 1587446280000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5542,
                    "relative humidity": 44.4,
                    "temperature": 7.2
                }
            },
            {
                "time": 1587446640000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4432,
                    "relative humidity": 71,
                    "temperature": 8.3
                }
            },
            {
                "time": 1587447000000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 1992,
                    "relative humidity": 59,
                    "temperature": 9.2
                }
            },
            {
                "time": 1587447360000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 2094,
                    "relative humidity": 46,
                    "temperature": 6.4
                }
            },
            {
                "time": 1587447720000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 2878,
                    "relative humidity": 71,
                    "temperature": 9.2
                }
            },
            {
                "time": 1587448080000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 1113,
                    "temperature": 9.9
                }
            },
            {
                "time": 1587448440000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 3123,
                    "relative humidity": 50,
                    "temperature": 3.6
                }
            },
            {
                "time": 1587448800000,
                "sensorId": "uuid0129",
                "data": {
                    "relative humidity": 49,
                    "temperature": 12
                }
            },
            {
                "time": 1587449160000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9801,
                    "relative humidity": 53.8,
                    "temperature": 15
                }
            },
            {
                "time": 1587449520000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8111,
                    "relative humidity": 55,
                    "temperature": 17.4
                }
            },
            {
                "time": 1587449880000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12003,
                    "relative humidity": 53.8,
                    "temperature": 22
                }
            },
            {
                "time": 1587450240000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9021,
                    "relative humidity": 34.6,
                    "temperature": 21
                }
            },
            {
                "time": 1587450600000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8111,
                    "relative humidity": 55,
                    "temperature": 19.4
                }
            },
            {
                "time": 1587450960000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12003,
                    "relative humidity": 59,
                    "temperature": 16.3
                }
            },
            {
                "time": 1587451320000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10003,
                    "relative humidity": 50,
                    "temperature": 19.2
                }
            },
            {
                "time": 1587451680000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 6602,
                    "relative humidity": 48.5
                }
            },
            {
                "time": 1587452040000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12310,
                    "relative humidity": 38,
                    "temperature": 14.6
                }
            },
            {
                "time": 1587452400000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9021,
                    "relative humidity": 36.7,
                    "temperature": 15
                }
            },
            {
                "time": 1587452760000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7321,
                    "relative humidity": 71
                }
            },
            {
                "time": 1587453120000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4231,
                    "relative humidity": 51,
                    "temperature": 10.5
                }
            },
            {
                "time": 1587453480000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12310,
                    "relative humidity": 48,
                    "temperature": 15
                }
            },
            {
                "time": 1587453840000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8766,
                    "relative humidity": 50,
                    "temperature": 16.3
                }
            },
            {
                "time": 1587454200000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12310,
                    "temperature": 19.4
                }
            },
            {
                "time": 1587454560000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12003,
                    "relative humidity": 59,
                    "temperature": 10.5
                }
            },
            {
                "time": 1587454920000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9902,
                    "relative humidity": 34.6,
                    "temperature": 23
                }
            },
            {
                "time": 1587455280000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9801,
                    "relative humidity": 34.6,
                    "temperature": 16.3
                }
            },
            {
                "time": 1587455640000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10553,
                    "relative humidity": 56.3,
                    "temperature": 12
                }
            },
            {
                "time": 1587456000000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10899,
                    "relative humidity": 56.3,
                    "temperature": 12
                }
            },
            {
                "time": 1587456360000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7901,
                    "relative humidity": 50,
                    "temperature": 17.5
                }
            },
            {
                "time": 1587456720000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7713,
                    "relative humidity": 63.4,
                    "temperature": 10.2
                }
            },
            {
                "time": 1587457080000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12556,
                    "relative humidity": 62,
                    "temperature": 14
                }
            },
            {
                "time": 1587457440000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12003,
                    "relative humidity": 62,
                    "temperature": 10.5
                }
            },
            {
                "time": 1587457800000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12003,
                    "temperature": 18.9
                }
            },
            {
                "time": 1587458160000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12556,
                    "relative humidity": 64,
                    "temperature": 21
                }
            },
            {
                "time": 1587458520000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 3560,
                    "relative humidity": 55,
                    "temperature": 10.2
                }
            },
            {
                "time": 1587458880000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9021,
                    "relative humidity": 63.4,
                    "temperature": 10.2
                }
            },
            {
                "time": 1587459240000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12556,
                    "relative humidity": 53.8,
                    "temperature": 15
                }
            },
            {
                "time": 1587459600000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7321,
                    "relative humidity": 44,
                    "temperature": 18.4
                }
            },
            {
                "time": 1587459960000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13562,
                    "relative humidity": 44.4,
                    "temperature": 11
                }
            },
            {
                "time": 1587460320000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13562,
                    "relative humidity": 55,
                    "temperature": 23
                }
            },
            {
                "time": 1587460680000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13003,
                    "relative humidity": 62
                }
            },
            {
                "time": 1587461040000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10553,
                    "relative humidity": 51,
                    "temperature": 15
                }
            },
            {
                "time": 1587461400000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7321,
                    "relative humidity": 59,
                    "temperature": 14.6
                }
            },
            {
                "time": 1587461760000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8892,
                    "relative humidity": 62,
                    "temperature": 19.4
                }
            },
            {
                "time": 1587462120000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5562,
                    "relative humidity": 53,
                    "temperature": 11
                }
            },
            {
                "time": 1587462480000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 6602,
                    "relative humidity": 44,
                    "temperature": 11
                }
            },
            {
                "time": 1587462840000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13045
                }
            },
            {
                "time": 1587463200000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12003,
                    "relative humidity": 55,
                    "temperature": 10.3
                }
            },
            {
                "time": 1587463560000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 3560,
                    "relative humidity": 36.7,
                    "temperature": 19.2
                }
            },
            {
                "time": 1587463920000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7901,
                    "relative humidity": 48,
                    "temperature": 17.4
                }
            },
            {
                "time": 1587464280000,
                "sensorId": "uuid0129",
                "data": {
                    "relative humidity": 53,
                    "temperature": 14.6
                }
            },
            {
                "time": 1587464640000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8892,
                    "relative humidity": 46,
                    "temperature": 12.2
                }
            },
            {
                "time": 1587465000000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12310,
                    "relative humidity": 59,
                    "temperature": 14.6
                }
            },
            {
                "time": 1587465360000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7321,
                    "relative humidity": 55,
                    "temperature": 18.4
                }
            },
            {
                "time": 1587465720000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7901,
                    "relative humidity": 53,
                    "temperature": 21
                }
            },
            {
                "time": 1587466080000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 6602,
                    "relative humidity": 50,
                    "temperature": 12.2
                }
            },
            {
                "time": 1587466440000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9902,
                    "relative humidity": 36.7,
                    "temperature": 22
                }
            },
            {
                "time": 1587466800000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10003,
                    "relative humidity": 53,
                    "temperature": 17.4
                }
            },
            {
                "time": 1587467160000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5698,
                    "relative humidity": 38
                }
            },
            {
                "time": 1587467520000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13003,
                    "relative humidity": 62,
                    "temperature": 19.2
                }
            },
            {
                "time": 1587467880000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13045,
                    "relative humidity": 44,
                    "temperature": 10.2
                }
            },
            {
                "time": 1587468240000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13045,
                    "relative humidity": 71,
                    "temperature": 17.4
                }
            },
            {
                "time": 1587468600000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10899,
                    "relative humidity": 44,
                    "temperature": 17.4
                }
            },
            {
                "time": 1587468960000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8892,
                    "relative humidity": 44,
                    "temperature": 17.4
                }
            },
            {
                "time": 1587469320000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10899,
                    "relative humidity": 48.5,
                    "temperature": 23
                }
            },
            {
                "time": 1587469680000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13562,
                    "relative humidity": 53,
                    "temperature": 22
                }
            },
            {
                "time": 1587470040000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10003,
                    "relative humidity": 53,
                    "temperature": 12
                }
            },
            {
                "time": 1587470400000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12310,
                    "relative humidity": 44.4,
                    "temperature": 10.3
                }
            },
            {
                "time": 1587470760000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10003,
                    "relative humidity": 60,
                    "temperature": 11
                }
            },
            {
                "time": 1587471120000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4231,
                    "relative humidity": 35,
                    "temperature": 23
                }
            },
            {
                "time": 1587471480000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7788,
                    "relative humidity": 36.7,
                    "temperature": 17.9
                }
            },
            {
                "time": 1587471840000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13045,
                    "relative humidity": 55,
                    "temperature": 10.2
                }
            },
            {
                "time": 1587472200000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12556,
                    "relative humidity": 36.7
                }
            },
            {
                "time": 1587472560000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9021,
                    "relative humidity": 46,
                    "temperature": 17.4
                }
            },
            {
                "time": 1587472920000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13003,
                    "temperature": 10.2
                }
            },
            {
                "time": 1587473280000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5562,
                    "relative humidity": 53,
                    "temperature": 23
                }
            },
            {
                "time": 1587473640000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 6012,
                    "relative humidity": 36.7,
                    "temperature": 15
                }
            },
            {
                "time": 1587474000000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7713,
                    "relative humidity": 44,
                    "temperature": 16.3
                }
            },
            {
                "time": 1587474360000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5562,
                    "relative humidity": 46,
                    "temperature": 15
                }
            },
            {
                "time": 1587474720000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9801,
                    "relative humidity": 36.7,
                    "temperature": 17.4
                }
            },
            {
                "time": 1587475080000,
                "sensorId": "uuid0129",
                "data": {
                    "relative humidity": 62,
                    "temperature": 17.9
                }
            },
            {
                "time": 1587475440000,
                "sensorId": "uuid0129",
                "data": {
                    "relative humidity": 56.3,
                    "temperature": 17.9
                }
            },
            {
                "time": 1587475800000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5562,
                    "temperature": 17.4
                }
            },
            {
                "time": 1587476160000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9902,
                    "relative humidity": 62,
                    "temperature": 23
                }
            },
            {
                "time": 1587476520000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13045,
                    "relative humidity": 53,
                    "temperature": 19.2
                }
            },
            {
                "time": 1587476880000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8766,
                    "relative humidity": 51,
                    "temperature": 21
                }
            },
            {
                "time": 1587477240000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5562,
                    "relative humidity": 59,
                    "temperature": 23
                }
            },
            {
                "time": 1587477600000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8766,
                    "relative humidity": 55,
                    "temperature": 12
                }
            },
            {
                "time": 1587477960000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8766,
                    "relative humidity": 46,
                    "temperature": 10.3
                }
            },
            {
                "time": 1587478320000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7901,
                    "relative humidity": 53,
                    "temperature": 18.9
                }
            },
            {
                "time": 1587478680000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8990,
                    "relative humidity": 55,
                    "temperature": 14.6
                }
            },
            {
                "time": 1587479040000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10899,
                    "relative humidity": 56.3,
                    "temperature": 19.4
                }
            },
            {
                "time": 1587479400000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7901,
                    "relative humidity": 50,
                    "temperature": 21
                }
            },
            {
                "time": 1587479760000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13045,
                    "relative humidity": 48,
                    "temperature": 18.4
                }
            },
            {
                "time": 1587480120000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9023,
                    "relative humidity": 46,
                    "temperature": 12
                }
            },
            {
                "time": 1587480480000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10553,
                    "relative humidity": 60,
                    "temperature": 11
                }
            },
            {
                "time": 1587480840000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7713,
                    "relative humidity": 62,
                    "temperature": 11
                }
            },
            {
                "time": 1587481200000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10899,
                    "relative humidity": 53,
                    "temperature": 21
                }
            },
            {
                "time": 1587481560000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5698,
                    "relative humidity": 50,
                    "temperature": 14.6
                }
            },
            {
                "time": 1587481920000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8766,
                    "relative humidity": 71,
                    "temperature": 23
                }
            },
            {
                "time": 1587482280000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5562,
                    "relative humidity": 60,
                    "temperature": 10.3
                }
            },
            {
                "time": 1587482640000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8892,
                    "relative humidity": 56.3,
                    "temperature": 19.2
                }
            },
            {
                "time": 1587483000000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8766,
                    "relative humidity": 71,
                    "temperature": 17.4
                }
            },
            {
                "time": 1587483360000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12003,
                    "relative humidity": 34.6,
                    "temperature": 18.9
                }
            },
            {
                "time": 1587483720000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8111,
                    "relative humidity": 60,
                    "temperature": 11
                }
            },
            {
                "time": 1587484080000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12310,
                    "relative humidity": 59,
                    "temperature": 18.4
                }
            },
            {
                "time": 1587484440000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13003,
                    "relative humidity": 64,
                    "temperature": 18.9
                }
            },
            {
                "time": 1587484800000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8111,
                    "relative humidity": 49,
                    "temperature": 19.2
                }
            },
            {
                "time": 1587485160000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5698,
                    "relative humidity": 53.8,
                    "temperature": 12
                }
            },
            {
                "time": 1587485520000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9801,
                    "relative humidity": 53.8,
                    "temperature": 21
                }
            },
            {
                "time": 1587485880000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 3560,
                    "relative humidity": 56.3,
                    "temperature": 18.9
                }
            },
            {
                "time": 1587486240000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13562,
                    "relative humidity": 59,
                    "temperature": 18.9
                }
            },
            {
                "time": 1587486600000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10003,
                    "relative humidity": 48.5,
                    "temperature": 12.2
                }
            },
            {
                "time": 1587486960000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9021,
                    "temperature": 21
                }
            },
            {
                "time": 1587487320000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9023,
                    "relative humidity": 59,
                    "temperature": 16.3
                }
            },
            {
                "time": 1587487680000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13562,
                    "relative humidity": 71,
                    "temperature": 18.9
                }
            },
            {
                "time": 1587488040000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 6602,
                    "relative humidity": 71,
                    "temperature": 23
                }
            },
            {
                "time": 1587488400000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4432,
                    "relative humidity": 48,
                    "temperature": 8.5
                }
            },
            {
                "time": 1587488760000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4216,
                    "relative humidity": 48,
                    "temperature": 9.9
                }
            },
            {
                "time": 1587489120000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 2878,
                    "relative humidity": 55,
                    "temperature": 8.3
                }
            },
            {
                "time": 1587489480000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 1030,
                    "relative humidity": 59,
                    "temperature": 9.1
                }
            },
            {
                "time": 1587489840000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 1020,
                    "relative humidity": 35,
                    "temperature": 8.5
                }
            },
            {
                "time": 1587490200000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 890,
                    "relative humidity": 59,
                    "temperature": 9.9
                }
            },
            {
                "time": 1587490560000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 3123,
                    "relative humidity": 59,
                    "temperature": 3.6
                }
            },
            {
                "time": 1587490920000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 3821,
                    "relative humidity": 48.5,
                    "temperature": 7.5
                }
            },
            {
                "time": 1587491280000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 1222,
                    "relative humidity": 62
                }
            },
            {
                "time": 1587491640000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 2227,
                    "relative humidity": 48,
                    "temperature": 9.1
                }
            },
            {
                "time": 1587492000000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5542,
                    "relative humidity": 56.3,
                    "temperature": 8.3
                }
            },
            {
                "time": 1587492360000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 672,
                    "relative humidity": 53.8,
                    "temperature": 7.2
                }
            },
            {
                "time": 1587492720000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 890,
                    "relative humidity": 48,
                    "temperature": 7.2
                }
            },
            {
                "time": 1587493080000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 2878,
                    "relative humidity": 48,
                    "temperature": 8.5
                }
            },
            {
                "time": 1587493440000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 569,
                    "relative humidity": 55,
                    "temperature": 7.5
                }
            },
            {
                "time": 1587493800000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 3122,
                    "relative humidity": 34.6,
                    "temperature": 9.2
                }
            },
            {
                "time": 1587494160000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 2799,
                    "relative humidity": 44.4
                }
            },
            {
                "time": 1587494520000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 1020,
                    "relative humidity": 71,
                    "temperature": 7.5
                }
            },
            {
                "time": 1587494880000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 1030,
                    "relative humidity": 60,
                    "temperature": 8.3
                }
            },
            {
                "time": 1587495240000,
                "sensorId": "uuid0129",
                "data": {
                    "relative humidity": 59,
                    "temperature": 9.9
                }
            },
            {
                "time": 1587495600000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 50,
                    "temperature": 7.1
                }
            },
            {
                "time": 1587495960000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 44.4,
                    "temperature": 3
                }
            },
            {
                "time": 1587496320000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 59,
                    "temperature": 5.7
                }
            },
            {
                "time": 1587496680000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 44,
                    "temperature": 4.2
                }
            },
            {
                "time": 1587497040000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 55,
                    "temperature": 4.2
                }
            },
            {
                "time": 1587497400000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 62,
                    "temperature": 8.9
                }
            },
            {
                "time": 1587497760000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 36.7,
                    "temperature": 8.9
                }
            },
            {
                "time": 1587498120000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 44
                }
            },
            {
                "time": 1587498480000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 55
                }
            },
            {
                "time": 1587498840000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 44.4,
                    "temperature": 4.2
                }
            },
            {
                "time": 1587499200000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 35,
                    "temperature": 8.5
                }
            },
            {
                "time": 1587499560000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 64,
                    "temperature": 8.5
                }
            },
            {
                "time": 1587499920000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 48.5,
                    "temperature": 4
                }
            },
            {
                "time": 1587500280000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 71,
                    "temperature": 4.2
                }
            },
            {
                "time": 1587500640000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 51,
                    "temperature": 4
                }
            },
            {
                "time": 1587501000000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 44.4,
                    "temperature": 4.2
                }
            },
            {
                "time": 1587501360000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 48.5,
                    "temperature": 6.2
                }
            },
            {
                "time": 1587501720000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 34.6,
                    "temperature": 5.5
                }
            },
            {
                "time": 1587502080000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 44,
                    "temperature": 5.5
                }
            },
            {
                "time": 1587502440000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 51,
                    "temperature": 4
                }
            },
            {
                "time": 1587502800000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 63.4,
                    "temperature": 7.1
                }
            },
            {
                "time": 1587503160000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "temperature": 2.3
                }
            },
            {
                "time": 1587503520000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 55,
                    "temperature": 7.1
                }
            },
            {
                "time": 1587503880000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 71
                }
            },
            {
                "time": 1587504240000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 48.5,
                    "temperature": 6
                }
            },
            {
                "time": 1587504600000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 53,
                    "temperature": 6.2
                }
            },
            {
                "time": 1587504960000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 53,
                    "temperature": 4
                }
            },
            {
                "time": 1587505320000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 48,
                    "temperature": 8.9
                }
            },
            {
                "time": 1587505680000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 51,
                    "temperature": 7.1
                }
            },
            {
                "time": 1587506040000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 53.8
                }
            },
            {
                "time": 1587506400000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 53,
                    "temperature": 3.4
                }
            },
            {
                "time": 1587506760000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 62,
                    "temperature": 2.3
                }
            },
            {
                "time": 1587507120000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 48,
                    "temperature": 3
                }
            },
            {
                "time": 1587507480000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 60,
                    "temperature": 3.4
                }
            },
            {
                "time": 1587507840000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 62,
                    "temperature": 6.2
                }
            },
            {
                "time": 1587508200000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 55,
                    "temperature": 6.2
                }
            },
            {
                "time": 1587508560000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 48.5
                }
            },
            {
                "time": 1587508920000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 34.6,
                    "temperature": 5.5
                }
            },
            {
                "time": 1587509280000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 53.8,
                    "temperature": 5.5
                }
            },
            {
                "time": 1587509640000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 49,
                    "temperature": 3.4
                }
            },
            {
                "time": 1587510000000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 59,
                    "temperature": 2.3
                }
            },
            {
                "time": 1587510360000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 38,
                    "temperature": 2.3
                }
            },
            {
                "time": 1587510720000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 34.6,
                    "temperature": 5.5
                }
            },
            {
                "time": 1587511080000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 53.8,
                    "temperature": 8.9
                }
            },
            {
                "time": 1587511440000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 48.5,
                    "temperature": 6.8
                }
            },
            {
                "time": 1587511800000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 50,
                    "temperature": 4.2
                }
            },
            {
                "time": 1587512160000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 53,
                    "temperature": 6
                }
            },
            {
                "time": 1587512520000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 51,
                    "temperature": 4
                }
            },
            {
                "time": 1587512880000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 71,
                    "temperature": 2.3
                }
            },
            {
                "time": 1587513240000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 48,
                    "temperature": 3.4
                }
            },
            {
                "time": 1587513600000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 48,
                    "temperature": 4.2
                }
            },
            {
                "time": 1587513960000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 48.5,
                    "temperature": 2.3
                }
            },
            {
                "time": 1587514320000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 55
                }
            },
            {
                "time": 1587514680000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 55,
                    "temperature": 5.7
                }
            },
            {
                "time": 1587515040000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 60,
                    "temperature": 6
                }
            },
            {
                "time": 1587515400000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 44.4,
                    "temperature": 4.2
                }
            },
            {
                "time": 1587515760000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 60,
                    "temperature": 6.8
                }
            },
            {
                "time": 1587516120000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 49,
                    "temperature": 7.1
                }
            },
            {
                "time": 1587516480000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 62,
                    "temperature": 4.2
                }
            },
            {
                "time": 1587516840000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 59,
                    "temperature": 8.5
                }
            },
            {
                "time": 1587517200000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 48.5,
                    "temperature": 3
                }
            },
            {
                "time": 1587517560000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 48,
                    "temperature": 8.5
                }
            },
            {
                "time": 1587517920000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 36.7,
                    "temperature": 3
                }
            },
            {
                "time": 1587518280000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 56.3,
                    "temperature": 3
                }
            },
            {
                "time": 1587518640000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 44,
                    "temperature": 4
                }
            },
            {
                "time": 1587519000000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 56.3,
                    "temperature": 8.9
                }
            },
            {
                "time": 1587519360000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 55,
                    "temperature": 4.2
                }
            },
            {
                "time": 1587519720000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 53,
                    "temperature": 5.7
                }
            },
            {
                "time": 1587520080000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 53.8,
                    "temperature": 3
                }
            },
            {
                "time": 1587520440000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 62
                }
            },
            {
                "time": 1587520800000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 56.3,
                    "temperature": 3.4
                }
            },
            {
                "time": 1587521160000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 64,
                    "temperature": 6.2
                }
            },
            {
                "time": 1587521520000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 59,
                    "temperature": 8.5
                }
            },
            {
                "time": 1587521880000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 53.8,
                    "temperature": 3.4
                }
            },
            {
                "time": 1587522240000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 53.8
                }
            },
            {
                "time": 1587522600000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 63.4
                }
            },
            {
                "time": 1587522960000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 38,
                    "temperature": 6
                }
            },
            {
                "time": 1587523320000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 71,
                    "temperature": 8.9
                }
            },
            {
                "time": 1587523680000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 62,
                    "temperature": 6
                }
            },
            {
                "time": 1587524040000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 63.4,
                    "temperature": 2.3
                }
            },
            {
                "time": 1587524400000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 1222,
                    "relative humidity": 35,
                    "temperature": 6.4
                }
            },
            {
                "time": 1587524760000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 3122,
                    "relative humidity": 35,
                    "temperature": 3.6
                }
            },
            {
                "time": 1587525120000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 2227,
                    "relative humidity": 46,
                    "temperature": 9.1
                }
            },
            {
                "time": 1587525480000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 2878,
                    "relative humidity": 63.4,
                    "temperature": 7.5
                }
            },
            {
                "time": 1587525840000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 2799,
                    "relative humidity": 56.3,
                    "temperature": 6.3
                }
            },
            {
                "time": 1587526200000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 2094,
                    "relative humidity": 44.4
                }
            },
            {
                "time": 1587526560000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 3334,
                    "relative humidity": 48.5,
                    "temperature": 8.3
                }
            },
            {
                "time": 1587526920000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 3123,
                    "relative humidity": 55,
                    "temperature": 9.2
                }
            },
            {
                "time": 1587527280000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 3122,
                    "relative humidity": 60,
                    "temperature": 8.1
                }
            },
            {
                "time": 1587527640000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4432,
                    "relative humidity": 64,
                    "temperature": 9.2
                }
            },
            {
                "time": 1587528000000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4239,
                    "relative humidity": 49,
                    "temperature": 9.1
                }
            },
            {
                "time": 1587528360000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 280,
                    "relative humidity": 64,
                    "temperature": 9.2
                }
            },
            {
                "time": 1587528720000,
                "sensorId": "uuid0129",
                "data": {
                    "relative humidity": 44.4,
                    "temperature": 7.5
                }
            },
            {
                "time": 1587529080000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 1992,
                    "relative humidity": 55
                }
            },
            {
                "time": 1587529440000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4432,
                    "relative humidity": 59,
                    "temperature": 3.6
                }
            },
            {
                "time": 1587529800000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 569,
                    "relative humidity": 35,
                    "temperature": 8.5
                }
            },
            {
                "time": 1587530160000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 890,
                    "relative humidity": 48.5
                }
            },
            {
                "time": 1587530520000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 2266,
                    "relative humidity": 64,
                    "temperature": 7.5
                }
            },
            {
                "time": 1587530880000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5542,
                    "relative humidity": 53.8,
                    "temperature": 7.5
                }
            },
            {
                "time": 1587531240000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 1987,
                    "temperature": 8.3
                }
            },
            {
                "time": 1587531600000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 1113,
                    "relative humidity": 44.4,
                    "temperature": 9.9
                }
            },
            {
                "time": 1587531960000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 1992,
                    "relative humidity": 36.7,
                    "temperature": 8.3
                }
            },
            {
                "time": 1587532320000,
                "sensorId": "uuid0129",
                "data": {
                    "relative humidity": 50,
                    "temperature": 6.4
                }
            },
            {
                "time": 1587532680000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5413,
                    "relative humidity": 60,
                    "temperature": 8.5
                }
            },
            {
                "time": 1587533040000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 3123,
                    "relative humidity": 53,
                    "temperature": 6.3
                }
            },
            {
                "time": 1587533400000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 1030,
                    "relative humidity": 48.5,
                    "temperature": 9.9
                }
            },
            {
                "time": 1587533760000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 569,
                    "relative humidity": 48.5,
                    "temperature": 9.1
                }
            },
            {
                "time": 1587534120000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4432,
                    "relative humidity": 62,
                    "temperature": 6.4
                }
            },
            {
                "time": 1587534480000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5542,
                    "relative humidity": 35,
                    "temperature": 7.2
                }
            },
            {
                "time": 1587534840000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 3122,
                    "relative humidity": 48.5,
                    "temperature": 6.4
                }
            },
            {
                "time": 1587535200000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8766,
                    "relative humidity": 35,
                    "temperature": 22
                }
            },
            {
                "time": 1587535560000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8111,
                    "relative humidity": 38,
                    "temperature": 19.4
                }
            },
            {
                "time": 1587535920000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10553,
                    "relative humidity": 60,
                    "temperature": 14.6
                }
            },
            {
                "time": 1587536280000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8111,
                    "relative humidity": 48.5,
                    "temperature": 21
                }
            },
            {
                "time": 1587536640000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12556,
                    "relative humidity": 71,
                    "temperature": 19.2
                }
            },
            {
                "time": 1587537000000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12310,
                    "relative humidity": 56.3,
                    "temperature": 10.3
                }
            },
            {
                "time": 1587537360000,
                "sensorId": "uuid0129",
                "data": {
                    "relative humidity": 48,
                    "temperature": 18.9
                }
            },
            {
                "time": 1587537720000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10003,
                    "relative humidity": 49,
                    "temperature": 16.3
                }
            },
            {
                "time": 1587538080000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7321,
                    "relative humidity": 56.3,
                    "temperature": 14
                }
            },
            {
                "time": 1587538440000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8892,
                    "relative humidity": 63.4,
                    "temperature": 18.4
                }
            },
            {
                "time": 1587538800000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9021,
                    "relative humidity": 53,
                    "temperature": 17.4
                }
            },
            {
                "time": 1587539160000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8990,
                    "relative humidity": 44.4,
                    "temperature": 19.2
                }
            },
            {
                "time": 1587539520000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8766,
                    "relative humidity": 62,
                    "temperature": 17.5
                }
            },
            {
                "time": 1587539880000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12003,
                    "relative humidity": 62,
                    "temperature": 16.3
                }
            },
            {
                "time": 1587540240000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 6602,
                    "relative humidity": 56.3,
                    "temperature": 10.3
                }
            },
            {
                "time": 1587540600000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4231,
                    "relative humidity": 44,
                    "temperature": 10.3
                }
            },
            {
                "time": 1587540960000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 6602,
                    "relative humidity": 60,
                    "temperature": 12
                }
            },
            {
                "time": 1587541320000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8892,
                    "relative humidity": 64,
                    "temperature": 12.2
                }
            },
            {
                "time": 1587541680000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9902,
                    "relative humidity": 50,
                    "temperature": 17.5
                }
            },
            {
                "time": 1587542040000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13562,
                    "relative humidity": 50,
                    "temperature": 17.4
                }
            },
            {
                "time": 1587542400000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9902,
                    "relative humidity": 59,
                    "temperature": 22
                }
            },
            {
                "time": 1587542760000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9023,
                    "relative humidity": 44,
                    "temperature": 15
                }
            },
            {
                "time": 1587543120000,
                "sensorId": "uuid0129",
                "data": {
                    "temperature": 21
                }
            },
            {
                "time": 1587543480000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9023,
                    "relative humidity": 35,
                    "temperature": 10.3
                }
            },
            {
                "time": 1587543840000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8111,
                    "relative humidity": 44,
                    "temperature": 23
                }
            },
            {
                "time": 1587544200000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4231,
                    "relative humidity": 35,
                    "temperature": 19.2
                }
            },
            {
                "time": 1587544560000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5698,
                    "relative humidity": 60,
                    "temperature": 10.3
                }
            },
            {
                "time": 1587544920000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 6602,
                    "relative humidity": 38,
                    "temperature": 19.2
                }
            },
            {
                "time": 1587545280000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10553,
                    "relative humidity": 55,
                    "temperature": 16.3
                }
            },
            {
                "time": 1587545640000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7788,
                    "relative humidity": 50,
                    "temperature": 19.2
                }
            },
            {
                "time": 1587546000000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10899,
                    "relative humidity": 55,
                    "temperature": 18.9
                }
            },
            {
                "time": 1587546360000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8990,
                    "relative humidity": 60,
                    "temperature": 21
                }
            },
            {
                "time": 1587546720000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4231,
                    "relative humidity": 36.7,
                    "temperature": 16.3
                }
            },
            {
                "time": 1587547080000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10003,
                    "relative humidity": 50,
                    "temperature": 18.4
                }
            },
            {
                "time": 1587547440000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13003,
                    "relative humidity": 44
                }
            },
            {
                "time": 1587547800000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12310,
                    "relative humidity": 59,
                    "temperature": 10.5
                }
            },
            {
                "time": 1587548160000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9902,
                    "relative humidity": 48,
                    "temperature": 23
                }
            },
            {
                "time": 1587548520000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9902,
                    "relative humidity": 48.5
                }
            },
            {
                "time": 1587548880000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4231,
                    "relative humidity": 46,
                    "temperature": 23
                }
            },
            {
                "time": 1587549240000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5698,
                    "relative humidity": 46,
                    "temperature": 17.4
                }
            },
            {
                "time": 1587549600000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7713,
                    "relative humidity": 64,
                    "temperature": 17.9
                }
            },
            {
                "time": 1587549960000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 6602,
                    "relative humidity": 59,
                    "temperature": 12.2
                }
            },
            {
                "time": 1587550320000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5698,
                    "relative humidity": 49,
                    "temperature": 12.2
                }
            },
            {
                "time": 1587550680000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10003,
                    "relative humidity": 62,
                    "temperature": 11
                }
            },
            {
                "time": 1587551040000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8990,
                    "relative humidity": 51,
                    "temperature": 10.3
                }
            },
            {
                "time": 1587551400000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8766,
                    "relative humidity": 44,
                    "temperature": 12
                }
            },
            {
                "time": 1587551760000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 6602,
                    "relative humidity": 50,
                    "temperature": 10.2
                }
            },
            {
                "time": 1587552120000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9801,
                    "relative humidity": 38,
                    "temperature": 19.4
                }
            },
            {
                "time": 1587552480000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5698,
                    "relative humidity": 34.6,
                    "temperature": 22
                }
            },
            {
                "time": 1587552840000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8111,
                    "relative humidity": 59,
                    "temperature": 21
                }
            },
            {
                "time": 1587553200000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10553,
                    "relative humidity": 53.8,
                    "temperature": 15
                }
            },
            {
                "time": 1587553560000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7788,
                    "relative humidity": 34.6,
                    "temperature": 14
                }
            },
            {
                "time": 1587553920000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13562,
                    "relative humidity": 63.4,
                    "temperature": 19.4
                }
            },
            {
                "time": 1587554280000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 6602,
                    "relative humidity": 44.4,
                    "temperature": 15
                }
            },
            {
                "time": 1587554640000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5698,
                    "relative humidity": 53,
                    "temperature": 17.4
                }
            },
            {
                "time": 1587555000000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8892,
                    "relative humidity": 64,
                    "temperature": 12
                }
            },
            {
                "time": 1587555360000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10553,
                    "relative humidity": 59,
                    "temperature": 12
                }
            },
            {
                "time": 1587555720000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9023,
                    "relative humidity": 44.4
                }
            },
            {
                "time": 1587556080000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12556,
                    "relative humidity": 55,
                    "temperature": 19.2
                }
            },
            {
                "time": 1587556440000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 3560,
                    "relative humidity": 71,
                    "temperature": 15
                }
            },
            {
                "time": 1587556800000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8111,
                    "relative humidity": 62,
                    "temperature": 11
                }
            },
            {
                "time": 1587557160000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9021,
                    "relative humidity": 64,
                    "temperature": 17.5
                }
            },
            {
                "time": 1587557520000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5698,
                    "relative humidity": 59,
                    "temperature": 14.6
                }
            },
            {
                "time": 1587557880000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12310,
                    "relative humidity": 50,
                    "temperature": 17.5
                }
            },
            {
                "time": 1587558240000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8892,
                    "relative humidity": 36.7,
                    "temperature": 10.5
                }
            },
            {
                "time": 1587558600000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7321,
                    "relative humidity": 63.4,
                    "temperature": 12.2
                }
            },
            {
                "time": 1587558960000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8892,
                    "relative humidity": 49,
                    "temperature": 14
                }
            },
            {
                "time": 1587559320000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13562,
                    "relative humidity": 38,
                    "temperature": 12
                }
            },
            {
                "time": 1587559680000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5562,
                    "relative humidity": 34.6,
                    "temperature": 10.2
                }
            },
            {
                "time": 1587560040000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10899,
                    "relative humidity": 34.6,
                    "temperature": 14
                }
            },
            {
                "time": 1587560400000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 6602,
                    "relative humidity": 59,
                    "temperature": 10.3
                }
            },
            {
                "time": 1587560760000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9801,
                    "relative humidity": 51,
                    "temperature": 14.6
                }
            },
            {
                "time": 1587561120000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9021,
                    "relative humidity": 55
                }
            },
            {
                "time": 1587561480000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8990,
                    "relative humidity": 51,
                    "temperature": 10.3
                }
            },
            {
                "time": 1587561840000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5698,
                    "relative humidity": 62,
                    "temperature": 18.9
                }
            },
            {
                "time": 1587562200000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8111,
                    "temperature": 18.4
                }
            },
            {
                "time": 1587562560000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12556,
                    "relative humidity": 46,
                    "temperature": 18.4
                }
            },
            {
                "time": 1587562920000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7713,
                    "relative humidity": 55,
                    "temperature": 12.2
                }
            },
            {
                "time": 1587563280000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 12556,
                    "relative humidity": 44.4,
                    "temperature": 17.9
                }
            },
            {
                "time": 1587563640000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10553,
                    "relative humidity": 48.5,
                    "temperature": 17.4
                }
            },
            {
                "time": 1587564000000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13562,
                    "relative humidity": 71,
                    "temperature": 22
                }
            },
            {
                "time": 1587564360000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8111,
                    "relative humidity": 51,
                    "temperature": 17.5
                }
            },
            {
                "time": 1587564720000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9023,
                    "relative humidity": 36.7,
                    "temperature": 17.9
                }
            },
            {
                "time": 1587565080000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8766,
                    "relative humidity": 62,
                    "temperature": 18.4
                }
            },
            {
                "time": 1587565440000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13045,
                    "relative humidity": 59,
                    "temperature": 10.2
                }
            },
            {
                "time": 1587565800000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4231,
                    "relative humidity": 44.4,
                    "temperature": 17.4
                }
            },
            {
                "time": 1587566160000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9023,
                    "relative humidity": 36.7,
                    "temperature": 21
                }
            },
            {
                "time": 1587566520000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13045,
                    "relative humidity": 63.4,
                    "temperature": 18.9
                }
            },
            {
                "time": 1587566880000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8990,
                    "relative humidity": 46,
                    "temperature": 14.6
                }
            },
            {
                "time": 1587567240000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13003,
                    "relative humidity": 55,
                    "temperature": 17.9
                }
            },
            {
                "time": 1587567600000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7788,
                    "relative humidity": 59,
                    "temperature": 16.3
                }
            },
            {
                "time": 1587567960000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 6602,
                    "temperature": 10.5
                }
            },
            {
                "time": 1587568320000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13003,
                    "relative humidity": 36.7,
                    "temperature": 14.6
                }
            },
            {
                "time": 1587568680000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7901,
                    "relative humidity": 62,
                    "temperature": 21
                }
            },
            {
                "time": 1587569040000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9021,
                    "relative humidity": 36.7,
                    "temperature": 17.5
                }
            },
            {
                "time": 1587569400000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9021,
                    "relative humidity": 53.8,
                    "temperature": 21
                }
            },
            {
                "time": 1587569760000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13562,
                    "relative humidity": 50,
                    "temperature": 15
                }
            },
            {
                "time": 1587570120000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9023,
                    "relative humidity": 60,
                    "temperature": 17.9
                }
            },
            {
                "time": 1587570480000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13045,
                    "relative humidity": 34.6,
                    "temperature": 11
                }
            },
            {
                "time": 1587570840000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 3560,
                    "relative humidity": 48,
                    "temperature": 23
                }
            },
            {
                "time": 1587571200000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7713,
                    "relative humidity": 59,
                    "temperature": 14.6
                }
            },
            {
                "time": 1587571560000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13045,
                    "relative humidity": 59,
                    "temperature": 12
                }
            },
            {
                "time": 1587571920000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 6602,
                    "relative humidity": 59,
                    "temperature": 10.3
                }
            },
            {
                "time": 1587572280000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 13045,
                    "relative humidity": 49,
                    "temperature": 17.5
                }
            },
            {
                "time": 1587572640000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4231,
                    "relative humidity": 59,
                    "temperature": 21
                }
            },
            {
                "time": 1587573000000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 7713,
                    "relative humidity": 50,
                    "temperature": 11
                }
            },
            {
                "time": 1587573360000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 8990,
                    "relative humidity": 55,
                    "temperature": 18.9
                }
            },
            {
                "time": 1587573720000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 9023,
                    "relative humidity": 50,
                    "temperature": 21
                }
            },
            {
                "time": 1587574080000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5562,
                    "relative humidity": 38,
                    "temperature": 10.5
                }
            },
            {
                "time": 1587574440000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 10553,
                    "relative humidity": 56.3,
                    "temperature": 14
                }
            },
            {
                "time": 1587574800000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 890,
                    "relative humidity": 48.5,
                    "temperature": 6.4
                }
            },
            {
                "time": 1587575160000,
                "sensorId": "uuid0129",
                "data": {
                    "relative humidity": 62,
                    "temperature": 3.6
                }
            },
            {
                "time": 1587575520000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4432,
                    "relative humidity": 60,
                    "temperature": 8.3
                }
            },
            {
                "time": 1587575880000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 2227,
                    "relative humidity": 60,
                    "temperature": 9.9
                }
            },
            {
                "time": 1587576240000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 3123,
                    "temperature": 8.1
                }
            },
            {
                "time": 1587576600000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5090,
                    "relative humidity": 55,
                    "temperature": 6.4
                }
            },
            {
                "time": 1587576960000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5502,
                    "relative humidity": 59,
                    "temperature": 9.1
                }
            },
            {
                "time": 1587577320000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 3122,
                    "relative humidity": 60,
                    "temperature": 3.6
                }
            },
            {
                "time": 1587577680000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 1987,
                    "relative humidity": 59,
                    "temperature": 6.4
                }
            },
            {
                "time": 1587578040000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 3334,
                    "relative humidity": 64,
                    "temperature": 7.5
                }
            },
            {
                "time": 1587578400000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 672,
                    "relative humidity": 50,
                    "temperature": 9.9
                }
            },
            {
                "time": 1587578760000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 2094,
                    "relative humidity": 60,
                    "temperature": 9.2
                }
            },
            {
                "time": 1587579120000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 5542,
                    "relative humidity": 48.5,
                    "temperature": 8.3
                }
            },
            {
                "time": 1587579480000,
                "sensorId": "uuid0129",
                "data": {
                    "relative humidity": 62,
                    "temperature": 9.9
                }
            },
            {
                "time": 1587579840000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 2094,
                    "relative humidity": 53.8,
                    "temperature": 8.5
                }
            },
            {
                "time": 1587580200000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 569,
                    "relative humidity": 38,
                    "temperature": 9.1
                }
            },
            {
                "time": 1587580560000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 280,
                    "relative humidity": 59,
                    "temperature": 8.1
                }
            },
            {
                "time": 1587580920000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 2227,
                    "relative humidity": 56.3
                }
            },
            {
                "time": 1587581280000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 3122,
                    "relative humidity": 50,
                    "temperature": 9.1
                }
            },
            {
                "time": 1587581640000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 4432,
                    "relative humidity": 46,
                    "temperature": 9.1
                }
            },
            {
                "time": 1587582000000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 46,
                    "temperature": 6.8
                }
            },
            {
                "time": 1587582360000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 53.8
                }
            },
            {
                "time": 1587582720000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 46,
                    "temperature": 3.4
                }
            },
            {
                "time": 1587583080000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 46,
                    "temperature": 5.5
                }
            },
            {
                "time": 1587583440000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 63.4,
                    "temperature": 5.5
                }
            },
            {
                "time": 1587583800000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 35,
                    "temperature": 4
                }
            },
            {
                "time": 1587584160000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 63.4,
                    "temperature": 4
                }
            },
            {
                "time": 1587584520000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 34.6,
                    "temperature": 5.7
                }
            },
            {
                "time": 1587584880000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 35,
                    "temperature": 4.2
                }
            },
            {
                "time": 1587585240000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 51,
                    "temperature": 2.3
                }
            },
            {
                "time": 1587585600000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 59,
                    "temperature": 8.9
                }
            },
            {
                "time": 1587585960000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 49,
                    "temperature": 3
                }
            },
            {
                "time": 1587586320000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 53,
                    "temperature": 2.3
                }
            },
            {
                "time": 1587586680000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 35,
                    "temperature": 6
                }
            },
            {
                "time": 1587587040000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 53.8,
                    "temperature": 4.2
                }
            },
            {
                "time": 1587587400000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 62,
                    "temperature": 4.2
                }
            },
            {
                "time": 1587587760000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 36.7,
                    "temperature": 4.2
                }
            },
            {
                "time": 1587588120000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 48.5,
                    "temperature": 4.2
                }
            },
            {
                "time": 1587588480000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 48.5,
                    "temperature": 5.7
                }
            },
            {
                "time": 1587588840000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 55,
                    "temperature": 6.8
                }
            },
            {
                "time": 1587589200000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 48,
                    "temperature": 4
                }
            },
            {
                "time": 1587589560000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 50
                }
            },
            {
                "time": 1587589920000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 62,
                    "temperature": 6.8
                }
            },
            {
                "time": 1587590280000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 53,
                    "temperature": 5.5
                }
            },
            {
                "time": 1587590640000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 46,
                    "temperature": 4.2
                }
            },
            {
                "time": 1587591000000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 62,
                    "temperature": 5.7
                }
            },
            {
                "time": 1587591360000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 62
                }
            },
            {
                "time": 1587591720000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 44,
                    "temperature": 4
                }
            },
            {
                "time": 1587592080000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 55,
                    "temperature": 3
                }
            },
            {
                "time": 1587592440000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 62,
                    "temperature": 3.4
                }
            },
            {
                "time": 1587592800000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "temperature": 3.4
                }
            },
            {
                "time": 1587593160000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 60,
                    "temperature": 4.2
                }
            },
            {
                "time": 1587593520000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 64,
                    "temperature": 5.7
                }
            },
            {
                "time": 1587593880000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 64,
                    "temperature": 8.5
                }
            },
            {
                "time": 1587594240000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "temperature": 6.8
                }
            },
            {
                "time": 1587594600000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 59,
                    "temperature": 4.2
                }
            },
            {
                "time": 1587594960000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 55,
                    "temperature": 3
                }
            },
            {
                "time": 1587595320000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 44,
                    "temperature": 4.2
                }
            },
            {
                "time": 1587595680000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 50,
                    "temperature": 3
                }
            },
            {
                "time": 1587596040000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 71,
                    "temperature": 4
                }
            },
            {
                "time": 1587596400000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 35,
                    "temperature": 2.3
                }
            },
            {
                "time": 1587596760000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 59,
                    "temperature": 6.2
                }
            },
            {
                "time": 1587597120000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 53.8,
                    "temperature": 6
                }
            },
            {
                "time": 1587597480000,
                "sensorId": "uuid0129",
                "data": {
                    "light intensity": 0,
                    "relative humidity": 55,
                    "temperature": 7.1
                }
            },
        {
            "time": 1587597840000,
            "sensorId": "uuid0129",
            "data": {
              "light intensity": 0,
              "relative humidity": 64,
              "temperature": 3.4
            }
        },
        {
            "time": 1587598200000,
            "sensorId": "uuid0129",
            "data": {
                "light intensity": 0,
                "relative humidity": 51,
                "temperature": 6.2
            }
        },
        {
          "time": 1587598560000,
          "sensorId": "uuid0129",
          "data": {
            "light intensity": 0,
            "relative humidity": 55,
            "temperature": 3
          }
        },
        {
            "time": 1587598920000,
            "sensorId": "uuid0129",
            "data": {
                "light intensity": 0,
                "relative humidity": 53.8,
                "temperature": 2.3
            }
        },
        {
            "time": 1587599280000,
            "sensorId": "uuid0129",
            "data": {
                "light intensity": 0,
                "relative humidity": 44.4,
                "temperature": 3
            }
        },
        {
            "time": 1587599640000,
            "sensorId": "uuid0129",
            "data": {
                "light intensity": 0,
                "relative humidity": 50,
                "temperature": 3.4
            }
        },
        {
          "time": 1586910180000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 71,
              "temperature": 4.2
          }
      },
      {
          "time": 1586910540000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 36.7,
              "temperature": 4.2
          }
      },
      {
          "time": 1586910900000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 49,
              "temperature": 6.2
          }
      },
      {
          "time": 1586911260000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 51
          }
      },
      {
          "time": 1586911620000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 53,
              "temperature": 3.4
          }
      },
      {
          "time": 1586911980000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 51,
              "temperature": 6
          }
      },
      {
          "time": 1586912340000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 64,
              "temperature": 4.2
          }
      },
      {
          "time": 1586912700000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 35
          }
      },
      {
          "time": 1586913060000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 63.4,
              "temperature": 8.5
          }
      },
      {
          "time": 1586913420000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 71
          }
      },
      {
          "time": 1586913780000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 62,
              "temperature": 8.5
          }
      },
      {
          "time": 1586914140000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 64,
              "temperature": 5.5
          }
      },
      {
          "time": 1586914500000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 55,
              "temperature": 3.4
          }
      },
      {
          "time": 1586914860000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 55,
              "temperature": 6.2
          }
      },
      {
          "time": 1586915220000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 51,
              "temperature": 6
          }
      },
      {
          "time": 1586915580000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 35,
              "temperature": 6
          }
      },
      {
          "time": 1586915940000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 59,
              "temperature": 6.2
          }
      },
      {
          "time": 1586916300000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 44,
              "temperature": 4
          }
      },
      {
          "time": 1586916660000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 51,
              "temperature": 8.5
          }
      },
      {
          "time": 1586917020000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 59,
              "temperature": 7.1
          }
      },
      {
          "time": 1586917380000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 34.6,
              "temperature": 5.5
          }
      },
      {
          "time": 1586917740000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 62,
              "temperature": 4
          }
      },
      {
          "time": 1586918100000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 34.6,
              "temperature": 8.5
          }
      },
      {
          "time": 1586918460000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 36.7,
              "temperature": 6.8
          }
      },
      {
          "time": 1586918820000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 55,
              "temperature": 8.5
          }
      },
      {
          "time": 1586919180000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "temperature": 3
          }
      },
      {
          "time": 1586919540000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 44,
              "temperature": 5.7
          }
      },
      {
          "time": 1586919900000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5090,
              "relative humidity": 59,
              "temperature": 8.1
          }
      },
      {
          "time": 1586920260000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 1113,
              "relative humidity": 62,
              "temperature": 9.9
          }
      },
      {
          "time": 1586920620000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 4432,
              "relative humidity": 55,
              "temperature": 7.2
          }
      },
      {
          "time": 1586920980000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 1222,
              "relative humidity": 53,
              "temperature": 9.2
          }
      },
      {
          "time": 1586921340000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5090,
              "relative humidity": 48.5,
              "temperature": 3.6
          }
      },
      {
          "time": 1586921700000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5542,
              "relative humidity": 59,
              "temperature": 9.1
          }
      },
      {
          "time": 1586922060000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 672,
              "relative humidity": 62,
              "temperature": 7.2
          }
      },
      {
          "time": 1586922420000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 890,
              "relative humidity": 62,
              "temperature": 8.3
          }
      },
      {
          "time": 1586922780000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 2266,
              "relative humidity": 71,
              "temperature": 7.5
          }
      },
      {
          "time": 1586923140000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 1113,
              "relative humidity": 35,
              "temperature": 7.5
          }
      },
      {
          "time": 1586923500000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 4502,
              "relative humidity": 44.4,
              "temperature": 8.3
          }
      },
      {
          "time": 1586923860000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 1113,
              "relative humidity": 35,
              "temperature": 8.5
          }
      },
      {
          "time": 1586924220000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5502,
              "relative humidity": 62,
              "temperature": 6.3
          }
      },
      {
          "time": 1586924580000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5090,
              "relative humidity": 59,
              "temperature": 7.5
          }
      },
      {
          "time": 1586924940000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5502,
              "relative humidity": 60,
              "temperature": 8.1
          }
      },
      {
          "time": 1586925300000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 3821,
              "temperature": 6.3
          }
      },
      {
          "time": 1586925660000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 4239,
              "relative humidity": 62,
              "temperature": 9.9
          }
      },
      {
          "time": 1586926020000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 890,
              "relative humidity": 50,
              "temperature": 7.2
          }
      },
      {
          "time": 1586926380000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 2799,
              "relative humidity": 63.4,
              "temperature": 8.1
          }
      },
      {
          "time": 1586926740000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5502,
              "relative humidity": 64,
              "temperature": 8.5
          }
      },
      {
          "time": 1586927100000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5542,
              "relative humidity": 63.4,
              "temperature": 9.2
          }
      },
      {
          "time": 1586927460000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 3334,
              "relative humidity": 62,
              "temperature": 6.3
          }
      },
      {
          "time": 1586927820000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 672,
              "relative humidity": 48,
              "temperature": 9.2
          }
      },
      {
          "time": 1586928180000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 1987,
              "relative humidity": 55
          }
      },
      {
          "time": 1586928540000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5090,
              "relative humidity": 38,
              "temperature": 8.3
          }
      },
      {
          "time": 1586928900000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 672,
              "relative humidity": 59,
              "temperature": 9.1
          }
      },
      {
          "time": 1586929260000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 3334,
              "relative humidity": 62,
              "temperature": 7.2
          }
      },
      {
          "time": 1586929620000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 2094,
              "relative humidity": 48.5,
              "temperature": 7.2
          }
      },
      {
          "time": 1586929980000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 4432,
              "relative humidity": 55,
              "temperature": 7.5
          }
      },
      {
          "time": 1586930340000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 280,
              "relative humidity": 60,
              "temperature": 8.3
          }
      },
      {
          "time": 1586930700000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5698,
              "relative humidity": 71,
              "temperature": 17.5
          }
      },
      {
          "time": 1586931060000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 12556,
              "relative humidity": 55,
              "temperature": 12.2
          }
      },
      {
          "time": 1586931420000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13562,
              "relative humidity": 34.6,
              "temperature": 10.2
          }
      },
      {
          "time": 1586931780000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 6602,
              "relative humidity": 55,
              "temperature": 18.9
          }
      },
      {
          "time": 1586932140000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 10899,
              "relative humidity": 53.8,
              "temperature": 12.2
          }
      },
      {
          "time": 1586932500000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 6012,
              "relative humidity": 59,
              "temperature": 19.2
          }
      },
      {
          "time": 1586932860000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 12310,
              "relative humidity": 34.6,
              "temperature": 14
          }
      },
      {
          "time": 1586933220000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8990,
              "relative humidity": 62,
              "temperature": 17.5
          }
      },
      {
          "time": 1586933580000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13562,
              "relative humidity": 64,
              "temperature": 17.5
          }
      },
      {
          "time": 1586933940000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8990,
              "relative humidity": 35,
              "temperature": 18.9
          }
      },
      {
          "time": 1586934300000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8892,
              "relative humidity": 51,
              "temperature": 17.9
          }
      },
      {
          "time": 1586934660000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9021,
              "relative humidity": 53.8,
              "temperature": 23
          }
      },
      {
          "time": 1586935020000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8892,
              "relative humidity": 59,
              "temperature": 12
          }
      },
      {
          "time": 1586935380000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 12310,
              "relative humidity": 55,
              "temperature": 11
          }
      },
      {
          "time": 1586935740000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 12556,
              "relative humidity": 50,
              "temperature": 10.3
          }
      },
      {
          "time": 1586936100000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9023,
              "relative humidity": 44,
              "temperature": 21
          }
      },
      {
          "time": 1586936460000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5562,
              "relative humidity": 60,
              "temperature": 23
          }
      },
      {
          "time": 1586936820000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9902,
              "relative humidity": 38,
              "temperature": 22
          }
      },
      {
          "time": 1586937180000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8892,
              "relative humidity": 63.4,
              "temperature": 10.3
          }
      },
      {
          "time": 1586937540000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13003,
              "relative humidity": 62,
              "temperature": 18.4
          }
      },
      {
          "time": 1586937900000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8766,
              "relative humidity": 35,
              "temperature": 19.2
          }
      },
      {
          "time": 1586938260000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7788,
              "relative humidity": 59,
              "temperature": 18.9
          }
      },
      {
          "time": 1586938620000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8111,
              "relative humidity": 48,
              "temperature": 12.2
          }
      },
      {
          "time": 1586938980000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 6012,
              "relative humidity": 59,
              "temperature": 19.2
          }
      },
      {
          "time": 1586939340000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5562,
              "relative humidity": 62
          }
      },
      {
          "time": 1586939700000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7788,
              "relative humidity": 62,
              "temperature": 21
          }
      },
      {
          "time": 1586940060000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9902,
              "relative humidity": 51,
              "temperature": 22
          }
      },
      {
          "time": 1586940420000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 6602,
              "relative humidity": 35,
              "temperature": 10.3
          }
      },
      {
          "time": 1586940780000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9021,
              "relative humidity": 36.7,
              "temperature": 18.9
          }
      },
      {
          "time": 1586941140000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8892,
              "relative humidity": 62,
              "temperature": 19.4
          }
      },
      {
          "time": 1586941500000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13562,
              "relative humidity": 64,
              "temperature": 18.4
          }
      },
      {
          "time": 1586941860000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8766,
              "relative humidity": 48,
              "temperature": 10.5
          }
      },
      {
          "time": 1586942220000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 3560,
              "relative humidity": 49,
              "temperature": 11
          }
      },
      {
          "time": 1586942580000,
          "sensorId": "uuid0130",
          "data": {
              "relative humidity": 62,
              "temperature": 17.4
          }
      },
      {
          "time": 1586942940000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 12556,
              "relative humidity": 64,
              "temperature": 10.5
          }
      },
      {
          "time": 1586943300000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8766,
              "temperature": 10.3
          }
      },
      {
          "time": 1586943660000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8766,
              "relative humidity": 38,
              "temperature": 12.2
          }
      },
      {
          "time": 1586944020000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13045,
              "relative humidity": 48.5,
              "temperature": 12.2
          }
      },
      {
          "time": 1586944380000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13003,
              "relative humidity": 63.4,
              "temperature": 23
          }
      },
      {
          "time": 1586944740000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9801,
              "relative humidity": 59,
              "temperature": 19.2
          }
      },
      {
          "time": 1586945100000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 12310,
              "temperature": 23
          }
      },
      {
          "time": 1586945460000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5562,
              "relative humidity": 55,
              "temperature": 17.9
          }
      },
      {
          "time": 1586945820000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7321,
              "relative humidity": 59,
              "temperature": 16.3
          }
      },
      {
          "time": 1586946180000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8766,
              "relative humidity": 36.7,
              "temperature": 17.4
          }
      },
      {
          "time": 1586946540000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 10899,
              "relative humidity": 56.3,
              "temperature": 15
          }
      },
      {
          "time": 1586946900000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5562,
              "relative humidity": 38,
              "temperature": 11
          }
      },
      {
          "time": 1586947260000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5562,
              "relative humidity": 38,
              "temperature": 18.9
          }
      },
      {
          "time": 1586947620000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5562,
              "relative humidity": 36.7,
              "temperature": 19.4
          }
      },
      {
          "time": 1586947980000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8111,
              "relative humidity": 62,
              "temperature": 12.2
          }
      },
      {
          "time": 1586948340000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5698,
              "relative humidity": 49,
              "temperature": 10.2
          }
      },
      {
          "time": 1586948700000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8892,
              "relative humidity": 51,
              "temperature": 14
          }
      },
      {
          "time": 1586949060000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 10553,
              "relative humidity": 62,
              "temperature": 15
          }
      },
      {
          "time": 1586949420000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8111,
              "relative humidity": 62
          }
      },
      {
          "time": 1586949780000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7788,
              "relative humidity": 59,
              "temperature": 14.6
          }
      },
      {
          "time": 1586950140000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9801,
              "relative humidity": 60,
              "temperature": 23
          }
      },
      {
          "time": 1586950500000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 12003,
              "relative humidity": 48,
              "temperature": 19.2
          }
      },
      {
          "time": 1586950860000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9023,
              "relative humidity": 44.4,
              "temperature": 18.9
          }
      },
      {
          "time": 1586951220000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 10899,
              "relative humidity": 62,
              "temperature": 18.9
          }
      },
      {
          "time": 1586951580000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 6602,
              "relative humidity": 50,
              "temperature": 18.9
          }
      },
      {
          "time": 1586951940000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9902,
              "relative humidity": 62,
              "temperature": 23
          }
      },
      {
          "time": 1586952300000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 10003,
              "relative humidity": 63.4,
              "temperature": 17.9
          }
      },
      {
          "time": 1586952660000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13045,
              "relative humidity": 64,
              "temperature": 14
          }
      },
      {
          "time": 1586953020000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5698,
              "relative humidity": 62,
              "temperature": 17.9
          }
      },
      {
          "time": 1586953380000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 12556,
              "temperature": 22
          }
      },
      {
          "time": 1586953740000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 12003,
              "relative humidity": 44.4,
              "temperature": 18.4
          }
      },
      {
          "time": 1586954100000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 4231,
              "relative humidity": 56.3,
              "temperature": 17.9
          }
      },
      {
          "time": 1586954460000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 10003,
              "relative humidity": 53.8,
              "temperature": 10.5
          }
      },
      {
          "time": 1586954820000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8990,
              "relative humidity": 51,
              "temperature": 12.2
          }
      },
      {
          "time": 1586955180000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7321,
              "relative humidity": 49,
              "temperature": 17.4
          }
      },
      {
          "time": 1586955540000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 6012,
              "relative humidity": 50,
              "temperature": 14.6
          }
      },
      {
          "time": 1586955900000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8990,
              "relative humidity": 34.6,
              "temperature": 21
          }
      },
      {
          "time": 1586956260000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8892,
              "relative humidity": 38,
              "temperature": 14
          }
      },
      {
          "time": 1586956620000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13045,
              "relative humidity": 50,
              "temperature": 11
          }
      },
      {
          "time": 1586956980000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 6012,
              "relative humidity": 55,
              "temperature": 18.4
          }
      },
      {
          "time": 1586957340000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13003,
              "relative humidity": 62,
              "temperature": 10.5
          }
      },
      {
          "time": 1586957700000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9902,
              "relative humidity": 59,
              "temperature": 17.5
          }
      },
      {
          "time": 1586958060000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8892,
              "relative humidity": 56.3,
              "temperature": 10.3
          }
      },
      {
          "time": 1586958420000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9023,
              "relative humidity": 35,
              "temperature": 12
          }
      },
      {
          "time": 1586958780000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9021,
              "relative humidity": 63.4,
              "temperature": 21
          }
      },
      {
          "time": 1586959140000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7713,
              "temperature": 23
          }
      },
      {
          "time": 1586959500000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 10899,
              "relative humidity": 64,
              "temperature": 22
          }
      },
      {
          "time": 1586959860000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 10003,
              "relative humidity": 59,
              "temperature": 14
          }
      },
      {
          "time": 1586960220000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5562,
              "relative humidity": 46,
              "temperature": 14.6
          }
      },
      {
          "time": 1586960580000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13562,
              "relative humidity": 53.8
          }
      },
      {
          "time": 1586960940000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 10899,
              "relative humidity": 48,
              "temperature": 18.4
          }
      },
      {
          "time": 1586961300000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 12556,
              "relative humidity": 53,
              "temperature": 11
          }
      },
      {
          "time": 1586961660000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 3560,
              "relative humidity": 36.7
          }
      },
      {
          "time": 1586962020000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 6602,
              "relative humidity": 56.3,
              "temperature": 16.3
          }
      },
      {
          "time": 1586962380000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7788,
              "relative humidity": 44,
              "temperature": 18.9
          }
      },
      {
          "time": 1586962740000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 12310,
              "relative humidity": 62,
              "temperature": 10.2
          }
      },
      {
          "time": 1586963100000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 4231,
              "relative humidity": 48.5,
              "temperature": 19.4
          }
      },
      {
          "time": 1586963460000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 12556,
              "relative humidity": 63.4,
              "temperature": 10.2
          }
      },
      {
          "time": 1586963820000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 6602,
              "relative humidity": 50,
              "temperature": 12.2
          }
      },
      {
          "time": 1586964180000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13562,
              "relative humidity": 44.4,
              "temperature": 12
          }
      },
      {
          "time": 1586964540000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 10003,
              "relative humidity": 48.5,
              "temperature": 17.5
          }
      },
      {
          "time": 1586964900000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 10899,
              "relative humidity": 48.5,
              "temperature": 10.5
          }
      },
      {
          "time": 1586965260000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9801,
              "relative humidity": 44.4,
              "temperature": 23
          }
      },
      {
          "time": 1586965620000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 12003,
              "relative humidity": 60,
              "temperature": 11
          }
      },
      {
          "time": 1586965980000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7713,
              "relative humidity": 62,
              "temperature": 14.6
          }
      },
      {
          "time": 1586966340000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9023,
              "relative humidity": 53.8,
              "temperature": 10.3
          }
      },
      {
          "time": 1586966700000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 6012,
              "relative humidity": 53,
              "temperature": 16.3
          }
      },
      {
          "time": 1586967060000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9023,
              "relative humidity": 35,
              "temperature": 19.4
          }
      },
      {
          "time": 1586967420000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 6012,
              "relative humidity": 71,
              "temperature": 18.4
          }
      },
      {
          "time": 1586967780000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7788,
              "relative humidity": 44,
              "temperature": 17.4
          }
      },
      {
          "time": 1586968140000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8892,
              "relative humidity": 44.4,
              "temperature": 17.4
          }
      },
      {
          "time": 1586968500000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13562,
              "relative humidity": 50
          }
      },
      {
          "time": 1586968860000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8111,
              "relative humidity": 64,
              "temperature": 19.2
          }
      },
      {
          "time": 1586969220000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7713,
              "relative humidity": 44,
              "temperature": 17.9
          }
      },
      {
          "time": 1586969580000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 10003,
              "relative humidity": 48.5,
              "temperature": 14.6
          }
      },
      {
          "time": 1586969940000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7788,
              "relative humidity": 56.3,
              "temperature": 14
          }
      },
      {
          "time": 1586970300000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5502,
              "relative humidity": 56.3,
              "temperature": 9.2
          }
      },
      {
          "time": 1586970660000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 1113,
              "relative humidity": 48,
              "temperature": 7.5
          }
      },
      {
          "time": 1586971020000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 2799,
              "relative humidity": 44
          }
      },
      {
          "time": 1586971380000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5542,
              "relative humidity": 44.4,
              "temperature": 9.9
          }
      },
      {
          "time": 1586971740000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 569,
              "relative humidity": 56.3,
              "temperature": 6.3
          }
      },
      {
          "time": 1586972100000,
          "sensorId": "uuid0130",
          "data": {
              "relative humidity": 36.7,
              "temperature": 9.2
          }
      },
      {
          "time": 1586972460000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 4239,
              "relative humidity": 50,
              "temperature": 6.3
          }
      },
      {
          "time": 1586972820000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 3123,
              "relative humidity": 48,
              "temperature": 8.5
          }
      },
      {
          "time": 1586973180000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 569,
              "relative humidity": 44.4,
              "temperature": 8.3
          }
      },
      {
          "time": 1586973540000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 1030,
              "relative humidity": 59,
              "temperature": 8.3
          }
      },
      {
          "time": 1586973900000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 2094,
              "relative humidity": 48.5,
              "temperature": 7.5
          }
      },
      {
          "time": 1586974260000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5502,
              "relative humidity": 64,
              "temperature": 6.3
          }
      },
      {
          "time": 1586974620000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 3122,
              "relative humidity": 55,
              "temperature": 8.1
          }
      },
      {
          "time": 1586974980000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 2094,
              "relative humidity": 63.4,
              "temperature": 8.3
          }
      },
      {
          "time": 1586975340000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5502,
              "relative humidity": 59,
              "temperature": 7.5
          }
      },
      {
          "time": 1586975700000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5413,
              "relative humidity": 38,
              "temperature": 8.1
          }
      },
      {
          "time": 1586976060000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5542,
              "relative humidity": 59,
              "temperature": 6.4
          }
      },
      {
          "time": 1586976420000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 890,
              "relative humidity": 60,
              "temperature": 3.6
          }
      },
      {
          "time": 1586976780000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 3123,
              "relative humidity": 63.4,
              "temperature": 7.5
          }
      },
      {
          "time": 1586977140000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 569,
              "relative humidity": 51
          }
      },
      {
          "time": 1586977500000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 46
          }
      },
      {
          "time": 1586977860000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 34.6,
              "temperature": 4.2
          }
      },
      {
          "time": 1586978220000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 53,
              "temperature": 8.9
          }
      },
      {
          "time": 1586978580000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 62,
              "temperature": 8.9
          }
      },
      {
          "time": 1586978940000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 64,
              "temperature": 4.2
          }
      },
      {
          "time": 1586979300000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 51,
              "temperature": 2.3
          }
      },
      {
          "time": 1586979660000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 48,
              "temperature": 7.1
          }
      },
      {
          "time": 1586980020000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 62,
              "temperature": 4
          }
      },
      {
          "time": 1586980380000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 62,
              "temperature": 2.3
          }
      },
      {
          "time": 1586980740000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 51,
              "temperature": 6
          }
      },
      {
          "time": 1586981100000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 53,
              "temperature": 8.9
          }
      },
      {
          "time": 1586981460000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 63.4,
              "temperature": 4
          }
      },
      {
          "time": 1586981820000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 44,
              "temperature": 4
          }
      },
      {
          "time": 1586982180000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 44.4,
              "temperature": 7.1
          }
      },
      {
          "time": 1586982540000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 49,
              "temperature": 5.7
          }
      },
      {
          "time": 1586982900000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 64,
              "temperature": 4
          }
      },
      {
          "time": 1586983260000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 53.8,
              "temperature": 6.8
          }
      },
      {
          "time": 1586983620000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 59,
              "temperature": 3
          }
      },
      {
          "time": 1586983980000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 48.5,
              "temperature": 8.9
          }
      },
      {
          "time": 1586984340000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 55,
              "temperature": 3.4
          }
      },
      {
          "time": 1586984700000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 62,
              "temperature": 4.2
          }
      },
      {
          "time": 1586985060000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 62,
              "temperature": 4.2
          }
      },
      {
          "time": 1586985420000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 59,
              "temperature": 2.3
          }
      },
      {
          "time": 1586985780000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 55,
              "temperature": 8.9
          }
      },
      {
          "time": 1586986140000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0
          }
      },
      {
          "time": 1586986500000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 49,
              "temperature": 8.5
          }
      },
      {
          "time": 1586986860000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 53,
              "temperature": 2.3
          }
      },
      {
          "time": 1586987220000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 34.6,
              "temperature": 6
          }
      },
      {
          "time": 1586987580000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 48.5,
              "temperature": 6.2
          }
      },
      {
          "time": 1586987940000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 53.8,
              "temperature": 3
          }
      },
      {
          "time": 1586988300000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 51
          }
      },
      {
          "time": 1586988660000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 53.8,
              "temperature": 8.5
          }
      },
      {
          "time": 1586989020000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 59,
              "temperature": 3.4
          }
      },
      {
          "time": 1586989380000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 48,
              "temperature": 3
          }
      },
      {
          "time": 1586989740000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 60,
              "temperature": 6.2
          }
      },
      {
          "time": 1586990100000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 36.7,
              "temperature": 5.7
          }
      },
      {
          "time": 1586990460000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "temperature": 7.1
          }
      },
      {
          "time": 1586990820000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 64,
              "temperature": 4.2
          }
      },
      {
          "time": 1586991180000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 49,
              "temperature": 6
          }
      },
      {
          "time": 1586991540000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 55,
              "temperature": 5.5
          }
      },
      {
          "time": 1586991900000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 56.3,
              "temperature": 6
          }
      },
      {
          "time": 1586992260000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 71,
              "temperature": 7.1
          }
      },
      {
          "time": 1586992620000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 62
          }
      },
      {
          "time": 1586992980000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 59,
              "temperature": 8.9
          }
      },
      {
          "time": 1586993340000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 36.7,
              "temperature": 8.9
          }
      },
      {
          "time": 1586993700000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 44,
              "temperature": 6
          }
      },
      {
          "time": 1586994060000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 44,
              "temperature": 4.2
          }
      },
      {
          "time": 1586994420000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 46,
              "temperature": 5.5
          }
      },
      {
          "time": 1586994780000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 60,
              "temperature": 5.7
          }
      },
      {
          "time": 1586995140000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 53.8,
              "temperature": 6.8
          }
      },
      {
          "time": 1586995500000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 71,
              "temperature": 4.2
          }
      },
      {
          "time": 1586995860000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 59,
              "temperature": 8.5
          }
      },
      {
          "time": 1586996220000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 34.6,
              "temperature": 3
          }
      },
      {
          "time": 1586996580000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 49,
              "temperature": 6.8
          }
      },
      {
          "time": 1586996940000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 48,
              "temperature": 8.9
          }
      },
      {
          "time": 1586997300000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 44.4,
              "temperature": 4
          }
      },
      {
          "time": 1586997660000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 49,
              "temperature": 8.5
          }
      },
      {
          "time": 1586998020000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 50,
              "temperature": 3.4
          }
      },
      {
          "time": 1586998380000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 50,
              "temperature": 4.2
          }
      },
      {
          "time": 1586998740000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 56.3,
              "temperature": 8.9
          }
      },
      {
          "time": 1586999100000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 56.3,
              "temperature": 3
          }
      },
      {
          "time": 1586999460000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 62,
              "temperature": 6.8
          }
      },
      {
          "time": 1586999820000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 55,
              "temperature": 7.1
          }
      },
      {
          "time": 1587000180000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 55,
              "temperature": 6.8
          }
      },
      {
          "time": 1587000540000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 59,
              "temperature": 5.7
          }
      },
      {
          "time": 1587000900000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 53,
              "temperature": 4.2
          }
      },
      {
          "time": 1587001260000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 55,
              "temperature": 4.2
          }
      },
      {
          "time": 1587001620000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 59,
              "temperature": 8.5
          }
      },
      {
          "time": 1587001980000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 62,
              "temperature": 3.4
          }
      },
      {
          "time": 1587002340000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 56.3,
              "temperature": 4.2
          }
      },
      {
          "time": 1587002700000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 48.5,
              "temperature": 3
          }
      },
      {
          "time": 1587003060000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 46,
              "temperature": 5.7
          }
      },
      {
          "time": 1587003420000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 44.4,
              "temperature": 8.9
          }
      },
      {
          "time": 1587003780000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 48.5,
              "temperature": 5.5
          }
      },
      {
          "time": 1587004140000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 46,
              "temperature": 3
          }
      },
      {
          "time": 1587004500000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 62,
              "temperature": 8.9
          }
      },
      {
          "time": 1587004860000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 71,
              "temperature": 2.3
          }
      },
      {
          "time": 1587005220000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 48.5,
              "temperature": 3
          }
      },
      {
          "time": 1587005580000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 36.7,
              "temperature": 6
          }
      },
      {
          "time": 1587005940000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 48.5,
              "temperature": 6.2
          }
      },
      {
          "time": 1587006300000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 4502,
              "relative humidity": 51,
              "temperature": 8.3
          }
      },
      {
          "time": 1587006660000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 1987,
              "relative humidity": 44,
              "temperature": 8.1
          }
      },
      {
          "time": 1587007020000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 1030,
              "relative humidity": 56.3
          }
      },
      {
          "time": 1587007380000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 1113,
              "relative humidity": 38,
              "temperature": 7.2
          }
      },
      {
          "time": 1587007740000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 3122,
              "relative humidity": 53.8,
              "temperature": 8.3
          }
      },
      {
          "time": 1587008100000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 890,
              "relative humidity": 49
          }
      },
      {
          "time": 1587008460000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 1987,
              "relative humidity": 36.7,
              "temperature": 6.4
          }
      },
      {
          "time": 1587008820000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 1030,
              "relative humidity": 71,
              "temperature": 9.1
          }
      },
      {
          "time": 1587009180000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 672,
              "relative humidity": 38,
              "temperature": 8.3
          }
      },
      {
          "time": 1587009540000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 4502,
              "relative humidity": 60,
              "temperature": 6.3
          }
      },
      {
          "time": 1587009900000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 1004,
              "relative humidity": 50,
              "temperature": 7.5
          }
      },
      {
          "time": 1587010260000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 1030,
              "relative humidity": 49,
              "temperature": 7.2
          }
      },
      {
          "time": 1587010620000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5413,
              "relative humidity": 55,
              "temperature": 7.2
          }
      },
      {
          "time": 1587010980000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 3821,
              "relative humidity": 64,
              "temperature": 8.5
          }
      },
      {
          "time": 1587011340000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 1030,
              "relative humidity": 36.7
          }
      },
      {
          "time": 1587011700000,
          "sensorId": "uuid0130",
          "data": {
              "relative humidity": 46,
              "temperature": 9.2
          }
      },
      {
          "time": 1587012060000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5090,
              "relative humidity": 49,
              "temperature": 9.2
          }
      },
      {
          "time": 1587012420000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 2878,
              "relative humidity": 35,
              "temperature": 8.5
          }
      },
      {
          "time": 1587012780000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 1004,
              "relative humidity": 62,
              "temperature": 8.1
          }
      },
      {
          "time": 1587013140000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 3334,
              "relative humidity": 38,
              "temperature": 9.2
          }
      },
      {
          "time": 1587013500000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 1113,
              "relative humidity": 44.4,
              "temperature": 7.2
          }
      },
      {
          "time": 1587013860000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 569,
              "relative humidity": 34.6,
              "temperature": 9.2
          }
      },
      {
          "time": 1587014220000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 1030,
              "relative humidity": 71,
              "temperature": 6.4
          }
      },
      {
          "time": 1587014580000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 3821,
              "relative humidity": 59,
              "temperature": 9.9
          }
      },
      {
          "time": 1587014940000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 2266,
              "relative humidity": 44,
              "temperature": 9.1
          }
      },
      {
          "time": 1587015300000,
          "sensorId": "uuid0130",
          "data": {
              "relative humidity": 64,
              "temperature": 7.2
          }
      },
      {
          "time": 1587015660000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 4502,
              "relative humidity": 59,
              "temperature": 7.2
          }
      },
      {
          "time": 1587016020000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 4216,
              "relative humidity": 48.5,
              "temperature": 7.2
          }
      },
      {
          "time": 1587016380000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 4502,
              "relative humidity": 48.5,
              "temperature": 7.5
          }
      },
      {
          "time": 1587016740000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 1992,
              "relative humidity": 36.7,
              "temperature": 7.5
          }
      },
      {
          "time": 1587017100000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9902,
              "relative humidity": 44,
              "temperature": 17.5
          }
      },
      {
          "time": 1587017460000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7713,
              "relative humidity": 60
          }
      },
      {
          "time": 1587017820000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7321,
              "relative humidity": 50,
              "temperature": 11
          }
      },
      {
          "time": 1587018180000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8766,
              "relative humidity": 35,
              "temperature": 21
          }
      },
      {
          "time": 1587018540000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 10003,
              "relative humidity": 53.8,
              "temperature": 10.2
          }
      },
      {
          "time": 1587018900000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8111,
              "relative humidity": 51,
              "temperature": 15
          }
      },
      {
          "time": 1587019260000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5562,
              "relative humidity": 50,
              "temperature": 19.2
          }
      },
      {
          "time": 1587019620000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8766,
              "relative humidity": 60,
              "temperature": 17.9
          }
      },
      {
          "time": 1587019980000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 6012,
              "relative humidity": 59,
              "temperature": 10.3
          }
      },
      {
          "time": 1587020340000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 10003,
              "relative humidity": 62,
              "temperature": 12.2
          }
      },
      {
          "time": 1587020700000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 6602,
              "relative humidity": 62,
              "temperature": 19.4
          }
      },
      {
          "time": 1587021060000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 3560,
              "relative humidity": 71,
              "temperature": 16.3
          }
      },
      {
          "time": 1587021420000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8111,
              "relative humidity": 51,
              "temperature": 23
          }
      },
      {
          "time": 1587021780000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13003,
              "relative humidity": 59,
              "temperature": 16.3
          }
      },
      {
          "time": 1587022140000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9023,
              "relative humidity": 48
          }
      },
      {
          "time": 1587022500000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9902,
              "relative humidity": 51,
              "temperature": 21
          }
      },
      {
          "time": 1587022860000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 10003,
              "relative humidity": 59,
              "temperature": 17.9
          }
      },
      {
          "time": 1587023220000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5562,
              "relative humidity": 62,
              "temperature": 18.9
          }
      },
      {
          "time": 1587023580000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7713,
              "relative humidity": 44.4,
              "temperature": 16.3
          }
      },
      {
          "time": 1587023940000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9021,
              "relative humidity": 55,
              "temperature": 23
          }
      },
      {
          "time": 1587024300000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 6602,
              "relative humidity": 59,
              "temperature": 18.9
          }
      },
      {
          "time": 1587024660000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13562,
              "relative humidity": 63.4,
              "temperature": 16.3
          }
      },
      {
          "time": 1587025020000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 12003,
              "relative humidity": 59,
              "temperature": 23
          }
      },
      {
          "time": 1587025380000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 12003,
              "relative humidity": 55,
              "temperature": 16.3
          }
      },
      {
          "time": 1587025740000,
          "sensorId": "uuid0130",
          "data": {
              "relative humidity": 59,
              "temperature": 22
          }
      },
      {
          "time": 1587026100000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13562,
              "temperature": 15
          }
      },
      {
          "time": 1587026460000,
          "sensorId": "uuid0130",
          "data": {
              "relative humidity": 56.3,
              "temperature": 11
          }
      },
      {
          "time": 1587026820000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 10899,
              "relative humidity": 35,
              "temperature": 17.4
          }
      },
      {
          "time": 1587027180000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 12003,
              "relative humidity": 48.5,
              "temperature": 10.3
          }
      },
      {
          "time": 1587027540000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 10553,
              "relative humidity": 53.8,
              "temperature": 12.2
          }
      },
      {
          "time": 1587027900000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5562,
              "relative humidity": 49,
              "temperature": 14.6
          }
      },
      {
          "time": 1587028260000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8892,
              "relative humidity": 60,
              "temperature": 14.6
          }
      },
      {
          "time": 1587028620000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 12556,
              "relative humidity": 35,
              "temperature": 12.2
          }
      },
      {
          "time": 1587028980000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13003,
              "relative humidity": 48.5,
              "temperature": 23
          }
      },
      {
          "time": 1587029340000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8111,
              "relative humidity": 55,
              "temperature": 19.2
          }
      },
      {
          "time": 1587029700000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5562,
              "relative humidity": 49,
              "temperature": 10.5
          }
      },
      {
          "time": 1587030060000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 10899,
              "relative humidity": 60,
              "temperature": 12.2
          }
      },
      {
          "time": 1587030420000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 10003,
              "relative humidity": 35,
              "temperature": 18.4
          }
      },
      {
          "time": 1587030780000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5698,
              "relative humidity": 44,
              "temperature": 17.9
          }
      },
      {
          "time": 1587031140000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 3560,
              "relative humidity": 64,
              "temperature": 10.5
          }
      },
      {
          "time": 1587031500000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13045,
              "relative humidity": 71,
              "temperature": 23
          }
      },
      {
          "time": 1587031860000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13045,
              "relative humidity": 53,
              "temperature": 22
          }
      },
      {
          "time": 1587032220000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7788,
              "relative humidity": 56.3,
              "temperature": 10.3
          }
      },
      {
          "time": 1587032580000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 10003,
              "relative humidity": 38,
              "temperature": 10.2
          }
      },
      {
          "time": 1587032940000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7321,
              "relative humidity": 53,
              "temperature": 16.3
          }
      },
      {
          "time": 1587033300000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7901,
              "relative humidity": 59,
              "temperature": 22
          }
      },
      {
          "time": 1587033660000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9023,
              "relative humidity": 38,
              "temperature": 10.2
          }
      },
      {
          "time": 1587034020000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5562,
              "relative humidity": 44,
              "temperature": 17.9
          }
      },
      {
          "time": 1587034380000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8990,
              "relative humidity": 46,
              "temperature": 10.5
          }
      },
      {
          "time": 1587034740000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5698,
              "relative humidity": 44.4,
              "temperature": 16.3
          }
      },
      {
          "time": 1587035100000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13045,
              "relative humidity": 53.8,
              "temperature": 10.5
          }
      },
      {
          "time": 1587035460000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13003,
              "relative humidity": 59,
              "temperature": 12
          }
      },
      {
          "time": 1587035820000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7901,
              "relative humidity": 44,
              "temperature": 15
          }
      },
      {
          "time": 1587036180000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 6012,
              "relative humidity": 44.4,
              "temperature": 16.3
          }
      },
      {
          "time": 1587036540000,
          "sensorId": "uuid0130",
          "data": {
              "relative humidity": 44,
              "temperature": 22
          }
      },
      {
          "time": 1587036900000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13045,
              "relative humidity": 46,
              "temperature": 22
          }
      },
      {
          "time": 1587037260000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7788,
              "relative humidity": 35,
              "temperature": 16.3
          }
      },
      {
          "time": 1587037620000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13045,
              "relative humidity": 36.7,
              "temperature": 10.3
          }
      },
      {
          "time": 1587037980000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8766,
              "relative humidity": 48.5,
              "temperature": 19.2
          }
      },
      {
          "time": 1587038340000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5698,
              "relative humidity": 38,
              "temperature": 12
          }
      },
      {
          "time": 1587038700000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 12310,
              "relative humidity": 59,
              "temperature": 17.4
          }
      },
      {
          "time": 1587039060000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 10553,
              "relative humidity": 63.4,
              "temperature": 17.5
          }
      },
      {
          "time": 1587039420000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7321,
              "temperature": 10.5
          }
      },
      {
          "time": 1587039780000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9801,
              "relative humidity": 35,
              "temperature": 22
          }
      },
      {
          "time": 1587040140000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 4231,
              "relative humidity": 60,
              "temperature": 19.2
          }
      },
      {
          "time": 1587040500000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7788,
              "relative humidity": 59,
              "temperature": 19.4
          }
      },
      {
          "time": 1587040860000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7321,
              "relative humidity": 62,
              "temperature": 16.3
          }
      },
      {
          "time": 1587041220000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8766,
              "relative humidity": 64,
              "temperature": 10.2
          }
      },
      {
          "time": 1587041580000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 10553,
              "relative humidity": 59,
              "temperature": 10.3
          }
      },
      {
          "time": 1587041940000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7901,
              "relative humidity": 71,
              "temperature": 16.3
          }
      },
      {
          "time": 1587042300000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8111,
              "relative humidity": 46,
              "temperature": 12.2
          }
      },
      {
          "time": 1587042660000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7713,
              "relative humidity": 51,
              "temperature": 10.3
          }
      },
      {
          "time": 1587043020000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13045,
              "relative humidity": 64,
              "temperature": 22
          }
      },
      {
          "time": 1587043380000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5698,
              "relative humidity": 34.6,
              "temperature": 17.4
          }
      },
      {
          "time": 1587043740000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8892,
              "relative humidity": 50
          }
      },
      {
          "time": 1587044100000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7713,
              "temperature": 16.3
          }
      },
      {
          "time": 1587044460000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8766,
              "relative humidity": 38,
              "temperature": 10.3
          }
      },
      {
          "time": 1587044820000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9021,
              "relative humidity": 62,
              "temperature": 22
          }
      },
      {
          "time": 1587045180000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8111,
              "relative humidity": 49,
              "temperature": 18.9
          }
      },
      {
          "time": 1587045540000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7788,
              "relative humidity": 49,
              "temperature": 15
          }
      },
      {
          "time": 1587045900000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5562,
              "relative humidity": 48,
              "temperature": 17.5
          }
      },
      {
          "time": 1587046260000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7901,
              "relative humidity": 59,
              "temperature": 10.3
          }
      },
      {
          "time": 1587046620000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8766,
              "relative humidity": 71,
              "temperature": 10.5
          }
      },
      {
          "time": 1587046980000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 3560,
              "relative humidity": 62,
              "temperature": 14.6
          }
      },
      {
          "time": 1587047340000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 12310,
              "relative humidity": 59,
              "temperature": 15
          }
      },
      {
          "time": 1587047700000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8766,
              "relative humidity": 56.3,
              "temperature": 15
          }
      },
      {
          "time": 1587048060000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13562,
              "temperature": 17.5
          }
      },
      {
          "time": 1587048420000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 12310,
              "relative humidity": 55,
              "temperature": 15
          }
      },
      {
          "time": 1587048780000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7788,
              "relative humidity": 55,
              "temperature": 18.9
          }
      },
      {
          "time": 1587049140000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13562,
              "relative humidity": 60,
              "temperature": 19.2
          }
      },
      {
          "time": 1587049500000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 6012,
              "relative humidity": 46,
              "temperature": 14
          }
      },
      {
          "time": 1587049860000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7713,
              "relative humidity": 55,
              "temperature": 10.3
          }
      },
      {
          "time": 1587050220000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 4231,
              "relative humidity": 64,
              "temperature": 17.5
          }
      },
      {
          "time": 1587050580000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 6602,
              "relative humidity": 60,
              "temperature": 10.3
          }
      },
      {
          "time": 1587050940000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13045,
              "relative humidity": 48.5,
              "temperature": 17.9
          }
      },
      {
          "time": 1587051300000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 10553,
              "relative humidity": 71,
              "temperature": 21
          }
      },
      {
          "time": 1587051660000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8892,
              "relative humidity": 63.4,
              "temperature": 17.9
          }
      },
      {
          "time": 1587052020000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8990,
              "relative humidity": 38,
              "temperature": 12.2
          }
      },
      {
          "time": 1587052380000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8892,
              "relative humidity": 50,
              "temperature": 12.2
          }
      },
      {
          "time": 1587052740000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9021,
              "relative humidity": 46,
              "temperature": 12
          }
      },
      {
          "time": 1587053100000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13562,
              "relative humidity": 62,
              "temperature": 23
          }
      },
      {
          "time": 1587053460000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8892,
              "relative humidity": 50,
              "temperature": 11
          }
      },
      {
          "time": 1587053820000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5698,
              "relative humidity": 34.6
          }
      },
      {
          "time": 1587054180000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5698,
              "relative humidity": 55,
              "temperature": 10.2
          }
      },
      {
          "time": 1587054540000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9023,
              "relative humidity": 35,
              "temperature": 17.5
          }
      },
      {
          "time": 1587054900000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9801,
              "relative humidity": 55,
              "temperature": 19.4
          }
      },
      {
          "time": 1587055260000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 12556,
              "relative humidity": 62,
              "temperature": 10.5
          }
      },
      {
          "time": 1587055620000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 12556,
              "relative humidity": 50,
              "temperature": 14.6
          }
      },
      {
          "time": 1587055980000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5562,
              "relative humidity": 56.3,
              "temperature": 21
          }
      },
      {
          "time": 1587056340000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 4231,
              "relative humidity": 64,
              "temperature": 19.4
          }
      },
      {
          "time": 1587056700000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 3123,
              "relative humidity": 53.8,
              "temperature": 6.3
          }
      },
      {
          "time": 1587057060000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 2094,
              "relative humidity": 64,
              "temperature": 6.3
          }
      },
      {
          "time": 1587057420000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 1222,
              "relative humidity": 59,
              "temperature": 3.6
          }
      },
      {
          "time": 1587057780000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 2266,
              "relative humidity": 53,
              "temperature": 7.2
          }
      },
      {
          "time": 1587058140000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 1020,
              "relative humidity": 53,
              "temperature": 8.5
          }
      },
      {
          "time": 1587058500000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 890,
              "relative humidity": 51,
              "temperature": 8.1
          }
      },
      {
          "time": 1587058860000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 890,
              "relative humidity": 62,
              "temperature": 6.3
          }
      },
      {
          "time": 1587059220000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 1222,
              "relative humidity": 48.5
          }
      },
      {
          "time": 1587059580000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 672,
              "relative humidity": 62,
              "temperature": 9.2
          }
      },
      {
          "time": 1587059940000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 1020,
              "relative humidity": 53,
              "temperature": 9.9
          }
      },
      {
          "time": 1587060300000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 3334,
              "relative humidity": 55
          }
      },
      {
          "time": 1587060660000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 2094,
              "relative humidity": 49,
              "temperature": 6.4
          }
      },
      {
          "time": 1587061020000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 3123,
              "relative humidity": 35,
              "temperature": 6.3
          }
      },
      {
          "time": 1587061380000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 4216,
              "relative humidity": 35,
              "temperature": 9.1
          }
      },
      {
          "time": 1587061740000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 4502,
              "relative humidity": 38,
              "temperature": 9.2
          }
      },
      {
          "time": 1587062100000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 3122,
              "temperature": 6.4
          }
      },
      {
          "time": 1587062460000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 1004,
              "relative humidity": 59,
              "temperature": 8.3
          }
      },
      {
          "time": 1587062820000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 1030,
              "relative humidity": 48,
              "temperature": 9.1
          }
      },
      {
          "time": 1587063180000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5090,
              "relative humidity": 44.4,
              "temperature": 8.5
          }
      },
      {
          "time": 1587063540000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 1113,
              "relative humidity": 38
          }
      },
      {
          "time": 1587063900000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 63.4,
              "temperature": 5.5
          }
      },
      {
          "time": 1587064260000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 64,
              "temperature": 5.7
          }
      },
      {
          "time": 1587064620000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 60,
              "temperature": 8.5
          }
      },
      {
          "time": 1587064980000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 48,
              "temperature": 8.9
          }
      },
      {
          "time": 1587065340000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 53.8,
              "temperature": 4.2
          }
      },
      {
          "time": 1587065700000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 53.8,
              "temperature": 7.1
          }
      },
      {
          "time": 1587066060000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 59,
              "temperature": 6
          }
      },
      {
          "time": 1587066420000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 48,
              "temperature": 3.4
          }
      },
      {
          "time": 1587066780000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 38,
              "temperature": 6.2
          }
      },
      {
          "time": 1587067140000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 46,
              "temperature": 6.2
          }
      },
      {
          "time": 1587067500000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 48.5,
              "temperature": 5.7
          }
      },
      {
          "time": 1587067860000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 62,
              "temperature": 6.8
          }
      },
      {
          "time": 1587068220000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 48,
              "temperature": 2.3
          }
      },
      {
          "time": 1587068580000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 51,
              "temperature": 4.2
          }
      },
      {
          "time": 1587068940000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "temperature": 4.2
          }
      },
      {
          "time": 1587069300000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 63.4
          }
      },
      {
          "time": 1587069660000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 38,
              "temperature": 5.7
          }
      },
      {
          "time": 1587070020000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 48,
              "temperature": 3.4
          }
      },
      {
          "time": 1587070380000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 48,
              "temperature": 2.3
          }
      },
      {
          "time": 1587070740000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 56.3,
              "temperature": 2.3
          }
      },
      {
          "time": 1587071100000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 55,
              "temperature": 2.3
          }
      },
      {
          "time": 1587071460000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 48,
              "temperature": 4.2
          }
      },
      {
          "time": 1587071820000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 59,
              "temperature": 5.5
          }
      },
      {
          "time": 1587072180000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 55,
              "temperature": 3
          }
      },
      {
          "time": 1587072540000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 55,
              "temperature": 2.3
          }
      },
      {
          "time": 1587072900000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 53,
              "temperature": 2.3
          }
      },
      {
          "time": 1587073260000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 50,
              "temperature": 4
          }
      },
      {
          "time": 1587073620000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 46,
              "temperature": 8.9
          }
      },
      {
          "time": 1587073980000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 71,
              "temperature": 4.2
          }
      },
      {
          "time": 1587074340000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 56.3,
              "temperature": 4.2
          }
      },
      {
          "time": 1587074700000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 60
          }
      },
      {
          "time": 1587075060000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 64,
              "temperature": 3
          }
      },
      {
          "time": 1587075420000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 35,
              "temperature": 3
          }
      },
      {
          "time": 1587075780000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 46,
              "temperature": 8.9
          }
      },
      {
          "time": 1587076140000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 59,
              "temperature": 8.5
          }
      },
      {
          "time": 1587076500000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 51,
              "temperature": 3
          }
      },
      {
          "time": 1587076860000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 53,
              "temperature": 6
          }
      },
      {
          "time": 1587077220000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 46,
              "temperature": 5.5
          }
      },
      {
          "time": 1587077580000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 62,
              "temperature": 8.5
          }
      },
      {
          "time": 1587077940000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 53.8,
              "temperature": 6.2
          }
      },
      {
          "time": 1587078300000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 59,
              "temperature": 6.2
          }
      },
      {
          "time": 1587078660000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 34.6,
              "temperature": 2.3
          }
      },
      {
          "time": 1587079020000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 63.4,
              "temperature": 6.8
          }
      },
      {
          "time": 1587079380000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 38,
              "temperature": 7.1
          }
      },
      {
          "time": 1587079740000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 46,
              "temperature": 4.2
          }
      },
      {
          "time": 1587080100000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 36.7,
              "temperature": 7.1
          }
      },
      {
          "time": 1587080460000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 59,
              "temperature": 3
          }
      },
      {
          "time": 1587080820000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 34.6,
              "temperature": 4.2
          }
      },
      {
          "time": 1587081180000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 64,
              "temperature": 4
          }
      },
      {
          "time": 1587081540000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 46,
              "temperature": 8.9
          }
      },
      {
          "time": 1587081900000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 56.3,
              "temperature": 7.1
          }
      },
      {
          "time": 1587082260000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 55,
              "temperature": 7.1
          }
      },
      {
          "time": 1587082620000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 71,
              "temperature": 7.1
          }
      },
      {
          "time": 1587082980000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 71,
              "temperature": 4.2
          }
      },
      {
          "time": 1587083340000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 44.4,
              "temperature": 8.9
          }
      },
      {
          "time": 1587083700000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 55,
              "temperature": 4.2
          }
      },
      {
          "time": 1587084060000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 35,
              "temperature": 4.2
          }
      },
      {
          "time": 1587084420000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 44.4,
              "temperature": 6
          }
      },
      {
          "time": 1587084780000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 44
          }
      },
      {
          "time": 1587085140000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 63.4,
              "temperature": 6.8
          }
      },
      {
          "time": 1587085500000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 34.6,
              "temperature": 5.7
          }
      },
      {
          "time": 1587085860000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 55,
              "temperature": 6.8
          }
      },
      {
          "time": 1587086220000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 44.4,
              "temperature": 3
          }
      },
      {
          "time": 1587086580000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 44.4,
              "temperature": 3.4
          }
      },
      {
          "time": 1587086940000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 51,
              "temperature": 5.5
          }
      },
      {
          "time": 1587087300000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 38,
              "temperature": 4.2
          }
      },
      {
          "time": 1587087660000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 63.4
          }
      },
      {
          "time": 1587088020000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "temperature": 7.1
          }
      },
      {
          "time": 1587088380000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 60,
              "temperature": 5.7
          }
      },
      {
          "time": 1587088740000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 34.6
          }
      },
      {
          "time": 1587089100000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 56.3,
              "temperature": 3.4
          }
      },
      {
          "time": 1587089460000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 38,
              "temperature": 8.9
          }
      },
      {
          "time": 1587089820000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 60,
              "temperature": 8.5
          }
      },
      {
          "time": 1587090180000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 55,
              "temperature": 2.3
          }
      },
      {
          "time": 1587090540000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 59,
              "temperature": 8.9
          }
      },
      {
          "time": 1587090900000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 49,
              "temperature": 4
          }
      },
      {
          "time": 1587091260000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 46,
              "temperature": 6.8
          }
      },
      {
          "time": 1587091620000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 55,
              "temperature": 6.8
          }
      },
      {
          "time": 1587091980000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 55,
              "temperature": 6.2
          }
      },
      {
          "time": 1587092340000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 34.6,
              "temperature": 5.5
          }
      },
      {
          "time": 1587092700000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 2094,
              "relative humidity": 56.3,
              "temperature": 8.1
          }
      },
      {
          "time": 1587093060000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 1020,
              "relative humidity": 49,
              "temperature": 8.1
          }
      },
      {
          "time": 1587093420000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 280,
              "relative humidity": 62,
              "temperature": 9.2
          }
      },
      {
          "time": 1587093780000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 890,
              "relative humidity": 44,
              "temperature": 8.5
          }
      },
      {
          "time": 1587094140000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 4502,
              "relative humidity": 34.6,
              "temperature": 9.1
          }
      },
      {
          "time": 1587094500000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 3123,
              "relative humidity": 62,
              "temperature": 9.9
          }
      },
      {
          "time": 1587094860000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 569,
              "relative humidity": 34.6,
              "temperature": 8.1
          }
      },
      {
          "time": 1587095220000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 280,
              "relative humidity": 71,
              "temperature": 8.5
          }
      },
      {
          "time": 1587095580000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 2094,
              "relative humidity": 51,
              "temperature": 6.3
          }
      },
      {
          "time": 1587095940000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 3122,
              "relative humidity": 71,
              "temperature": 9.2
          }
      },
      {
          "time": 1587096300000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 2799,
              "relative humidity": 62,
              "temperature": 8.3
          }
      },
      {
          "time": 1587096660000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 4432,
              "relative humidity": 55,
              "temperature": 8.3
          }
      },
      {
          "time": 1587097020000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 2799,
              "relative humidity": 59,
              "temperature": 3.6
          }
      },
      {
          "time": 1587097380000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 2878,
              "relative humidity": 46,
              "temperature": 6.4
          }
      },
      {
          "time": 1587097740000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 280,
              "relative humidity": 64,
              "temperature": 6.3
          }
      },
      {
          "time": 1587098100000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 2094,
              "relative humidity": 48.5,
              "temperature": 7.2
          }
      },
      {
          "time": 1587098460000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 1030,
              "relative humidity": 71,
              "temperature": 7.2
          }
      },
      {
          "time": 1587098820000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 672,
              "relative humidity": 49,
              "temperature": 7.2
          }
      },
      {
          "time": 1587099180000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 1222,
              "relative humidity": 55,
              "temperature": 9.1
          }
      },
      {
          "time": 1587099540000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 890,
              "relative humidity": 62,
              "temperature": 3.6
          }
      },
      {
          "time": 1587099900000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 569,
              "relative humidity": 60,
              "temperature": 3.6
          }
      },
      {
          "time": 1587100260000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 569,
              "relative humidity": 59,
              "temperature": 8.3
          }
      },
      {
          "time": 1587100620000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 672,
              "relative humidity": 59,
              "temperature": 7.2
          }
      },
      {
          "time": 1587100980000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5542,
              "relative humidity": 60,
              "temperature": 7.5
          }
      },
      {
          "time": 1587101340000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 3123,
              "relative humidity": 44,
              "temperature": 7.5
          }
      },
      {
          "time": 1587101700000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 890,
              "relative humidity": 59,
              "temperature": 9.9
          }
      },
      {
          "time": 1587102060000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 2799,
              "relative humidity": 53.8,
              "temperature": 9.1
          }
      },
      {
          "time": 1587102420000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 1987,
              "relative humidity": 56.3,
              "temperature": 6.4
          }
      },
      {
          "time": 1587102780000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 2266,
              "relative humidity": 53
          }
      },
      {
          "time": 1587103140000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 672,
              "relative humidity": 64,
              "temperature": 6.3
          }
      },
      {
          "time": 1587103500000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8111,
              "relative humidity": 49,
              "temperature": 14
          }
      },
      {
          "time": 1587103860000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 10899,
              "relative humidity": 71,
              "temperature": 12.2
          }
      },
      {
          "time": 1587104220000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7788,
              "relative humidity": 64,
              "temperature": 19.4
          }
      },
      {
          "time": 1587104580000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9021,
              "relative humidity": 55,
              "temperature": 15
          }
      },
      {
          "time": 1587104940000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7901,
              "relative humidity": 60,
              "temperature": 19.2
          }
      },
      {
          "time": 1587105300000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9021,
              "relative humidity": 56.3,
              "temperature": 21
          }
      },
      {
          "time": 1587105660000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 10899,
              "relative humidity": 71,
              "temperature": 11
          }
      },
      {
          "time": 1587106020000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 6012,
              "relative humidity": 36.7,
              "temperature": 18.4
          }
      },
      {
          "time": 1587106380000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 12556,
              "temperature": 19.4
          }
      },
      {
          "time": 1587106740000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 10553,
              "relative humidity": 44,
              "temperature": 16.3
          }
      },
      {
          "time": 1587107100000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7713,
              "relative humidity": 64,
              "temperature": 21
          }
      },
      {
          "time": 1587107460000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13045,
              "relative humidity": 64,
              "temperature": 19.2
          }
      },
      {
          "time": 1587107820000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 10003,
              "relative humidity": 63.4,
              "temperature": 19.4
          }
      },
      {
          "time": 1587108180000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 10553,
              "relative humidity": 56.3,
              "temperature": 16.3
          }
      },
      {
          "time": 1587108540000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7788,
              "relative humidity": 56.3
          }
      },
      {
          "time": 1587108900000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8111,
              "relative humidity": 46,
              "temperature": 10.5
          }
      },
      {
          "time": 1587109260000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7901,
              "relative humidity": 50,
              "temperature": 18.9
          }
      },
      {
          "time": 1587109620000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 12556,
              "relative humidity": 60,
              "temperature": 10.3
          }
      },
      {
          "time": 1587109980000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9902,
              "relative humidity": 46,
              "temperature": 23
          }
      },
      {
          "time": 1587110340000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 12310,
              "relative humidity": 71,
              "temperature": 14
          }
      },
      {
          "time": 1587110700000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13003,
              "relative humidity": 53.8,
              "temperature": 10.5
          }
      },
      {
          "time": 1587111060000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13562,
              "relative humidity": 38,
              "temperature": 12
          }
      },
      {
          "time": 1587111420000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5562,
              "relative humidity": 56.3,
              "temperature": 10.2
          }
      },
      {
          "time": 1587111780000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13562,
              "relative humidity": 63.4,
              "temperature": 22
          }
      },
      {
          "time": 1587112140000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8892,
              "relative humidity": 53,
              "temperature": 17.5
          }
      },
      {
          "time": 1587112500000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7788,
              "relative humidity": 64,
              "temperature": 22
          }
      },
      {
          "time": 1587112860000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8766,
              "relative humidity": 71,
              "temperature": 10.2
          }
      },
      {
          "time": 1587113220000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 10899,
              "relative humidity": 44,
              "temperature": 15
          }
      },
      {
          "time": 1587113580000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7788,
              "relative humidity": 48.5,
              "temperature": 17.5
          }
      },
      {
          "time": 1587113940000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5698,
              "relative humidity": 53.8,
              "temperature": 14
          }
      },
      {
          "time": 1587114300000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13562,
              "relative humidity": 48,
              "temperature": 16.3
          }
      },
      {
          "time": 1587114660000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5698,
              "relative humidity": 59,
              "temperature": 14.6
          }
      },
      {
          "time": 1587115020000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8111,
              "relative humidity": 34.6,
              "temperature": 14
          }
      },
      {
          "time": 1587115380000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13045,
              "relative humidity": 59,
              "temperature": 12.2
          }
      },
      {
          "time": 1587115740000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8892,
              "relative humidity": 38,
              "temperature": 19.4
          }
      },
      {
          "time": 1587116100000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13562,
              "relative humidity": 50,
              "temperature": 17.5
          }
      },
      {
          "time": 1587116460000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13045,
              "relative humidity": 62,
              "temperature": 18.9
          }
      },
      {
          "time": 1587116820000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 12556
          }
      },
      {
          "time": 1587117180000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13045,
              "relative humidity": 59,
              "temperature": 19.2
          }
      },
      {
          "time": 1587117540000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 10553,
              "relative humidity": 64,
              "temperature": 16.3
          }
      },
      {
          "time": 1587117900000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 4231,
              "relative humidity": 53,
              "temperature": 17.9
          }
      },
      {
          "time": 1587118260000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 12310,
              "temperature": 19.4
          }
      },
      {
          "time": 1587118620000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8766,
              "relative humidity": 55,
              "temperature": 17.9
          }
      },
      {
          "time": 1587118980000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 10003,
              "relative humidity": 62,
              "temperature": 19.2
          }
      },
      {
          "time": 1587119340000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 12003,
              "relative humidity": 62,
              "temperature": 17.4
          }
      },
      {
          "time": 1587119700000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8766,
              "relative humidity": 44,
              "temperature": 18.4
          }
      },
      {
          "time": 1587120060000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9801,
              "relative humidity": 35,
              "temperature": 14.6
          }
      },
      {
          "time": 1587120420000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 6012,
              "relative humidity": 35,
              "temperature": 12
          }
      },
      {
          "time": 1587120780000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8766,
              "relative humidity": 44.4,
              "temperature": 22
          }
      },
      {
          "time": 1587121140000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9023,
              "relative humidity": 62
          }
      },
      {
          "time": 1587121500000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 12556,
              "relative humidity": 64,
              "temperature": 12
          }
      },
      {
          "time": 1587121860000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 3560,
              "relative humidity": 59,
              "temperature": 17.5
          }
      },
      {
          "time": 1587122220000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 10553,
              "relative humidity": 46,
              "temperature": 22
          }
      },
      {
          "time": 1587122580000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 6012,
              "relative humidity": 38,
              "temperature": 17.4
          }
      },
      {
          "time": 1587122940000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 3560,
              "relative humidity": 49,
              "temperature": 22
          }
      },
      {
          "time": 1587123300000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9023,
              "relative humidity": 34.6,
              "temperature": 23
          }
      },
      {
          "time": 1587123660000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9021,
              "relative humidity": 55,
              "temperature": 17.9
          }
      },
      {
          "time": 1587124020000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 3560,
              "relative humidity": 71,
              "temperature": 17.9
          }
      },
      {
          "time": 1587124380000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7901,
              "relative humidity": 44.4,
              "temperature": 17.9
          }
      },
      {
          "time": 1587124740000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13045,
              "relative humidity": 60,
              "temperature": 14.6
          }
      },
      {
          "time": 1587125100000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7901,
              "relative humidity": 55,
              "temperature": 18.4
          }
      },
      {
          "time": 1587125460000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8892,
              "relative humidity": 62,
              "temperature": 12.2
          }
      },
      {
          "time": 1587125820000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9023,
              "relative humidity": 50,
              "temperature": 21
          }
      },
      {
          "time": 1587126180000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8892,
              "relative humidity": 36.7,
              "temperature": 12
          }
      },
      {
          "time": 1587126540000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8111,
              "relative humidity": 34.6,
              "temperature": 14
          }
      },
      {
          "time": 1587126900000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5698,
              "relative humidity": 56.3,
              "temperature": 21
          }
      },
      {
          "time": 1587127260000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 10003,
              "relative humidity": 59,
              "temperature": 17.4
          }
      },
      {
          "time": 1587127620000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8111,
              "relative humidity": 60,
              "temperature": 12
          }
      },
      {
          "time": 1587127980000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7321,
              "relative humidity": 49,
              "temperature": 18.9
          }
      },
      {
          "time": 1587128340000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7788,
              "relative humidity": 35,
              "temperature": 10.2
          }
      },
      {
          "time": 1587128700000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8766,
              "relative humidity": 59,
              "temperature": 22
          }
      },
      {
          "time": 1587129060000,
          "sensorId": "uuid0130",
          "data": {
              "relative humidity": 34.6,
              "temperature": 21
          }
      },
      {
          "time": 1587129420000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7788,
              "relative humidity": 48.5,
              "temperature": 17.9
          }
      },
      {
          "time": 1587129780000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9801,
              "relative humidity": 71,
              "temperature": 12.2
          }
      },
      {
          "time": 1587130140000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5562,
              "relative humidity": 71,
              "temperature": 18.4
          }
      },
      {
          "time": 1587130500000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5562,
              "relative humidity": 59,
              "temperature": 18.4
          }
      },
      {
          "time": 1587130860000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 3560,
              "relative humidity": 64,
              "temperature": 18.4
          }
      },
      {
          "time": 1587131220000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7788,
              "relative humidity": 64,
              "temperature": 17.9
          }
      },
      {
          "time": 1587131580000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13562,
              "relative humidity": 64,
              "temperature": 12
          }
      },
      {
          "time": 1587131940000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 10899,
              "relative humidity": 38,
              "temperature": 17.5
          }
      },
      {
          "time": 1587132300000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13045,
              "relative humidity": 55,
              "temperature": 17.9
          }
      },
      {
          "time": 1587132660000,
          "sensorId": "uuid0130",
          "data": {
              "relative humidity": 51,
              "temperature": 14.6
          }
      },
      {
          "time": 1587133020000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5698,
              "relative humidity": 59,
              "temperature": 18.4
          }
      },
      {
          "time": 1587133380000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 12003,
              "relative humidity": 55,
              "temperature": 17.4
          }
      },
      {
          "time": 1587133740000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9023,
              "relative humidity": 62,
              "temperature": 18.9
          }
      },
      {
          "time": 1587134100000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 3560,
              "relative humidity": 50,
              "temperature": 10.3
          }
      },
      {
          "time": 1587134460000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 12556,
              "relative humidity": 55,
              "temperature": 15
          }
      },
      {
          "time": 1587134820000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8111,
              "relative humidity": 60,
              "temperature": 18.4
          }
      },
      {
          "time": 1587135180000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 12310,
              "relative humidity": 48.5,
              "temperature": 12
          }
      },
      {
          "time": 1587135540000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9023,
              "relative humidity": 62,
              "temperature": 18.4
          }
      },
      {
          "time": 1587135900000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13003,
              "relative humidity": 59,
              "temperature": 17.5
          }
      },
      {
          "time": 1587136260000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 12310,
              "relative humidity": 51,
              "temperature": 14
          }
      },
      {
          "time": 1587136620000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 10553,
              "relative humidity": 34.6,
              "temperature": 22
          }
      },
      {
          "time": 1587136980000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9801,
              "relative humidity": 62,
              "temperature": 21
          }
      },
      {
          "time": 1587137340000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 6602,
              "relative humidity": 35,
              "temperature": 11
          }
      },
      {
          "time": 1587137700000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8766,
              "relative humidity": 55,
              "temperature": 17.5
          }
      },
      {
          "time": 1587138060000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8111,
              "relative humidity": 59,
              "temperature": 23
          }
      },
      {
          "time": 1587138420000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5698,
              "relative humidity": 59,
              "temperature": 10.2
          }
      },
      {
          "time": 1587138780000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8766,
              "relative humidity": 35,
              "temperature": 18.9
          }
      },
      {
          "time": 1587139140000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 6602,
              "relative humidity": 62,
              "temperature": 11
          }
      },
      {
          "time": 1587139500000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13003
          }
      },
      {
          "time": 1587139860000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13003,
              "relative humidity": 50
          }
      },
      {
          "time": 1587140220000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 10003,
              "relative humidity": 48.5,
              "temperature": 19.2
          }
      },
      {
          "time": 1587140580000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13003,
              "relative humidity": 55,
              "temperature": 15
          }
      },
      {
          "time": 1587140940000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9801,
              "relative humidity": 63.4,
              "temperature": 11
          }
      },
      {
          "time": 1587141300000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5698,
              "relative humidity": 71,
              "temperature": 18.4
          }
      },
      {
          "time": 1587141660000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7713,
              "relative humidity": 63.4,
              "temperature": 12.2
          }
      },
      {
          "time": 1587142020000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 12556,
              "relative humidity": 48,
              "temperature": 11
          }
      },
      {
          "time": 1587142380000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5698,
              "relative humidity": 59,
              "temperature": 16.3
          }
      },
      {
          "time": 1587142740000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13562,
              "relative humidity": 44,
              "temperature": 10.5
          }
      },
      {
          "time": 1587143100000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5413,
              "relative humidity": 56.3,
              "temperature": 8.3
          }
      },
      {
          "time": 1587143460000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 4502,
              "relative humidity": 53.8,
              "temperature": 7.2
          }
      },
      {
          "time": 1587143820000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 1222,
              "relative humidity": 59,
              "temperature": 9.2
          }
      },
      {
          "time": 1587144180000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5090,
              "relative humidity": 50,
              "temperature": 9.2
          }
      },
      {
          "time": 1587144540000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 2266,
              "relative humidity": 48,
              "temperature": 9.2
          }
      },
      {
          "time": 1587144900000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 2799,
              "relative humidity": 48.5,
              "temperature": 9.1
          }
      },
      {
          "time": 1587145260000,
          "sensorId": "uuid0130",
          "data": {
              "relative humidity": 53,
              "temperature": 8.3
          }
      },
      {
          "time": 1587145620000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 1020,
              "relative humidity": 51
          }
      },
      {
          "time": 1587145980000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 1004,
              "relative humidity": 59,
              "temperature": 8.5
          }
      },
      {
          "time": 1587146340000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5542,
              "relative humidity": 46,
              "temperature": 6.3
          }
      },
      {
          "time": 1587146700000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 2799,
              "temperature": 8.1
          }
      },
      {
          "time": 1587147060000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 3123,
              "relative humidity": 48.5,
              "temperature": 7.2
          }
      },
      {
          "time": 1587147420000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 1113,
              "relative humidity": 59,
              "temperature": 9.1
          }
      },
      {
          "time": 1587147780000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 3334,
              "relative humidity": 44
          }
      },
      {
          "time": 1587148140000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 4216,
              "relative humidity": 62
          }
      },
      {
          "time": 1587148500000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 1004,
              "relative humidity": 59,
              "temperature": 9.9
          }
      },
      {
          "time": 1587148860000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 2799,
              "relative humidity": 48.5,
              "temperature": 7.5
          }
      },
      {
          "time": 1587149220000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 4432,
              "relative humidity": 48.5,
              "temperature": 8.3
          }
      },
      {
          "time": 1587149580000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 890,
              "relative humidity": 48,
              "temperature": 8.1
          }
      },
      {
          "time": 1587149940000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5090,
              "relative humidity": 48.5,
              "temperature": 8.5
          }
      },
      {
          "time": 1587150300000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 64,
              "temperature": 6.2
          }
      },
      {
          "time": 1587150660000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 53.8,
              "temperature": 3
          }
      },
      {
          "time": 1587151020000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 36.7,
              "temperature": 6.8
          }
      },
      {
          "time": 1587151380000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 60,
              "temperature": 6.8
          }
      },
      {
          "time": 1587151740000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 36.7,
              "temperature": 4.2
          }
      },
      {
          "time": 1587152100000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 53.8,
              "temperature": 6.2
          }
      },
      {
          "time": 1587152460000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 64,
              "temperature": 8.5
          }
      },
      {
          "time": 1587152820000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 38,
              "temperature": 3.4
          }
      },
      {
          "time": 1587153180000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 36.7,
              "temperature": 4.2
          }
      },
      {
          "time": 1587153540000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 62,
              "temperature": 7.1
          }
      },
      {
          "time": 1587153900000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 56.3,
              "temperature": 3.4
          }
      },
      {
          "time": 1587154260000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 62,
              "temperature": 8.5
          }
      },
      {
          "time": 1587154620000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 38,
              "temperature": 7.1
          }
      },
      {
          "time": 1587154980000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 64,
              "temperature": 8.9
          }
      },
      {
          "time": 1587155340000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 62,
              "temperature": 6.8
          }
      },
      {
          "time": 1587155700000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 59,
              "temperature": 4
          }
      },
      {
          "time": 1587156060000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 35,
              "temperature": 3.4
          }
      },
      {
          "time": 1587156420000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 59,
              "temperature": 5.7
          }
      },
      {
          "time": 1587156780000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 64,
              "temperature": 6.8
          }
      },
      {
          "time": 1587157140000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 59,
              "temperature": 5.7
          }
      },
      {
          "time": 1587157500000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 56.3,
              "temperature": 5.7
          }
      },
      {
          "time": 1587157860000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 46,
              "temperature": 5.5
          }
      },
      {
          "time": 1587158220000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 53.8,
              "temperature": 3.4
          }
      },
      {
          "time": 1587158580000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 44,
              "temperature": 3
          }
      },
      {
          "time": 1587158940000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 49,
              "temperature": 4.2
          }
      },
      {
          "time": 1587159300000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 59,
              "temperature": 4
          }
      },
      {
          "time": 1587159660000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 56.3,
              "temperature": 6.8
          }
      },
      {
          "time": 1587160020000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 64,
              "temperature": 3.4
          }
      },
      {
          "time": 1587160380000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 71,
              "temperature": 8.5
          }
      },
      {
          "time": 1587160740000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 62,
              "temperature": 4.2
          }
      },
      {
          "time": 1587161100000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 46
          }
      },
      {
          "time": 1587161460000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 55,
              "temperature": 3
          }
      },
      {
          "time": 1587161820000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 34.6,
              "temperature": 4.2
          }
      },
      {
          "time": 1587162180000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 56.3,
              "temperature": 3
          }
      },
      {
          "time": 1587162540000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 56.3,
              "temperature": 2.3
          }
      },
      {
          "time": 1587162900000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0
          }
      },
      {
          "time": 1587163260000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 44.4,
              "temperature": 6.8
          }
      },
      {
          "time": 1587163620000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 48.5,
              "temperature": 2.3
          }
      },
      {
          "time": 1587163980000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 46,
              "temperature": 4.2
          }
      },
      {
          "time": 1587164340000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 44.4,
              "temperature": 5.7
          }
      },
      {
          "time": 1587164700000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 34.6,
              "temperature": 4.2
          }
      },
      {
          "time": 1587165060000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 62,
              "temperature": 6
          }
      },
      {
          "time": 1587165420000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 55,
              "temperature": 4.2
          }
      },
      {
          "time": 1587165780000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 38,
              "temperature": 7.1
          }
      },
      {
          "time": 1587166140000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 55,
              "temperature": 3.4
          }
      },
      {
          "time": 1587166500000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 62,
              "temperature": 5.7
          }
      },
      {
          "time": 1587166860000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 44,
              "temperature": 6
          }
      },
      {
          "time": 1587167220000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 64,
              "temperature": 8.5
          }
      },
      {
          "time": 1587167580000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 35,
              "temperature": 2.3
          }
      },
      {
          "time": 1587167940000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 55,
              "temperature": 8.5
          }
      },
      {
          "time": 1587168300000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 64,
              "temperature": 5.5
          }
      },
      {
          "time": 1587168660000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 51,
              "temperature": 4
          }
      },
      {
          "time": 1587169020000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 62,
              "temperature": 4
          }
      },
      {
          "time": 1587169380000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 59,
              "temperature": 5.5
          }
      },
      {
          "time": 1587169740000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 44,
              "temperature": 8.5
          }
      },
      {
          "time": 1587170100000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 44.4
          }
      },
      {
          "time": 1587170460000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 59,
              "temperature": 6.2
          }
      },
      {
          "time": 1587170820000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "temperature": 6.8
          }
      },
      {
          "time": 1587171180000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 34.6,
              "temperature": 4.2
          }
      },
      {
          "time": 1587171540000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 59,
              "temperature": 6
          }
      },
      {
          "time": 1587171900000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 36.7
          }
      },
      {
          "time": 1587172260000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 55,
              "temperature": 4.2
          }
      },
      {
          "time": 1587172620000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 62,
              "temperature": 4
          }
      },
      {
          "time": 1587172980000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 62,
              "temperature": 2.3
          }
      },
      {
          "time": 1587173340000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 51
          }
      },
      {
          "time": 1587173700000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 59
          }
      },
      {
          "time": 1587174060000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 59,
              "temperature": 2.3
          }
      },
      {
          "time": 1587174420000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 34.6,
              "temperature": 3.4
          }
      },
      {
          "time": 1587174780000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 53.8,
              "temperature": 2.3
          }
      },
      {
          "time": 1587175140000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 64,
              "temperature": 3.4
          }
      },
      {
          "time": 1587175500000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 62,
              "temperature": 7.1
          }
      },
      {
          "time": 1587175860000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 44.4,
              "temperature": 6
          }
      },
      {
          "time": 1587176220000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 59,
              "temperature": 6.2
          }
      },
      {
          "time": 1587176580000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 62,
              "temperature": 3.4
          }
      },
      {
          "time": 1587176940000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 38
          }
      },
      {
          "time": 1587177300000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 48
          }
      },
      {
          "time": 1587177660000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 44,
              "temperature": 5.5
          }
      },
      {
          "time": 1587178020000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 53
          }
      },
      {
          "time": 1587178380000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 63.4,
              "temperature": 8.5
          }
      },
      {
          "time": 1587178740000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 59,
              "temperature": 8.5
          }
      },
      {
          "time": 1587179100000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 2094,
              "relative humidity": 36.7,
              "temperature": 6.4
          }
      },
      {
          "time": 1587179460000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 4502,
              "temperature": 9.9
          }
      },
      {
          "time": 1587179820000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 3334,
              "relative humidity": 50,
              "temperature": 6.3
          }
      },
      {
          "time": 1587180180000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 1004,
              "relative humidity": 56.3
          }
      },
      {
          "time": 1587180540000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 3821,
              "relative humidity": 60,
              "temperature": 9.9
          }
      },
      {
          "time": 1587180900000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 4216,
              "relative humidity": 55,
              "temperature": 3.6
          }
      },
      {
          "time": 1587181260000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 4502,
              "relative humidity": 62,
              "temperature": 6.4
          }
      },
      {
          "time": 1587181620000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 3122,
              "relative humidity": 60,
              "temperature": 8.5
          }
      },
      {
          "time": 1587181980000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5542,
              "temperature": 7.2
          }
      },
      {
          "time": 1587182340000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 2878,
              "relative humidity": 34.6,
              "temperature": 9.9
          }
      },
      {
          "time": 1587182700000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 2094,
              "relative humidity": 48,
              "temperature": 9.9
          }
      },
      {
          "time": 1587183060000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 3123,
              "relative humidity": 48,
              "temperature": 8.5
          }
      },
      {
          "time": 1587183420000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 890,
              "relative humidity": 63.4
          }
      },
      {
          "time": 1587183780000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 1113,
              "relative humidity": 35,
              "temperature": 7.5
          }
      },
      {
          "time": 1587184140000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 2094,
              "relative humidity": 50,
              "temperature": 7.2
          }
      },
      {
          "time": 1587184500000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 1222,
              "relative humidity": 59,
              "temperature": 6.4
          }
      },
      {
          "time": 1587184860000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 890,
              "relative humidity": 62,
              "temperature": 7.2
          }
      },
      {
          "time": 1587185220000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 3821,
              "relative humidity": 34.6,
              "temperature": 3.6
          }
      },
      {
          "time": 1587185580000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 4502,
              "relative humidity": 53.8,
              "temperature": 7.5
          }
      },
      {
          "time": 1587185940000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 2266,
              "relative humidity": 55,
              "temperature": 8.3
          }
      },
      {
          "time": 1587186300000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5090,
              "relative humidity": 44,
              "temperature": 8.3
          }
      },
      {
          "time": 1587186660000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 3821,
              "relative humidity": 34.6,
              "temperature": 6.3
          }
      },
      {
          "time": 1587187020000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 3123,
              "relative humidity": 48.5,
              "temperature": 9.9
          }
      },
      {
          "time": 1587187380000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 3123,
              "relative humidity": 59,
              "temperature": 9.1
          }
      },
      {
          "time": 1587187740000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 4502,
              "relative humidity": 59,
              "temperature": 8.1
          }
      },
      {
          "time": 1587188100000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 2094,
              "relative humidity": 55,
              "temperature": 6.3
          }
      },
      {
          "time": 1587188460000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 3334,
              "relative humidity": 53.8,
              "temperature": 8.3
          }
      },
      {
          "time": 1587188820000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 3122,
              "relative humidity": 62,
              "temperature": 8.3
          }
      },
      {
          "time": 1587189180000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 1113,
              "relative humidity": 35,
              "temperature": 3.6
          }
      },
      {
          "time": 1587189540000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 1987,
              "relative humidity": 38,
              "temperature": 9.2
          }
      },
      {
          "time": 1587189900000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7788,
              "relative humidity": 48.5,
              "temperature": 10.5
          }
      },
      {
          "time": 1587190260000,
          "sensorId": "uuid0130",
          "data": {
              "relative humidity": 71,
              "temperature": 16.3
          }
      },
      {
          "time": 1587190620000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9023,
              "relative humidity": 38,
              "temperature": 19.4
          }
      },
      {
          "time": 1587190980000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 3560,
              "temperature": 11
          }
      },
      {
          "time": 1587191340000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8766,
              "relative humidity": 35,
              "temperature": 10.3
          }
      },
      {
          "time": 1587191700000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5562,
              "relative humidity": 44.4,
              "temperature": 14
          }
      },
      {
          "time": 1587192060000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 10553,
              "relative humidity": 63.4,
              "temperature": 12
          }
      },
      {
          "time": 1587192420000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13562,
              "relative humidity": 35,
              "temperature": 12.2
          }
      },
      {
          "time": 1587192780000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13003,
              "relative humidity": 62,
              "temperature": 10.2
          }
      },
      {
          "time": 1587193140000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13562,
              "relative humidity": 51,
              "temperature": 21
          }
      },
      {
          "time": 1587193500000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 4231,
              "relative humidity": 63.4,
              "temperature": 18.9
          }
      },
      {
          "time": 1587193860000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8892,
              "relative humidity": 63.4,
              "temperature": 19.4
          }
      },
      {
          "time": 1587194220000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 4231,
              "relative humidity": 49,
              "temperature": 21
          }
      },
      {
          "time": 1587194580000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 12310,
              "relative humidity": 71,
              "temperature": 17.4
          }
      },
      {
          "time": 1587194940000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8111,
              "relative humidity": 56.3,
              "temperature": 17.5
          }
      },
      {
          "time": 1587195300000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8766,
              "relative humidity": 63.4,
              "temperature": 10.5
          }
      },
      {
          "time": 1587195660000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 10003,
              "relative humidity": 48.5,
              "temperature": 14
          }
      },
      {
          "time": 1587196020000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 12556,
              "relative humidity": 64,
              "temperature": 19.4
          }
      },
      {
          "time": 1587196380000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 10553,
              "relative humidity": 64,
              "temperature": 18.9
          }
      },
      {
          "time": 1587196740000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7321,
              "relative humidity": 53,
              "temperature": 10.3
          }
      },
      {
          "time": 1587197100000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13003,
              "relative humidity": 49,
              "temperature": 10.3
          }
      },
      {
          "time": 1587197460000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7321,
              "relative humidity": 53,
              "temperature": 10.2
          }
      },
      {
          "time": 1587197820000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 3560,
              "relative humidity": 55,
              "temperature": 17.9
          }
      },
      {
          "time": 1587198180000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7788,
              "relative humidity": 62,
              "temperature": 18.4
          }
      },
      {
          "time": 1587198540000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13045,
              "relative humidity": 49,
              "temperature": 19.2
          }
      },
      {
          "time": 1587198900000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9021,
              "relative humidity": 51,
              "temperature": 18.4
          }
      },
      {
          "time": 1587199260000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13562,
              "relative humidity": 46
          }
      },
      {
          "time": 1587199620000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8892,
              "relative humidity": 59,
              "temperature": 12.2
          }
      },
      {
          "time": 1587199980000,
          "sensorId": "uuid0130",
          "data": {
              "relative humidity": 59,
              "temperature": 16.3
          }
      },
      {
          "time": 1587200340000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 12003,
              "relative humidity": 44.4,
              "temperature": 18.4
          }
      },
      {
          "time": 1587200700000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8111,
              "relative humidity": 60,
              "temperature": 12
          }
      },
      {
          "time": 1587201060000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 4231,
              "relative humidity": 53,
              "temperature": 19.2
          }
      },
      {
          "time": 1587201420000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8111,
              "relative humidity": 51,
              "temperature": 19.4
          }
      },
      {
          "time": 1587201780000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 10553,
              "relative humidity": 55,
              "temperature": 23
          }
      },
      {
          "time": 1587202140000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7713,
              "relative humidity": 36.7,
              "temperature": 14.6
          }
      },
      {
          "time": 1587202500000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8111,
              "relative humidity": 48,
              "temperature": 15
          }
      },
      {
          "time": 1587202860000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 10003,
              "relative humidity": 53.8
          }
      },
      {
          "time": 1587203220000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9902,
              "relative humidity": 46,
              "temperature": 14
          }
      },
      {
          "time": 1587203580000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 10003,
              "relative humidity": 63.4,
              "temperature": 16.3
          }
      },
      {
          "time": 1587203940000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 10899,
              "relative humidity": 36.7,
              "temperature": 10.3
          }
      },
      {
          "time": 1587204300000,
          "sensorId": "uuid0130",
          "data": {
              "relative humidity": 51,
              "temperature": 17.4
          }
      },
      {
          "time": 1587204660000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13045,
              "relative humidity": 59,
              "temperature": 23
          }
      },
      {
          "time": 1587205020000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7901,
              "relative humidity": 62,
              "temperature": 16.3
          }
      },
      {
          "time": 1587205380000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7713,
              "relative humidity": 63.4,
              "temperature": 15
          }
      },
      {
          "time": 1587205740000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9902,
              "relative humidity": 64,
              "temperature": 12.2
          }
      },
      {
          "time": 1587206100000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13003,
              "relative humidity": 34.6,
              "temperature": 10.3
          }
      },
      {
          "time": 1587206460000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13045,
              "relative humidity": 35,
              "temperature": 17.9
          }
      },
      {
          "time": 1587206820000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8892,
              "relative humidity": 59
          }
      },
      {
          "time": 1587207180000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 12310,
              "relative humidity": 48,
              "temperature": 10.5
          }
      },
      {
          "time": 1587207540000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 4231,
              "relative humidity": 56.3,
              "temperature": 17.5
          }
      },
      {
          "time": 1587207900000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9023,
              "relative humidity": 48,
              "temperature": 10.5
          }
      },
      {
          "time": 1587208260000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 3560,
              "relative humidity": 53.8,
              "temperature": 17.9
          }
      },
      {
          "time": 1587208620000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8990
          }
      },
      {
          "time": 1587208980000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 10899,
              "relative humidity": 56.3,
              "temperature": 10.5
          }
      },
      {
          "time": 1587209340000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 12310,
              "relative humidity": 48,
              "temperature": 16.3
          }
      },
      {
          "time": 1587209700000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 12556,
              "relative humidity": 44,
              "temperature": 18.9
          }
      },
      {
          "time": 1587210060000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13003,
              "relative humidity": 38,
              "temperature": 10.5
          }
      },
      {
          "time": 1587210420000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8892,
              "relative humidity": 63.4,
              "temperature": 14.6
          }
      },
      {
          "time": 1587210780000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 6012,
              "relative humidity": 51,
              "temperature": 10.3
          }
      },
      {
          "time": 1587211140000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13562,
              "relative humidity": 64,
              "temperature": 14.6
          }
      },
      {
          "time": 1587211500000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 4231,
              "relative humidity": 44.4,
              "temperature": 12
          }
      },
      {
          "time": 1587211860000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8111,
              "relative humidity": 48,
              "temperature": 17.9
          }
      },
      {
          "time": 1587212220000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8111,
              "relative humidity": 34.6,
              "temperature": 21
          }
      },
      {
          "time": 1587212580000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 6012,
              "relative humidity": 60,
              "temperature": 10.5
          }
      },
      {
          "time": 1587212940000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5562,
              "relative humidity": 44.4,
              "temperature": 19.2
          }
      },
      {
          "time": 1587213300000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 12556,
              "relative humidity": 56.3,
              "temperature": 10.2
          }
      },
      {
          "time": 1587213660000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7321,
              "relative humidity": 53,
              "temperature": 23
          }
      },
      {
          "time": 1587214020000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 10003,
              "relative humidity": 62,
              "temperature": 21
          }
      },
      {
          "time": 1587214380000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9801,
              "relative humidity": 71,
              "temperature": 22
          }
      },
      {
          "time": 1587214740000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8111,
              "relative humidity": 50,
              "temperature": 10.3
          }
      },
      {
          "time": 1587215100000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7713,
              "relative humidity": 44,
              "temperature": 10.5
          }
      },
      {
          "time": 1587215460000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8766,
              "relative humidity": 62,
              "temperature": 19.4
          }
      },
      {
          "time": 1587215820000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 6012,
              "relative humidity": 55,
              "temperature": 14.6
          }
      },
      {
          "time": 1587216180000,
          "sensorId": "uuid0130",
          "data": {
              "relative humidity": 44,
              "temperature": 18.9
          }
      },
      {
          "time": 1587216540000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13045,
              "relative humidity": 53,
              "temperature": 18.4
          }
      },
      {
          "time": 1587216900000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 10003,
              "relative humidity": 62,
              "temperature": 19.4
          }
      },
      {
          "time": 1587217260000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5698,
              "relative humidity": 53,
              "temperature": 19.4
          }
      },
      {
          "time": 1587217620000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9021,
              "relative humidity": 53,
              "temperature": 18.9
          }
      },
      {
          "time": 1587217980000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8111,
              "relative humidity": 34.6,
              "temperature": 12.2
          }
      },
      {
          "time": 1587218340000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9902,
              "relative humidity": 59,
              "temperature": 14
          }
      },
      {
          "time": 1587218700000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7713,
              "relative humidity": 64,
              "temperature": 16.3
          }
      },
      {
          "time": 1587219060000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 12310,
              "relative humidity": 56.3,
              "temperature": 12.2
          }
      },
      {
          "time": 1587219420000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8111,
              "relative humidity": 59,
              "temperature": 18.9
          }
      },
      {
          "time": 1587219780000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9801,
              "relative humidity": 35,
              "temperature": 10.5
          }
      },
      {
          "time": 1587220140000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13045,
              "relative humidity": 36.7,
              "temperature": 22
          }
      },
      {
          "time": 1587220500000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9902,
              "relative humidity": 48,
              "temperature": 17.5
          }
      },
      {
          "time": 1587220860000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7901,
              "relative humidity": 49,
              "temperature": 22
          }
      },
      {
          "time": 1587221220000,
          "sensorId": "uuid0130",
          "data": {
              "relative humidity": 62
          }
      },
      {
          "time": 1587221580000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9023,
              "relative humidity": 53,
              "temperature": 18.4
          }
      },
      {
          "time": 1587221940000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5698,
              "relative humidity": 44,
              "temperature": 17.5
          }
      },
      {
          "time": 1587222300000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9902,
              "relative humidity": 62,
              "temperature": 10.5
          }
      },
      {
          "time": 1587222660000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9902,
              "relative humidity": 34.6,
              "temperature": 11
          }
      },
      {
          "time": 1587223020000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7901,
              "relative humidity": 53,
              "temperature": 11
          }
      },
      {
          "time": 1587223380000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7321,
              "relative humidity": 53,
              "temperature": 19.4
          }
      },
      {
          "time": 1587223740000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13003,
              "relative humidity": 55,
              "temperature": 15
          }
      },
      {
          "time": 1587224100000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7713,
              "relative humidity": 64,
              "temperature": 14.6
          }
      },
      {
          "time": 1587224460000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7713,
              "relative humidity": 59,
              "temperature": 21
          }
      },
      {
          "time": 1587224820000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9023,
              "relative humidity": 60,
              "temperature": 16.3
          }
      },
      {
          "time": 1587225180000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 12556,
              "relative humidity": 46,
              "temperature": 17.9
          }
      },
      {
          "time": 1587225540000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8990,
              "relative humidity": 50,
              "temperature": 11
          }
      },
      {
          "time": 1587225900000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5698,
              "relative humidity": 35,
              "temperature": 16.3
          }
      },
      {
          "time": 1587226260000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9902,
              "relative humidity": 59,
              "temperature": 14.6
          }
      },
      {
          "time": 1587226620000,
          "sensorId": "uuid0130",
          "data": {
              "relative humidity": 60,
              "temperature": 14
          }
      },
      {
          "time": 1587226980000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 12003,
              "relative humidity": 36.7,
              "temperature": 19.4
          }
      },
      {
          "time": 1587227340000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9023,
              "relative humidity": 71,
              "temperature": 10.3
          }
      },
      {
          "time": 1587227700000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 6602,
              "relative humidity": 60,
              "temperature": 21
          }
      },
      {
          "time": 1587228060000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8892,
              "relative humidity": 35,
              "temperature": 12.2
          }
      },
      {
          "time": 1587228420000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7788,
              "relative humidity": 36.7,
              "temperature": 10.3
          }
      },
      {
          "time": 1587228780000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5698,
              "relative humidity": 60,
              "temperature": 14
          }
      },
      {
          "time": 1587229140000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9902,
              "relative humidity": 44,
              "temperature": 12
          }
      },
      {
          "time": 1587229500000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 1222,
              "relative humidity": 38,
              "temperature": 9.1
          }
      },
      {
          "time": 1587229860000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 1222,
              "relative humidity": 53.8,
              "temperature": 7.2
          }
      },
      {
          "time": 1587230220000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5502,
              "relative humidity": 64,
              "temperature": 9.1
          }
      },
      {
          "time": 1587230580000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 1992,
              "relative humidity": 35
          }
      },
      {
          "time": 1587230940000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 4432,
              "relative humidity": 64
          }
      },
      {
          "time": 1587231300000,
          "sensorId": "uuid0130",
          "data": {
              "relative humidity": 71,
              "temperature": 9.1
          }
      },
      {
          "time": 1587231660000,
          "sensorId": "uuid0130",
          "data": {}
      },
      {
          "time": 1587232020000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5542,
              "relative humidity": 64,
              "temperature": 3.6
          }
      },
      {
          "time": 1587232380000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 672,
              "relative humidity": 62,
              "temperature": 3.6
          }
      },
      {
          "time": 1587232740000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 1004,
              "relative humidity": 35,
              "temperature": 3.6
          }
      },
      {
          "time": 1587233100000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 2227,
              "relative humidity": 55,
              "temperature": 8.3
          }
      },
      {
          "time": 1587233460000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 4432,
              "relative humidity": 44,
              "temperature": 9.9
          }
      },
      {
          "time": 1587233820000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5502,
              "relative humidity": 55
          }
      },
      {
          "time": 1587234180000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 1987,
              "relative humidity": 55,
              "temperature": 9.9
          }
      },
      {
          "time": 1587234540000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5413,
              "relative humidity": 55,
              "temperature": 9.2
          }
      },
      {
          "time": 1587234900000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 280,
              "relative humidity": 36.7,
              "temperature": 6.4
          }
      },
      {
          "time": 1587235260000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 2799,
              "temperature": 9.2
          }
      },
      {
          "time": 1587235620000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 1222,
              "relative humidity": 46,
              "temperature": 8.3
          }
      },
      {
          "time": 1587235980000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 280,
              "relative humidity": 62,
              "temperature": 8.3
          }
      },
      {
          "time": 1587236340000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 3123,
              "relative humidity": 44.4,
              "temperature": 3.6
          }
      },
      {
          "time": 1587236700000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 55,
              "temperature": 3.4
          }
      },
      {
          "time": 1587237060000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 55,
              "temperature": 4.2
          }
      },
      {
          "time": 1587237420000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 44,
              "temperature": 5.5
          }
      },
      {
          "time": 1587237780000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 35,
              "temperature": 4.2
          }
      },
      {
          "time": 1587238140000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 49,
              "temperature": 8.9
          }
      },
      {
          "time": 1587238500000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 63.4,
              "temperature": 3.4
          }
      },
      {
          "time": 1587238860000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 59,
              "temperature": 6
          }
      },
      {
          "time": 1587239220000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 46,
              "temperature": 8.5
          }
      },
      {
          "time": 1587239580000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 56.3,
              "temperature": 3.4
          }
      },
      {
          "time": 1587239940000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 63.4,
              "temperature": 4
          }
      },
      {
          "time": 1587240300000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 38,
              "temperature": 4.2
          }
      },
      {
          "time": 1587240660000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 44,
              "temperature": 3.4
          }
      },
      {
          "time": 1587241020000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 36.7,
              "temperature": 3
          }
      },
      {
          "time": 1587241380000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 34.6,
              "temperature": 3
          }
      },
      {
          "time": 1587241740000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "temperature": 5.7
          }
      },
      {
          "time": 1587242100000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 34.6,
              "temperature": 6.8
          }
      },
      {
          "time": 1587242460000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 44.4,
              "temperature": 3.4
          }
      },
      {
          "time": 1587242820000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 44.4,
              "temperature": 5.5
          }
      },
      {
          "time": 1587243180000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 46,
              "temperature": 4.2
          }
      },
      {
          "time": 1587243540000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 63.4,
              "temperature": 6.2
          }
      },
      {
          "time": 1587243900000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 48.5,
              "temperature": 3.4
          }
      },
      {
          "time": 1587244260000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 48.5,
              "temperature": 7.1
          }
      },
      {
          "time": 1587244620000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 53,
              "temperature": 4
          }
      },
      {
          "time": 1587244980000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 50,
              "temperature": 3.4
          }
      },
      {
          "time": 1587245340000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 62,
              "temperature": 8.9
          }
      },
      {
          "time": 1587245700000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 48,
              "temperature": 6.2
          }
      },
      {
          "time": 1587246060000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 55,
              "temperature": 4.2
          }
      },
      {
          "time": 1587246420000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 60,
              "temperature": 8.9
          }
      },
      {
          "time": 1587246780000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 48,
              "temperature": 2.3
          }
      },
      {
          "time": 1587247140000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 44,
              "temperature": 2.3
          }
      },
      {
          "time": 1587247500000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 51
          }
      },
      {
          "time": 1587247860000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 59,
              "temperature": 5.7
          }
      },
      {
          "time": 1587248220000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 50,
              "temperature": 7.1
          }
      },
      {
          "time": 1587248580000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 44,
              "temperature": 4.2
          }
      },
      {
          "time": 1587248940000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 62,
              "temperature": 6.8
          }
      },
      {
          "time": 1587249300000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 50,
              "temperature": 6.2
          }
      },
      {
          "time": 1587249660000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 34.6,
              "temperature": 3
          }
      },
      {
          "time": 1587250020000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 51
          }
      },
      {
          "time": 1587250380000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 59,
              "temperature": 4
          }
      },
      {
          "time": 1587250740000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 63.4,
              "temperature": 2.3
          }
      },
      {
          "time": 1587251100000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 44,
              "temperature": 7.1
          }
      },
      {
          "time": 1587251460000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 64,
              "temperature": 6.8
          }
      },
      {
          "time": 1587251820000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 44
          }
      },
      {
          "time": 1587252180000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 44.4,
              "temperature": 5.7
          }
      },
      {
          "time": 1587252540000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "temperature": 3
          }
      },
      {
          "time": 1587252900000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 50,
              "temperature": 5.5
          }
      },
      {
          "time": 1587253260000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 36.7,
              "temperature": 5.5
          }
      },
      {
          "time": 1587253620000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 48.5,
              "temperature": 2.3
          }
      },
      {
          "time": 1587253980000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 50,
              "temperature": 3.4
          }
      },
      {
          "time": 1587254340000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 71,
              "temperature": 3
          }
      },
      {
          "time": 1587254700000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 55,
              "temperature": 5.7
          }
      },
      {
          "time": 1587255060000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 48.5
          }
      },
      {
          "time": 1587255420000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 63.4,
              "temperature": 4
          }
      },
      {
          "time": 1587255780000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 59,
              "temperature": 6
          }
      },
      {
          "time": 1587256140000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "temperature": 4.2
          }
      },
      {
          "time": 1587256500000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 35
          }
      },
      {
          "time": 1587256860000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 34.6,
              "temperature": 8.9
          }
      },
      {
          "time": 1587257220000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 59,
              "temperature": 5.5
          }
      },
      {
          "time": 1587257580000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 55,
              "temperature": 5.5
          }
      },
      {
          "time": 1587257940000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 50,
              "temperature": 3.4
          }
      },
      {
          "time": 1587258300000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 36.7,
              "temperature": 4.2
          }
      },
      {
          "time": 1587258660000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 62,
              "temperature": 4.2
          }
      },
      {
          "time": 1587259020000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 63.4,
              "temperature": 6.2
          }
      },
      {
          "time": 1587259380000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 59,
              "temperature": 6.2
          }
      },
      {
          "time": 1587259740000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 59,
              "temperature": 3
          }
      },
      {
          "time": 1587260100000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 71,
              "temperature": 5.7
          }
      },
      {
          "time": 1587260460000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 38,
              "temperature": 6.8
          }
      },
      {
          "time": 1587260820000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 62,
              "temperature": 6
          }
      },
      {
          "time": 1587261180000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 44.4,
              "temperature": 4.2
          }
      },
      {
          "time": 1587261540000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 36.7,
              "temperature": 6.2
          }
      },
      {
          "time": 1587261900000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 44,
              "temperature": 5.5
          }
      },
      {
          "time": 1587262260000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 55,
              "temperature": 4
          }
      },
      {
          "time": 1587262620000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 55,
              "temperature": 3.4
          }
      },
      {
          "time": 1587262980000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 55,
              "temperature": 2.3
          }
      },
      {
          "time": 1587263340000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 59,
              "temperature": 8.9
          }
      },
      {
          "time": 1587263700000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 60,
              "temperature": 3
          }
      },
      {
          "time": 1587264060000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 46,
              "temperature": 8.9
          }
      },
      {
          "time": 1587264420000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 56.3,
              "temperature": 5.7
          }
      },
      {
          "time": 1587264780000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "temperature": 5.7
          }
      },
      {
          "time": 1587265140000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 44.4,
              "temperature": 4.2
          }
      },
      {
          "time": 1587265500000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 4432,
              "relative humidity": 60,
              "temperature": 6.3
          }
      },
      {
          "time": 1587265860000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5542,
              "relative humidity": 53
          }
      },
      {
          "time": 1587266220000,
          "sensorId": "uuid0130",
          "data": {
              "relative humidity": 49,
              "temperature": 6.4
          }
      },
      {
          "time": 1587266580000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 1987,
              "relative humidity": 53,
              "temperature": 8.5
          }
      },
      {
          "time": 1587266940000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 2799,
              "relative humidity": 51,
              "temperature": 9.9
          }
      },
      {
          "time": 1587267300000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 3123,
              "relative humidity": 49,
              "temperature": 6.4
          }
      },
      {
          "time": 1587267660000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 2094,
              "relative humidity": 55,
              "temperature": 3.6
          }
      },
      {
          "time": 1587268020000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 3821,
              "relative humidity": 44.4
          }
      },
      {
          "time": 1587268380000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 672,
              "relative humidity": 53,
              "temperature": 9.9
          }
      },
      {
          "time": 1587268740000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 2094,
              "relative humidity": 59,
              "temperature": 9.2
          }
      },
      {
          "time": 1587269100000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 672,
              "relative humidity": 64
          }
      },
      {
          "time": 1587269460000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 2266,
              "relative humidity": 63.4,
              "temperature": 9.2
          }
      },
      {
          "time": 1587269820000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5090,
              "relative humidity": 63.4,
              "temperature": 8.5
          }
      },
      {
          "time": 1587270180000,
          "sensorId": "uuid0130",
          "data": {
              "relative humidity": 62,
              "temperature": 8.1
          }
      },
      {
          "time": 1587270540000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 280,
              "relative humidity": 53.8,
              "temperature": 8.5
          }
      },
      {
          "time": 1587270900000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5090,
              "relative humidity": 71,
              "temperature": 9.2
          }
      },
      {
          "time": 1587271260000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 672,
              "relative humidity": 44,
              "temperature": 7.5
          }
      },
      {
          "time": 1587271620000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 2227,
              "relative humidity": 36.7,
              "temperature": 6.3
          }
      },
      {
          "time": 1587271980000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5090,
              "relative humidity": 55,
              "temperature": 3.6
          }
      },
      {
          "time": 1587272340000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 1987,
              "relative humidity": 50,
              "temperature": 3.6
          }
      },
      {
          "time": 1587272700000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5090,
              "relative humidity": 48.5,
              "temperature": 9.9
          }
      },
      {
          "time": 1587273060000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 4239,
              "relative humidity": 48.5,
              "temperature": 6.4
          }
      },
      {
          "time": 1587273420000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 2878,
              "relative humidity": 48.5,
              "temperature": 9.9
          }
      },
      {
          "time": 1587273780000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 1113,
              "relative humidity": 59,
              "temperature": 8.3
          }
      },
      {
          "time": 1587274140000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 569,
              "relative humidity": 64,
              "temperature": 8.5
          }
      },
      {
          "time": 1587274500000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 2878,
              "relative humidity": 55,
              "temperature": 9.9
          }
      },
      {
          "time": 1587274860000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 3821,
              "relative humidity": 46,
              "temperature": 6.4
          }
      },
      {
          "time": 1587275220000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5413,
              "relative humidity": 34.6,
              "temperature": 6.3
          }
      },
      {
          "time": 1587275580000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 2227,
              "relative humidity": 55
          }
      },
      {
          "time": 1587275940000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 280,
              "relative humidity": 62,
              "temperature": 8.3
          }
      },
      {
          "time": 1587276300000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7788,
              "relative humidity": 48,
              "temperature": 17.4
          }
      },
      {
          "time": 1587276660000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8111,
              "relative humidity": 48.5,
              "temperature": 17.5
          }
      },
      {
          "time": 1587277020000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5562,
              "relative humidity": 63.4,
              "temperature": 23
          }
      },
      {
          "time": 1587277380000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13003,
              "relative humidity": 55,
              "temperature": 18.9
          }
      },
      {
          "time": 1587277740000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 12556,
              "relative humidity": 56.3,
              "temperature": 16.3
          }
      },
      {
          "time": 1587278100000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7713,
              "relative humidity": 36.7,
              "temperature": 17.9
          }
      },
      {
          "time": 1587278460000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7321,
              "temperature": 23
          }
      },
      {
          "time": 1587278820000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 10899,
              "relative humidity": 53,
              "temperature": 12
          }
      },
      {
          "time": 1587279180000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7788,
              "relative humidity": 38,
              "temperature": 12.2
          }
      },
      {
          "time": 1587279540000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7788,
              "relative humidity": 71,
              "temperature": 17.4
          }
      },
      {
          "time": 1587279900000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 10553,
              "relative humidity": 46,
              "temperature": 18.4
          }
      },
      {
          "time": 1587280260000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13003,
              "relative humidity": 56.3,
              "temperature": 12
          }
      },
      {
          "time": 1587280620000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8111,
              "relative humidity": 55,
              "temperature": 12
          }
      },
      {
          "time": 1587280980000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7321,
              "relative humidity": 71,
              "temperature": 10.2
          }
      },
      {
          "time": 1587281340000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7901,
              "relative humidity": 46,
              "temperature": 21
          }
      },
      {
          "time": 1587281700000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8111,
              "relative humidity": 60,
              "temperature": 19.4
          }
      },
      {
          "time": 1587282060000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8892,
              "relative humidity": 36.7,
              "temperature": 23
          }
      },
      {
          "time": 1587282420000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 6602,
              "relative humidity": 38
          }
      },
      {
          "time": 1587282780000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7321,
              "relative humidity": 46,
              "temperature": 19.4
          }
      },
      {
          "time": 1587283140000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8111,
              "relative humidity": 44.4,
              "temperature": 17.9
          }
      },
      {
          "time": 1587283500000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 6602
          }
      },
      {
          "time": 1587283860000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8111,
              "relative humidity": 34.6,
              "temperature": 17.9
          }
      },
      {
          "time": 1587284220000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7713,
              "relative humidity": 48.5,
              "temperature": 21
          }
      },
      {
          "time": 1587284580000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 10899,
              "relative humidity": 60,
              "temperature": 19.2
          }
      },
      {
          "time": 1587284940000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13562,
              "relative humidity": 50,
              "temperature": 19.2
          }
      },
      {
          "time": 1587285300000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9023,
              "relative humidity": 53.8,
              "temperature": 17.5
          }
      },
      {
          "time": 1587285660000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 12556,
              "relative humidity": 55,
              "temperature": 12.2
          }
      },
      {
          "time": 1587286020000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7788,
              "temperature": 15
          }
      },
      {
          "time": 1587286380000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5698,
              "relative humidity": 60,
              "temperature": 17.4
          }
      },
      {
          "time": 1587286740000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 12556,
              "relative humidity": 64,
              "temperature": 14
          }
      },
      {
          "time": 1587287100000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9801,
              "relative humidity": 53,
              "temperature": 19.2
          }
      },
      {
          "time": 1587287460000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13003,
              "relative humidity": 55,
              "temperature": 10.2
          }
      },
      {
          "time": 1587287820000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 6012,
              "relative humidity": 48,
              "temperature": 17.5
          }
      },
      {
          "time": 1587288180000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 10553,
              "relative humidity": 63.4,
              "temperature": 23
          }
      },
      {
          "time": 1587288540000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 10003,
              "temperature": 11
          }
      },
      {
          "time": 1587288900000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 10003,
              "relative humidity": 63.4,
              "temperature": 11
          }
      },
      {
          "time": 1587289260000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9023,
              "relative humidity": 48.5,
              "temperature": 11
          }
      },
      {
          "time": 1587289620000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7321,
              "relative humidity": 55,
              "temperature": 12
          }
      },
      {
          "time": 1587289980000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 12310,
              "relative humidity": 55,
              "temperature": 11
          }
      },
      {
          "time": 1587290340000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7321,
              "relative humidity": 35,
              "temperature": 23
          }
      },
      {
          "time": 1587290700000,
          "sensorId": "uuid0130",
          "data": {
              "relative humidity": 62,
              "temperature": 11
          }
      },
      {
          "time": 1587291060000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 10003,
              "relative humidity": 71,
              "temperature": 23
          }
      },
      {
          "time": 1587291420000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9021,
              "relative humidity": 38,
              "temperature": 23
          }
      },
      {
          "time": 1587291780000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7788,
              "relative humidity": 62,
              "temperature": 18.4
          }
      },
      {
          "time": 1587292140000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9902,
              "relative humidity": 55,
              "temperature": 19.2
          }
      },
      {
          "time": 1587292500000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9021,
              "relative humidity": 44,
              "temperature": 18.9
          }
      },
      {
          "time": 1587292860000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 3560,
              "relative humidity": 51,
              "temperature": 16.3
          }
      },
      {
          "time": 1587293220000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13003,
              "relative humidity": 71,
              "temperature": 10.3
          }
      },
      {
          "time": 1587293580000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5698,
              "relative humidity": 55,
              "temperature": 10.3
          }
      },
      {
          "time": 1587293940000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9021,
              "relative humidity": 64,
              "temperature": 12
          }
      },
      {
          "time": 1587294300000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8766,
              "relative humidity": 48,
              "temperature": 15
          }
      },
      {
          "time": 1587294660000,
          "sensorId": "uuid0130",
          "data": {
              "relative humidity": 64,
              "temperature": 23
          }
      },
      {
          "time": 1587295020000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 12003,
              "relative humidity": 62,
              "temperature": 10.2
          }
      },
      {
          "time": 1587295380000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8111,
              "relative humidity": 48.5,
              "temperature": 15
          }
      },
      {
          "time": 1587295740000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 10899,
              "relative humidity": 53,
              "temperature": 12.2
          }
      },
      {
          "time": 1587296100000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5562,
              "relative humidity": 56.3,
              "temperature": 10.3
          }
      },
      {
          "time": 1587296460000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 6012,
              "relative humidity": 36.7,
              "temperature": 16.3
          }
      },
      {
          "time": 1587296820000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 6012,
              "relative humidity": 50,
              "temperature": 12.2
          }
      },
      {
          "time": 1587297180000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 12556,
              "relative humidity": 71,
              "temperature": 12.2
          }
      },
      {
          "time": 1587297540000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8111,
              "relative humidity": 62,
              "temperature": 11
          }
      },
      {
          "time": 1587297900000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9023,
              "relative humidity": 56.3,
              "temperature": 10.5
          }
      },
      {
          "time": 1587298260000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 12003,
              "relative humidity": 53,
              "temperature": 10.5
          }
      },
      {
          "time": 1587298620000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 10899,
              "relative humidity": 49,
              "temperature": 11
          }
      },
      {
          "time": 1587298980000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13045,
              "relative humidity": 46,
              "temperature": 12
          }
      },
      {
          "time": 1587299340000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7321,
              "relative humidity": 55,
              "temperature": 21
          }
      },
      {
          "time": 1587299700000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 3560,
              "relative humidity": 51,
              "temperature": 10.3
          }
      },
      {
          "time": 1587300060000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9801,
              "relative humidity": 53
          }
      },
      {
          "time": 1587300420000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 12003,
              "relative humidity": 55,
              "temperature": 17.5
          }
      },
      {
          "time": 1587300780000,
          "sensorId": "uuid0130",
          "data": {
              "relative humidity": 35,
              "temperature": 15
          }
      },
      {
          "time": 1587301140000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 6602,
              "relative humidity": 36.7,
              "temperature": 21
          }
      },
      {
          "time": 1587301500000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 6012,
              "relative humidity": 55,
              "temperature": 18.4
          }
      },
      {
          "time": 1587301860000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7321,
              "relative humidity": 55,
              "temperature": 17.5
          }
      },
      {
          "time": 1587302220000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 10553,
              "relative humidity": 44.4,
              "temperature": 15
          }
      },
      {
          "time": 1587302580000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13045,
              "relative humidity": 48.5,
              "temperature": 19.4
          }
      },
      {
          "time": 1587302940000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7901,
              "relative humidity": 34.6,
              "temperature": 15
          }
      },
      {
          "time": 1587303300000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13562,
              "relative humidity": 51,
              "temperature": 11
          }
      },
      {
          "time": 1587303660000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9023,
              "relative humidity": 62,
              "temperature": 19.4
          }
      },
      {
          "time": 1587304020000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9902,
              "relative humidity": 62,
              "temperature": 21
          }
      },
      {
          "time": 1587304380000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 10899,
              "relative humidity": 38
          }
      },
      {
          "time": 1587304740000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8111,
              "relative humidity": 59,
              "temperature": 11
          }
      },
      {
          "time": 1587305100000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 10003,
              "relative humidity": 62,
              "temperature": 12
          }
      },
      {
          "time": 1587305460000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8892,
              "relative humidity": 59,
              "temperature": 17.9
          }
      },
      {
          "time": 1587305820000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9023,
              "relative humidity": 56.3,
              "temperature": 21
          }
      },
      {
          "time": 1587306180000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13045,
              "relative humidity": 59,
              "temperature": 17.9
          }
      },
      {
          "time": 1587306540000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 4231,
              "relative humidity": 44.4,
              "temperature": 12.2
          }
      },
      {
          "time": 1587306900000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7901,
              "relative humidity": 55,
              "temperature": 10.2
          }
      },
      {
          "time": 1587307260000,
          "sensorId": "uuid0130",
          "data": {
              "relative humidity": 64,
              "temperature": 16.3
          }
      },
      {
          "time": 1587307620000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9023,
              "relative humidity": 71,
              "temperature": 14.6
          }
      },
      {
          "time": 1587307980000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5562,
              "relative humidity": 60,
              "temperature": 10.5
          }
      },
      {
          "time": 1587308340000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9801,
              "relative humidity": 63.4,
              "temperature": 19.2
          }
      },
      {
          "time": 1587308700000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 3560,
              "relative humidity": 55,
              "temperature": 17.9
          }
      },
      {
          "time": 1587309060000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8111,
              "relative humidity": 64,
              "temperature": 10.2
          }
      },
      {
          "time": 1587309420000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 4231,
              "relative humidity": 55,
              "temperature": 17.9
          }
      },
      {
          "time": 1587309780000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 10899,
              "relative humidity": 62,
              "temperature": 18.9
          }
      },
      {
          "time": 1587310140000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9902,
              "temperature": 10.2
          }
      },
      {
          "time": 1587310500000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 12310,
              "relative humidity": 48.5,
              "temperature": 15
          }
      },
      {
          "time": 1587310860000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5698,
              "relative humidity": 59,
              "temperature": 15
          }
      },
      {
          "time": 1587311220000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8766,
              "relative humidity": 50,
              "temperature": 18.9
          }
      },
      {
          "time": 1587311580000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13562,
              "relative humidity": 46,
              "temperature": 10.3
          }
      },
      {
          "time": 1587311940000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 10553,
              "relative humidity": 51
          }
      },
      {
          "time": 1587312300000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8111,
              "relative humidity": 48,
              "temperature": 22
          }
      },
      {
          "time": 1587312660000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7788,
              "relative humidity": 50,
              "temperature": 17.9
          }
      },
      {
          "time": 1587313020000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 12310,
              "relative humidity": 63.4
          }
      },
      {
          "time": 1587313380000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9801,
              "relative humidity": 38,
              "temperature": 16.3
          }
      },
      {
          "time": 1587313740000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9023,
              "relative humidity": 46,
              "temperature": 21
          }
      },
      {
          "time": 1587314100000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9902,
              "relative humidity": 55,
              "temperature": 18.9
          }
      },
      {
          "time": 1587314460000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7321,
              "relative humidity": 44.4,
              "temperature": 21
          }
      },
      {
          "time": 1587314820000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7713,
              "relative humidity": 44.4,
              "temperature": 11
          }
      },
      {
          "time": 1587315180000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9021,
              "relative humidity": 36.7,
              "temperature": 17.9
          }
      },
      {
          "time": 1587315540000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9801,
              "relative humidity": 34.6,
              "temperature": 17.4
          }
      },
      {
          "time": 1587315900000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 672,
              "relative humidity": 55,
              "temperature": 9.1
          }
      },
      {
          "time": 1587316260000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 3122,
              "relative humidity": 49
          }
      },
      {
          "time": 1587316620000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 4432,
              "relative humidity": 64,
              "temperature": 8.5
          }
      },
      {
          "time": 1587316980000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 4432,
              "relative humidity": 44,
              "temperature": 7.5
          }
      },
      {
          "time": 1587317340000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 1222,
              "relative humidity": 53.8,
              "temperature": 7.2
          }
      },
      {
          "time": 1587317700000,
          "sensorId": "uuid0130",
          "data": {
              "relative humidity": 62
          }
      },
      {
          "time": 1587318060000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 1030,
              "relative humidity": 44,
              "temperature": 9.9
          }
      },
      {
          "time": 1587318420000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 3334,
              "relative humidity": 59,
              "temperature": 6.4
          }
      },
      {
          "time": 1587318780000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 1030,
              "relative humidity": 46,
              "temperature": 7.2
          }
      },
      {
          "time": 1587319140000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 569,
              "relative humidity": 64,
              "temperature": 9.2
          }
      },
      {
          "time": 1587319500000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 569,
              "relative humidity": 34.6,
              "temperature": 6.4
          }
      },
      {
          "time": 1587319860000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 1113,
              "relative humidity": 44.4,
              "temperature": 8.1
          }
      },
      {
          "time": 1587320220000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 4502,
              "relative humidity": 44,
              "temperature": 7.5
          }
      },
      {
          "time": 1587320580000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 1030,
              "relative humidity": 36.7,
              "temperature": 7.2
          }
      },
      {
          "time": 1587320940000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5502,
              "relative humidity": 38,
              "temperature": 8.1
          }
      },
      {
          "time": 1587321300000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 890,
              "relative humidity": 55,
              "temperature": 6.4
          }
      },
      {
          "time": 1587321660000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5413,
              "relative humidity": 44,
              "temperature": 9.1
          }
      },
      {
          "time": 1587322020000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 3122,
              "relative humidity": 56.3,
              "temperature": 6.4
          }
      },
      {
          "time": 1587322380000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 280,
              "relative humidity": 38,
              "temperature": 6.4
          }
      },
      {
          "time": 1587322740000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 1987,
              "relative humidity": 56.3
          }
      },
      {
          "time": 1587323100000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 51,
              "temperature": 8.9
          }
      },
      {
          "time": 1587323460000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 50
          }
      },
      {
          "time": 1587323820000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 35,
              "temperature": 7.1
          }
      },
      {
          "time": 1587324180000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 56.3,
              "temperature": 8.5
          }
      },
      {
          "time": 1587324540000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 44.4,
              "temperature": 8.9
          }
      },
      {
          "time": 1587324900000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 53.8,
              "temperature": 6.8
          }
      },
      {
          "time": 1587325260000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 53,
              "temperature": 3
          }
      },
      {
          "time": 1587325620000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 55,
              "temperature": 6
          }
      },
      {
          "time": 1587325980000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 49,
              "temperature": 6
          }
      },
      {
          "time": 1587326340000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 59,
              "temperature": 4
          }
      },
      {
          "time": 1587326700000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 44.4,
              "temperature": 4.2
          }
      },
      {
          "time": 1587327060000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 59,
              "temperature": 3.4
          }
      },
      {
          "time": 1587327420000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 62,
              "temperature": 3.4
          }
      },
      {
          "time": 1587327780000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 53,
              "temperature": 5.5
          }
      },
      {
          "time": 1587328140000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 63.4,
              "temperature": 4.2
          }
      },
      {
          "time": 1587328500000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 49
          }
      },
      {
          "time": 1587328860000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 34.6,
              "temperature": 3
          }
      },
      {
          "time": 1587329220000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 48.5,
              "temperature": 2.3
          }
      },
      {
          "time": 1587329580000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 62,
              "temperature": 6.8
          }
      },
      {
          "time": 1587329940000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 46,
              "temperature": 8.5
          }
      },
      {
          "time": 1587330300000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 64,
              "temperature": 6
          }
      },
      {
          "time": 1587330660000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 48,
              "temperature": 7.1
          }
      },
      {
          "time": 1587331020000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 63.4,
              "temperature": 4.2
          }
      },
      {
          "time": 1587331380000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "temperature": 5.7
          }
      },
      {
          "time": 1587331740000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 56.3,
              "temperature": 3
          }
      },
      {
          "time": 1587332100000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 51,
              "temperature": 6.8
          }
      },
      {
          "time": 1587332460000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "temperature": 8.5
          }
      },
      {
          "time": 1587332820000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 60,
              "temperature": 5.7
          }
      },
      {
          "time": 1587333180000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 35
          }
      },
      {
          "time": 1587333540000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 46,
              "temperature": 5.5
          }
      },
      {
          "time": 1587333900000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 50,
              "temperature": 8.5
          }
      },
      {
          "time": 1587334260000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 56.3,
              "temperature": 4
          }
      },
      {
          "time": 1587334620000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 56.3,
              "temperature": 3.4
          }
      },
      {
          "time": 1587334980000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 55,
              "temperature": 3.4
          }
      },
      {
          "time": 1587335340000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 53.8
          }
      },
      {
          "time": 1587335700000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 71,
              "temperature": 3.4
          }
      },
      {
          "time": 1587336060000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 56.3,
              "temperature": 8.5
          }
      },
      {
          "time": 1587336420000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 53,
              "temperature": 3
          }
      },
      {
          "time": 1587336780000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 48.5,
              "temperature": 4
          }
      },
      {
          "time": 1587337140000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 35,
              "temperature": 2.3
          }
      },
      {
          "time": 1587337500000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 60,
              "temperature": 8.9
          }
      },
      {
          "time": 1587337860000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 62,
              "temperature": 6
          }
      },
      {
          "time": 1587338220000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 36.7
          }
      },
      {
          "time": 1587338580000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 51,
              "temperature": 4
          }
      },
      {
          "time": 1587338940000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 50,
              "temperature": 4.2
          }
      },
      {
          "time": 1587339300000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 46,
              "temperature": 8.9
          }
      },
      {
          "time": 1587339660000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 48.5,
              "temperature": 3.4
          }
      },
      {
          "time": 1587340020000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 50,
              "temperature": 7.1
          }
      },
      {
          "time": 1587340380000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 36.7,
              "temperature": 4
          }
      },
      {
          "time": 1587340740000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 34.6,
              "temperature": 5.5
          }
      },
      {
          "time": 1587341100000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 71,
              "temperature": 2.3
          }
      },
      {
          "time": 1587341460000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 44.4,
              "temperature": 8.5
          }
      },
      {
          "time": 1587341820000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 49,
              "temperature": 7.1
          }
      },
      {
          "time": 1587342180000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 53,
              "temperature": 6.2
          }
      },
      {
          "time": 1587342540000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 55,
              "temperature": 8.9
          }
      },
      {
          "time": 1587342900000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 36.7,
              "temperature": 5.7
          }
      },
      {
          "time": 1587343260000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 48.5,
              "temperature": 2.3
          }
      },
      {
          "time": 1587343620000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 46,
              "temperature": 4.2
          }
      },
      {
          "time": 1587343980000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 62,
              "temperature": 4.2
          }
      },
      {
          "time": 1587344340000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 63.4,
              "temperature": 6.2
          }
      },
      {
          "time": 1587344700000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 71,
              "temperature": 3.4
          }
      },
      {
          "time": 1587345060000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 55,
              "temperature": 4.2
          }
      },
      {
          "time": 1587345420000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 48.5,
              "temperature": 4.2
          }
      },
      {
          "time": 1587345780000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 59,
              "temperature": 2.3
          }
      },
      {
          "time": 1587346140000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "temperature": 3
          }
      },
      {
          "time": 1587346500000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 59,
              "temperature": 3
          }
      },
      {
          "time": 1587346860000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 56.3
          }
      },
      {
          "time": 1587347220000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 59,
              "temperature": 2.3
          }
      },
      {
          "time": 1587347580000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "temperature": 4.2
          }
      },
      {
          "time": 1587347940000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 46,
              "temperature": 5.7
          }
      },
      {
          "time": 1587348300000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 56.3,
              "temperature": 6
          }
      },
      {
          "time": 1587348660000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 63.4,
              "temperature": 4
          }
      },
      {
          "time": 1587349020000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 48,
              "temperature": 6.8
          }
      },
      {
          "time": 1587349380000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 53.8
          }
      },
      {
          "time": 1587349740000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 62,
              "temperature": 5.7
          }
      },
      {
          "time": 1587350100000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 50,
              "temperature": 5.5
          }
      },
      {
          "time": 1587350460000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 53,
              "temperature": 6.8
          }
      },
      {
          "time": 1587350820000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 53,
              "temperature": 6.8
          }
      },
      {
          "time": 1587351180000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 51,
              "temperature": 4
          }
      },
      {
          "time": 1587351540000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 48.5,
              "temperature": 3
          }
      },
      {
          "time": 1587351900000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 890,
              "relative humidity": 62,
              "temperature": 9.1
          }
      },
      {
          "time": 1587352260000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 672,
              "relative humidity": 44,
              "temperature": 8.1
          }
      },
      {
          "time": 1587352620000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 3123,
              "relative humidity": 53,
              "temperature": 7.2
          }
      },
      {
          "time": 1587352980000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 2227,
              "relative humidity": 56.3
          }
      },
      {
          "time": 1587353340000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 2799,
              "relative humidity": 48.5
          }
      },
      {
          "time": 1587353700000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 2227,
              "relative humidity": 55,
              "temperature": 7.5
          }
      },
      {
          "time": 1587354060000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 890,
              "relative humidity": 46,
              "temperature": 7.2
          }
      },
      {
          "time": 1587354420000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 1113,
              "relative humidity": 34.6
          }
      },
      {
          "time": 1587354780000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 1020,
              "relative humidity": 34.6
          }
      },
      {
          "time": 1587355140000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 1020,
              "relative humidity": 53.8,
              "temperature": 8.5
          }
      },
      {
          "time": 1587355500000,
          "sensorId": "uuid0130",
          "data": {
              "relative humidity": 53.8,
              "temperature": 9.9
          }
      },
      {
          "time": 1587355860000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 2227,
              "relative humidity": 59,
              "temperature": 7.2
          }
      },
      {
          "time": 1587356220000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5502,
              "relative humidity": 62
          }
      },
      {
          "time": 1587356580000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 4432,
              "relative humidity": 48.5,
              "temperature": 7.2
          }
      },
      {
          "time": 1587356940000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 1004,
              "relative humidity": 48,
              "temperature": 9.1
          }
      },
      {
          "time": 1587357300000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 2094,
              "relative humidity": 44,
              "temperature": 8.3
          }
      },
      {
          "time": 1587357660000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5542,
              "relative humidity": 53,
              "temperature": 6.3
          }
      },
      {
          "time": 1587358020000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 1987,
              "relative humidity": 56.3,
              "temperature": 7.2
          }
      },
      {
          "time": 1587358380000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 1030,
              "relative humidity": 53.8,
              "temperature": 7.2
          }
      },
      {
          "time": 1587358740000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 4432,
              "relative humidity": 55,
              "temperature": 9.2
          }
      },
      {
          "time": 1587359100000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 1004,
              "relative humidity": 56.3,
              "temperature": 7.2
          }
      },
      {
          "time": 1587359460000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 280,
              "relative humidity": 55,
              "temperature": 9.9
          }
      },
      {
          "time": 1587359820000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 672,
              "relative humidity": 38,
              "temperature": 6.4
          }
      },
      {
          "time": 1587360180000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 1992,
              "relative humidity": 53.8,
              "temperature": 3.6
          }
      },
      {
          "time": 1587360540000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 2227,
              "relative humidity": 51,
              "temperature": 7.5
          }
      },
      {
          "time": 1587360900000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 3821,
              "relative humidity": 44,
              "temperature": 3.6
          }
      },
      {
          "time": 1587361260000,
          "sensorId": "uuid0130",
          "data": {
              "relative humidity": 63.4,
              "temperature": 7.5
          }
      },
      {
          "time": 1587361620000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5413,
              "relative humidity": 50,
              "temperature": 7.2
          }
      },
      {
          "time": 1587361980000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 569,
              "relative humidity": 56.3,
              "temperature": 9.1
          }
      },
      {
          "time": 1587362340000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 3122,
              "relative humidity": 51,
              "temperature": 9.1
          }
      },
      {
          "time": 1587362700000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7788,
              "relative humidity": 64
          }
      },
      {
          "time": 1587363060000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 3560,
              "relative humidity": 48,
              "temperature": 14.6
          }
      },
      {
          "time": 1587363420000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 10553,
              "relative humidity": 38,
              "temperature": 17.5
          }
      },
      {
          "time": 1587363780000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9023,
              "relative humidity": 64,
              "temperature": 17.9
          }
      },
      {
          "time": 1587364140000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8111,
              "relative humidity": 44,
              "temperature": 10.2
          }
      },
      {
          "time": 1587364500000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9801,
              "relative humidity": 59,
              "temperature": 12
          }
      },
      {
          "time": 1587364860000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 3560,
              "relative humidity": 44,
              "temperature": 14.6
          }
      },
      {
          "time": 1587365220000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9902,
              "temperature": 17.9
          }
      },
      {
          "time": 1587365580000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5698,
              "relative humidity": 51,
              "temperature": 10.2
          }
      },
      {
          "time": 1587365940000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 6012,
              "relative humidity": 50,
              "temperature": 10.2
          }
      },
      {
          "time": 1587366300000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8766,
              "relative humidity": 62,
              "temperature": 18.4
          }
      },
      {
          "time": 1587366660000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9023,
              "relative humidity": 62,
              "temperature": 15
          }
      },
      {
          "time": 1587367020000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13003,
              "relative humidity": 62,
              "temperature": 18.4
          }
      },
      {
          "time": 1587367380000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9801,
              "relative humidity": 44.4,
              "temperature": 22
          }
      },
      {
          "time": 1587367740000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9023,
              "relative humidity": 36.7,
              "temperature": 15
          }
      },
      {
          "time": 1587368100000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 3560,
              "relative humidity": 53.8,
              "temperature": 17.9
          }
      },
      {
          "time": 1587368460000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 12003,
              "relative humidity": 51,
              "temperature": 19.4
          }
      },
      {
          "time": 1587368820000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 12003,
              "relative humidity": 71,
              "temperature": 18.9
          }
      },
      {
          "time": 1587369180000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 4231,
              "relative humidity": 56.3,
              "temperature": 11
          }
      },
      {
          "time": 1587369540000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 10003,
              "relative humidity": 51,
              "temperature": 10.5
          }
      },
      {
          "time": 1587369900000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 12556,
              "relative humidity": 44,
              "temperature": 15
          }
      },
      {
          "time": 1587370260000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 12310,
              "relative humidity": 62,
              "temperature": 12.2
          }
      },
      {
          "time": 1587370620000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 12556,
              "relative humidity": 44.4,
              "temperature": 15
          }
      },
      {
          "time": 1587370980000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5698,
              "relative humidity": 64,
              "temperature": 17.5
          }
      },
      {
          "time": 1587371340000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9023,
              "relative humidity": 62,
              "temperature": 21
          }
      },
      {
          "time": 1587371700000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13562,
              "relative humidity": 62,
              "temperature": 15
          }
      },
      {
          "time": 1587372060000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7321,
              "relative humidity": 44,
              "temperature": 12
          }
      },
      {
          "time": 1587372420000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13045,
              "relative humidity": 35,
              "temperature": 10.3
          }
      },
      {
          "time": 1587372780000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13562,
              "relative humidity": 60,
              "temperature": 14.6
          }
      },
      {
          "time": 1587373140000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 12003,
              "relative humidity": 62,
              "temperature": 10.3
          }
      },
      {
          "time": 1587373500000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7788,
              "relative humidity": 51
          }
      },
      {
          "time": 1587373860000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 6602,
              "relative humidity": 35,
              "temperature": 10.5
          }
      },
      {
          "time": 1587374220000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9902,
              "relative humidity": 53.8,
              "temperature": 19.2
          }
      },
      {
          "time": 1587374580000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 10899,
              "relative humidity": 48.5,
              "temperature": 15
          }
      },
      {
          "time": 1587374940000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9801,
              "relative humidity": 49,
              "temperature": 18.9
          }
      },
      {
          "time": 1587375300000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7901,
              "relative humidity": 71,
              "temperature": 18.9
          }
      },
      {
          "time": 1587375660000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9021,
              "relative humidity": 36.7,
              "temperature": 21
          }
      },
      {
          "time": 1587376020000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8111,
              "relative humidity": 49,
              "temperature": 14.6
          }
      },
      {
          "time": 1587376380000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 4231,
              "relative humidity": 51,
              "temperature": 16.3
          }
      },
      {
          "time": 1587376740000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5562,
              "relative humidity": 71,
              "temperature": 17.9
          }
      },
      {
          "time": 1587377100000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 3560,
              "relative humidity": 34.6,
              "temperature": 23
          }
      },
      {
          "time": 1587377460000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 12003,
              "relative humidity": 55
          }
      },
      {
          "time": 1587377820000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8111,
              "temperature": 18.9
          }
      },
      {
          "time": 1587378180000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 4231,
              "relative humidity": 48,
              "temperature": 15
          }
      },
      {
          "time": 1587378540000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 10553,
              "relative humidity": 44.4,
              "temperature": 18.9
          }
      },
      {
          "time": 1587378900000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9801,
              "relative humidity": 59,
              "temperature": 19.4
          }
      },
      {
          "time": 1587379260000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 10003,
              "relative humidity": 38,
              "temperature": 14.6
          }
      },
      {
          "time": 1587379620000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9801,
              "relative humidity": 59,
              "temperature": 22
          }
      },
      {
          "time": 1587379980000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 10899,
              "relative humidity": 44,
              "temperature": 17.9
          }
      },
      {
          "time": 1587380340000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13045,
              "relative humidity": 59
          }
      },
      {
          "time": 1587380700000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 6602,
              "relative humidity": 56.3,
              "temperature": 12
          }
      },
      {
          "time": 1587381060000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 10553,
              "relative humidity": 53,
              "temperature": 11
          }
      },
      {
          "time": 1587381420000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8892,
              "relative humidity": 48.5,
              "temperature": 12
          }
      },
      {
          "time": 1587381780000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9023,
              "relative humidity": 44.4,
              "temperature": 18.4
          }
      },
      {
          "time": 1587382140000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 6602,
              "relative humidity": 62,
              "temperature": 14.6
          }
      },
      {
          "time": 1587382500000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8766,
              "relative humidity": 55,
              "temperature": 18.9
          }
      },
      {
          "time": 1587382860000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9902,
              "relative humidity": 34.6,
              "temperature": 19.2
          }
      },
      {
          "time": 1587383220000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9801,
              "relative humidity": 34.6,
              "temperature": 14.6
          }
      },
      {
          "time": 1587383580000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5698,
              "relative humidity": 51,
              "temperature": 10.5
          }
      },
      {
          "time": 1587383940000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8990,
              "relative humidity": 44.4,
              "temperature": 19.4
          }
      },
      {
          "time": 1587384300000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 6602,
              "temperature": 19.4
          }
      },
      {
          "time": 1587384660000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 12003,
              "relative humidity": 55,
              "temperature": 10.3
          }
      },
      {
          "time": 1587385020000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8111,
              "relative humidity": 55,
              "temperature": 17.5
          }
      },
      {
          "time": 1587385380000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 12310,
              "relative humidity": 56.3,
              "temperature": 10.2
          }
      },
      {
          "time": 1587385740000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9021,
              "relative humidity": 46,
              "temperature": 12
          }
      },
      {
          "time": 1587386100000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8990,
              "relative humidity": 49,
              "temperature": 11
          }
      },
      {
          "time": 1587386460000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9023,
              "relative humidity": 59,
              "temperature": 11
          }
      },
      {
          "time": 1587386820000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 4231,
              "relative humidity": 59,
              "temperature": 18.4
          }
      },
      {
          "time": 1587387180000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 12310,
              "relative humidity": 56.3,
              "temperature": 10.5
          }
      },
      {
          "time": 1587387540000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7321,
              "relative humidity": 71,
              "temperature": 16.3
          }
      },
      {
          "time": 1587387900000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13003,
              "relative humidity": 56.3
          }
      },
      {
          "time": 1587388260000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 3560,
              "relative humidity": 46,
              "temperature": 12
          }
      },
      {
          "time": 1587388620000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8892,
              "relative humidity": 49
          }
      },
      {
          "time": 1587388980000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 12310,
              "relative humidity": 46,
              "temperature": 19.2
          }
      },
      {
          "time": 1587389340000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 12003,
              "relative humidity": 36.7,
              "temperature": 11
          }
      },
      {
          "time": 1587389700000,
          "sensorId": "uuid0130",
          "data": {
              "relative humidity": 62,
              "temperature": 18.9
          }
      },
      {
          "time": 1587390060000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 10003,
              "relative humidity": 44,
              "temperature": 12.2
          }
      },
      {
          "time": 1587390420000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13003,
              "relative humidity": 50,
              "temperature": 22
          }
      },
      {
          "time": 1587390780000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8892,
              "relative humidity": 38,
              "temperature": 16.3
          }
      },
      {
          "time": 1587391140000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9021,
              "relative humidity": 64,
              "temperature": 19.2
          }
      },
      {
          "time": 1587391500000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13562,
              "relative humidity": 60,
              "temperature": 17.5
          }
      },
      {
          "time": 1587391860000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7321,
              "relative humidity": 46,
              "temperature": 12
          }
      },
      {
          "time": 1587392220000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 12310,
              "relative humidity": 35,
              "temperature": 17.5
          }
      },
      {
          "time": 1587392580000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 10899,
              "relative humidity": 71
          }
      },
      {
          "time": 1587392940000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 3560,
              "relative humidity": 35,
              "temperature": 22
          }
      },
      {
          "time": 1587393300000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 6012,
              "relative humidity": 56.3,
              "temperature": 19.2
          }
      },
      {
          "time": 1587393660000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8990,
              "relative humidity": 34.6,
              "temperature": 11
          }
      },
      {
          "time": 1587394020000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 12310,
              "relative humidity": 34.6,
              "temperature": 21
          }
      },
      {
          "time": 1587394380000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9021,
              "relative humidity": 48.5,
              "temperature": 19.4
          }
      },
      {
          "time": 1587394740000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7713,
              "relative humidity": 51,
              "temperature": 17.9
          }
      },
      {
          "time": 1587395100000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 10899,
              "relative humidity": 55,
              "temperature": 19.4
          }
      },
      {
          "time": 1587395460000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7321,
              "relative humidity": 48,
              "temperature": 15
          }
      },
      {
          "time": 1587395820000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 6602,
              "relative humidity": 35,
              "temperature": 14.6
          }
      },
      {
          "time": 1587396180000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9023,
              "temperature": 11
          }
      },
      {
          "time": 1587396540000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 10899,
              "relative humidity": 35,
              "temperature": 21
          }
      },
      {
          "time": 1587396900000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7901,
              "relative humidity": 59,
              "temperature": 12
          }
      },
      {
          "time": 1587397260000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9902,
              "relative humidity": 48,
              "temperature": 10.2
          }
      },
      {
          "time": 1587397620000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 12310,
              "relative humidity": 60
          }
      },
      {
          "time": 1587397980000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13003,
              "relative humidity": 49,
              "temperature": 19.4
          }
      },
      {
          "time": 1587398340000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 4231,
              "relative humidity": 51,
              "temperature": 10.3
          }
      },
      {
          "time": 1587398700000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13045,
              "temperature": 10.3
          }
      },
      {
          "time": 1587399060000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9023,
              "relative humidity": 62,
              "temperature": 22
          }
      },
      {
          "time": 1587399420000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8990,
              "relative humidity": 59,
              "temperature": 19.4
          }
      },
      {
          "time": 1587399780000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7788,
              "relative humidity": 36.7,
              "temperature": 17.4
          }
      },
      {
          "time": 1587400140000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5562,
              "relative humidity": 64,
              "temperature": 19.4
          }
      },
      {
          "time": 1587400500000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 12556,
              "relative humidity": 51,
              "temperature": 14
          }
      },
      {
          "time": 1587400860000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8892,
              "relative humidity": 60,
              "temperature": 22
          }
      },
      {
          "time": 1587401220000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9023,
              "relative humidity": 49
          }
      },
      {
          "time": 1587401580000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5562,
              "relative humidity": 48
          }
      },
      {
          "time": 1587401940000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13045,
              "relative humidity": 51,
              "temperature": 21
          }
      },
      {
          "time": 1587402300000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 3122,
              "relative humidity": 60,
              "temperature": 9.1
          }
      },
      {
          "time": 1587402660000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 2799,
              "relative humidity": 46,
              "temperature": 8.5
          }
      },
      {
          "time": 1587403020000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 3334,
              "relative humidity": 50,
              "temperature": 9.1
          }
      },
      {
          "time": 1587403380000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 4432,
              "temperature": 3.6
          }
      },
      {
          "time": 1587403740000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 1113,
              "relative humidity": 36.7,
              "temperature": 7.5
          }
      },
      {
          "time": 1587404100000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 1222,
              "relative humidity": 50,
              "temperature": 9.1
          }
      },
      {
          "time": 1587404460000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 4502,
              "relative humidity": 59,
              "temperature": 9.2
          }
      },
      {
          "time": 1587404820000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 4502,
              "temperature": 7.2
          }
      },
      {
          "time": 1587405180000,
          "sensorId": "uuid0130",
          "data": {
              "relative humidity": 34.6,
              "temperature": 6.4
          }
      },
      {
          "time": 1587405540000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 1987,
              "relative humidity": 53,
              "temperature": 3.6
          }
      },
      {
          "time": 1587405900000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 1004,
              "relative humidity": 44.4,
              "temperature": 9.2
          }
      },
      {
          "time": 1587406260000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 4239,
              "relative humidity": 64
          }
      },
      {
          "time": 1587406620000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 280,
              "relative humidity": 55,
              "temperature": 8.1
          }
      },
      {
          "time": 1587406980000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 2227,
              "relative humidity": 48.5,
              "temperature": 6.3
          }
      },
      {
          "time": 1587407340000,
          "sensorId": "uuid0130",
          "data": {
              "relative humidity": 53,
              "temperature": 8.3
          }
      },
      {
          "time": 1587407700000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 3821,
              "relative humidity": 59,
              "temperature": 8.3
          }
      },
      {
          "time": 1587408060000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 1992,
              "relative humidity": 34.6,
              "temperature": 6.4
          }
      },
      {
          "time": 1587408420000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 569,
              "relative humidity": 44,
              "temperature": 3.6
          }
      },
      {
          "time": 1587408780000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 2878,
              "relative humidity": 50,
              "temperature": 7.5
          }
      },
      {
          "time": 1587409140000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 672,
              "relative humidity": 50,
              "temperature": 9.9
          }
      },
      {
          "time": 1587409500000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 56.3
          }
      },
      {
          "time": 1587409860000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 50,
              "temperature": 4
          }
      },
      {
          "time": 1587410220000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 36.7,
              "temperature": 3
          }
      },
      {
          "time": 1587410580000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 46,
              "temperature": 4.2
          }
      },
      {
          "time": 1587410940000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 55,
              "temperature": 6.8
          }
      },
      {
          "time": 1587411300000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 63.4,
              "temperature": 5.7
          }
      },
      {
          "time": 1587411660000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 44,
              "temperature": 8.9
          }
      },
      {
          "time": 1587412020000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 50,
              "temperature": 4.2
          }
      },
      {
          "time": 1587412380000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 46,
              "temperature": 5.5
          }
      },
      {
          "time": 1587412740000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 56.3,
              "temperature": 4.2
          }
      },
      {
          "time": 1587413100000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 51,
              "temperature": 5.5
          }
      },
      {
          "time": 1587413460000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 38,
              "temperature": 4.2
          }
      },
      {
          "time": 1587413820000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 56.3,
              "temperature": 7.1
          }
      },
      {
          "time": 1587414180000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 48.5,
              "temperature": 7.1
          }
      },
      {
          "time": 1587414540000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 36.7,
              "temperature": 5.5
          }
      },
      {
          "time": 1587414900000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 71,
              "temperature": 5.5
          }
      },
      {
          "time": 1587415260000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 64,
              "temperature": 3.4
          }
      },
      {
          "time": 1587415620000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 59,
              "temperature": 4.2
          }
      },
      {
          "time": 1587415980000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 63.4,
              "temperature": 6
          }
      },
      {
          "time": 1587416340000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "temperature": 5.7
          }
      },
      {
          "time": 1587416700000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 36.7
          }
      },
      {
          "time": 1587417060000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 48,
              "temperature": 3
          }
      },
      {
          "time": 1587417420000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 46,
              "temperature": 7.1
          }
      },
      {
          "time": 1587417780000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 49,
              "temperature": 7.1
          }
      },
      {
          "time": 1587418140000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 60,
              "temperature": 6
          }
      },
      {
          "time": 1587418500000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 64,
              "temperature": 6.8
          }
      },
      {
          "time": 1587418860000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 60,
              "temperature": 8.5
          }
      },
      {
          "time": 1587419220000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 51,
              "temperature": 6
          }
      },
      {
          "time": 1587419580000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 71,
              "temperature": 5.5
          }
      },
      {
          "time": 1587419940000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 38,
              "temperature": 6.8
          }
      },
      {
          "time": 1587420300000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 50,
              "temperature": 5.5
          }
      },
      {
          "time": 1587420660000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0
          }
      },
      {
          "time": 1587421020000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 62,
              "temperature": 6.2
          }
      },
      {
          "time": 1587421380000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 62,
              "temperature": 4.2
          }
      },
      {
          "time": 1587421740000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 36.7,
              "temperature": 3.4
          }
      },
      {
          "time": 1587422100000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 44.4,
              "temperature": 3
          }
      },
      {
          "time": 1587422460000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 59,
              "temperature": 4
          }
      },
      {
          "time": 1587422820000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 35,
              "temperature": 3
          }
      },
      {
          "time": 1587423180000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 44.4,
              "temperature": 5.5
          }
      },
      {
          "time": 1587423540000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 59,
              "temperature": 4.2
          }
      },
      {
          "time": 1587423900000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 53.8,
              "temperature": 4
          }
      },
      {
          "time": 1587424260000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 34.6,
              "temperature": 6
          }
      },
      {
          "time": 1587424620000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 59,
              "temperature": 8.9
          }
      },
      {
          "time": 1587424980000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 44,
              "temperature": 6.2
          }
      },
      {
          "time": 1587425340000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 56.3,
              "temperature": 4
          }
      },
      {
          "time": 1587425700000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 48,
              "temperature": 3
          }
      },
      {
          "time": 1587426060000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 59,
              "temperature": 3
          }
      },
      {
          "time": 1587426420000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 50,
              "temperature": 8.9
          }
      },
      {
          "time": 1587426780000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 53,
              "temperature": 5.5
          }
      },
      {
          "time": 1587427140000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 36.7,
              "temperature": 7.1
          }
      },
      {
          "time": 1587427500000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 63.4,
              "temperature": 8.5
          }
      },
      {
          "time": 1587427860000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 62,
              "temperature": 4
          }
      },
      {
          "time": 1587428220000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 36.7,
              "temperature": 5.5
          }
      },
      {
          "time": 1587428580000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 53.8,
              "temperature": 4.2
          }
      },
      {
          "time": 1587428940000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 50,
              "temperature": 7.1
          }
      },
      {
          "time": 1587429300000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 46,
              "temperature": 4.2
          }
      },
      {
          "time": 1587429660000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 71,
              "temperature": 4.2
          }
      },
      {
          "time": 1587430020000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 53,
              "temperature": 4
          }
      },
      {
          "time": 1587430380000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 53,
              "temperature": 2.3
          }
      },
      {
          "time": 1587430740000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 64,
              "temperature": 8.9
          }
      },
      {
          "time": 1587431100000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 44.4,
              "temperature": 2.3
          }
      },
      {
          "time": 1587431460000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 44,
              "temperature": 5.7
          }
      },
      {
          "time": 1587431820000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 62
          }
      },
      {
          "time": 1587432180000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 62,
              "temperature": 4.2
          }
      },
      {
          "time": 1587432540000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 55,
              "temperature": 5.7
          }
      },
      {
          "time": 1587432900000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 71,
              "temperature": 5.5
          }
      },
      {
          "time": 1587433260000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 34.6,
              "temperature": 6.2
          }
      },
      {
          "time": 1587433620000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 64,
              "temperature": 5.7
          }
      },
      {
          "time": 1587433980000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 38,
              "temperature": 4
          }
      },
      {
          "time": 1587434340000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 56.3,
              "temperature": 3
          }
      },
      {
          "time": 1587434700000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 55,
              "temperature": 6.8
          }
      },
      {
          "time": 1587435060000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 34.6,
              "temperature": 3
          }
      },
      {
          "time": 1587435420000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 60,
              "temperature": 8.9
          }
      },
      {
          "time": 1587435780000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 59,
              "temperature": 7.1
          }
      },
      {
          "time": 1587436140000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 59,
              "temperature": 8.5
          }
      },
      {
          "time": 1587436500000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 55,
              "temperature": 2.3
          }
      },
      {
          "time": 1587436860000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 55,
              "temperature": 3
          }
      },
      {
          "time": 1587437220000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 56.3,
              "temperature": 7.1
          }
      },
      {
          "time": 1587437580000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 53.8,
              "temperature": 5.5
          }
      },
      {
          "time": 1587437940000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 36.7,
              "temperature": 3
          }
      },
      {
          "time": 1587438300000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 569,
              "relative humidity": 71,
              "temperature": 8.5
          }
      },
      {
          "time": 1587438660000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 1020,
              "relative humidity": 50,
              "temperature": 7.5
          }
      },
      {
          "time": 1587439020000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 2799,
              "relative humidity": 46,
              "temperature": 6.3
          }
      },
      {
          "time": 1587439380000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 1222,
              "relative humidity": 49,
              "temperature": 6.3
          }
      },
      {
          "time": 1587439740000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 2094,
              "relative humidity": 71,
              "temperature": 9.1
          }
      },
      {
          "time": 1587440100000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 4432,
              "relative humidity": 60,
              "temperature": 8.1
          }
      },
      {
          "time": 1587440460000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5542,
              "relative humidity": 63.4,
              "temperature": 3.6
          }
      },
      {
          "time": 1587440820000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 2878,
              "relative humidity": 62,
              "temperature": 7.2
          }
      },
      {
          "time": 1587441180000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 4432,
              "relative humidity": 71,
              "temperature": 9.1
          }
      },
      {
          "time": 1587441540000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5413,
              "relative humidity": 48,
              "temperature": 6.4
          }
      },
      {
          "time": 1587441900000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 3123,
              "relative humidity": 46,
              "temperature": 7.2
          }
      },
      {
          "time": 1587442260000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 2227,
              "relative humidity": 71,
              "temperature": 6.4
          }
      },
      {
          "time": 1587442620000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 4216,
              "relative humidity": 38,
              "temperature": 6.3
          }
      },
      {
          "time": 1587442980000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5090,
              "relative humidity": 59,
              "temperature": 7.2
          }
      },
      {
          "time": 1587443340000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 3123,
              "relative humidity": 59,
              "temperature": 9.2
          }
      },
      {
          "time": 1587443700000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 1222,
              "relative humidity": 62,
              "temperature": 7.2
          }
      },
      {
          "time": 1587444060000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 2227,
              "relative humidity": 55,
              "temperature": 8.5
          }
      },
      {
          "time": 1587444420000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 672,
              "relative humidity": 48,
              "temperature": 6.3
          }
      },
      {
          "time": 1587444780000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 1030,
              "relative humidity": 34.6,
              "temperature": 7.2
          }
      },
      {
          "time": 1587445140000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 2799,
              "relative humidity": 53,
              "temperature": 7.5
          }
      },
      {
          "time": 1587445500000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 672,
              "relative humidity": 62
          }
      },
      {
          "time": 1587445860000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 2266,
              "relative humidity": 63.4,
              "temperature": 9.1
          }
      },
      {
          "time": 1587446220000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5502,
              "relative humidity": 60,
              "temperature": 9.2
          }
      },
      {
          "time": 1587446580000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 2227,
              "relative humidity": 34.6,
              "temperature": 6.4
          }
      },
      {
          "time": 1587446940000,
          "sensorId": "uuid0130",
          "data": {
              "relative humidity": 63.4,
              "temperature": 9.2
          }
      },
      {
          "time": 1587447300000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 1020,
              "relative humidity": 62,
              "temperature": 7.5
          }
      },
      {
          "time": 1587447660000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 672,
              "relative humidity": 53
          }
      },
      {
          "time": 1587448020000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 3334,
              "relative humidity": 50,
              "temperature": 6.4
          }
      },
      {
          "time": 1587448380000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 3122,
              "relative humidity": 50,
              "temperature": 8.3
          }
      },
      {
          "time": 1587448740000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 4239,
              "relative humidity": 60
          }
      },
      {
          "time": 1587449100000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 12556,
              "relative humidity": 53,
              "temperature": 10.3
          }
      },
      {
          "time": 1587449460000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8111,
              "relative humidity": 63.4,
              "temperature": 19.4
          }
      },
      {
          "time": 1587449820000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9902,
              "relative humidity": 63.4,
              "temperature": 17.9
          }
      },
      {
          "time": 1587450180000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 10553,
              "relative humidity": 53.8
          }
      },
      {
          "time": 1587450540000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5698,
              "relative humidity": 71,
              "temperature": 15
          }
      },
      {
          "time": 1587450900000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5562,
              "relative humidity": 55,
              "temperature": 17.4
          }
      },
      {
          "time": 1587451260000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9801,
              "relative humidity": 46,
              "temperature": 10.3
          }
      },
      {
          "time": 1587451620000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 12003,
              "relative humidity": 60,
              "temperature": 16.3
          }
      },
      {
          "time": 1587451980000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 10553,
              "relative humidity": 49,
              "temperature": 22
          }
      },
      {
          "time": 1587452340000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9021,
              "relative humidity": 53,
              "temperature": 10.5
          }
      },
      {
          "time": 1587452700000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5698,
              "relative humidity": 51,
              "temperature": 23
          }
      },
      {
          "time": 1587453060000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9021,
              "relative humidity": 48.5,
              "temperature": 19.2
          }
      },
      {
          "time": 1587453420000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 12556,
              "relative humidity": 34.6,
              "temperature": 22
          }
      },
      {
          "time": 1587453780000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 10899,
              "relative humidity": 49,
              "temperature": 15
          }
      },
      {
          "time": 1587454140000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 10003,
              "relative humidity": 38,
              "temperature": 17.4
          }
      },
      {
          "time": 1587454500000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9801,
              "relative humidity": 62
          }
      },
      {
          "time": 1587454860000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9801,
              "relative humidity": 34.6,
              "temperature": 23
          }
      },
      {
          "time": 1587455220000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 4231,
              "relative humidity": 60,
              "temperature": 10.3
          }
      },
      {
          "time": 1587455580000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 6012,
              "relative humidity": 44,
              "temperature": 16.3
          }
      },
      {
          "time": 1587455940000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8766,
              "temperature": 12.2
          }
      },
      {
          "time": 1587456300000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8892,
              "relative humidity": 62,
              "temperature": 18.9
          }
      },
      {
          "time": 1587456660000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8766,
              "relative humidity": 50
          }
      },
      {
          "time": 1587457020000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7321,
              "relative humidity": 60,
              "temperature": 12
          }
      },
      {
          "time": 1587457380000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 10553,
              "relative humidity": 55,
              "temperature": 23
          }
      },
      {
          "time": 1587457740000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 6012,
              "relative humidity": 44.4,
              "temperature": 12
          }
      },
      {
          "time": 1587458100000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 3560,
              "relative humidity": 38,
              "temperature": 12.2
          }
      },
      {
          "time": 1587458460000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 10553,
              "relative humidity": 63.4,
              "temperature": 19.2
          }
      },
      {
          "time": 1587458820000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9021,
              "relative humidity": 56.3,
              "temperature": 17.4
          }
      },
      {
          "time": 1587459180000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 4231,
              "relative humidity": 48.5
          }
      },
      {
          "time": 1587459540000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 10003,
              "relative humidity": 59,
              "temperature": 19.2
          }
      },
      {
          "time": 1587459900000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 6602,
              "relative humidity": 53.8,
              "temperature": 12
          }
      },
      {
          "time": 1587460260000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8990,
              "relative humidity": 36.7,
              "temperature": 19.4
          }
      },
      {
          "time": 1587460620000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7321,
              "relative humidity": 64,
              "temperature": 10.2
          }
      },
      {
          "time": 1587460980000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7788,
              "relative humidity": 64,
              "temperature": 12.2
          }
      },
      {
          "time": 1587461340000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 12310,
              "relative humidity": 56.3,
              "temperature": 18.9
          }
      },
      {
          "time": 1587461700000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5698,
              "relative humidity": 71,
              "temperature": 19.2
          }
      },
      {
          "time": 1587462060000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7788,
              "relative humidity": 44.4,
              "temperature": 12.2
          }
      },
      {
          "time": 1587462420000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8111,
              "relative humidity": 36.7,
              "temperature": 15
          }
      },
      {
          "time": 1587462780000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13003,
              "relative humidity": 49,
              "temperature": 18.4
          }
      },
      {
          "time": 1587463140000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8892,
              "relative humidity": 44,
              "temperature": 14
          }
      },
      {
          "time": 1587463500000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 10553,
              "relative humidity": 59,
              "temperature": 18.9
          }
      },
      {
          "time": 1587463860000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8766,
              "relative humidity": 49,
              "temperature": 10.5
          }
      },
      {
          "time": 1587464220000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13003,
              "relative humidity": 34.6,
              "temperature": 11
          }
      },
      {
          "time": 1587464580000,
          "sensorId": "uuid0130",
          "data": {
              "relative humidity": 53,
              "temperature": 17.5
          }
      },
      {
          "time": 1587464940000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13562,
              "relative humidity": 56.3,
              "temperature": 10.5
          }
      },
      {
          "time": 1587465300000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13003,
              "relative humidity": 44,
              "temperature": 11
          }
      },
      {
          "time": 1587465660000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8111,
              "relative humidity": 62,
              "temperature": 19.2
          }
      },
      {
          "time": 1587466020000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7901,
              "relative humidity": 48.5
          }
      },
      {
          "time": 1587466380000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 6602,
              "relative humidity": 62,
              "temperature": 12.2
          }
      },
      {
          "time": 1587466740000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 10553,
              "relative humidity": 50,
              "temperature": 23
          }
      },
      {
          "time": 1587467100000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 10899,
              "relative humidity": 71,
              "temperature": 14.6
          }
      },
      {
          "time": 1587467460000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13562,
              "relative humidity": 48.5
          }
      },
      {
          "time": 1587467820000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9801,
              "relative humidity": 38,
              "temperature": 17.9
          }
      },
      {
          "time": 1587468180000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13003,
              "relative humidity": 71,
              "temperature": 21
          }
      },
      {
          "time": 1587468540000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7788,
              "relative humidity": 44,
              "temperature": 14
          }
      },
      {
          "time": 1587468900000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5562,
              "relative humidity": 50,
              "temperature": 19.2
          }
      },
      {
          "time": 1587469260000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9021,
              "relative humidity": 64,
              "temperature": 10.2
          }
      },
      {
          "time": 1587469620000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7713,
              "relative humidity": 55,
              "temperature": 19.2
          }
      },
      {
          "time": 1587469980000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 6602,
              "relative humidity": 59,
              "temperature": 10.2
          }
      },
      {
          "time": 1587470340000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13045,
              "relative humidity": 36.7,
              "temperature": 17.5
          }
      },
      {
          "time": 1587470700000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 10003,
              "relative humidity": 62,
              "temperature": 12
          }
      },
      {
          "time": 1587471060000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9801,
              "relative humidity": 56.3,
              "temperature": 10.5
          }
      },
      {
          "time": 1587471420000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5562,
              "relative humidity": 53,
              "temperature": 16.3
          }
      },
      {
          "time": 1587471780000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 4231,
              "temperature": 19.2
          }
      },
      {
          "time": 1587472140000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8990,
              "relative humidity": 44,
              "temperature": 17.5
          }
      },
      {
          "time": 1587472500000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9801,
              "relative humidity": 71,
              "temperature": 12
          }
      },
      {
          "time": 1587472860000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 3560,
              "relative humidity": 55,
              "temperature": 14.6
          }
      },
      {
          "time": 1587473220000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5562,
              "relative humidity": 48,
              "temperature": 23
          }
      },
      {
          "time": 1587473580000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7901,
              "temperature": 22
          }
      },
      {
          "time": 1587473940000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9902,
              "relative humidity": 34.6,
              "temperature": 16.3
          }
      },
      {
          "time": 1587474300000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9021,
              "relative humidity": 35,
              "temperature": 17.5
          }
      },
      {
          "time": 1587474660000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8990,
              "relative humidity": 60
          }
      },
      {
          "time": 1587475020000,
          "sensorId": "uuid0130",
          "data": {
              "relative humidity": 48.5,
              "temperature": 17.9
          }
      },
      {
          "time": 1587475380000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13045,
              "relative humidity": 53,
              "temperature": 17.9
          }
      },
      {
          "time": 1587475740000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8892,
              "temperature": 15
          }
      },
      {
          "time": 1587476100000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7321,
              "relative humidity": 56.3,
              "temperature": 18.4
          }
      },
      {
          "time": 1587476460000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7901,
              "temperature": 17.9
          }
      },
      {
          "time": 1587476820000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7901,
              "relative humidity": 44.4,
              "temperature": 19.4
          }
      },
      {
          "time": 1587477180000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 10553,
              "relative humidity": 50,
              "temperature": 11
          }
      },
      {
          "time": 1587477540000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8990,
              "relative humidity": 59,
              "temperature": 17.4
          }
      },
      {
          "time": 1587477900000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 12003,
              "relative humidity": 38,
              "temperature": 14
          }
      },
      {
          "time": 1587478260000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 12310,
              "relative humidity": 51,
              "temperature": 19.2
          }
      },
      {
          "time": 1587478620000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7901,
              "relative humidity": 62,
              "temperature": 18.9
          }
      },
      {
          "time": 1587478980000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 12003,
              "relative humidity": 55,
              "temperature": 10.2
          }
      },
      {
          "time": 1587479340000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8111,
              "relative humidity": 51,
              "temperature": 10.3
          }
      },
      {
          "time": 1587479700000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 6012,
              "relative humidity": 44,
              "temperature": 15
          }
      },
      {
          "time": 1587480060000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9902,
              "relative humidity": 50
          }
      },
      {
          "time": 1587480420000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8766,
              "relative humidity": 71,
              "temperature": 16.3
          }
      },
      {
          "time": 1587480780000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9801,
              "relative humidity": 55,
              "temperature": 22
          }
      },
      {
          "time": 1587481140000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 10899,
              "relative humidity": 62,
              "temperature": 18.4
          }
      },
      {
          "time": 1587481500000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5698,
              "relative humidity": 71,
              "temperature": 14
          }
      },
      {
          "time": 1587481860000,
          "sensorId": "uuid0130",
          "data": {
              "relative humidity": 60,
              "temperature": 10.5
          }
      },
      {
          "time": 1587482220000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 4231,
              "relative humidity": 53.8,
              "temperature": 17.4
          }
      },
      {
          "time": 1587482580000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 4231,
              "relative humidity": 36.7,
              "temperature": 10.5
          }
      },
      {
          "time": 1587482940000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13045,
              "relative humidity": 44,
              "temperature": 22
          }
      },
      {
          "time": 1587483300000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13045,
              "relative humidity": 50,
              "temperature": 12.2
          }
      },
      {
          "time": 1587483660000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 10899,
              "relative humidity": 50,
              "temperature": 10.3
          }
      },
      {
          "time": 1587484020000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 12556,
              "relative humidity": 35,
              "temperature": 11
          }
      },
      {
          "time": 1587484380000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13003,
              "relative humidity": 51,
              "temperature": 14
          }
      },
      {
          "time": 1587484740000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9801,
              "relative humidity": 59,
              "temperature": 10.5
          }
      },
      {
          "time": 1587485100000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7713,
              "relative humidity": 50,
              "temperature": 12
          }
      },
      {
          "time": 1587485460000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5562,
              "relative humidity": 48.5,
              "temperature": 10.2
          }
      },
      {
          "time": 1587485820000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9902,
              "relative humidity": 46
          }
      },
      {
          "time": 1587486180000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 10899,
              "relative humidity": 36.7,
              "temperature": 14
          }
      },
      {
          "time": 1587486540000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 6012,
              "relative humidity": 49,
              "temperature": 14
          }
      },
      {
          "time": 1587486900000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13562,
              "relative humidity": 55,
              "temperature": 12.2
          }
      },
      {
          "time": 1587487260000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7713,
              "relative humidity": 59,
              "temperature": 10.2
          }
      },
      {
          "time": 1587487620000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7713,
              "relative humidity": 59,
              "temperature": 22
          }
      },
      {
          "time": 1587487980000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5698,
              "relative humidity": 48.5,
              "temperature": 14.6
          }
      },
      {
          "time": 1587488340000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8111,
              "relative humidity": 48.5,
              "temperature": 12.2
          }
      },
      {
          "time": 1587488700000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5502,
              "relative humidity": 59,
              "temperature": 9.1
          }
      },
      {
          "time": 1587489060000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 1113,
              "relative humidity": 34.6,
              "temperature": 8.1
          }
      },
      {
          "time": 1587489420000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 4502,
              "relative humidity": 35,
              "temperature": 9.2
          }
      },
      {
          "time": 1587489780000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 4432,
              "relative humidity": 59,
              "temperature": 7.5
          }
      },
      {
          "time": 1587490140000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 4239,
              "relative humidity": 60,
              "temperature": 3.6
          }
      },
      {
          "time": 1587490500000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 1113,
              "relative humidity": 49,
              "temperature": 8.1
          }
      },
      {
          "time": 1587490860000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 1987,
              "relative humidity": 53,
              "temperature": 8.3
          }
      },
      {
          "time": 1587491220000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5090,
              "relative humidity": 48.5,
              "temperature": 6.4
          }
      },
      {
          "time": 1587491580000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 890,
              "relative humidity": 64,
              "temperature": 6.4
          }
      },
      {
          "time": 1587491940000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5090,
              "relative humidity": 55,
              "temperature": 9.9
          }
      },
      {
          "time": 1587492300000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 2094,
              "relative humidity": 51,
              "temperature": 9.9
          }
      },
      {
          "time": 1587492660000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5502,
              "relative humidity": 59,
              "temperature": 9.9
          }
      },
      {
          "time": 1587493020000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 3123,
              "temperature": 9.2
          }
      },
      {
          "time": 1587493380000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 2878,
              "relative humidity": 62,
              "temperature": 3.6
          }
      },
      {
          "time": 1587493740000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5090,
              "relative humidity": 62,
              "temperature": 9.2
          }
      },
      {
          "time": 1587494100000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 1020,
              "relative humidity": 34.6,
              "temperature": 8.1
          }
      },
      {
          "time": 1587494460000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 1113,
              "relative humidity": 71,
              "temperature": 6.3
          }
      },
      {
          "time": 1587494820000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5542,
              "relative humidity": 60,
              "temperature": 9.1
          }
      },
      {
          "time": 1587495180000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 1222,
              "relative humidity": 59,
              "temperature": 8.1
          }
      },
      {
          "time": 1587495540000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5502,
              "relative humidity": 59,
              "temperature": 7.5
          }
      },
      {
          "time": 1587495900000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 53.8,
              "temperature": 7.1
          }
      },
      {
          "time": 1587496260000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 36.7,
              "temperature": 6.2
          }
      },
      {
          "time": 1587496620000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 71
          }
      },
      {
          "time": 1587496980000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 48.5,
              "temperature": 5.7
          }
      },
      {
          "time": 1587497340000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 55,
              "temperature": 8.5
          }
      },
      {
          "time": 1587497700000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 46,
              "temperature": 3.4
          }
      },
      {
          "time": 1587498060000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 64
          }
      },
      {
          "time": 1587498420000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 71,
              "temperature": 3
          }
      },
      {
          "time": 1587498780000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 71,
              "temperature": 4
          }
      },
      {
          "time": 1587499140000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 55,
              "temperature": 6.8
          }
      },
      {
          "time": 1587499500000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 63.4,
              "temperature": 5.7
          }
      },
      {
          "time": 1587499860000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 44.4,
              "temperature": 6.2
          }
      },
      {
          "time": 1587500220000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 64,
              "temperature": 6.2
          }
      },
      {
          "time": 1587500580000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 51,
              "temperature": 6.2
          }
      },
      {
          "time": 1587500940000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 59,
              "temperature": 5.5
          }
      },
      {
          "time": 1587501300000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 55,
              "temperature": 4
          }
      },
      {
          "time": 1587501660000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 55,
              "temperature": 6
          }
      },
      {
          "time": 1587502020000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 34.6,
              "temperature": 4
          }
      },
      {
          "time": 1587502380000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 55,
              "temperature": 8.9
          }
      },
      {
          "time": 1587502740000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 44
          }
      },
      {
          "time": 1587503100000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 55,
              "temperature": 3
          }
      },
      {
          "time": 1587503460000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 49,
              "temperature": 8.9
          }
      },
      {
          "time": 1587503820000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 44.4,
              "temperature": 4.2
          }
      },
      {
          "time": 1587504180000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 63.4,
              "temperature": 3
          }
      },
      {
          "time": 1587504540000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 53,
              "temperature": 8.5
          }
      },
      {
          "time": 1587504900000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 53,
              "temperature": 2.3
          }
      },
      {
          "time": 1587505260000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 36.7,
              "temperature": 8.9
          }
      },
      {
          "time": 1587505620000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 53.8,
              "temperature": 3.4
          }
      },
      {
          "time": 1587505980000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 34.6,
              "temperature": 5.7
          }
      },
      {
          "time": 1587506340000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 48.5,
              "temperature": 7.1
          }
      },
      {
          "time": 1587506700000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 59
          }
      },
      {
          "time": 1587507060000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 62,
              "temperature": 3.4
          }
      },
      {
          "time": 1587507420000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 34.6,
              "temperature": 6.8
          }
      },
      {
          "time": 1587507780000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "temperature": 4.2
          }
      },
      {
          "time": 1587508140000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 53,
              "temperature": 4.2
          }
      },
      {
          "time": 1587508500000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 51,
              "temperature": 4.2
          }
      },
      {
          "time": 1587508860000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 51,
              "temperature": 6.2
          }
      },
      {
          "time": 1587509220000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 46,
              "temperature": 6.2
          }
      },
      {
          "time": 1587509580000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 71,
              "temperature": 4
          }
      },
      {
          "time": 1587509940000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 34.6,
              "temperature": 6
          }
      },
      {
          "time": 1587510300000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 59,
              "temperature": 4.2
          }
      },
      {
          "time": 1587510660000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 60,
              "temperature": 6
          }
      },
      {
          "time": 1587511020000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 36.7
          }
      },
      {
          "time": 1587511380000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 34.6,
              "temperature": 7.1
          }
      },
      {
          "time": 1587511740000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 55,
              "temperature": 5.5
          }
      },
      {
          "time": 1587512100000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 53.8,
              "temperature": 8.5
          }
      },
      {
          "time": 1587512460000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 49,
              "temperature": 5.5
          }
      },
      {
          "time": 1587512820000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 50,
              "temperature": 4.2
          }
      },
      {
          "time": 1587513180000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 51,
              "temperature": 5.5
          }
      },
      {
          "time": 1587513540000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 53,
              "temperature": 3.4
          }
      },
      {
          "time": 1587513900000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 55,
              "temperature": 5.5
          }
      },
      {
          "time": 1587514260000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 55,
              "temperature": 5.7
          }
      },
      {
          "time": 1587514620000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 35,
              "temperature": 4.2
          }
      },
      {
          "time": 1587514980000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 60,
              "temperature": 3.4
          }
      },
      {
          "time": 1587515340000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 64,
              "temperature": 4.2
          }
      },
      {
          "time": 1587515700000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 55,
              "temperature": 4
          }
      },
      {
          "time": 1587516060000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 55,
              "temperature": 5.5
          }
      },
      {
          "time": 1587516420000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 64,
              "temperature": 3
          }
      },
      {
          "time": 1587516780000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 48,
              "temperature": 3
          }
      },
      {
          "time": 1587517140000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 38,
              "temperature": 4.2
          }
      },
      {
          "time": 1587517500000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 44.4,
              "temperature": 8.5
          }
      },
      {
          "time": 1587517860000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 49,
              "temperature": 8.9
          }
      },
      {
          "time": 1587518220000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 62,
              "temperature": 8.5
          }
      },
      {
          "time": 1587518580000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 48,
              "temperature": 3
          }
      },
      {
          "time": 1587518940000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 51,
              "temperature": 6.2
          }
      },
      {
          "time": 1587519300000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0
          }
      },
      {
          "time": 1587519660000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 44.4,
              "temperature": 3.4
          }
      },
      {
          "time": 1587520020000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 53,
              "temperature": 4.2
          }
      },
      {
          "time": 1587520380000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 49,
              "temperature": 4.2
          }
      },
      {
          "time": 1587520740000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 64,
              "temperature": 3
          }
      },
      {
          "time": 1587521100000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 48
          }
      },
      {
          "time": 1587521460000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 35,
              "temperature": 4.2
          }
      },
      {
          "time": 1587521820000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 46,
              "temperature": 5.5
          }
      },
      {
          "time": 1587522180000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 34.6,
              "temperature": 4.2
          }
      },
      {
          "time": 1587522540000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 53,
              "temperature": 5.7
          }
      },
      {
          "time": 1587522900000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 63.4,
              "temperature": 7.1
          }
      },
      {
          "time": 1587523260000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 55,
              "temperature": 3
          }
      },
      {
          "time": 1587523620000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 48.5,
              "temperature": 7.1
          }
      },
      {
          "time": 1587523980000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 62
          }
      },
      {
          "time": 1587524340000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 60,
              "temperature": 6.8
          }
      },
      {
          "time": 1587524700000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 1004,
              "relative humidity": 53.8,
              "temperature": 8.3
          }
      },
      {
          "time": 1587525060000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5413,
              "relative humidity": 56.3,
              "temperature": 8.5
          }
      },
      {
          "time": 1587525420000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 1992,
              "relative humidity": 36.7,
              "temperature": 7.2
          }
      },
      {
          "time": 1587525780000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 4239,
              "relative humidity": 53,
              "temperature": 8.5
          }
      },
      {
          "time": 1587526140000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 280,
              "relative humidity": 49,
              "temperature": 7.2
          }
      },
      {
          "time": 1587526500000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 1020,
              "relative humidity": 49,
              "temperature": 6.3
          }
      },
      {
          "time": 1587526860000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 4216,
              "relative humidity": 62,
              "temperature": 3.6
          }
      },
      {
          "time": 1587527220000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 2266,
              "relative humidity": 35,
              "temperature": 8.3
          }
      },
      {
          "time": 1587527580000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5413,
              "relative humidity": 36.7
          }
      },
      {
          "time": 1587527940000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 1113,
              "relative humidity": 38,
              "temperature": 6.4
          }
      },
      {
          "time": 1587528300000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5413,
              "relative humidity": 46,
              "temperature": 9.2
          }
      },
      {
          "time": 1587528660000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 4216,
              "relative humidity": 53.8,
              "temperature": 8.1
          }
      },
      {
          "time": 1587529020000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 4432,
              "relative humidity": 50,
              "temperature": 8.1
          }
      },
      {
          "time": 1587529380000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 280,
              "relative humidity": 62,
              "temperature": 8.3
          }
      },
      {
          "time": 1587529740000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 3821,
              "relative humidity": 44.4,
              "temperature": 6.3
          }
      },
      {
          "time": 1587530100000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 1113,
              "relative humidity": 50,
              "temperature": 6.3
          }
      },
      {
          "time": 1587530460000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 2878,
              "relative humidity": 60,
              "temperature": 7.2
          }
      },
      {
          "time": 1587530820000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 1992,
              "relative humidity": 62,
              "temperature": 8.5
          }
      },
      {
          "time": 1587531180000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 3123,
              "relative humidity": 46,
              "temperature": 9.1
          }
      },
      {
          "time": 1587531540000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 280,
              "relative humidity": 64,
              "temperature": 8.3
          }
      },
      {
          "time": 1587531900000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 1030,
              "relative humidity": 48.5,
              "temperature": 3.6
          }
      },
      {
          "time": 1587532260000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 569,
              "relative humidity": 49,
              "temperature": 8.1
          }
      },
      {
          "time": 1587532620000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 1020,
              "relative humidity": 46
          }
      },
      {
          "time": 1587532980000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 3334,
              "relative humidity": 35,
              "temperature": 9.9
          }
      },
      {
          "time": 1587533340000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 4239,
              "relative humidity": 71,
              "temperature": 8.3
          }
      },
      {
          "time": 1587533700000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 2094,
              "relative humidity": 51,
              "temperature": 6.4
          }
      },
      {
          "time": 1587534060000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 2094,
              "relative humidity": 64,
              "temperature": 9.1
          }
      },
      {
          "time": 1587534420000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 1222,
              "relative humidity": 59,
              "temperature": 9.9
          }
      },
      {
          "time": 1587534780000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5542,
              "relative humidity": 63.4,
              "temperature": 7.5
          }
      },
      {
          "time": 1587535140000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5413,
              "relative humidity": 48.5,
              "temperature": 7.2
          }
      },
      {
          "time": 1587535500000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 6012,
              "relative humidity": 51,
              "temperature": 19.4
          }
      },
      {
          "time": 1587535860000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 4231,
              "relative humidity": 56.3,
              "temperature": 12.2
          }
      },
      {
          "time": 1587536220000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 6012,
              "relative humidity": 64,
              "temperature": 23
          }
      },
      {
          "time": 1587536580000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7901,
              "relative humidity": 44.4,
              "temperature": 16.3
          }
      },
      {
          "time": 1587536940000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8111,
              "relative humidity": 60,
              "temperature": 10.5
          }
      },
      {
          "time": 1587537300000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7788,
              "relative humidity": 49,
              "temperature": 10.5
          }
      },
      {
          "time": 1587537660000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 6602,
              "relative humidity": 44.4,
              "temperature": 10.3
          }
      },
      {
          "time": 1587538020000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13045,
              "relative humidity": 48.5,
              "temperature": 18.9
          }
      },
      {
          "time": 1587538380000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13045,
              "relative humidity": 62,
              "temperature": 15
          }
      },
      {
          "time": 1587538740000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 6012,
              "relative humidity": 36.7,
              "temperature": 12.2
          }
      },
      {
          "time": 1587539100000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9023,
              "relative humidity": 62,
              "temperature": 14.6
          }
      },
      {
          "time": 1587539460000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 3560,
              "relative humidity": 60,
              "temperature": 22
          }
      },
      {
          "time": 1587539820000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13003,
              "relative humidity": 35
          }
      },
      {
          "time": 1587540180000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8990,
              "relative humidity": 50,
              "temperature": 18.9
          }
      },
      {
          "time": 1587540540000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5562,
              "relative humidity": 63.4,
              "temperature": 12
          }
      },
      {
          "time": 1587540900000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 12310,
              "relative humidity": 59,
              "temperature": 15
          }
      },
      {
          "time": 1587541260000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9023,
              "relative humidity": 35,
              "temperature": 12.2
          }
      },
      {
          "time": 1587541620000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8766,
              "relative humidity": 38,
              "temperature": 18.9
          }
      },
      {
          "time": 1587541980000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13045,
              "relative humidity": 51,
              "temperature": 17.4
          }
      },
      {
          "time": 1587542340000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 12556,
              "relative humidity": 63.4,
              "temperature": 17.4
          }
      },
      {
          "time": 1587542700000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7788,
              "relative humidity": 49,
              "temperature": 12.2
          }
      },
      {
          "time": 1587543060000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 10899,
              "relative humidity": 59,
              "temperature": 17.9
          }
      },
      {
          "time": 1587543420000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7788,
              "relative humidity": 35,
              "temperature": 16.3
          }
      },
      {
          "time": 1587543780000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9902,
              "relative humidity": 63.4,
              "temperature": 10.3
          }
      },
      {
          "time": 1587544140000,
          "sensorId": "uuid0130",
          "data": {
              "relative humidity": 60,
              "temperature": 17.4
          }
      },
      {
          "time": 1587544500000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 4231,
              "relative humidity": 60,
              "temperature": 10.2
          }
      },
      {
          "time": 1587544860000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13003,
              "relative humidity": 51,
              "temperature": 18.9
          }
      },
      {
          "time": 1587545220000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7788,
              "relative humidity": 55,
              "temperature": 14
          }
      },
      {
          "time": 1587545580000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8990,
              "relative humidity": 62,
              "temperature": 11
          }
      },
      {
          "time": 1587545940000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 3560,
              "relative humidity": 59,
              "temperature": 12
          }
      },
      {
          "time": 1587546300000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 6012,
              "relative humidity": 55,
              "temperature": 23
          }
      },
      {
          "time": 1587546660000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7713,
              "relative humidity": 51,
              "temperature": 10.3
          }
      },
      {
          "time": 1587547020000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 10003,
              "relative humidity": 50,
              "temperature": 18.9
          }
      },
      {
          "time": 1587547380000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8892,
              "relative humidity": 63.4,
              "temperature": 12
          }
      },
      {
          "time": 1587547740000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5562,
              "relative humidity": 62,
              "temperature": 23
          }
      },
      {
          "time": 1587548100000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9801,
              "relative humidity": 64,
              "temperature": 12.2
          }
      },
      {
          "time": 1587548460000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 6012,
              "relative humidity": 34.6
          }
      },
      {
          "time": 1587548820000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8892,
              "relative humidity": 46,
              "temperature": 15
          }
      },
      {
          "time": 1587549180000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 6602,
              "relative humidity": 53,
              "temperature": 10.3
          }
      },
      {
          "time": 1587549540000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 12310,
              "relative humidity": 64,
              "temperature": 15
          }
      },
      {
          "time": 1587549900000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 12003,
              "relative humidity": 46,
              "temperature": 12.2
          }
      },
      {
          "time": 1587550260000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5698,
              "relative humidity": 71,
              "temperature": 14.6
          }
      },
      {
          "time": 1587550620000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 6602,
              "relative humidity": 62,
              "temperature": 23
          }
      },
      {
          "time": 1587550980000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 6012,
              "relative humidity": 34.6,
              "temperature": 10.5
          }
      },
      {
          "time": 1587551340000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7901,
              "relative humidity": 56.3,
              "temperature": 15
          }
      },
      {
          "time": 1587551700000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13003,
              "relative humidity": 48.5,
              "temperature": 14
          }
      },
      {
          "time": 1587552060000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8990,
              "relative humidity": 48.5,
              "temperature": 18.4
          }
      },
      {
          "time": 1587552420000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9801,
              "relative humidity": 59,
              "temperature": 10.3
          }
      },
      {
          "time": 1587552780000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5562,
              "relative humidity": 44,
              "temperature": 10.2
          }
      },
      {
          "time": 1587553140000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13562,
              "relative humidity": 60,
              "temperature": 17.9
          }
      },
      {
          "time": 1587553500000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9021,
              "relative humidity": 49
          }
      },
      {
          "time": 1587553860000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9021,
              "relative humidity": 55,
              "temperature": 14.6
          }
      },
      {
          "time": 1587554220000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 6602,
              "relative humidity": 50,
              "temperature": 17.5
          }
      },
      {
          "time": 1587554580000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 6602,
              "relative humidity": 64,
              "temperature": 18.9
          }
      },
      {
          "time": 1587554940000,
          "sensorId": "uuid0130",
          "data": {
              "relative humidity": 64,
              "temperature": 22
          }
      },
      {
          "time": 1587555300000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 12310,
              "relative humidity": 63.4
          }
      },
      {
          "time": 1587555660000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9801,
              "relative humidity": 44,
              "temperature": 14.6
          }
      },
      {
          "time": 1587556020000,
          "sensorId": "uuid0130",
          "data": {
              "relative humidity": 51,
              "temperature": 15
          }
      },
      {
          "time": 1587556380000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 4231,
              "relative humidity": 44,
              "temperature": 21
          }
      },
      {
          "time": 1587556740000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 12556,
              "relative humidity": 34.6,
              "temperature": 14
          }
      },
      {
          "time": 1587557100000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 12003,
              "relative humidity": 44.4,
              "temperature": 12.2
          }
      },
      {
          "time": 1587557460000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5698,
              "relative humidity": 53,
              "temperature": 15
          }
      },
      {
          "time": 1587557820000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7901,
              "relative humidity": 62,
              "temperature": 21
          }
      },
      {
          "time": 1587558180000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13045,
              "relative humidity": 62,
              "temperature": 14.6
          }
      },
      {
          "time": 1587558540000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 3560,
              "relative humidity": 55,
              "temperature": 11
          }
      },
      {
          "time": 1587558900000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 6012,
              "relative humidity": 38
          }
      },
      {
          "time": 1587559260000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 10553,
              "relative humidity": 38,
              "temperature": 15
          }
      },
      {
          "time": 1587559620000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9023,
              "relative humidity": 55,
              "temperature": 18.4
          }
      },
      {
          "time": 1587559980000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9023,
              "relative humidity": 53,
              "temperature": 14.6
          }
      },
      {
          "time": 1587560340000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 6012,
              "relative humidity": 63.4,
              "temperature": 16.3
          }
      },
      {
          "time": 1587560700000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13003,
              "relative humidity": 71
          }
      },
      {
          "time": 1587561060000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5698,
              "relative humidity": 55,
              "temperature": 17.9
          }
      },
      {
          "time": 1587561420000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5562,
              "relative humidity": 38,
              "temperature": 10.2
          }
      },
      {
          "time": 1587561780000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9023,
              "relative humidity": 59,
              "temperature": 17.5
          }
      },
      {
          "time": 1587562140000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13045,
              "relative humidity": 34.6,
              "temperature": 17.4
          }
      },
      {
          "time": 1587562500000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7788,
              "relative humidity": 44.4,
              "temperature": 15
          }
      },
      {
          "time": 1587562860000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 12556,
              "relative humidity": 48,
              "temperature": 17.9
          }
      },
      {
          "time": 1587563220000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9801,
              "relative humidity": 64,
              "temperature": 16.3
          }
      },
      {
          "time": 1587563580000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7901,
              "relative humidity": 64,
              "temperature": 15
          }
      },
      {
          "time": 1587563940000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 12556,
              "relative humidity": 59,
              "temperature": 12
          }
      },
      {
          "time": 1587564300000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7321,
              "relative humidity": 34.6,
              "temperature": 11
          }
      },
      {
          "time": 1587564660000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 12556,
              "relative humidity": 53
          }
      },
      {
          "time": 1587565020000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8990,
              "relative humidity": 63.4,
              "temperature": 14
          }
      },
      {
          "time": 1587565380000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8111,
              "relative humidity": 35
          }
      },
      {
          "time": 1587565740000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 6012,
              "relative humidity": 64,
              "temperature": 18.4
          }
      },
      {
          "time": 1587566100000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 10003,
              "relative humidity": 51,
              "temperature": 10.5
          }
      },
      {
          "time": 1587566460000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 6602,
              "relative humidity": 38,
              "temperature": 17.5
          }
      },
      {
          "time": 1587566820000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7901,
              "relative humidity": 55,
              "temperature": 14
          }
      },
      {
          "time": 1587567180000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 4231,
              "relative humidity": 62,
              "temperature": 18.9
          }
      },
      {
          "time": 1587567540000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 12310,
              "relative humidity": 35,
              "temperature": 10.2
          }
      },
      {
          "time": 1587567900000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 10553,
              "relative humidity": 44.4,
              "temperature": 14
          }
      },
      {
          "time": 1587568260000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7788,
              "relative humidity": 64,
              "temperature": 18.9
          }
      },
      {
          "time": 1587568620000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 10003,
              "relative humidity": 60,
              "temperature": 11
          }
      },
      {
          "time": 1587568980000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 12310,
              "relative humidity": 53.8,
              "temperature": 19.4
          }
      },
      {
          "time": 1587569340000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13562,
              "relative humidity": 51,
              "temperature": 18.9
          }
      },
      {
          "time": 1587569700000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9023,
              "relative humidity": 48,
              "temperature": 17.4
          }
      },
      {
          "time": 1587570060000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 4231,
              "relative humidity": 53,
              "temperature": 10.2
          }
      },
      {
          "time": 1587570420000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 6602,
              "relative humidity": 64,
              "temperature": 19.2
          }
      },
      {
          "time": 1587570780000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13003,
              "temperature": 18.4
          }
      },
      {
          "time": 1587571140000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 12310,
              "relative humidity": 71,
              "temperature": 15
          }
      },
      {
          "time": 1587571500000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 10899,
              "relative humidity": 60,
              "temperature": 17.9
          }
      },
      {
          "time": 1587571860000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9902,
              "relative humidity": 38,
              "temperature": 14.6
          }
      },
      {
          "time": 1587572220000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7321,
              "relative humidity": 50,
              "temperature": 17.9
          }
      },
      {
          "time": 1587572580000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 7321,
              "relative humidity": 62,
              "temperature": 18.9
          }
      },
      {
          "time": 1587572940000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 4231,
              "relative humidity": 62,
              "temperature": 12
          }
      },
      {
          "time": 1587573300000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 9801,
              "relative humidity": 53.8,
              "temperature": 14
          }
      },
      {
          "time": 1587573660000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5562,
              "relative humidity": 48.5,
              "temperature": 18.4
          }
      },
      {
          "time": 1587574020000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 8111,
              "relative humidity": 50,
              "temperature": 17.9
          }
      },
      {
          "time": 1587574380000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 13003,
              "relative humidity": 64,
              "temperature": 10.2
          }
      },
      {
          "time": 1587574740000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 12003,
              "relative humidity": 48,
              "temperature": 17.9
          }
      },
      {
          "time": 1587575100000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 2266,
              "relative humidity": 34.6,
              "temperature": 3.6
          }
      },
      {
          "time": 1587575460000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 1987,
              "relative humidity": 62,
              "temperature": 3.6
          }
      },
      {
          "time": 1587575820000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5413,
              "relative humidity": 38,
              "temperature": 7.5
          }
      },
      {
          "time": 1587576180000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 4432,
              "relative humidity": 44.4,
              "temperature": 3.6
          }
      },
      {
          "time": 1587576540000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 2227,
              "relative humidity": 38,
              "temperature": 7.2
          }
      },
      {
          "time": 1587576900000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 2094,
              "relative humidity": 55,
              "temperature": 9.2
          }
      },
      {
          "time": 1587577260000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 5090,
              "relative humidity": 44.4
          }
      },
      {
          "time": 1587577620000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 1113,
              "relative humidity": 44.4,
              "temperature": 9.1
          }
      },
      {
          "time": 1587577980000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 2799,
              "relative humidity": 44.4,
              "temperature": 7.2
          }
      },
      {
          "time": 1587578340000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 1992,
              "relative humidity": 51
          }
      },
      {
          "time": 1587578700000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 2266,
              "relative humidity": 51,
              "temperature": 8.5
          }
      },
      {
          "time": 1587579060000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 2799,
              "relative humidity": 35,
              "temperature": 6.3
          }
      },
      {
          "time": 1587579420000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 2094,
              "relative humidity": 35,
              "temperature": 8.5
          }
      },
      {
          "time": 1587579780000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 2878,
              "relative humidity": 34.6
          }
      },
      {
          "time": 1587580140000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 2799,
              "relative humidity": 48.5,
              "temperature": 6.3
          }
      },
      {
          "time": 1587580500000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 280,
              "relative humidity": 60,
              "temperature": 9.1
          }
      },
      {
          "time": 1587580860000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 3334,
              "relative humidity": 48
          }
      },
      {
          "time": 1587581220000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 1030,
              "relative humidity": 71,
              "temperature": 8.1
          }
      },
      {
          "time": 1587581580000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 2094,
              "relative humidity": 35,
              "temperature": 9.1
          }
      },
      {
          "time": 1587581940000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 890,
              "relative humidity": 49,
              "temperature": 3.6
          }
      },
      {
          "time": 1587582300000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 56.3,
              "temperature": 5.5
          }
      },
      {
          "time": 1587582660000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 44,
              "temperature": 2.3
          }
      },
      {
          "time": 1587583020000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 59,
              "temperature": 8.9
          }
      },
      {
          "time": 1587583380000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 64,
              "temperature": 8.5
          }
      },
      {
          "time": 1587583740000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 55,
              "temperature": 6
          }
      },
      {
          "time": 1587584100000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "temperature": 4.2
          }
      },
      {
          "time": 1587584460000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 71,
              "temperature": 3
          }
      },
      {
          "time": 1587584820000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 36.7,
              "temperature": 6.2
          }
      },
      {
          "time": 1587585180000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 36.7,
              "temperature": 4.2
          }
      },
      {
          "time": 1587585540000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 51,
              "temperature": 8.9
          }
      },
      {
          "time": 1587585900000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 51,
              "temperature": 4.2
          }
      },
      {
          "time": 1587586260000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 59,
              "temperature": 3
          }
      },
      {
          "time": 1587586620000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 55,
              "temperature": 5.7
          }
      },
      {
          "time": 1587586980000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 48,
              "temperature": 4.2
          }
      },
      {
          "time": 1587587340000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 51,
              "temperature": 6.8
          }
      },
      {
          "time": 1587587700000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "temperature": 8.9
          }
      },
      {
          "time": 1587588060000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 49,
              "temperature": 6
          }
      },
      {
          "time": 1587588420000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 36.7,
              "temperature": 3.4
          }
      },
      {
          "time": 1587588780000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "temperature": 3.4
          }
      },
      {
          "time": 1587589140000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 56.3,
              "temperature": 4.2
          }
      },
      {
          "time": 1587589500000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 62,
              "temperature": 6.8
          }
      },
      {
          "time": 1587589860000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 60,
              "temperature": 2.3
          }
      },
      {
          "time": 1587590220000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 35,
              "temperature": 6.8
          }
      },
      {
          "time": 1587590580000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 62,
              "temperature": 6.8
          }
      },
      {
          "time": 1587590940000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "temperature": 5.5
          }
      },
      {
          "time": 1587591300000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 38,
              "temperature": 3
          }
      },
      {
          "time": 1587591660000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 62,
              "temperature": 3.4
          }
      },
      {
          "time": 1587592020000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 51,
              "temperature": 6.2
          }
      },
      {
          "time": 1587592380000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 48.5,
              "temperature": 8.9
          }
      },
      {
          "time": 1587592740000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 60,
              "temperature": 4.2
          }
      },
      {
          "time": 1587593100000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 60,
              "temperature": 6
          }
      },
      {
          "time": 1587593460000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 46,
              "temperature": 6
          }
      },
      {
          "time": 1587593820000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 48,
              "temperature": 6.2
          }
      },
      {
          "time": 1587594180000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 50,
              "temperature": 5.7
          }
      },
      {
          "time": 1587594540000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 64,
              "temperature": 6.8
          }
      },
      {
          "time": 1587594900000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 59,
              "temperature": 6
          }
      },
      {
          "time": 1587595260000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 51,
              "temperature": 5.7
          }
      },
      {
          "time": 1587595620000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 53.8,
              "temperature": 2.3
          }
      },
      {
          "time": 1587595980000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 50,
              "temperature": 4
          }
      },
      {
          "time": 1587596340000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 71,
              "temperature": 6.2
          }
      },
      {
          "time": 1587596700000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 53.8,
              "temperature": 7.1
          }
      },
      {
          "time": 1587597060000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 55,
              "temperature": 7.1
          }
      },
      {
          "time": 1587597420000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 56.3,
              "temperature": 6.8
          }
      },
      {
          "time": 1587597780000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 34.6,
              "temperature": 7.1
          }
      },
      {
          "time": 1587598140000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "temperature": 6.2
          }
      },
      {
          "time": 1587598500000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 36.7
          }
      },
      {
          "time": 1587598860000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "temperature": 4
          }
      },
      {
          "time": 1587599220000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "temperature": 2.3
          }
      },
      {
          "time": 1587599580000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 62,
              "temperature": 4.2
          }
      },
      {
          "time": 1587599940000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 46,
              "temperature": 4.2
          }
      },
      {
          "time": 1587600300000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 64,
              "temperature": 5.7
          }
      },
      {
          "time": 1587600660000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 46,
              "temperature": 3
          }
      },
      {
          "time": 1587601020000,
          "sensorId": "uuid0130",
          "data": {
              "light intensity": 0,
              "relative humidity": 55,
              "temperature": 6.8
          }
      }  
];

Environment.create(environmentData)
  .then(environmentFromDB => {
    console.log(`Created ${environmentFromDB.length} environment datasets`);
  })
  .then(response => {
    mongoose.connection.close();
  })
  .catch(err => console.log(`An error occurred while getting environment datasets from the DB: ${err}`));