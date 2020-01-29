const express = require('express')
const router = express.Router()

const items = require('../controllers/items.js');
const home = require('../controllers/homes.js');
const urlCustom = require('../controllers/urls-custom.js')

//rutas para items
router.get('/items',items.getItems)
router.get('/item/:id',items.getItem)
router.get('/tags',items.getDistinctTags)
router.get('/titles',items.getTitles) 
router.get('/itemsTag/:tag',items.getItemsByTag) 
router.get('/itemsTitle/:title',items.getItemsByTitle) 
router.post('/item',items.createItem) 
router.patch('/item/:id',items.updateItem) 
router.delete('/item/:id',items.deleteItem) 

//rutas para administracion de home
router.get('/home',home.getHome)
router.post('/home',home.createHome)
router.patch('/home',home.updateHome)

//rutes para administracion de urls custom
router.get('/urls',urlCustom.getUrlsCustoms)
router.get('/url/:extension',urlCustom.getUrlByExtension)
router.post('/url',urlCustom.createUrlCustom)
router.patch('/url/:extension',urlCustom.updateUrlCustom)
router.delete('/url/:extension',urlCustom.deleteUrlCustom)



router.get('*', function(req, res) {
  res.send({
    error: 'This route does not exist, try /other'
  })
})

module.exports = router

