const Url = require('../models/url')
const similarcalls = require('./similarcalls');

//Create Url
const createUrl = function(req, res){
  const url = new Url({
      ...req.body
  })
  similarcalls.create(url,res)
}

//Get All Url 
const getUrls = function(req, res) {
  similarcalls.getModel(Url,res)
}

//Get url by extension
const getUrlByExtension = function(req, res) {
  const extension = req.params.extension
  Url.find({extension}).then(function(thing) {
    res.send(thing)
  }).catch(function(error){
    res.status(500).send(error)
  })
}

//Update Url 
const updateUrl = function(req, res) {
  const _id = req.params.id
  //check all keys that can be updated
  const updates = Object.keys(req.body)
  const allowedUpdates = ['navbar','title_cont_1','cont_1','title_cont_2','cont_2','title_cont_3','cont_3','item_1','item_2','item_3','contact_name','contact_phone','contact_email','contact_pic']
  const isValidUpdate = updates.every((update) => allowedUpdates.includes(update))
  if( !isValidUpdate ) {
    return res.status(400).send({
      error: 'Invalid update, only allowed to update: ' + allowedUpdates
    })
  }
  //find and update it
  similarcalls.findUpdate(Url,_id,req.body,res)
}

//Delete item by id
const deleteUrl = function(req, res) {
  const _id = req.params.id
  similarcalls.delete(Url,_id,res)
}

module.exports = {
    createUrl: createUrl,
    getUrls: getUrls,
    getUrlByExtension: getUrlByExtension,
    updateUrl: updateUrl,
    deleteUrl: deleteUrl
}