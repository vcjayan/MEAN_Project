const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var {VILKerala} = require('./models/assets')
var {UserData} = require('./models/users')


const jwt = require ('jsonwebtoken')

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/VILKerala', {useNewUrlParser:true})

const connection = mongoose.connection;

connection.once('open', ()=>{
    console.log("Succefully connected to mongodb database")
});

var app=express();
app.use(bodyParser.json());
app.use(cors());

app.post('/register', (req, res)=>{

    var credentials = new UserData ({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
      })

      credentials.save().then((result)=>{
        res.send(result) 
        console.log('user added')     
    },
    (error)=>{
        res.status(400).send(error)
    })     
    });

app.post('/login', (req, res)=>{

    var user1 = req.body

    UserData.findOne({email:user1.email}, (error, user)=>{
        if (error){
            console.log(error)
        }
        else {
            if (!user) {
                res.status(401).send('Invalid email')
            }
        else {
            if (user.password!==user1.password) {
                res.status(401).send('Invalid password')
            }
        else {
            res.status(200).send(user)
        }
        }
        }
    })

})

app.get('/credentials', (req, res)=>{
    UserData.find().then((data)=>{
    res.send(data)
})
});

app.get('/database', (req, res)=>{
        VILKerala.find().then((data)=>{
        if(!data){
            return res.status(400).send()
        }
        res.send(data)
    })
});

app.get('/users', (req, res)=>{
    UserData.find().then((data)=>{
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
        console.log(data);
        res.send(data);}).catch((e)=>{
            res.status(400).send()
        })
    })
;

app.delete('/database/delete/:id', (req, res)=>{

    VILKerala.findByIdAndRemove({_id:req.params.id}, (err, database)=>{
        if (err){
            res.json(err)
        }
        else{
            res.json('Removed successfully');
        }
    })
})

app.put('/updatesite/:id', (req, res)=>{
    var sites = {
        
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
            RRU_Count_3G:req.body.RRU_Count_3G
    };
    VILKerala.findByIdAndUpdate(req.params.id, {$set:sites}, {new:true}, (err, data)=>{
        if(!err) {res.send(data);}
        else{ console.log('Error in update :' +JSON.stringify(err, undefined, 2) )}
    })
    
});

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


