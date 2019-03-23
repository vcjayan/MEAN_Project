const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var {VILKerala} = require('./models/assets')

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/VILKerala', {useNewUrlParser:true})
const connection = mongoose.connection;

connection.once('open', ()=>{
    console.log("Succefully connected to mongodb database")
});

var app=express();
app.use(bodyParser.json());
app.use(cors());

app.get('/authenticate', (req, res)=>{
    console.log(req.body);
    res.send('user credentials received')
});

app.get('/database', (req, res)=>{
        VILKerala.find().then((data)=>{
        if(!data){
            return res.status(400).send()
        }
        res.send(data)
    })
});

app.get('/database/:id', (req, res)=>{
    console.log('Get request for a single site')
    console.log(req.url)

    VILKerala.findById(req.params.id).then( (data)=>{
        if(!data){
            return res.status(400).send()
        }
        res.send(data);}).catch((e)=>{
            res.status(400).send()
        })
    })
;

app.get('/database/delete:id', (req, res)=>{

    VILKerala.findByIdAndRemove({_id:req.params.id}, (err, database)=>{
        if (err){
            res.json(err)
        }
        else{
            res.json('Removed successfully');
        }
    })
}
)

app.post('/insertsite', (req, res)=>{
    var sites = new VILKerala(
        {
            RFID:req.body.RFID,
            Infra_ID:req.body.Infra_ID,
            Infra_owner:req.body.Infra_owner,
            Site_name:req.body.Site_name,
            Zone:req.body.Zone,
            District:req.body.District,
            Tower_type:req.body.Tower_type,
            Tower_height:req.body.Tower_height,
            Site_type:req.body.Site_type,
            Other_OPCO_count:req.body.Other_OPCO_count,
            BTS_position_2G:req.body. BTS_position_2G,
            BTS_make_2G:req.body.BTS_make_2G,
            BTS_BBU_Model_2G:req.body.BTS_BBU_Model_2G,
            BTS_RRU_model_2G:req.body.BTS_RRU_model_2G,
            RRU_Count2G:req.body.RRU_Count2G,
            BTS_ODID_3G:req.body.BTS_ODID_3G,
            BTS_Position_3G:req.body.BTS_Position_3G,
            BTS_BBU_model_3G:req.body.BTS_BBU_model_3G,
            BTS_RRU_model_3G:req.body.BTS_RRU_model_3G,
            RRU_Count_3G:req.body.RRU_Count_3G});     
        
            sites.save().then((result)=>{
            res.send(result)      
        },
        (error)=>{
            res.status(400).send(error)
        })     

});

app.listen(3000, ()=> {
    console.log("Server started")
})


