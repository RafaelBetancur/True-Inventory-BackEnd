const { config } = require('./config/config')
const express = require('express')
const routes = require('./routes')

const app = express()
app.use(express.json())

app.use('/api', routes)

app.listen(config.port, () => {
  console.log(`Servidor en el puerto ${config.port}`)
})

module.exports = app