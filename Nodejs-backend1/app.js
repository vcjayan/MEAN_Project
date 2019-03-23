const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var {Assets} = require('./models/assets')
const router = express.Router();


var mongoose = require('mongoose');
mongoose.Promise=global.Promise
mongoose.connect('mongodb://localhost:27017/idb', {useNewUrlParser:true})
const connection = mongoose.connection;

connection.once('open', ()=>{
    console.log("Succefully connected to mongodb database")
});

var app=express();
app.use(bodyParser.json());
app.use(cors());

router.route('/assets').get((req, res)=>{
    Assets.find((err, assets)=>{
        if (err)
    console.log(err);
    else
    res.json(assets)
    }
    )
})

app.use('/', router);


app.listen(3000, ()=> {
    console.log("Server started")
});


