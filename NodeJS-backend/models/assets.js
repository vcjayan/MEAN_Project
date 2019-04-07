var mongoose = require('mongoose');
var VILKerala = mongoose.model('sites',
{
    RFID:{type:String, required:true },
    Infra_ID:{type:String, required:true},
    Infra_owner:{type:String, required:true},
    Site_name:{type:String, required:true},
    Zone:{type:String, required:true},
    District:{type:String, required:true},
    Tower_type:{type:String, required:true},
    Tower_height:{type:String, required:true},
    Site_type:{type:String, required:true},
    Other_OPCO_count:{type:String, required:true},
    BTS_position_2G:{type:String, required:true},
    BTS_make_2G:{type:String, required:true},
    BTS_BBU_Model_2G:{type:String, required:true},
    BTS_RRU_model_2G:{type:String, required:true},
    RRU_Count2G:{type:String, required:true},
    BTS_ODID_3G:{type:String, required:true},
    BTS_Position_3G:{type:String, required:true},
    BTS_BBU_model_3G:{type:String, required:true},
    BTS_RRU_model_3G:{type:String, required:true},
    RRU_Count_3G:{type:String, required:true},
        
})



module.exports={VILKerala}



