import mongoose from 'mongoose';

var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");

var Schema = mongoose.Schema;

var ShoesSchema = new Schema({
  sku: {
    type: Number,
    required: true,
    unique: true
  },
  asin: {
    type: String,
    required: true,
    unique: true
  },
  department: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  size: {
    type: Number,
    required: true
  },
  width: {
    type: Number,
    required: false
  },
  color: {
    type: String,
    required: true
  },
  shipWeight: {
    type: Number,
    required: true
  },
  shipWidth: {
    type: Number,
    required: true
  }, 
  shipHeight: {
    type: Number,
    required: true
  }, 
  shipDepth: {
    type: Number,
    required: true
  },
  priceList: {
    type: Number,
    required: true
  },
  priceRetail: {
    type: Number,
    required: true
  },
  priceSavings: {
    type: Number,
    required: false
  },
  percentSavings: {
    type: Number,
    required: false
  },
  priceWholesale: {
    type: Number,
    required: true
  }
});


// UserSchema.pre("save", function(next) {
//   let salt = bcrypt.genSaltSync(10);
//   this.password = bcrypt.hashSync(this.password, salt);
//   next();
// });

//mlab collection for shoes = "shoes"
module.exports = mongoose.model("Shoes", ShoesSchema);