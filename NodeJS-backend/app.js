const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var {VILKerala} = require('./models/assets')
var {Userdata} = require('./models/users')
var {Zones} = require('./models/zones')
var {Districts} = require('./models/districts')

zoneid:String   
const jwt = require ('jsonwebtoken')

//connect to mongodb
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/VILKerala', {useNewUrlParser:true})
const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log("Succefully connected to mongodb database District")
});

var app=express();
app.use(bodyParser.json());
app.use(cors());

//error handler
app.use(function(err, req, res, next){
    console.log(err)
    res.status(401).send({error: err.message})
})

//register
app.post('/register', (req, res)=>{

    var credentials = new Userdata ({
                    username: req.body.username,
                    email: req.body.email,
                    password: req.body.password})

      credentials.save().then((result)=>{
        res.send(result) 
        console.log('user added')     
    },
    (error)=>{
        res.status(400).send(error)
    })     
    });

//login
app.post('/login', (req, res, next)=>{
    
        var user1 = req.body
    
        Userdata.findOne({email:user1.email}, (error, user)=>{
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
            }}}}).catch(next)
        })

//view
app.get('/database', (req, res)=>{
        VILKerala.find().then((data)=>{
        if(!data){
            return res.status(400).send()
        }
        res.send(data)
    })});

app.get('/zone', (req, res)=>{
    Zones.find().then((data)=>{
    if(!data){
        return res.status(400).send()
    }
    res.send(data)
})});

//add new zone
app.post('/createzone', (req, res)=>{

    var zonelist = new Zones ({
                    zonename: req.body.zonename,
                    zoneid: req.body.zoneid,
                    })

      zonelist.save().then((result)=>{
        res.send(result) 
        console.log('zone added')     
    },
    (error)=>{
        res.status(400).send(error)
    })});
//get district list
app.get('/district', (req, res)=>{
    Districts.find().then((data)=>{
    if(!data){
        return res.status(400).send()
    }
    res.send(data)
})});

//get district and zoneid
app.get('/district/:zoneid', (req, res)=>{
    Districts.findById().then((data)=>{
    if(!data){
        return res.status(400).send()
    }
    res.send(data)
})});

//create district
app.post('/createdistrict', (req, res)=>{

    var districtlist = new Districts ({
                    districtname: req.body.districtname,
                    districtid: req.body.districtid,
                    zoneid: req.body.zoneid
                    })

        districtlist.save().then((result)=>{
        res.send(result) 
        console.log('zone added')     
    },
    (error)=>{
        res.status(400).send(error)
    })});

