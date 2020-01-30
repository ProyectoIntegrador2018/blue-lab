const Url = require('../models/url')
const deleteVar = require('./similarcalls');

//Create Url
const createUrl = function(req, res){
  const url = new Url({
      ...req.body
  })
  url.save().then(function() {
      return res.send(url)
  }).catch(function(error) {
      return res.status(400).send({ error: error })
  })
}

//Get All Url 
const getUrls = function(req, res) {
  Url.find().then(function(url) {
      res.send(url)
  }).catch(function(error){
      res.status(500).send(error)
  })
}

//Get url by extension
const getUrlByExtension = function(req, res) {
  const extension = req.params.extension
  Url.find({extension}).then(function(url) {
    res.send(url)
  }).catch(function(error){
    res.status(500).send(error)
  })
}

//Update Url 
const updateUrl = function(req, res) {
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
  Url.findOneAndUpdate( extension, req.body ).then(function(url) {
    if (!url) {
      return res.status(404).send({ error: `Item with id ${extension} not found.`})
    }
    return res.send(url)
  }).catch(function(error) {
    res.status(500).send({ error: error })
  })
}

//Delete item by id
const deleteUrl = function(req, res) {
  const extension = req.params.extension
  deleteVar.delete(Url,extension,res)
}

module.exports = {
    createUrl: createUrl,
    getUrls: getUrls,
    getUrlByExtension: getUrlByExtension,
    updateUrl: updateUrl,
    deleteUrl: deleteUrl
}