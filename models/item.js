var mongoose = require('mongoose');
var ItemSchema = new mongoose.Schema({
  itemName: String,
  shortDesc: String,
  itemImage: String,
  description: String,
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Item', ItemSchema);
