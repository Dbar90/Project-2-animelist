const mongoose = require('mongoose')
const {Schema, model} = mongoose

const animeSchema = new Schema({
  name: {type: String, required: true},
  favoriteCharacter: {type: String, required: true},
  genre: {type: String, required: true},
  rating: {type: Number, possibleValues: [1, 2, 3, 4, 5], required: true},
  watchAgain: {type: Boolean, default: false}
})

const Anime = model('Anime', animeSchema)

module.exports = Anime
