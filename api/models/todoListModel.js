'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var HotelSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the Hotel'
  },
  image: {
    type: String,
  },
  description: {
    type: String,
  },
  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Hotels', HotelSchema);
