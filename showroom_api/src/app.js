const express = require('express')
require('./db/mongoose')
var cors = require('cors');

//router for mongo 
const router = require('./routes/routes-mongo')
//router for AWS S3
const routerImage = require('./routes/file-upload')

const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json()) // parsea a json
app.use(router) 
app.use(routerImage)


app.listen(port, function() {
  console.log('Server up and running on port ' + port)
})
