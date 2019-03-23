var mongoose = require('mongoose');
var Assets = mongoose.model('Assets',
{
    RFID:{type:String},
    LAT:{type:Number},
    LONG:{type:Number},
    IP_vendor:{type:String},
    Scenario:{type:String},
    BTS_type:{type:String},
    Shelter_type:{type:String}

});

module.exports={Assets};


