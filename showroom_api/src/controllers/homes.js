const Home = require('../models/home')

//Retrieve data about home
const getHome = function(req, res) {
    const title = 'home'
    Home.findOne({title}).then(function(home) {
        res.send(home)
    }).catch(function(error){
        res.status(500).send(error)
    })
}

//Create home
const createHome = function(req, res){
    const home = new Home({
        ...req.body
    })
    home.save().then(function() {
        return res.send(home)
    }).catch(function(error) {
        return res.status(400).send({ error: error })
    })
}

//Update home
const updateHome = function(req, res) {
    const title = 'home'
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
    Home.findOneAndUpdate( title, req.body ).then(function(home) {
      if (!home) {
        return res.status(4044).send({ error: `Item with id ${_id} not found.`})
      }
      return res.send(home)
    }).catch(function(error) {
      res.status(500).send({ error: error })
    })
  }


module.exports = {
    getHome: getHome,
    createHome: createHome,
    updateHome: updateHome
}