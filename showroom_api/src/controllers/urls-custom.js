const UrlCustom = require('../models/url-custom')

//Create Urlcustom
const createUrlCustom = function(req, res){
  const urlc = new UrlCustom({
      ...req.body
  })
  urlc.save().then(function() {
      return res.send(urlc)
  }).catch(function(error) {
      return res.status(400).send({ error: error })
  })
}

//Get All Url Custom
const getUrlsCustoms = function(req, res) {
  UrlCustom.find().then(function(urlc) {
      res.send(urlc)
  }).catch(function(error){
      res.status(500).send(error)
  })
}

//Get url custom by extension
const getUrlByExtension = function(req, res) {
  const extension = req.params.extension
  UrlCustom.find({extension}).then(function(urlc) {
    res.send(urlc)
  }).catch(function(error){
    res.status(500).send(error)
  })
}

//Update Url Custom
const updateUrlCustom = function(req, res) {
  const extension = req.params.extension
  //check all keys that can be updated
  const updates = Object.keys(req.body)
  const allowedUpdates = ['navbar','title_cont_1','cont_1','title_cont_2','cont_2','title_cont_3','cont_3','item_1','item_2','item_3']
  const isValidUpdate = updates.every((update) => allowedUpdates.includes(update))
  if( !isValidUpdate ) {
    return res.status(400).send({
      error: 'Invalid update, only allowed to update: ' + allowedUpdates
    })
  }
  //find and update it
  UrlCustom.findOneAndUpdate( extension, req.body ).then(function(urlc) {
    if (!urlc) {
      return res.status(404).send({ error: `Item with id ${_id} not found.`})
    }
    return res.send(urlc)
  }).catch(function(error) {
    res.status(500).send({ error: error })
  })
}

//Delete item by id
const deleteUrlCustom = function(req, res) {
  const extension = req.params.extension
  UrlCustom.findOneAndDelete( extension ).then(function(urlc){
    if(!urlc) {
      return res.status(404).send({ error: `Item with id ${_id} not found.`})
    }
    return res.send(urlc)
  }).catch(function(error) {
    res.status(505).send({ error: error })
  })
}

module.exports = {
    createUrlCustom: createUrlCustom,
    getUrlsCustoms: getUrlsCustoms,
    getUrlByExtension: getUrlByExtension,
    updateUrlCustom: updateUrlCustom,
    deleteUrlCustom: deleteUrlCustom
}