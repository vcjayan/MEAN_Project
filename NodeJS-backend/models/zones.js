var mongoose = require ('mongoose');
var Zones = mongoose.model('zonelist',
{
    zonename: {type:String, required:true},
    zoneid:    {type:String, required:true},
})

module.exports={Zones}