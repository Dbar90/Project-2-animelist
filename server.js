const express = require('express')
const app = express()
const mongoose = require('mongoose')
const methodOverride = require('method-override')
require('dotenv').config()
const PORT = process.env.PORT
const mongoURI = process.env.MONGODB_URI
const Anime = ('./models/anime')
const db = mongoose.connection
const animeController = require('./controllers/animeController')

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, () => {
    console.log('database connected')
})


db.on('error', (err) => { console.log('ERROR: ', err) })
db.on('connected', () => { console.log('mongo connected') })
db.on('disconnected', () => { console.log('mongo disconnected')})

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use('/Anime', animeController)

app.get('/', (req, res) => {
  res.redirect('/anime')
})

app.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`)
})
