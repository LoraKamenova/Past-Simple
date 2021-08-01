const express = require('express')
const authCheck = require('../middleware/auth-check');
const Post = require('../models/Post');

const router = new express.Router()

function validatePostForm (payload) {
  const errors = {}
  let isFormValid = true
  let message = ''

  if (!payload || typeof payload.title !== 'string' || payload.title.length < 3 ||  payload.title.length > 20){
    isFormValid = false
    errors.title = 'Title must be between 3 and 15 symbols.'
  }

  if (!payload || typeof payload.subtitle !== 'string' || payload.subtitle.length < 3 ||  payload.subtitle.length > 200){
    isFormValid = false
    errors.subtitle = 'Subtitle must be between 3 and 50 symbols.'
  }

  if (!payload || typeof payload.content !== 'string' || payload.content.length < 10) {
    isFormValid = false
    errors.content = 'Description must be at least 10 symbols.'
  }


  if (!payload || typeof payload.imageUrl1 !== 'string' || payload.imageUrl1.length === 0) {
    isFormValid = false
    errors.imageUrl1 = 'Image URL is required.'
  }

  if (!payload || typeof payload.imageUrl2 !== 'string' || payload.imageUrl2.length === 0) {
    isFormValid = false
    errors.imageUrl2 = 'Image URL is required.'
  }

  if (!payload || typeof payload.imageUrl3 !== 'string' || payload.imageUrl3.length === 0) {
    isFormValid = false
    errors.imageUrl3 = 'Image URL is required.'
  }

  if (!isFormValid) {
    message = 'Check the form for errors.'
  }

  return {
    success: isFormValid,
    message,
    errors
  }
}

router.post('/create', authCheck, (req, res) => {
  const post = req.body
  post.creator = req.user._id
  const validationResult = validatePostForm(post)
  if (!validationResult.success) {
    return res.status(400).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    })
  }

  Post.create(post)
    .then(() => {
      res.status(200).json({
        success: true,
        message: 'Post added successfully.',
        post
      })
    })
})

router.get('/all', authCheck ,(req, res) => {
  const page = parseInt(req.query.page) || 1
  const search = req.query.search

  Post.find({})
    .populate('creator')
    .then((post) => {
      return res.status(200).json(post)
    })
})

router.get('/details/:id', authCheck, (req, res) => {
  const id = req.params.id
  Post.findById(id)
    .populate('creator')
    .then((post) => {
      if (!post) {
        return res.status(404).json({
          success: false,
          message: 'Entry does not exists!'
        })
      }

      let response = {
        _id: id,
        title: post.title,
        subtitle: post.subtitle,
        content: post.content,
        imageUrl1: post.imageUrl1,
        imageUrl2: post.imageUrl2,
        imageUrl3: post.imageUrl3,
        creator: post.creator.name,
      }

      res.status(200).json(response)
    })
})

router.get('/user', authCheck, (req, res) => {
  const user = req.user._id

  Post.find({creator: user})
    .then((post) => {
      return res.status(200).json(post)
    })
})

router.delete('/delete/:id', authCheck, (req, res) => {
  const id = req.params.id
  const user = req.user._id

  Post.findById(id)
    .then((post) => {
      if (!post) {
        return res.status(200).json({
          success: false,
          message: 'Post does not exists!'
        })
      }

      if ((post.creator.toString() !== user && !req.user.roles.includes("Admin"))) {
        return res.status(401).json({
          success: false,
          message: 'Unauthorized!'
        })
      }

      Post.findByIdAndDelete(id)
        .then(() => {
          return res.status(200).json({
            success: true,
            message: 'Post deleted successfully!'
          })
        })
    })
})

router.put('/edit/:id', authCheck, (req, res) => {
  const id = req.params.id;
  const post = req.body;

  if (!post) {
    return res.status(404).json({
      success: false,
      message: 'Post does not exists!'
    })
  }

  if (!req.user.roles.includes('Admin')) {
    return res.status(401).json({
      success: false,
      message: 'Unauthorized!'
    })
  }

  const validationResult = validatePostForm(post)
  if (!validationResult.success) {
    return res.status(400).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    })
  }

  Post.findByIdAndUpdate(id, post)
    .then(() => {
      return res.status(200).json({
        success: true,
        message: 'Post edited successfully!'
      })
    })
})

router.get('/:id', authCheck, (req, res) => {
  const id = req.params.id

  Post.findById(id)
    .then(post => {
      if (!post) {
        return res.status(404).json({
          success: false,
          message: 'Entry does not exists!'
        })
      }

      let response = {
        id,
        title: post.title,
        subtitle: post.subtitle,
        content: post.content,
        imageUrl1: post.imageUrl1,
        imageUrl2: post.imageUrl2,
        imageUrl3: post.imageUrl3,
      }

      res.status(200).json(response)
    })
})

module.exports = router
