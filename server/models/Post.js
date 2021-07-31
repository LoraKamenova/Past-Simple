const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {
    type: mongoose.Schema.Types.String,
    required: true
  },
  subtitle: {
    type: mongoose.Schema.Types.String,
    required: true
  },
  content: {
    type: mongoose.Schema.Types.String,
    required: true
  },
  imageUrl1: {
    type: mongoose.Schema.Types.String,
    required: true
  },
  imageUrl2: {
    type: mongoose.Schema.Types.String,
    required: true
  },
  imageUrl3: {
    type: mongoose.Schema.Types.String,
    required: true
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;

