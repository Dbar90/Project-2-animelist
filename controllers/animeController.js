const express = require('express')
const router = express.Router()
const Anime = require('../models/anime')

router.get('/', (req, res) => {
  Anime.find({}, (err, allAnime) => {
    res.render('index.ejs', {
      anime: allAnime
    })
  })
})

router.get('/new', (req, res) => {
  res.render('new.ejs')
})

router.get('/seed', (req, res) => {
  Anime.create([
    {
      name: 'Bleach',
      favoriteCharacter: 'Ikkaku Madarame',
      genre: 'Adventure, Supernatural',
      rating: 5,
      watchAgain: true
    },
    {
      name: 'Black Clover',
      favoriteCharacter: 'Captain Yami',
      genre: 'Adventure, Fantasy',
      rating: 5,
      watchAgain: true
    },
    {
      name: 'Barakamon',
      favoriteCharacter: 'Seishu Handa',
      genre: 'Comedy, Slice of Life',
      rating: 3,
      watchAgain: false
    },
    {
      name: 'Death Note',
      favoriteCharacter: 'Light Yagami',
      genre: 'Mystery, Thriller',
      rating: 4,
      watchAgain: true
    }
  ], (err, data) => {
    if (err) {
      console.log(err)
    }
    res.redirect('/anime')
  })
})

router.get('/:id', (req, res) => {
  Anime.findById(req.params.id, (err, foundAnime) =>{
      res.render('show.ejs', {anime: foundAnime})
  })
})

router.post('/', (req, res) => {
  if(req.body.watchAgain === "on") {
    req.body.watchAgain = true
  } else {
    req.body.watchAgain = false
  }
  Anime.create(req.body, (err, createdAnime) => {
    res.redirect('/anime')
  })
})

router.delete('/:id', (req, res) => {
  Anime.findByIdAndDelete(req.params.id, (err, deletedAnime) => {
    res.redirect('/anime')
  })
})

router.get('/:id/edit', (req, res) => {
  Anime.findById(req.params.id, (err, foundAnime) => {
    res.render('edit.ejs', {anime: foundAnime})
  })
})

router.put('/:id', (req, res) => {
  req.body.watchAgain = (req.body.watchAgain === 'on')
  Anime.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new: true},
  (err, updatedAnime) => {
    if (err) {
      console.log(err)
      res.send(err)
    } else {
      res.redirect('/anime')
    }
  })
})

module.exports = router
