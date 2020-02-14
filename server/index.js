require('dotenv').config()
const express = require('express')
const massive = require('massive')
const controller = require('./controller')

const app = express()
const {SERVER_PORT, CONNECTION_STRING} = process.env

app.use(express.json())

massive(CONNECTION_STRING).then(dbObj => {
  app.set('db', dbObj)
}).catch(err => console.log(err))

app.get('/api/inventory', controller.getInventory)
app.post('/api/product', controller.addProduct)
app.delete('/api/product/:id', controller.removeProduct)

app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`))