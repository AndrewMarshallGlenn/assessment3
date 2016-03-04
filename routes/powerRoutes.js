/**
 * Created by andrewglenn on 3/3/16.
 */
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/herodb');
mongoose.model(

  'Power',
  new Schema({
      "power": String,
    },
    {
      collection: 'SuperPowers'
    }
  ));

var Power = mongoose.model('Power');

router.get('/', function(req, res) {
  Power.find({}, function(err, data) {
    if(err) {
      console.log('ERR: ', err);
    }
    res.send(data);
  });
});

//the object properties below come from the object you are passing into the ajax call
//router.post('/', function(req, res) {
//  var addedDocument = new Power({
//    "power_name": req.body.powerName
//  });
//
//  addedDocument.save(function(err, data) {
//    if(err) {
//      console.log('ERR: ', err);
//    }
//    Power.find({}, function(err, data) {
//      if(err) {
//        console.log('ERR: ', err);
//      }
//      res.send(data);
//    });
//  });
//});

//there are other methods that can be used but findByIdAndRemove seems most likely
//change the model reference
//router.delete('/:id', function(req, res) {
//  Power.findByIdAndRemove({"_id" : req.params.id}, function(err, data) {
//    if(err) {
//      console.log('ERR: ', err);
//    }
//    res.send(data);
//  });
//});

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