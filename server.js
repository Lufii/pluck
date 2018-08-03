//dependencies
const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const config = require('./config.js');
// https://nodejs.org/api/path.html
const path = require('path');

// initializes express
const app = express();

//initializes body-parser
app.use(bodyParser.urlencoded({extended:true}));
// app.set('view engine', 'ejs');
// app.use('views', path.join(__dirname + '/views'));

//serves homepage
require('./routes/routes.js')(app);

//Connects to my mongodb and logs success.
MongoClient.connect('mongodb://'+config.production.database.username+':'+config.production.database.password+'@ds257851.mlab.com:57851/testhb', { useNewUrlParser: true }, (err, client) =>{
  if(err) return console.log(err);
  db = client.db('testhb');
  app.listen(3000, function(){
  console.log('CibolaBurn, port 3000');
  })
})
