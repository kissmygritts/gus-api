const db = require('./db')
const express = require('express')
const app = express()

app.get('/ping', (req, res) => {
  res.status(200).json({ msg: 'API is listening' })
})

app.get('/species', (req, res) => {
  db.species.all()
    .then(data => res.status(200).json({ msg: 'success', data }))
    .catch(error => res.status(400).json({ error }))
})

app.get('/activities', (req, res) => {
  db.activities.all()
    .then(data => res.status(200).json({ msg: 'success', data }))
    .catch(error => res.status(400).json({ error }))
})

app.get('/efforts', (req, res) => {
  db.efforts.all()
    .then(data => res.status(200).json({ msg: 'success', data }))
    .catch(error => res.status(400).json({ error }))
})

app.get('/efforts/:id', (req, res) => {
  db.efforts.findById(req.params)
    .then(data => res.status(200).json({ msg: 'success', data }))
    .catch(error => res.status(400).json({ error }))
})

app.get('/get-efforts', (req, res) => {
  db.efforts.getEfforts()
    .then(data => res.status(200).json({ msg: 'success', data }))
    .catch(error => res.status(400).json({ error }))
})

// app.listen(3000, () => {
//   console.log('API is listening on port 3000')
// })

module.exports = app
