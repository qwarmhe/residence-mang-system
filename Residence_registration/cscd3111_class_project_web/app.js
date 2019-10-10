var express = require ('express');
var path= require('path');
var bodyParser= require('body-parser');
var mongoose= require('mongoose')

require('dotenv/config');

var app= express();

app.use(bodyParser.json());

const post_route= require('../cscd311_class_project_api/routes/route');


app.use('/hall_application',post_route);

app.get('/', function(req,res)
{
    res.sendfile('./Front_development/login.html');

});


app.get('/hall_application',function(req,res)
{
    res.sendfile('./Front_development/hall_application.html');
});

mongoose.connect(
    
    process.env.DB_CONNECTION,
    {useNewUrlParser: true, useUnifiedTopology:true},
    ()=>
    {
        console.log("Database Connected !!!!!");
    }
)


app.listen(3000, ()=>
{
    console.log("Server Connected");
});