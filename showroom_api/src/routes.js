const express = require('express')
const router = express.Router()

const items = require('./controllers/items.js');

router.post('/item',items.createItem)

router.get('*', function(req, res) {
  res.send({
    error: 'This route does not exist, try /other'
  })
})

module.exports = router

