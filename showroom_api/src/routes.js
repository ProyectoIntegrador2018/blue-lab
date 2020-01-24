const express = require('express')
const router = express.Router()

const items = require('./controllers/items.js');

router.post('/item',items.createItem)
router.patch('/item/:id',items.updateItem)
router.get('/items',items.getItems)
router.get('/item/:id',items.getItem)
router.get('/itemsTag/:tag',items.getItemsByTag)
router.get('/itemsTitle/:title',items.getItemsByTitle)
router.delete('/item/:id',items.deleteItem)
router.get('/tags',items.getDistinctTags)


router.get('*', function(req, res) {
  res.send({
    error: 'This route does not exist, try /other'
  })
})

module.exports = router

