//install express server
const express=require('express');
const path=require('path');

const app=express();

//serve only static files from dist directoty
app.use(express.static('./dist/DEMO-WEB-APP'));

app.get('/*',(req,res)=>
res.sendFile('index.html',{root:'dist/DEMO-WEB-APP/'}));

//start the app by listening on the default heroku port

app.listen(process.env.PORT||8080);
