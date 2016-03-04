/**
 * Created by andrewglenn on 3/3/16.
 */
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/herodb');
mongoose.model(

  'Hero',
  new Schema({
      "alias": String,
      "first_name": String,
      "last_name": String,
      "city": String,
      "primary_power": String
    },
    {
      collection: 'Heroes'
    }
  ));

var Hero = mongoose.model('Hero');


router.get('/', function(req, res) {
  Hero.find({}, function(err, data) {
    if(err) {
      console.log('ERR: ', err);
    }
    res.send(data);
  });
});

router.get('/some', function(req, res) {
  Hero.find({}, function(err, data) {
    if(err) {
      console.log('ERR: ', err);
    }
    res.send(data);
  });
});

router.post('/', function(req, res) {
  var addedDocument = new Hero({
    "alias": req.body.alias,
    "first_name": req.body.firstName,
    "last_name": req.body.lastName,
    "city": req.body.city,
    "primary_power": req.body.primaryPower
  });

  addedDocument.save(function(err, data) {
    if(err) {
      console.log('ERR: ', err);
    }
    Hero.find({}, function(err, data) {
      if(err) {
        console.log('ERR: ', err);
      }
      res.send(data);
    });
  });
});

router.delete('/:id', function(req, res) {
  Hero.findByIdAndRemove({"_id" : req.params.id}, function(err, data) {
    if(err) {
      console.log('ERR: ', err);
    }
    res.send(data);
  });
});

//there are other methods that can be used but findByIdAndUpdate seems most likely
//the object properties below come from the object you are passing into the ajax call
//router.put('/:id', function(req, res){
//  var StatusUpdate = req.body.status;
//  console.log(StatusUpdate);
//  Task.findByIdAndUpdate(
//    {_id: req.params.id},
//    {
//      $set: {status: StatusUpdate
//      }
//    },
//    function(err, data) {
//      if(err) {
//        console.log('ERR: ', err);
//      }
//      res.send(data);
//    }
//  );
//});

module.exports = router;