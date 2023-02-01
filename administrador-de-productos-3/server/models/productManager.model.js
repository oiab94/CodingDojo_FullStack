const mongoose = require("mongoose");

// * Declare the Schema of the Mongo model
var productManagerSchema = new mongoose.Schema({
  title: {type: String, index:true},
  price: {type: Number},
  description: {type: String}
}, {timestamps: true});

// * Export the model
const product = mongoose.model("product", productManagerSchema);
module.exports = product;
