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
  req.body.watchAgain = (req.body.watchAgain === "on")
  Anime.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new: true}
  ),
  (err, updatedAnime) => {
    res.redirect('/anime')
  }
})

module.exports = router
