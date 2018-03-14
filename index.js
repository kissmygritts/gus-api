// const db = require('./db')
// const express = require('express')
// const app = express()

// app.get('/', (req, res) => {
//   res.status(200).json({ msg: 'API is listening' })
// })

// app.get('/species', (req, res) => {
//   db.species.all()
//     .then(data => res.status(200).json({ msg: 'success', data }))
//     .catch(error => res.status(400).json({ error }))
// })

// app.get('/activities', (req, res) => {
//   db.activities.all()
//     .then(data => res.status(200).json({ msg: 'success', data }))
//     .catch(error => res.status(400).json({ error }))
// })

// app.get('/efforts', (req, res) => {
//   db.efforts.all()
//     .then(data => res.status(200).json({ msg: 'success', data }))
//     .catch(error => res.status(400).json({ error }))
// })

// app.get('/efforts/:id', (req, res) => {
//   db.efforts.findById(req.params)
//     .then(data => res.status(200).json({ msg: 'success', data }))
//     .catch(error => res.status(400).json({ error }))
// })

// app.listen(3000, () => {
//   console.log('API is listening on port 3000')
// })

// GRAPHQL THINGS
const db = require('./db')

const { GraphQLServer } = require('graphql-yoga')

const resolvers = {
  Query: {
    activities: () => db.activities.all(),
    activityById: (_, args) => db.activities.findById(args),
    description: () => `This is the API for a simple blogging application`,
    efforts: () => db.efforts.all(),
    effortsById: (_, args) => db.efforts.findById(args),
    species: () => db.species.all()
  },
  Effort: {
    // activities (effort) {
    //   return db.activities.getActivities(effort)
    // },
    activities: (effort) => db.activities.getActivities(effort)
  }
}

const server = new GraphQLServer({
  typeDefs: './schema.graphql',
  resolvers
})

server.start(() => console.log(`The server is running on http://localhost:4000`))
