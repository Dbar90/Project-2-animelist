const mongoose = require('mongoose')
const {Schema, model} = mongoose

const animeSchema = new Schema({
  name: {type: String, required: true},
  rating: {type: Number, required: true},
  favoriteCharacter: {type: String, required: true},
  genre: {type: String, required: true},
  watchAgain: {type: Boolean, default: false}
})

const Anime = model('Anime', animeSchema)

module.exports = Anime
