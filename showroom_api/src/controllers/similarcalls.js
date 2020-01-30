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