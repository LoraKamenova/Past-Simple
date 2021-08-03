const express = require('express')
const authCheck = require('../middleware/auth-check');
const Picture = require('../models/Picture');

const router = new express.Router()

function validatePictureForm (payload) {
  const errors = {}
  let isFormValid = true
  let message = ''

  if (!payload || typeof payload.title !== 'string'){
    isFormValid = false
    errors.title = 'Title can`t be empty.'
  }

  if (!payload || typeof payload.imageUrl !== 'string') {
    isFormValid = false
    errors.imageUrl = 'ImageUrl can`t be empty.'
  }

  if (!payload || typeof payload.category !== 'string'){
    isFormValid = false
    errors.category = 'Category can`t be empty.'
  }

  if (!payload || typeof payload.format !== 'string') {
    isFormValid = false
    errors.format = 'Format can`t be empty.'
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
  const picture = req.body
  picture.creator = req.user._id
  const validationResult = validatePictureForm(picture)
  if (!validationResult.success) {
    return res.status(400).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    })
  }

  Picture.create(picture)
    .then(() => {
      res.status(200).json({
        success: true,
        message: 'Picture added successfully.',
        picture
      })
    })
})

router.get('/all', authCheck ,(req, res) => {
  const page = parseInt(req.query.page) || 1
  const search = req.query.search

  Picture.find({})
    .then((picture) => {
      return res.status(200).json(picture)
    })
})

router.get('/details/:id', authCheck, (req, res) => {
  const id = req.params.id
  Picture.findById(id)
    .then((picture) => {
      if (!picture) {
        return res.status(404).json({
          success: false,
          message: 'Entry does not exists!'
        })
      }

      let response = {
        id,
        title: picture.title,
        imageUrl: picture.imageUrl,
        category: picture.category,
        format: picture.format,
      }

      res.status(200).json(response)
    })
})


router.get('/user', authCheck, (req, res) => {
  const user = req.user._id

  Picture.find({creator: user})
    .then((picture) => {
      return res.status(200).json(picture)
    })
})

router.delete('/delete/:id', authCheck, (req, res) => {
  const id = req.params.id
  const user = req.user._id

  Picture.findById(id)
    .then((picture) => {
      if (!picture) {
        return res.status(200).json({
          success: false,
          message: 'Picture does not exists!'
        })
      }

      if ((picture.creator.toString() !== user && !req.user.roles.includes("Admin"))) {
        return res.status(401).json({
          success: false,
          message: 'Unauthorized!'
        })
      }

      Picture.findByIdAndDelete(id)
        .then(() => {
          return res.status(200).json({
            success: true,
            message: 'Picture deleted successfully!'
          })
        })
    })
})

router.put('/edit/:id', authCheck, (req, res) => {
  const id = req.params.id;
  const picture = req.body;

  if (!picture) {
    return res.status(404).json({
      success: false,
      message: 'Picture does not exists!'
    })
  }

  if (!req.user.roles.includes('Admin')) {
    return res.status(401).json({
      success: false,
      message: 'Unauthorized!'
    })
  }

  const validationResult = validatePictureForm(picture)
  if (!validationResult.success) {
    return res.status(400).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    })
  }

  Picture.findByIdAndUpdate(id, picture)
    .then(() => {
      return res.status(200).json({
        success: true,
        message: 'Picture edited successfully!'
      })
    })
})

router.get('/:id', authCheck, (req, res) => {
  const id = req.params.id

  Picture.findById(id)
    .then(picture => {
      if (!picture) {
        return res.status(404).json({
          success: false,
          message: 'Entry does not exists!'
        })
      }

      let response = {
        id,
        title: picture.title,
        imageUrl: picture.imageUrl,
        category: picture.category,
        format: picture.format,
      }

      res.status(200).json(response)
    })
})

module.exports = router
