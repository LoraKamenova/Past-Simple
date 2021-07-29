const express = require('express')
const Memory = require('../models/Memory');
const User = require('../models/User');

const router = new express.Router()

router.get('/', (req, res) => {
  Memory.find({}).then((memory) => {
    User.find({}).then((users) => {
      return res.status(200).json({
        memory: memory.length,
        users: users.length
      })
    })
  })
})

module.exports = router
