var mongoose = require ('mongoose');
var Userdata = mongoose.model('credentials',
{
    username: {type:String, required:true},
    email:    {type:String, required:true},
    password: {type:String, required:true}
})

module.exports={Userdata}