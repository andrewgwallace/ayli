const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3004
const listener = () => console.log(`Server is running on port ${port}`)
const knex = require('../db/knex')
const bodyParser = require('body-parser')
const cors = require('cors')
const logger = require('morgan')
const showRoutes = require('./routes/shows')


app.disable('x-powered-by')
app.use(express.static(path.join(__dirname, '../client/build')))
app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api/shows', showRoutes);


app.get('/', (req, res, next) => {
  const index = path.join(__dirname, '../client/build/index.html')
  res.sendFile(index)
})

// Handles getting all show data that is used by Google Maps API on the frontend.
// app.get('/api/shows', (req, res, next) => {
//   knex('shows')
//   .then(shows => res.json({shows: shows}))
//   .catch(error => { console.error(error);})
// })


// handle error
app.use((err, req, res, next) => {
  const status = err.status || 500
  res.status(status).json({ error: err })
})
// not found
app.use((req, res, next) => {
  res.status(404).json( {error: { message: "Not found."}})
})

app.listen(port, listener)
