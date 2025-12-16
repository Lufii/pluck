//dependencies
const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const config = require('./config.js');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

require('./routes/routes.js')(app);

//Connects to my mongodb and logs success.
MongoClient.connect('mongodb://'+config.production.database.username+':'+config.production.database.password+'@ds257851.mlab.com:57851/testhb', { useNewUrlParser: true }, (err, client) =>{
  if(err) return console.log(err);
  db = client.db('testhb');
  app.listen(process.env.PORT, '0.0.0.0')
})
