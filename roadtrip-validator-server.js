var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static('./public'));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// homepage
app.get('/', function(request,response){
    response.sendFile('./public/html/sf-1.html',{root: './'});
});

app.get('/cargo-validator', function(request,response){
    response.sendFile('./public/html/roadtrip-validator-index.html',{root: './'});
});

app.post('/validate-cargo', function(req,res){
    var valid = false;

    if((req.body.totalSpent <= 200) && (req.body.totalWeight <= 200)){
        valid = true;
    }
    res.send(valid);
});


app.listen(8080, function(){
    console.log("App is listening on port 8080");
});