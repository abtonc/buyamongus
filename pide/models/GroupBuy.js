const mongoose = require('mongoose');

const GroupBuySchema = new mongoose.Schema(
  {
    title: String,
    uri: String,
    description: String,
    price: {
      real: Number,
      bau: Number,
    },
  },
  { collection: 'GroupBuys' }
);

const GroupBuy = mongoose.model('GroupBuy', GroupBuySchema);
module.exports = GroupBuy;
