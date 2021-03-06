const mongoose = require('mongoose');

const sloganSchema = new mongoose.Schema({
  content: {
    type: mongoose.Schema.Types.String,
    required: true
  },
  note: {
    type: mongoose.Schema.Types.String,
  },
  creator: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }]
});

const Slogan = mongoose.model('Slogan', sloganSchema);

module.exports = Slogan;
