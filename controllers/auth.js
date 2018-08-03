/*

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt-nodejs');

module.exports = {

  verifyToken: (req, res) => {

  },

  createUser: (req, res) => {
          db.collection('users').findOneAndUpdate(req.body, {$set:{"type":'sadmin'}}, {upsert: true} (err, result) => {
          if (err) return console.log(err);
          console.log('User saved to database')
          res.json(result);
          //res.redirect('/');
        })
  },

  login: (req, res) => {

  },

}

*/
