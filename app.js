const express=require('express');
var app=new express();
var bodyParser=require('body-parser');
const cors=require('cors');
app.options('*', cors())
app.use(cors());
//app.use(bodyParser.json());
// const path=require('path');
// app.use(express.static(__dirname+'/dist/tax'));
app.use(express.urlencoded({
    extended: true
  }));
app.use(express.json());
app.get('/1',function(req,res){
    res.header("Access-Control-Allow-Origin", "*")
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');   

    res.send({
        "description":"CATNFT",
        "external_url":"https://ipfs.io/ipfs/Qme1kNc5BCPkAwZHFvXWch6EyED1fofNvkdpL1PJJEJoYZ",
        "image":"https://ipfs.io/ipfs/Qme1kNc5BCPkAwZHFvXWch6EyED1fofNvkdpL1PJJEJoYZ",
        "name":"Cat #1",
        "attributes":
            [
                    {"trait_type":"Background","value":"White"},
                    {"trait_type":"EYE","value":"Golder"},
                    {"trait_type":"Body","value":"Gray"},
                    {"trait_type":"LOOK","value":"UP"},
                    {"trait_type":"SHAPE","value":"SQUARE"}
            ]
    })
});

app.get('/',function(req,res){
    res.header("Access-Control-Allow-Origin", "*")
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');   

    res.send({"Name":"No NFT"})
});
app.get('/2',function(req,res){
    res.header("Access-Control-Allow-Origin", "*")
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');   

    res.send({
        "description":"CATNFT",
        "external_url":"https://ipfs.io/ipfs/QmPqYVjRF5JDmmzt4mNDfXevXybeaCohTUgfSoczuQ7iLM",
        "image":"https://ipfs.io/ipfs/QmPqYVjRF5JDmmzt4mNDfXevXybeaCohTUgfSoczuQ7iLM",
        "name":"Cat #2",
        "attributes":
            [
                    {"trait_type":"Background","value":"Gray"},
                    {"trait_type":"EYE","value":"Black"},
                    {"trait_type":"Body","value":"White"},
                    {"trait_type":"LOOK","value":"Straight"},
                    {"trait_type":"SHAPE","value":"RECTANGLE"}
            ]
    })
});

app.listen(process.env.PORT ||4000, function(){
    console.log('listening to port 4000');
});
