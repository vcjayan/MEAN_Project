var mongoose = require ('mongoose');
var Districts = mongoose.model('districtlist',
{
    districtname: {type:String, required:true},
    districtid:   {type:String, required:true},
    zoneid:       {type:String, required:true},
})

module.exports={Districts}