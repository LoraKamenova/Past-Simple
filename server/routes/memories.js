const express = require('express')
const authCheck = require('../middleware/auth-check');
const Memory = require('../models/Memory');

const router = new express.Router()

function validateMemoryForm (payload) {
  const errors = {}
  let isFormValid = true
  let message = ''

  if (!payload || typeof payload.title !== 'string' || payload.title.length < 3) {
    isFormValid = false
    errors.title = 'Title must be more than 3 symbols.'
  }

  if (!payload || typeof payload.description !== 'string' || payload.description.length < 10) {
    isFormValid = false
    errors.description = 'Description must be more than 50 symbols.'
  }


  if (!payload || typeof payload.imageUrl !== 'string' || payload.imageUrl.length === 0) {
    isFormValid = false
    errors.imageUrl = 'Image URL is required.'
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
  const memory = req.body
  memory.creator = req.user._id
  const validationResult = validateMemoryForm(memory)
  if (!validationResult.success) {
    return res.status(400).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    })
  }

  Memory.create(memory)
    .then(() => {
      res.status(200).json({
        success: true,
        message: 'Memory added successfully.',
        memory
      })
    })
})

router.get('/all', authCheck ,(req, res) => {
  const page = parseInt(req.query.page) || 1
  const search = req.query.search

  Memory.find({})
    .populate('creator')
    .then((memory) => {
      return res.status(200).json(memory)
    })
})

router.get('/details/:id', authCheck, (req, res) => {
  const id = req.params.id
  Memory.findById(id)
    .populate('creator')
    .then((memory) => {
      if (!memory) {
        return res.status(404).json({
          success: false,
          message: 'Entry does not exists!'
        })
      }

      let response = {
        id,
        title: memory.title,
        description: memory.description,
        imageUrl: memory.imageUrl,
      }

      res.status(200).json(response)
    })
})


router.get('/user', authCheck, (req, res) => {
  const user = req.user._id

  Memory.find({creator: user})
    .then((memory) => {
      return res.status(200).json(memory)
    })
})

router.delete('/delete/:id', authCheck, (req, res) => {
  const id = req.params.id
  const user = req.user._id

  Memory.findById(id)
    .then((memory) => {
      if (!memory) {
        return res.status(200).json({
          success: false,
          message: 'Memory does not exists!'
        })
      }

      if ((memory.creator.toString() !== user && !req.user.roles.includes("Admin"))) {
         return res.status(401).json({
           success: false,
           message: 'Unauthorized!'
         })
      }

      Memory.findByIdAndDelete(id)
        .then(() => {
          return res.status(200).json({
            success: true,
            message: 'Memory deleted successfully!'
          })
        })
    })
})

router.put('/edit/:id', authCheck, (req, res) => {
  const id = req.params.id;
  const memory = req.body;

  if (!memory) {
    return res.status(404).json({
      success: false,
      message: 'Memory does not exists!'
    })
  }

  if (!req.user.roles.includes('Admin')) {
    return res.status(401).json({
      success: false,
      message: 'Unauthorized!'
    })
  }

  const validationResult = validateFurnitureForm(memory)
  if (!validationResult.success) {
    return res.status(400).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    })
  }

  Memory.findByIdAndUpdate(id, memory)
    .then(() => {
      return res.status(200).json({
        success: true,
        message: 'Memory edited successfully!'
      })
  })
})

router.get('/:id', authCheck, (req, res) => {
  const id = req.params.id

  Memory.findById(id)
    .then(memory => {
      if (!memory) {
        return res.status(404).json({
          success: false,
          message: 'Entry does not exists!'
        })
      }

      let response = {
        id,
        title: memory.title,
        description: memory.description,
        imageUrl: memory.imageUrl
      }

      res.status(200).json(response)
    })
})

module.exports = router
