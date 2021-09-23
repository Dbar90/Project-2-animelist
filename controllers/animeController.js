const express = require('express')
const router = express.Router()
const Anime = require('../models/anime')

router.get('/', (req, res) => {
  res.send('anime list')
})

router.get('/new', (req, res) => {

})

router.get('/:id', (req, res) => {

})

router.post('/', (req, res) => {

})

router.delete('/:id', (req, res) => {

})

router.get('/:id/edit', (req, res) => {

})

router.put('/:id', (req, res) => {

})

module.exports = router