app.get('/users', (req, res)=>{
    Userdata.find().then((data)=>{
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
            InfraID:req.body.InfraID,
            InfraOwner:req.body.InfraOwner,
            SiteName:req.body.SiteName,
            Zone:req.body.Zone,
            District:req.body.District,
            TowerType:req.body.TowerType,
            TowerHeight:req.body.TowerHeight,
            SiteType:req.body.SiteType,
            OtherOPCOCount:req.body.OtherOPCOCount,
            BBULocation:req.body.BBULocation,
            BBUPosition:req.body.BBUPosition,
            RRUCount2G:req.body.RRUCount2G,
            RRUCount3G4G:req.body.RRUCount3G4G,
            TDDRRUCount:req.body.TDDRRUCount,
            MIMORRUCount:req.body.MIMORRUCount,
            TotalRRUCount:req.body.RRUCount2G+req.body.RRUCount3G4G+req.body.TDDRRUCount+req.body.MIMORRUCount,
            AntennaCount2Port:req.body.AntennaCount2Port,
            AntennaCount4Port:req.body.AntennaCount4Port,
            AntennaCount6Port:req.body.AntennaCount6Port,
            AntennaCount8Port:req.body.AntennaCount8Port,
            AntennaCount10Port:req.body.AntennaCount10Port,
            MWMake:req.body.MWMake,
            MWModel:req.body.MWModel,
            MWLocation:req.body.MUXLocation,
            MWPosition:req.body.MWPosition,
            MWCount:req.body.MWCount,
            ILLDependnecy:req.body.ILLDependnecy,
            AntennaCountPoint3:req.body.AntennaCountPoint3,
            AntennaDirectionsPoint3:req.body.AntennaDirectionsPoint3,
            AntennaCountPoint6:req.body.AntennaCountPoint6,
            AntennaDirectionsPoint6:req.body.AntennaDirectionsPoint6,
            AntennaCountPoint9:req.body.AntennaCountPoint9,
            AntennaDirectionsPoint9:req.body.AntennaDirectionsPoint6,
            AntennaCount1Point2:req.body.AntennaCount1Point2,
            AntennaDirections1Point2:req.body.AntennaDirections1Point2,
            AntennaCount1Point8:req.body.AntennaCount1Point8,
            AntennaDirections1Point8:req.body.AntennaDirections1Point8,
            MUXMake:req.body.MUXMake,
            MUXModel:req.body.MUXModel,
            MUXLocation:req.body.MUXLocation,
            MUXPosition:req.body.MUXPosition,
            MUXCount:req.body.MUXCount,
            LastUpdate:req.body.LastUpdate           

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
            InfraID:req.body.InfraID,
            InfraOwner:req.body.InfraOwner,
            SiteName:req.body.SiteName,
            Zone:req.body.Zone,
            District:req.body.District,
            TowerType:req.body.TowerType,
            TowerHeight:req.body.TowerHeight,
            SiteType:req.body.SiteType,
            OtherOPCOCount:req.body.OtherOPCOCount,
            BBULocation:req.body.BBULocation,
            BBUPosition:req.body.BBUPosition,
            RRUCount2G:req.body.RRUCount2G,
            RRUCount3G4G:req.body.RRUCount3G4G,
            TDDRRUCount:req.body.TDDRRUCount,
            MIMORRUCount:req.body.MIMORRUCount,
            TotalRRUCount:req.body.RRUCount2G+req.body.RRUCount3G4G+req.body.TDDRRUCount+req.body.MIMORRUCount,
            AntennaCount2Port:req.body.AntennaCount2Port,
            AntennaCount4Port:req.body.AntennaCount4Port,
            AntennaCount6Port:req.body.AntennaCount6Port,
            AntennaCount8Port:req.body.AntennaCount8Port,
            AntennaCount10Port:req.body.AntennaCount10Port,
            MWMake:req.body.MWMake,
            MWModel:req.body.MWModel,
            MWLocation:req.body.MUXLocation,
            MWPosition:req.body.MWPosition,
            MWCount:req.body.MWCount,
            ILLDependnecy:req.body.ILLDependnecy,
            AntennaCountPoint3:req.body.AntennaCountPoint3,
            AntennaDirectionsPoint3:req.body.AntennaDirectionsPoint3,
            AntennaCountPoint6:req.body.AntennaCountPoint6,
            AntennaDirectionsPoint6:req.body.AntennaDirectionsPoint6,
            AntennaCountPoint9:req.body.AntennaCountPoint9,
            AntennaDirectionsPoint9:req.body.AntennaDirectionsPoint6,
            AntennaCount1Point2:req.body.AntennaCount1Point2,
            AntennaDirections1Point2:req.body.AntennaDirections1Point2,
            AntennaCount1Point8:req.body.AntennaCount1Point8,
            AntennaDirections1Point8:req.body.AntennaDirections1Point8,
            MUXMake:req.body.MUXMake,
            MUXModel:req.body.MUXModel,
            MUXLocation:req.body.MUXLocation,
            MUXPosition:req.body.MUXPosition,
            MUXCount:req.body.MUXCount,
            LastUpdate:req.body.LastUpdate});     
        
            sites.save().then((result)=>{
            res.send(result)      
        },
        (error)=>{
            res.status(400).send(error);
            
            
        })     

});

app.listen(3000, ()=> {
    console.log("Server started")
})


