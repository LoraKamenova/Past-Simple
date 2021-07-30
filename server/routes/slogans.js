const express = require('express')
const authCheck = require('../middleware/auth-check');
const Slogan = require('../models/Slogan');

const router = new express.Router()

function validateSloganForm (payload) {
  const errors = {}
  let isFormValid = true
  let message = ''

  if (!payload || typeof payload.content !== 'string'){
    isFormValid = false
    errors.title = 'Content can`t be empty.'
  }

  if (!payload || typeof payload.note !== 'string') {
    isFormValid = false
    errors.description = 'Note can`t be empty.'
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
  const slogan = req.body
  slogan.creator = req.user._id
  const validationResult = validateSloganForm(slogan)
  if (!validationResult.success) {
    return res.status(400).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    })
  }

  Slogan.create(slogan)
    .then(() => {
      res.status(200).json({
        success: true,
        message: 'Slogan added successfully.',
        slogan
      })
    })
})

router.get('/all', authCheck ,(req, res) => {
  const page = parseInt(req.query.page) || 1
  const search = req.query.search

  Slogan.find({})
    .then((slogan) => {
      return res.status(200).json(slogan)
    })
})

router.get('/details/:id', authCheck, (req, res) => {
  const id = req.params.id
  Slogan.findById(id)
    .then((slogan) => {
      if (!slogan) {
        return res.status(404).json({
          success: false,
          message: 'Entry does not exists!'
        })
      }

      let response = {
        id,
        content: slogan.content,
        note: slogan.note,
      }

      res.status(200).json(response)
    })
})


router.get('/user', authCheck, (req, res) => {
  const user = req.user._id

  Slogan.find({creator: user})
    .then((slogan) => {
      return res.status(200).json(slogan)
    })
})

router.delete('/delete/:id', authCheck, (req, res) => {
  const id = req.params.id
  const user = req.user._id

  Slogan.findById(id)
    .then((slogan) => {
      if (!slogan) {
        return res.status(200).json({
          success: false,
          message: 'Slogan does not exists!'
        })
      }

      if ((slogan.creator.toString() !== user && !req.user.roles.includes("Admin"))) {
        return res.status(401).json({
          success: false,
          message: 'Unauthorized!'
        })
      }

      Slogan.findByIdAndDelete(id)
        .then(() => {
          return res.status(200).json({
            success: true,
            message: 'Slogan deleted successfully!'
          })
        })
    })
})

router.put('/edit/:id', authCheck, (req, res) => {
  const id = req.params.id;
  const slogan = req.body;

  if (!slogan) {
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

  const validationResult = validateSloganForm(slogan)
  if (!validationResult.success) {
    return res.status(400).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    })
  }

  Slogan.findByIdAndUpdate(id, slogan)
    .then(() => {
      return res.status(200).json({
        success: true,
        message: 'Slogan edited successfully!'
      })
    })
})

router.get('/:id', authCheck, (req, res) => {
  const id = req.params.id

  Slogan.findById(id)
    .then(slogan => {
      if (!slogan) {
        return res.status(404).json({
          success: false,
          message: 'Entry does not exists!'
        })
      }

      let response = {
        id,
        content: slogan.content,
        note: slogan.note,
      }

      res.status(200).json(response)
    })
})

module.exports = router
