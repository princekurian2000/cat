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

    res.send({"description":"Sample Cat","external_url":"https://gateway.pinata.cloud/ipfs/bafkreig4jr4n2g5lskaqlbusicbmdrruz34b4mczxit6b7ql4ffqzs66qm","image":"https://gateway.pinata.cloud/ipfs/bafkreig4jr4n2g5lskaqlbusicbmdrruz34b4mczxit6b7ql4ffqzs66qm","name":"Cat #1","attributes":[{"trait_type":"Background","value":"White"},{"trait_type":"EYE","value":"Golder"},{"trait_type":"Body","value":"Gray"},{"trait_type":"LOOK","value":"UP"}]})
});

app.get('/3',function(req,res){
    res.header("Access-Control-Allow-Origin", "*")
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');   

    res.send({"Name":"Prince"})
});
app.get('/2',function(req,res){
    res.header("Access-Control-Allow-Origin", "*")
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');   

    res.send({"description":"Sample Cat","external_url":"https://gateway.pinata.cloud/ipfs/bafkreihrbztzyelh7g74czln72wxwfakbf3ikgni4mpi4kx4dcpsit5okq","image":"https://gateway.pinata.cloud/ipfs/bafkreihrbztzyelh7g74czln72wxwfakbf3ikgni4mpi4kx4dcpsit5okq","name":"Cat #2","attributes":[{"trait_type":"Background","value":"Black"},{"trait_type":"EYE","value":"Dark"},{"trait_type":"Body","value":"Golden"},{"trait_type":"LOOK","value":"Straight"}]})
});

app.listen(process.env.PORT ||4000, function(){
    console.log('listening to port 4000');
});
