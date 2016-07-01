'use strict'
// const MongoClient = require('mongodb').MongoClient;

// es6 decconstrucrs
const {MongoClient} = require('mongodb');
const dbConnection = 'mongodb://localhost:27017/nychikes';
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const urlencodeParser = bodyParser.urlencoded({extended: false});


module.exports = {

  searchTrails: function(req,res, next) {
    MongoClient.connect(dbConnection, function(err, db){
      if(err) throw err;

      db.collection('hiketrails')
      .find(/* */)
      .sort(/*{"Name":-1, "Other_Details":1}*/)
      .toArray(function(err, results) {
        if(err) throw err;

        res.filteredTrails = results;
        next();
      })
    } )
  }
}
