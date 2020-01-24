const Item = require('../models/item')

const createItem = function(req, res){
    const item = new Item({
        ...req.body
    })
    item.save().then(function() {
        return res.send(item)
    }).catch(function(error) {
        return res.status(400).send({ error: error })
    })
}

module.exports = {
    createItem: createItem
}