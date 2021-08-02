const mongoose = require('mongoose');

const pictureSchema = new mongoose.Schema({
  title: {
    type: mongoose.Schema.Types.String,
    required: true
  },
  imageUrl: {
    type: mongoose.Schema.Types.String,
    required: true
  },
  category: {
    type: mongoose.Schema.Types.String,
    required: true
  },
  format: {
    type: mongoose.Schema.Types.String,
    required: true
  },
  creator: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }]
});

const Picture = mongoose.model('Picture', pictureSchema);

module.exports = Picture;
