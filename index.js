const db = require('./db')
const express = require('express')
const _ = require('lodash')
const app = express()

app.get('/', (req, res) => {
  res.status(200).json({ msg: 'API is listening' })
})

app.get('/species', (req, res) => {
  db.species.all()
    .then(data => {
      data = data.map(m => _.mapKeys(m, (v, k) => _.camelCase(k)))
      res.status(200).json({ msg: 'success', data })
    })
    .catch(error => res.status(400).json({ error }))
})

app.listen(3000, () => {
  console.log('API is listening on port 3000')
})
