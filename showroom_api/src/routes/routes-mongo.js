const express = require('express')
const router = express.Router()

const items = require('../controllers/items.js');
const urls = require('../controllers/urls.js')

//rutas para items
router.get('/items',items.getItems)
router.get('/item/:id',items.getItem)
router.get('/tags',items.getDistinctTags)
router.get('/titles',items.getTitles) 
router.get('/itemsTag/:tag',items.getItemsByTag) 
router.get('/itemsTagNegate',items.getItemsByTagNegate) 
router.get('/itemsTitle/:title',items.getItemsByTitle) 
router.post('/item',items.createItem) 
router.patch('/item/:id',items.updateItem) 
router.delete('/item/:id',items.deleteItem) 

//rutes para administracion de urls custom
router.get('/urls',urls.getUrls)
router.get('/url/:extension',urls.getUrlByExtension)
router.post('/url',urls.createUrl)
router.patch('/url/:extension',urls.updateUrl)
router.delete('/url/:extension',urls.deleteUrl)

router.get('*', function(req, res) {
  res.send({
    error: 'This route does not exist, try /other'
  })
})

module.exports = router

