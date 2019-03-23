var mongoose = require ('mongoose');
var Users = mongoose.model('users',
{
    username: {type:String, required:true},
    password: {type:String, required:true}
})

module.exports={Users}