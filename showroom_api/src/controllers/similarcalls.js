const checkInsideDB = function(thing,_id,res){
  return new Promise(function(resolve,reject){
    if (!thing) {
        resolve( res.status(404).send({ error: `Item with id ${_id} not found.`}))
    }
    resolve(res.send(thing))
  })
}

exports.delete = function(model, _id,res) {
    model.findOneAndDelete({_id}).then(function(thing){
      checkInsideDB(thing,_id,res)
    }).catch(function(error) {
      res.status(505).send({ error: error })
    })
  }

exports.findUpdate = function(model,_id,body,res){
    model.findOneAndUpdate( {_id}, body ).then(function(thing) {
        checkInsideDB(thing,_id,res)
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

exports.getModel = function(model,res){
    model.find().then(function(thing) {
        res.send(thing)
    }).catch(function(error){
        res.status(500).send(error)
    })
}