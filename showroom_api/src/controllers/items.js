const Item = require('../models/item');
const similarcalls = require('./similarcalls');

//Retrieve all items
const getItems = function(req, res) {
    similarcalls.getModel(Item,res)
}

//Retrieve items by tag
const getItemsByTag = function(req, res) {
    //find a item that has the tag we are looking for
    const tag = req.params.tag
    Item.find({tags:{ $in: [tag]}}).then(function(items) {
        res.send(items)
    }).catch(function(error){
        res.status(500).send(error)
    })
}

//Retrieve items by tag they dont have
const getItemsByTagNegate = function(req, res) {
  //find a item that has the tag we are looking for
  const arr_tags = req.body.tags
  Item.find({tags:{"$nin": arr_tags } }).then(function(items) {
      res.send(items)
  }).catch(function(error){
      res.status(500).send(error)
  })
}


//Retrieve item by id
const getItem = function(req, res) {
    const _id = req.params.id
    Item.findOne({_id}).then(function(item) {
      if(!item){
        return res.status(404).send({ error: `Item with id ${_id} not found.`})
      }
      return res.send(item)
    }).catch(function(error) {
      return res.status(500).send({ error: error })
    })
  }


//Create a new item
const createItem = function(req, res){
    const item = new Item({
        ...req.body
    })
    similarcalls.create(item,res)
}

//Update item
const updateItem = function(req, res) {
    const _id = req.params.id
    //check all keys that can be updated
    const updates = Object.keys(req.body)
    const allowedUpdates = ['title','tags','title_descr_1','descr_1','title_descr_2','descr_2','title_descr_3','descr_3','title_cont_1','cont_1','title_cont_2','cont_2','img_principal','img_feature','imgs_attached','links']
    const isValidUpdate = updates.every((update) => allowedUpdates.includes(update))
    if( !isValidUpdate ) {
      return res.status(400).send({
        error: 'Invalid update, only allowed to update: ' + allowedUpdates
      })
    }
    //find and update it
    similarcalls.findUpdate(Item,_id,req.body,res)
  }


//Delete item by id
const deleteItem = function(req, res) {
    const _id = req.params.id
    similarcalls.delete(Item,_id,res)
  }

//Get an array with all different tags on the DB
const getDistinctTags = function(req,res){
    Item.distinct( "tags" ).then(function(item){
        return res.send(item)
    }).catch(function(error){
        res.status(500).send({error:error})
    })
}

//Get an array with all different tags on the DB
const getTitles = function(req,res){
  Item.find().select("title").then(function(item){
      return res.send(item)
  }).catch(function(error){
      res.status(500).send({error:error})
  })
}

module.exports = {
    createItem: createItem,
    updateItem: updateItem,
    getItems: getItems,
    getItem: getItem,
    deleteItem: deleteItem,
    getItemsByTag: getItemsByTag,
    getItemsByTagNegate: getItemsByTagNegate,
    getDistinctTags: getDistinctTags,
    getTitles: getTitles,
    getItemsByTagNegate: getItemsByTagNegate
}