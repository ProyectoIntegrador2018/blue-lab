exports.delete = function(model, parameter,res) {
    model.findOneAndDelete(parameter).then(function(thing){
      if(!thing) {
        return res.status(404).send({ error: `Item with id ${parameter} not found.`})
      }
      return res.send(thing)
    }).catch(function(error) {
      res.status(505).send({ error: error })
    })
  }

exports.findUpdate = function(model,parameter,body,res){
    model.findOneAndUpdate( parameter, body ).then(function(thing) {
        if (!thing) {
            return res.status(404).send({ error: `Item with id ${parameter} not found.`})
        }
        return res.send(thing)
    }).catch(function(error) {
        res.status(500).send({ error: error })
    })
}

exports.create = function(model,res){
    model.save().then(function() {
        return res.send(model)
    }).catch(function(error) {
        return res.status(400).send({ error: error })
    })
}

exports.getByParameter = function(model,parameter,res,item){
    if( item == 1 ){
        title = parameter
        model.find({title}).then(function(thing) {
          res.send(thing)
        }).catch(function(error){
          res.status(500).send(error)
        })
    }
    else{
        extension = parameter
        model.find({extension}).then(function(thing) {
          res.send(thing)
        }).catch(function(error){
          res.status(500).send(error)
        })
    }   
}

exports.getModel = function(model,res){
    model.find().then(function(thing) {
        res.send(thing)
    }).catch(function(error){
        res.status(500).send(error)
    })
}