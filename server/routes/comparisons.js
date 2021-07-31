const express = require('express')
const authCheck = require('../middleware/auth-check');
const Comparison = require('../models/Comparison');

const router = new express.Router()

function validateComparisonForm (payload) {
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
  const comparison = req.body
  comparison.creator = req.user._id
  const validationResult = validateComparisonForm(comparison)
  if (!validationResult.success) {
    return res.status(400).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    })
  }

  Comparison.create(comparison)
    .then(() => {
      res.status(200).json({
        success: true,
        message: 'Comparison added successfully.',
        comparison
      })
    })
})

router.get('/all', authCheck ,(req, res) => {
  const page = parseInt(req.query.page) || 1
  const search = req.query.search

  Comparison.find({})
    .then((comparison) => {
      return res.status(200).json(comparison)
    })
})

router.get('/details/:id', authCheck, (req, res) => {
  const id = req.params.id
  Comparison.findById(id)
    .then((comparison) => {
      if (!comparison) {
        return res.status(404).json({
          success: false,
          message: 'Entry does not exists!'
        })
      }

      let response = {
        id,
        title: comparison.title,
        imageUrl: comparison.imageUrl,
      }

      res.status(200).json(response)
    })
})


router.get('/user', authCheck, (req, res) => {
  const user = req.user._id

  Comparison.find({creator: user})
    .then((comparison) => {
      return res.status(200).json(comparison)
    })
})

router.delete('/delete/:id', authCheck, (req, res) => {
  const id = req.params.id
  const user = req.user._id

  Comparison.findById(id)
    .then((comparison) => {
      if (!comparison) {
        return res.status(200).json({
          success: false,
          message: 'Comparison does not exists!'
        })
      }

      if ((comparison.creator.toString() !== user && !req.user.roles.includes("Admin"))) {
        return res.status(401).json({
          success: false,
          message: 'Unauthorized!'
        })
      }

      Comparison.findByIdAndDelete(id)
        .then(() => {
          return res.status(200).json({
            success: true,
            message: 'Comparison deleted successfully!'
          })
        })
    })
})

router.put('/edit/:id', authCheck, (req, res) => {
  const id = req.params.id;
  const comparison = req.body;

  if (!comparison) {
    return res.status(404).json({
      success: false,
      message: 'Slogan does not exists!'
    })
  }

  if (!req.user.roles.includes('Admin')) {
    return res.status(401).json({
      success: false,
      message: 'Unauthorized!'
    })
  }

  const validationResult = validateComparisonForm(comparison)
  if (!validationResult.success) {
    return res.status(400).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    })
  }

  Comparison.findByIdAndUpdate(id, comparison)
    .then(() => {
      return res.status(200).json({
        success: true,
        message: 'Comparison edited successfully!'
      })
    })
})

router.get('/:id', authCheck, (req, res) => {
  const id = req.params.id

  Comparison.findById(id)
    .then(comparison => {
      if (!comparison) {
        return res.status(404).json({
          success: false,
          message: 'Entry does not exists!'
        })
      }

      let response = {
        id,
        title: comparison.title,
        imageUrl: comparison.imageUrl,
      }

      res.status(200).json(response)
    })
})

module.exports = router
