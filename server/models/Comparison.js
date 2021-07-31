const mongoose = require('mongoose');

const comparisonSchema = new mongoose.Schema({
  title: {
    type: mongoose.Schema.Types.String,
    required: true
  },
  imageUrl: {
    type: mongoose.Schema.Types.String,
    required: true
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

const Comparison = mongoose.model('Comparison', comparisonSchema);

module.exports = Comparison;
